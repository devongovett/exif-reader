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
* `Image`: basic TIFF properties about the image
* `Thumbnail`: basic TIFF properties about the embedded thumbnail
* `Photo`: full exif data
* `GPSInfo`: GPS/location data about the image
* `Iop`: interoperability information

Not all of these properties will always be defined.

All [standard Exif tags](https://exiv2.org/tags.html) are supported.

Here is some example output:

```
{
  bigEndian: false,
  Image: {
    ImageWidth: 2448,
    ImageLength: 3264,
    Make: 'Google',
    Model: 'Pixel 4a (5G)',
    Orientation: 1,
    XResolution: 72,
    YResolution: 72,
    ResolutionUnit: 2,
    Software: 'HDR+ 1.0.520435816zp',
    DateTime: 2023-05-20T16:54:06.000Z,
    YCbCrPositioning: 1,
    ExifTag: 248,
    GPSTag: 988
  },
  Thumbnail: {
    ImageWidth: 256,
    ImageLength: 341,
    Compression: 6,
    Orientation: 1,
    XResolution: 72,
    YResolution: 72,
    ResolutionUnit: 2,
    JPEGInterchangeFormat: 1311,
    JPEGInterchangeFormatLength: 7512
  },
  Photo: {
    ExposureTime: 0.024458,
    FNumber: 2,
    ExposureProgram: 2,
    ISOSpeedRatings: 77,
    ExifVersion: <Buffer 30 32 33 32>,
    DateTimeOriginal: 2023-05-20T16:54:06.000Z,
    DateTimeDigitized: 2023-05-20T16:54:06.000Z,
    OffsetTime: '+02:00',
    OffsetTimeOriginal: '+02:00',
    OffsetTimeDigitized: '+02:00',
    ComponentsConfiguration: <Buffer 01 02 03 00>,
    ShutterSpeedValue: 5.35,
    ApertureValue: 2,
    BrightnessValue: 2.73,
    ExposureBiasValue: 0,
    MaxApertureValue: 2,
    SubjectDistance: 0.35,
    MeteringMode: 2,
    Flash: 16,
    FocalLength: 2.57,
    SubSecTime: '827',
    SubSecTimeOriginal: '827',
    SubSecTimeDigitized: '827',
    FlashpixVersion: <Buffer 30 31 30 30>,
    ColorSpace: 1,
    PixelXDimension: 2448,
    PixelYDimension: 3264,
    InteroperabilityTag: 958,
    SensingMethod: 2,
    SceneType: <Buffer 01>,
    CustomRendered: 1,
    ExposureMode: 0,
    WhiteBalance: 0,
    DigitalZoomRatio: 1.2,
    FocalLengthIn35mmFilm: 24,
    SceneCaptureType: 0,
    Contrast: 0,
    Saturation: 0,
    Sharpness: 0,
    SubjectDistanceRange: 1,
    LensMake: 'Google',
    LensModel: 'Pixel 4a (5G) front camera 2.57mm f/2.0',
    CompositeImage: 3
  },
  GPSInfo: {
    GPSLatitudeRef: 'N',
    GPSLatitude: [ 48, 5, 2.01 ],
    GPSLongitudeRef: 'E',
    GPSLongitude: [ 11, 37, 54.65 ],
    GPSAltitudeRef: 0,
    GPSAltitude: 596.1,
    GPSTimeStamp: [ 14, 53, 42 ],
    GPSDateStamp: '2023:05:20'
  },
  Iop: {
    InteroperabilityIndex: 'R98',
    InteroperabilityVersion: <Buffer 30 31 30 30>
  }
}
```

## License

MIT
