var tags = require('./tags');

module.exports = function(buffer) {
  var startingOffset = 0;
  if (buffer.toString('ascii', 0, 3) !== 'MM\0' && buffer.toString('ascii', 0, 3) !== 'II\0') {
    startingOffset = 6;
    if (buffer.toString('ascii', 0, 5) !== 'Exif\0')
      throw new Error('Invalid EXIF data: buffer should start with "Exif", "MM" or "II".');
  }
  
  var bigEndian = null;
  if (buffer[startingOffset] === 0x49 && buffer[startingOffset + 1] === 0x49)
    bigEndian = false;
  else if (buffer[startingOffset] === 0x4d && buffer[startingOffset + 1] === 0x4d)
    bigEndian = true;
  else
    throw new Error('Invalid EXIF data: expected byte order marker.');

  if (buffer.length < startingOffset + 4 || readUInt16(buffer, startingOffset + 2, bigEndian) !== 0x002A)
    throw new Error('Invalid EXIF data: expected 0x002A.');

  if (buffer.length <= startingOffset + 8) {
    throw new Error('Invalid EXIF data: Ends before ifdOffset');
  }
  var ifdOffset = readUInt32(buffer, startingOffset + 4, bigEndian) + startingOffset;
  if (ifdOffset < 8)
    throw new Error('Invalid EXIF data: ifdOffset < 8');

  var result = { bigEndian };
  var ifd0 = readTags(buffer, ifdOffset, bigEndian, tags.exif, startingOffset);
  result.image = ifd0;

  if (buffer.length >= ifdOffset + 2) {
    var numEntries = readUInt16(buffer, ifdOffset, bigEndian);
    if (buffer.length >= ifdOffset + 2 + numEntries * 12 + 4) {
      ifdOffset = readUInt32(buffer, ifdOffset + 2 + numEntries * 12, bigEndian);
      if (ifdOffset !== 0)
        result.thumbnail = readTags(buffer, ifdOffset + startingOffset, bigEndian, tags.exif, startingOffset);
    }
  }

  if (ifd0) {
    if (isPositiveInteger(ifd0.ExifOffset))
      result.exif = readTags(buffer, ifd0.ExifOffset + startingOffset, bigEndian, tags.exif, startingOffset);
    
    if (isPositiveInteger(ifd0.GPSInfo))
      result.gps = readTags(buffer, ifd0.GPSInfo + startingOffset, bigEndian, tags.gps, startingOffset);
    
    if (isPositiveInteger(ifd0.InteropOffset))
      result.interop = readTags(buffer, ifd0.InteropOffset + startingOffset, bigEndian, tags.exif, startingOffset);
  } 
  return result;
};

var DATE_KEYS = {
  DateTimeOriginal: true,
  DateTimeDigitized: true,
  ModifyDate: true
};

function readTags(buffer, offset, bigEndian, tags, startingOffset) {
  if (buffer.length < offset + 2) {
    return null;
  }
  var numEntries = readUInt16(buffer, offset, bigEndian);
  offset += 2;

  var res = {};
  for (var i = 0; i < numEntries; i++) {
    if (buffer.length >= offset + 2) {
      var tag = readUInt16(buffer, offset, bigEndian);
    } else {
      return null;
    }
    offset += 2;

    var key = tags[tag] || tag;
    var val = readTag(buffer, offset, bigEndian, startingOffset);

    if (key in DATE_KEYS)
      val = parseDate(val);

    res[key] = val;
    offset += 10;
  }

  return res;
}

var SIZE_LOOKUP = [1, 1, 2, 4, 8, 1, 1, 2, 4, 8];

function readTag(buffer, offset, bigEndian, startingOffset) {
  if (buffer.length < offset + 7) {
    return null;
  }
  var type = readUInt16(buffer, offset, bigEndian);

  // Exit early in case of unknown or bogus type
  if (!type || type > SIZE_LOOKUP.length) return null;

  var numValues = readUInt32(buffer, offset + 2, bigEndian);
  var valueSize = SIZE_LOOKUP[type - 1];
  var valueOffset;
  if (valueSize * numValues <= 4) {
    valueOffset = offset + 6;
  } else {
    if (buffer.length >= offset + 10) {
      valueOffset = readUInt32(buffer, offset + 6, bigEndian) + startingOffset;
    } else {
      return null;
    }
  }

  // Special case for ascii strings
  if (type === 2) {
    var asciiSlice = buffer.slice(valueOffset, valueOffset + numValues);
    if (asciiSlice.some(x => x >> 7 > 0))
      return asciiSlice;

    var string = asciiSlice.toString('ascii');
    if (string[string.length - 1] === '\0') // remove null terminator
      string = string.slice(0, -1);

    return string;
  }

  // Special case for buffers
  if (type === 7)
    return buffer.slice(valueOffset, valueOffset + numValues);

  if (numValues === 1)
    return readValue(buffer, valueOffset, bigEndian, type);

  var res = [];
  for (var i = 0; i < numValues && valueOffset < buffer.length; i++) {
    res.push(readValue(buffer, valueOffset, bigEndian, type));
    valueOffset += valueSize;
  }
  
  return res;
}

function readValue(buffer, offset, bigEndian, type) {
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
      return readUInt32(buffer, offset, bigEndian) / readUInt32(buffer, offset + 4, bigEndian);

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
      return readInt32(buffer, offset, bigEndian) / readInt32(buffer, offset + 4, bigEndian);
  }
}

function parseDate(string) {
  if (typeof string !== 'string')
    return null;

  var match = string.match(/^(\d{4}):(\d{2}):(\d{2}) (\d{2}):(\d{2}):(\d{2})$/);
  if (!match)
    return null;

  return new Date(Date.UTC(
    match[1],
    match[2] - 1,
    match[3],
    match[4],
    match[5],
    match[6],
    0
  ));
}

function isPositiveInteger(value) {
  return typeof value === 'number' && Math.floor(value) === value && value > 0;
}

// Buffer reading helpers to help switching between endianness
function readUInt16(buffer, offset, bigEndian) {
  if (bigEndian)
    return buffer.readUInt16BE(offset);

  return buffer.readUInt16LE(offset);
}

function readUInt32(buffer, offset, bigEndian) {
  if (bigEndian)
    return buffer.readUInt32BE(offset);

  return buffer.readUInt32LE(offset);
}

function readInt16(buffer, offset, bigEndian) {
  if (bigEndian)
    return buffer.readInt16BE(offset);

  return buffer.readInt16LE(offset);
}

function readInt32(buffer, offset, bigEndian) {
  if (bigEndian)
    return buffer.readInt32BE(offset);

  return buffer.readInt32LE(offset);
}
