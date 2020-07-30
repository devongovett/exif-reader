# exif-reader

A small EXIF image metadata reader.

## Usage

    npm install exif-reader


```javascript
var exif = require('exif-reader');

// decode raw exif data from a buffer
var metadata = exif(buf);
```

Support is also built into [jpg-stream](https://github.com/devongovett/jpg-stream) for extracting EXIF data from JPEGs using this module.

Resulting properties are grouped as follows:

* `bigEndian`: determines the endianness of the buffers (in case of non-ascii data)
* `image`: basic TIFF properties about the image
* `thumbnail`: basic TIFF properties about the embedded thumbnail
* `exif`: full exif data
* `gps`: GPS/location data about the image
* `interoperability`: interoperability information

Not all of these properties will always be defined.

Here is some example output:

```javascript
{ bigEndian: true,
  image: 
   { Make: 'Apple',
     Model: 'iPhone 6',
     Orientation: 1,
     XResolution: 72,
     YResolution: 72,
     ResolutionUnit: 2,
     Software: 'Photos 1.0',
     ModifyDate: Sat Feb 28 2015 17:13:57 GMT-0800 (PST),
     ExifOffset: 198,
     GPSInfo: 1008 },
  exif: 
   { ExposureTime: 0.0020491803278688526,
     FNumber: 2.2,
     ExposureProgram: 2,
     ISO: 32,
     ExifVersion: <Buffer 30 32 32 31>,
     DateTimeOriginal: Sat Feb 28 2015 17:13:57 GMT-0800 (PST),
     DateTimeDigitized: Sat Feb 28 2015 17:13:57 GMT-0800 (PST),
     ComponentsConfiguration: <Buffer 01 02 03 00>,
     ShutterSpeedValue: 8.930864197530864,
     ApertureValue: 2.2750072066878064,
     BrightnessValue: 7.991,
     ExposureBiasValue: 0,
     MeteringMode: 3,
     Flash: 16,
     FocalLength: 4.15,
     SubjectArea: [ 964, 1287, 610, 612 ],
     MakerNote: <Buffer 41 70 70 6c 65 20 69 4f 53 00 00 01 4d 4d 00 08 00 ...>,
     SubSecTimeOriginal: '476',
     SubSecTimeDigitized: '476',
     FlashpixVersion: <Buffer 30 31 30 30>,
     ColorSpace: 1,
     PixelXDimension: 3264,
     PixelYDimension: 2448,
     SensingMethod: 2,
     SceneType: <Buffer 01>,
     ExposureMode: 0,
     WhiteBalance: 0,
     FocalLengthIn35mmFormat: 29,
     SceneCaptureType: 0,
     LensSpecification: [ 4.15, 4.15, 2.2, 2.2 ],
     LensMake: 'Apple',
     LensModel: 'iPhone 6 back camera 4.15mm f/2.2' },
  gps: 
   { GPSLatitudeRef: 'N',
     GPSLatitude: [ 35, 18, 1.49 ],
     GPSLongitudeRef: 'W',
     GPSLongitude: [ 120, 39, 44.23 ],
     GPSAltitudeRef: 0,
     GPSAltitude: 97,
     GPSTimeStamp: [ 1, 13, 57 ],
     GPSSpeedRef: 'K',
     GPSSpeed: 0,
     GPSImgDirectionRef: 'T',
     GPSImgDirection: 347.4401408450704,
     GPSDestBearingRef: 'T',
     GPSDestBearing: 167.44014084507043,
     GPSDateStamp: '2015:03:01' } }
```

## License

MIT
