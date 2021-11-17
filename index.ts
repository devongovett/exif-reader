import { exif, gps } from './tags';

type ReadResult = ReturnType<typeof readTags>;

export default function (buffer: Buffer) {
  if (buffer.toString('ascii', 0, 5) !== 'Exif\0')
    throw new Error('Invalid EXIF data: buffer should start with "Exif".');

  var bigEndian = null;
  if (buffer[6] === 0x49 && buffer[7] === 0x49) bigEndian = false;
  else if (buffer[6] === 0x4d && buffer[7] === 0x4d) bigEndian = true;
  else throw new Error('Invalid EXIF data: expected byte order marker.');

  if (buffer.length < 10 || readUInt16(buffer, 8, bigEndian) !== 0x002a)
    throw new Error('Invalid EXIF data: expected 0x002A.');

  if (buffer.length <= 14) {
    throw new Error('Invalid EXIF data: Ends before ifdOffset');
  }
  var ifdOffset = readUInt32(buffer, 10, bigEndian) + 6;
  if (ifdOffset < 8) throw new Error('Invalid EXIF data: ifdOffset < 8');

  const ifd0 = readTags(buffer, ifdOffset, bigEndian, exif);
  const result: {
    image: ReadResult;
    thumbnail?: ReadResult;
    exif?: ReadResult;
    gps?: ReadResult;
    interop?: ReadResult;
  } = { image: ifd0 };
  result.image = ifd0;

  if (buffer.length >= ifdOffset + 2) {
    var numEntries = readUInt16(buffer, ifdOffset, bigEndian);
    if (buffer.length >= ifdOffset + 2 + numEntries * 12 + 4) {
      ifdOffset = readUInt32(
        buffer,
        ifdOffset + 2 + numEntries * 12,
        bigEndian
      );
      if (ifdOffset !== 0)
        result.thumbnail = readTags(buffer, ifdOffset + 6, bigEndian, exif);
    }
  }

  if (ifd0) {
    if (isPositiveInteger(ifd0.ExifOffset))
      result.exif = readTags(buffer, ifd0.ExifOffset + 6, bigEndian, exif);

    if (isPositiveInteger(ifd0.GPSInfo))
      result.gps = readTags(buffer, ifd0.GPSInfo + 6, bigEndian, gps);

    if (isPositiveInteger(ifd0.InteropOffset))
      result.interop = readTags(
        buffer,
        ifd0.InteropOffset + 6,
        bigEndian,
        exif
      );
  }
  return result;
}

var DATE_KEYS = {
  DateTimeOriginal: true,
  DateTimeDigitized: true,
  ModifyDate: true,
};

function readTags(
  buffer: Buffer,
  offset: number,
  bigEndian: boolean,
  tags: Record<number, string>
) {
  if (buffer.length < offset + 2) {
    return null;
  }
  var numEntries = readUInt16(buffer, offset, bigEndian);
  offset += 2;

  var res: Record<string, ReturnType<typeof readTag> | Date> = {};
  for (var i = 0; i < numEntries; i++) {
    if (buffer.length >= offset + 2) {
      var tag = readUInt16(buffer, offset, bigEndian);
    } else {
      return null;
    }
    offset += 2;

    const key = tags[tag] || tag;
    let val: ReturnType<typeof readTag> | Date = readTag(
      buffer,
      offset,
      bigEndian
    );
    if (key in DATE_KEYS) val = parseDate(val);

    res[key] = val;
    offset += 10;
  }

  return res;
}

var SIZE_LOOKUP = [1, 1, 2, 4, 8, 1, 1, 2, 4, 8];

function readTag(buffer: Buffer, offset: number, bigEndian: boolean) {
  if (buffer.length < offset + 7) {
    return null;
  }
  const type = readUInt16(buffer, offset, bigEndian);
  // Exit early in case of unknown or bogus type
  if (!type || type > SIZE_LOOKUP.length) return null;

  var numValues = readUInt32(buffer, offset + 2, bigEndian);
  var valueSize = SIZE_LOOKUP[type - 1];
  let valueOffset: number;
  if (valueSize * numValues <= 4) {
    valueOffset = offset + 6;
  } else {
    if (buffer.length >= offset + 10) {
      valueOffset = readUInt32(buffer, offset + 6, bigEndian) + 6;
    } else {
      return null;
    }
  }

  // Special case for ascii strings
  if (type === 2) {
    let string = buffer.toString('ascii', valueOffset, valueOffset + numValues);
    if (string[string.length - 1] === '\0')
      // remove null terminator
      string = string.slice(0, -1);

    return string;
  }

  // Special case for buffers
  if (type === 7) return buffer.slice(valueOffset, valueOffset + numValues);

  if (numValues === 1) return readValue(buffer, valueOffset, bigEndian, type);

  var res: number[] = [];
  for (var i = 0; i < numValues && valueOffset < buffer.length; i++) {
    res.push(readValue(buffer, valueOffset, bigEndian, type));
    valueOffset += valueSize;
  }

  return res;
}

function readValue(
  buffer: Buffer,
  offset: number,
  bigEndian: boolean,
  type: number
) {
  switch (type) {
    case 1: // uint8
      if (buffer.length < offset + 1) {
        return null;
      }
      return buffer[offset];

    case 3: // uint16
      if (buffer.length < offset + 2) {
        return null;
      }
      return readUInt16(buffer, offset, bigEndian);
    case 4: // uint32
      if (buffer.length < offset + 4) {
        return null;
      }
      return readUInt32(buffer, offset, bigEndian);
    case 5: // unsigned rational
      if (buffer.length < offset + 8) {
        return null;
      }
      return (
        readUInt32(buffer, offset, bigEndian) /
        readUInt32(buffer, offset + 4, bigEndian)
      );

    case 6: // int8
      if (buffer.length < offset + 1) {
        return null;
      }
      return buffer.readInt8(offset);

    case 8: // int16
      if (buffer.length < offset + 2) {
        return null;
      }
      return readInt16(buffer, offset, bigEndian);
    case 9: // int32
      if (buffer.length < offset + 4) {
        return null;
      }
      return readInt32(buffer, offset, bigEndian);
    case 10: // signed rational
      if (buffer.length < offset + 8) {
        return null;
      }
      return (
        readInt32(buffer, offset, bigEndian) /
        readInt32(buffer, offset + 4, bigEndian)
      );
  }
}

function parseDate(string: unknown) {
  if (typeof string !== 'string') return null;

  var match = string.match(/^(\d{4}):(\d{2}):(\d{2}) (\d{2}):(\d{2}):(\d{2})$/);
  if (!match) return null;

  return new Date(
    Date.UTC(
      Number(match[1]),
      Number(match[2]) - 1,
      Number(match[3]),
      Number(match[4]),
      Number(match[5]),
      Number(match[6]),
      0
    )
  );
}

function isPositiveInteger(value: unknown): value is number {
  return typeof value === 'number' && Math.floor(value) === value && value > 0;
}

// Buffer reading helpers to help switching between endianness
function readUInt16(buffer: Buffer, offset: number, bigEndian: boolean) {
  if (bigEndian) return buffer.readUInt16BE(offset);

  return buffer.readUInt16LE(offset);
}

function readUInt32(buffer: Buffer, offset: number, bigEndian: boolean) {
  if (bigEndian) return buffer.readUInt32BE(offset);

  return buffer.readUInt32LE(offset);
}

function readInt16(buffer: Buffer, offset: number, bigEndian: boolean) {
  if (bigEndian) return buffer.readInt16BE(offset);

  return buffer.readInt16LE(offset);
}

function readInt32(buffer: Buffer, offset: number, bigEndian: boolean) {
  if (bigEndian) return buffer.readInt32BE(offset);

  return buffer.readInt32LE(offset);
}
