var exif = require('../');
var fs = require('fs');
var expect = require('unexpected')
  .clone()
  .use(require('unexpected-check'));
var chanceGenerators = require('chance-generators');
var tetons = fs.readFileSync(__dirname + '/data/tetons.exif');
var IMG_0774 = fs.readFileSync(__dirname + '/data/IMG_0774.exif');

describe('exif-reader', function() {
  it('should read tiff and exif data', function() {
    expect(exif(tetons), 'to equal',
      { image:
         { Make: 'Canon',
           Model: 'Canon EOS D60',
           Orientation: 1,
           XResolution: 300,
           YResolution: 300,
           ResolutionUnit: 2,
           Software: 'Adobe Photoshop CS Windows',
           ModifyDate: new Date('2006-04-04T22:31:30.000Z'),
           Artist: 'Unspecified',
           Copyright: 'Unspecified',
           ExifOffset: 256 },
        thumbnail:
         { Compression: 6,
           XResolution: 72,
           YResolution: 72,
           ResolutionUnit: 2,
           ThumbnailOffset: 1102,
           ThumbnailLength: 7050 },
        exif:
         { ExposureTime: 0.03333333333333333,
           FNumber: 19,
           ExposureProgram: 2,
           ISO: 100,
           ExifVersion: Buffer.from([48, 50, 50, 48]),
           DateTimeOriginal: new Date('2004-06-17T06:47:02.000Z'),
           DateTimeDigitized: new Date('2004-06-17T06:47:02.000Z'),
           ComponentsConfiguration: Buffer.from([1, 2, 3, 0]),
           CompressedBitsPerPixel: 9,
           ShutterSpeedValue: 4.906890869140625,
           ApertureValue: 8.495849609375,
           ExposureBiasValue: 0,
           MaxApertureValue: 4.33984375,
           MeteringMode: 6,
           Flash: 0,
           FocalLength: 70,
           UserComment: Buffer.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
           FlashpixVersion: Buffer.from([48, 49, 48, 48]),
           ColorSpace: 1,
           PixelXDimension: 1600,
           PixelYDimension: 1195,
           FocalPlaneXResolution: 3443.946188340807,
           FocalPlaneYResolution: 3442.016806722689,
           FocalPlaneResolutionUnit: 2,
           SensingMethod: 2,
           FileSource: Buffer.from([3]),
           CustomRendered: 0,
           ExposureMode: 0,
           WhiteBalance: 0,
           SceneCaptureType: 0 } });
  });

  it('should read gps data and other exif data', function() {
    expect(exif(IMG_0774), 'to equal',
      { image:
         { Make: 'Apple',
           Model: 'iPhone 6',
           Orientation: 1,
           XResolution: 72,
           YResolution: 72,
           ResolutionUnit: 2,
           Software: 'Photos 1.0',
           ModifyDate: new Date('2015-02-28T17:13:57.000Z'),
           ExifOffset: 198,
           GPSInfo: 1008 },
        exif:
         { ExposureTime: 0.0020491803278688526,
           FNumber: 2.2,
           ExposureProgram: 2,
           ISO: 32,
           ExifVersion: Buffer.from([48, 50, 50, 49]),
           DateTimeOriginal: new Date('2015-02-28T17:13:57.000Z'),
           DateTimeDigitized: new Date('2015-02-28T17:13:57.000Z'),
           ComponentsConfiguration: Buffer.from([1, 2, 3, 0]),
           ShutterSpeedValue: 8.930864197530864,
           ApertureValue: 2.2750072066878064,
           BrightnessValue: 7.991,
           ExposureBiasValue: 0,
           MeteringMode: 3,
           Flash: 16,
           FocalLength: 4.15,
           SubjectArea: [ 964, 1287, 610, 612 ],
           MakerNote: Buffer.from([65, 112, 112, 108, 101, 32, 105, 79, 83, 0, 0, 1, 77, 77, 0, 8, 0, 1, 0, 9, 0, 0, 0, 1, 0, 0, 0, 2, 0, 3, 0, 7, 0, 0, 0, 104, 0, 0, 0, 116, 0, 4, 0, 9, 0, 0, 0, 1, 0, 0, 0, 1, 0, 5, 0, 9, 0, 0, 0, 1, 0, 0, 0, 128, 0, 6, 0, 9, 0, 0, 0, 1, 0, 0, 0, 130, 0, 7, 0, 9, 0, 0, 0, 1, 0, 0, 0, 1, 0, 8, 0, 10, 0, 0, 0, 3, 0, 0, 0, 220, 0, 14, 0, 9, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 98, 112, 108, 105, 115, 116, 48, 48, 212, 1, 2, 3, 4, 5, 6, 7, 8, 85, 102, 108, 97, 103, 115, 85, 118, 97, 108, 117, 101, 85, 101, 112, 111, 99, 104, 89, 116, 105, 109, 101, 115, 99, 97, 108, 101, 16, 1, 19, 0, 3, 205, 166, 44, 254, 105, 204, 16, 0, 18, 59, 154, 202, 0, 8, 17, 23, 29, 35, 45, 47, 56, 58, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 12, 100, 0, 0, 12, 129, 255, 255, 255, 137, 0, 0, 56, 136, 255, 255, 250, 212, 0, 0, 143, 129]),
           SubSecTimeOriginal: '476',
           SubSecTimeDigitized: '476',
           FlashpixVersion: Buffer.from([48, 49, 48, 48]),
           ColorSpace: 1,
           PixelXDimension: 3264,
           PixelYDimension: 2448,
           SensingMethod: 2,
           SceneType: Buffer.from([1]),
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
           GPSDateStamp: '2015:03:01' } });
  });

  it('should error when missing Exif tag', function() {
    expect(function() {
      exif(Buffer.alloc(50));
    }, 'to throw', /buffer should start with "Exif"/);
  });

  it('should error when missing byte order marker', function() {
    expect(function() {
      exif(Buffer.from('Exif\0\0IM'));
    }, 'to throw', /expected byte order marker/);

    expect(function() {
      exif(Buffer.from('Exif\0\0MI'));
    }, 'to throw', /expected byte order marker/);
  });
});

describe('fuzz tests', function () {
  this.timeout(60000);

  expect.addAssertion('<object> to either parse or throw documented error', function (expect, subject) {
    expect.errorMode = 'nested';
    var startTime = Date.now();
    try {
      expect(exif(subject), 'to satisfy', {});
    } catch (err) {
      if (err.isUnexpected) {
        throw err;
      } else {
        if ([
          'Invalid EXIF data: buffer should start with "Exif".',
          'Invalid EXIF data: expected byte order marker.',
          'Invalid EXIF data: expected 0x002A.',
          'Invalid EXIF data: ifdOffset < 8',
          'Invalid EXIF data: Ends before ifdOffset'
        ].indexOf(err.message) === -1) {
          var stack = err.stack;
          var stackLines = err.stack.split('\n');
          for (let i = 0 ; i < stackLines.length ; i += 1) {
            if (/\/node_modules\//.test(stackLines[i])) {
              stack = stackLines.slice(0, i - 1).join('\n')
              break;
            }
          }
          expect.fail({
            message:'Threw unexpected error: ' + stack
          });
        }
      }
    } finally {
      // Guard against very slow runs:
      expect(Date.now() - startTime, 'to be less than', 1000);
    }
  });

  function mutateGenerator(g) {
    return function mutate(buffer) {
      return g.integer({min: 1, max: 10}).map(function (numMutations) {
        var mutatedBuffer = Buffer.from(buffer); // Make a copy
        for (var i = 0 ; i < numMutations ; i += 1) {
          var octetNumber = g.integer({min: 0, max: buffer.length}).first();
          mutatedBuffer[octetNumber] = g.integer({min: 0, max: 255}).first();
        }
        return mutatedBuffer;
      });
    };
  }

  it('should parse or reject a randomly mutated EXIF data chunk based on the tetons fixture', function () {
    expect(tetons, 'when fuzzed by', mutateGenerator(chanceGenerators), 'to either parse or throw documented error');
  });

  it('should parse or reject a randomly mutated EXIF data chunk based on the IMG_0774 fixture', function () {
    expect(IMG_0774, 'when fuzzed by', mutateGenerator(chanceGenerators), 'to either parse or throw documented error');
  });

  function truncateGenerator(g) {
    return function truncate(buffer) {
      return g.integer({min: 0, max: tetons.length - 1}).map(function (truncateOffset) {
        var truncatedBuffer = Buffer.alloc(truncateOffset);
        buffer.copy(truncatedBuffer, 0, 0, truncateOffset);
        return truncatedBuffer;
      });
    }
  }

  it('should parse or reject a randomly truncated EXIF data chunk based on the tetons fixture', function () {
    expect(tetons, 'when fuzzed by', truncateGenerator(chanceGenerators), 'to either parse or throw documented error');
  });

  it('should parse or reject a randomly truncated EXIF data chunk based on the IMG_0774 fixture', function () {
    expect(IMG_0774, 'when fuzzed by', truncateGenerator(chanceGenerators), 'to either parse or throw documented error');
  });
});
