// this is a index.d.ts test handled by [tsd](https://github.com/SamVerschueren/tsd#readme)
import exif, { Exif, GenericTag } from ".";
import { expectType, expectError } from "tsd";

const buffer = Buffer.from(new Uint8Array(10000));
const result = exif(buffer);

expectType<Exif>(result);
expectType<boolean>(result.bigEndian);
expectType<number | undefined>(result.Image?.ImageWidth);
expectType<number[] | undefined>(result.Image?.YCbCrCoefficients);

// special to Date conversions
expectType<Date | undefined>(result.Image?.DateTime);
expectType<Date | undefined>(result.Photo?.DateTimeOriginal);
expectType<Date | undefined>(result.Photo?.DateTimeDigitized);

// GPSInfo
expectType<number[] | undefined>(result.GPSInfo?.GPSLatitude);
expectType<number[] | undefined>(result.GPSInfo?.GPSLongitude);

// unknown tags are accessible by the tag-id
expectType<GenericTag | undefined>(result.Photo?.[12345]);

expectError(result.doesNotExist); // should be highlighted as an error in IDE but handled by tsd
