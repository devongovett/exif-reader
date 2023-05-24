import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';

const wd = dirname(process.argv[1]);

const exiv2 = JSON.parse(readFileSync(join(wd, 'exiv2.json')));

const groups = ['Image', 'Photo', 'Iop', 'GPSInfo'];

const tagGroups = groups.map((group) => [
  group,
  exiv2.filter(([, groupName]) => group === groupName),
]);

const generateTagGroup = ([group, tags]) => `
exports.${group} = {
  ${tags.map(([tagId, , tagName]) => `${tagId}: '${tagName}'`).join(',\n  ')}
};`;

const tagsjs = `/**
* Tag names are generated from https://exiv2.org/tags.html which are derived
* from the Exif spec at https://www.cipa.jp/std/documents/e/DC-008-2012_E.pdf
* A comprehensive list of TIFF and Exif tags can be found on
* https://www.sno.phy.queensu.ca/~phil/exiftool/TagNames/EXIF.html
*/
${tagGroups.map(generateTagGroup).join('\n')}
`
writeFileSync(join(wd, '..', 'tags.js'), tagsjs);
//console.log(tagsjs);

const getType = (group, tag, type) => {
  if (numberArrayTags[group]?.includes(tag)) return 'number[]';
  if (dateTags[group]?.includes(tag)) return 'Date';

  switch (type) {
    case 'Byte':
    case 'Short':
    case 'SShort':
    case 'Long':
    case 'Rational':
    case 'SRational':
      return 'number';
    case 'Ascii':
      return 'string';
    default:
      return 'Buffer';
  }
};

// Some tags are automatically converted to Date
const dateTags = {
  Image: ['DateTime'],
  Photo: ['DateTimeOriginal', 'DateTimeDigitized'],
};

// This information is extracted from the Exif spec at https://www.cipa.jp/std/documents/e/DC-008-2012_E.pdf
// Each number type with a count > 1 is treated as a number arry.
const numberArrayTags = {
  Image: [
    'BitsPerSample',
    'YCbCrSubSampling',
    'StripOffsets',
    'StripByteCounts',
    'TransferFunction',
    'WhitePoint',
    'PrimaryChromaticities',
    'YCbCrCoefficients',
    'ReferenceBlackWhite',
  ],
  Photo: [
    'LensSpecification',
    'PhotographicSensitivity',
    'SubjectArea',
    'SubjectLocation',
  ],
  GPSInfo: [
    'GPSVersionID',
    'GPSLatitude',
    'GPSLongitude',
    'GPSTimeStamp',
    'GPSDestLatitude',
    'GPSDestLongitude',
  ],
};

const generateTagGroupTypes = ([
  group,
  tags,
]) => `export type ${group}Tags = Record<string, GenericTag> & {
  ${tags
    .map(([, group, tag, type]) => `${tag}: ${getType(group, tag, type)}`)
    .join('\n  ')}
}
`;

const indexdts = `/**
* generated based on Exiv2 and Exif information, do not change manually
* - https://exiv2.org/tags.html
* - https://www.cipa.jp/std/documents/e/DC-008-2012_E.pdf
*/

export default function exif(buffer: Buffer): Exif;

export type Exif = {
  bigEndian: boolean
  ${groups.map((group) => `${group}?: Partial<${group}Tags>`).join('\n  ')}
  ThumbnailTags?: Partial<ImageTags>
}

${tagGroups.map(generateTagGroupTypes).join('\n')}

export type GenericTag = number | number[] | string | Buffer;
`;

writeFileSync(join(wd, '..', 'index.d.ts'), indexdts);
// console.log(indexdts);
