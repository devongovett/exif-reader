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
    Make: 'Some Make',
    Model: 'Some Model',
    Orientation: 1,
    XResolution: 72,
    YResolution: 72,
    ResolutionUnit: 2,
    Software: 'HDR+ 1.0.520435816zd',
    DateTime: 2023-05-20T17:02:00.000Z,
    YCbCrPositioning: 1,
  },
  Thumbnail: {
    ImageWidth: 219,
    ImageLength: 292,
    Compression: 6,
    Orientation: 1,
    XResolution: 72,
    YResolution: 72,
    ResolutionUnit: 2,
  },
  Photo: {
    ExposureTime: 0.016679,
    FNumber: 2,
    ExposureProgram: 2,
    ISOSpeedRatings: 129,
    ExifVersion: Buffer(4) [Uint8Array] [ 48, 50, 51, 50 ],
    DateTimeOriginal: 2023-05-20T17:02:00.000Z,
    DateTimeDigitized: 2023-05-20T17:02:00.000Z,
    OffsetTime: '+02:00',
    OffsetTimeOriginal: '+02:00',
    OffsetTimeDigitized: '+02:00',
    ShutterSpeedValue: 5.91,
    ApertureValue: 2,
    BrightnessValue: 2.54,
    ExposureBiasValue: 0,
    MaxApertureValue: 2,
    SubjectDistance: 0.35,
    MeteringMode: 2,
    Flash: 16,
    FocalLength: 2.57,
    SubSecTime: '811',
    SubSecTimeOriginal: '811',
    SubSecTimeDigitized: '811',
    FlashpixVersion: Buffer(4) [Uint8Array] [ 48, 49, 48, 48 ],
    ColorSpace: 1,
    PixelXDimension: 2448,
    PixelYDimension: 3264,
    InteroperabilityTag: 958,
    SensingMethod: 2,
    CustomRendered: 1,
    ExposureMode: 0,
    WhiteBalance: 0,
    DigitalZoomRatio: 1.4,
    FocalLengthIn35mmFilm: 24,
    SceneCaptureType: 0,
    Contrast: 0,
    Saturation: 0,
    Sharpness: 0,
    SubjectDistanceRange: 1,
    LensMake: 'Some Lens Make',
    LensModel: 'Some front camera 2.57mm f/2.0',
    CompositeImage: 3
  },
  GPSInfo: {
    GPSLatitudeRef: 'N',
    GPSLatitude: [ 49, 1, 3.12 ],
    GPSLongitudeRef: 'E',
    GPSLongitude: [ 11, 1, 4.56 ],
    GPSAltitudeRef: 0,
    GPSAltitude: 296.1,
    GPSTimeStamp: [ 15, 1, 48 ],
    GPSImgDirectionRef: 'M',
    GPSImgDirection: 258,
    GPSDateStamp: '2023:05:20'
  }
}
```

## License

MIT
