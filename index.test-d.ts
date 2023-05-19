// this is a index.d.ts test handle by [tsd](https://github.com/SamVerschueren/tsd#readme)
import exif, { Exif, GenericTag } from ".";
import { expectType, expectError } from "tsd";

const buffer = Buffer.from(new Uint8Array(10000));
const result = exif(buffer);

expectType<Exif>(result);
expectType<boolean>(result.bigEndian);
expectType<number | undefined>(result.image?.ImageWidth);

// special to Date conversions
expectType<Date | undefined>(result.image?.ModifyDate);
expectType<Date | undefined>(result.exif?.DateTimeOriginal);
expectType<Date | undefined>(result.exif?.DateTimeDigitized);

// GPSInfo
expectType<number[] | undefined>(result.gps?.GPSDestLatitude);

// unknown tags are accessible by the tag-id
expectType<GenericTag | undefined>(result.image?.[12345]);

expectError(result.doesNotExist); // should be highlighted as an error in IDE but handled by tsd
