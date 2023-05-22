import { readFileSync, writeFileSync, writeSync } from "fs";
import { dirname, join } from "path";
// import data from "./eviv2.json" assert { type: "json" };

const wd = dirname(process.argv[1]);

const tags = JSON.parse(readFileSync(join(wd, "eviv2.json")));

const tagsjs = `
const tags = [
  ${tags
    .map(
      ([tag, group, tagName, type]) =>
        `[${tag}, "${group}", "${tagName}", "${type}"]`
    )
    .join(",\n  ")}
];

exports.assign = (exif, tag, value) => {

  // check type

  // get key from tag
  exif[group][label] = value
}
`;

const typescriptType = (exiv2Type) => {
  switch (exiv2Type) {
    case "Byte":
    case "Short":
    case "SShort":
    case "Long":
    case "Rational":
    case "SRational":
      return "number | number[]";
    case "Ascii":
      return "string";
    default:
      return "Buffer";
  }
};

const groupTags = (groupName) => `
export type ${groupName}Tags = Partial<{
  ${tags
    .filter(([, group]) => group === groupName)
    .map(([, , tagName, type]) => `${tagName}: ${typescriptType(type)}`)
    .join("\n  ")}
}>`;

const indexdts = `
${groupTags("Image")}
${groupTags("Photo")}
${groupTags("Iop")}
${groupTags("GPSInfo")}

export type ExifTags = Partial<{
  Image: ImageTags
  Photo: PhotoTags
  Iop: IopTags
  GPSInfo: GPSInfoTags
}>
`;

// writeFileSync(join(wd, "tags.js"), tagsjs);

console.log(indexdts);
