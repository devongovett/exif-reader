import { readFileSync } from "fs";

import exif from "../index.js";

const buffer = readFileSync(
  "/home/christian/DCIM/Camera/PXL_20230520_145406827.PORTRAIT.jpg"
);

const result = exif(buffer.subarray(6));
console.log(result);
