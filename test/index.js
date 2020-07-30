var exif = require('../');
var fs = require('fs');
var expect = require('unexpected')
  .clone()
  .use(require('unexpected-check'));
var chanceGenerators = require('chance-generators');
var tetons = fs.readFileSync(__dirname + '/data/tetons.exif');
var IMG_0774 = fs.readFileSync(__dirname + '/data/IMG_0774.exif');
var pngWithExif = fs.readFileSync(__dirname + '/data/png-exif.exif');
var non_ascii = fs.readFileSync(__dirname + '/data/non-ascii.exif');

describe('exif-reader', function() {
  it('should read tiff and exif data', function() {
    expect(exif(tetons), 'to equal',
      { bigEndian: true,
        image:
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
      { bigEndian: true,
        image:
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

  it('should read gps data and other exif data from png', function() {
    expect(exif(pngWithExif), 'to equal',
    {
      image: {
        Make: 'Apple', Model: 'iPhone 11 Pro Max', Orientation: 1, XResolution: 72, YResolution: 72, ResolutionUnit: 2, Software: '15.5',
        ModifyDate: new Date('2022-07-08T13:00:46Z'), HostComputer: 'iPhone 11 Pro Max', YCbCrPositioning: 1, ExifOffset: 242, GPSInfo: 2164
      },
      exif: {
        36880: '+01:00', 36881: '+01:00', 36882: '+01:00', 42080: 2, ExposureTime: 0.00819672131147541, FNumber: 2.4, ExposureProgram: 2, ISO: 25,
        ExifVersion: Buffer.from([0x30, 0x32, 0x33, 0x32]), DateTimeOriginal: new Date('2022-07-08T13:00:46Z'),
        DateTimeDigitized: new Date('2022-07-08T13:00:46Z'), ComponentsConfiguration: Buffer.from([0x01, 0x02, 0x03, 0x00]),
        ShutterSpeedValue: 6.931216394440499, ApertureValue: 2.5260688216892597, BrightnessValue: 7.060757970723882, ExposureBiasValue: 0, MeteringMode: 5,
        Flash: 16, FocalLength: 1.54, SubjectArea: [ 2015, 1511, 2324, 1392 ],
        MakerNote: Buffer.from([65,112,112,108,101,32,105,79,83,0,0,1,77,77,0,33,0,1,0,9,0,0,0,1,0,0,0,14,0,2,0,7,0,0,2,46,0,0,1,160,0,3,0,7,0,0,0,104,0,0,3,206,0,4,0,9,0,0,0,1,0,0,0,1,0,5,0,9,0,0,0,1,0,0,0,192,0,6,0,9,0,0,0,1,0,0,0,248,0,7,0,9,0,0,0,1,0,0,0,1,0,8,0,10,0,0,0,3,0,0,4,54,0,14,0,9,0,0,0,1,0,0,0,0,0,20,0,9,0,0,0,1,0,0,0,10,0,23,0,9,0,0,0,1,34,80,32,0,0,25,0,9,0,0,0,1,0,0,0,2,0,31,0,9,0,0,0,1,0,0,0,0,0,32,0,2,0,0,0,37,0,0,4,78,0,33,0,10,0,0,0,1,0,0,4,116,0,37,0,9,0,0,0,1,0,0,66,142,0,38,0,9,0,0,0,1,0,0,0,2,0,39,0,10,0,0,0,1,0,0,4,124,0,40,0,9,0,0,0,1,0,0,0,1,0,43,0,2,0,0,0,37,0,0,4,132,0,45,0,9,0,0,0,1,0,0,17,58,0,46,0,9,0,0,0,1,0,0,0,0,0,47,0,9,0,0,0,1,0,0,0,0,0,51,0,9,0,0,0,1,0,0,16,0,0,52,0,9,0,0,0,1,0,0,0,4,0,53,0,9,0,0,0,1,0,0,0,3,0,54,0,9,0,0,0,1,0,0,40,32,0,55,0,9,0,0,0,1,0,0,0,0,0,58,0,9,0,0,0,1,0,0,0,4,0,59,0,9,0,0,0,1,0,0,0,0,0,60,0,9,0,0,0,1,0,0,0,4,0,65,0,7,0,0,0,42,0,0,4,170,0,74,0,9,0,0,0,1,0,0,0,4,0,0,0,0,98,112,108,105,115,116,48,48,79,17,2,0,204,4,192,4,179,4,27,2,157,0,173,0,160,0,192,0,194,0,212,0,206,0,225,0,237,0,187,1,142,1,255,0,205,4,200,4,120,4,216,0,141,0,164,0,157,0,180,0,199,0,206,0,230,0,209,0,254,1,171,1,10,1,197,0,205,4,205,4,167,3,145,0,163,0,161,0,149,0,159,0,207,0,216,0,226,0,228,0,11,2,24,1,194,0,154,0,205,4,205,4,95,4,176,0,147,0,146,0,171,0,156,0,204,0,203,0,207,0,212,0,64,1,201,0,166,0,134,0,205,4,205,4,32,3,162,0,157,0,157,0,162,0,187,0,198,0,209,0,229,0,205,0,215,0,189,0,186,0,162,0,205,4,205,4,79,2,152,0,139,0,166,0,162,0,173,0,214,0,203,0,218,0,202,0,228,0,180,0,184,0,155,0,205,4,205,4,18,2,144,0,163,0,173,0,167,0,188,0,225,0,222,0,199,0,208,0,223,0,194,0,169,0,212,0,205,4,205,4,233,1,166,0,153,0,167,0,183,0,206,0,220,0,209,0,199,0,183,0,197,0,202,0,168,0,174,0,205,4,9,4,162,0,141,0,137,0,159,0,164,0,184,0,208,0,221,0,178,0,188,0,207,0,206,0,157,0,169,0,205,4,133,2,125,0,126,0,150,0,170,0,203,0,209,0,223,0,244,0,189,0,208,0,190,0,178,0,139,0,155,0,205,4,54,2,129,0,140,0,142,0,165,0,170,0,207,0,238,0,250,0,192,0,194,0,194,0,187,0,164,0,170,0,205,4,239,1,124,0,150,0,141,0,159,0,134,0,194,0,244,0,211,0,205,0,204,0,232,0,209,0,160,0,187,0,205,4,122,1,131,0,104,0,143,0,162,0,176,0,202,0,217,0,180,0,205,0,223,0,203,0,201,0,158,0,164,0,205,4,40,2,126,0,131,0,133,0,186,0,232,0,205,0,205,0,187,0,226,0,219,0,202,0,188,0,168,0,166,0,205,4,76,3,161,0,137,0,127,0,227,0,178,0,203,0,222,0,214,0,223,0,203,0,210,0,173,0,163,0,155,0,198,4,106,4,242,0,148,0,154,0,208,0,161,0,195,0,230,0,223,0,218,0,210,0,190,0,178,0,179,0,154,0,0,8,0,0,0,0,0,0,2,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,98,112,108,105,115,116,48,48,212,1,2,3,4,5,6,7,8,85,102,108,97,103,115,85,118,97,108,117,101,89,116,105,109,101,115,99,97,108,101,85,101,112,111,99,104,16,1,19,0,0,33,132,143,156,50,16,18,59,154,202,0,16,0,8,17,23,29,39,45,47,56,61,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,63,0,0,21,11,0,1,143,165,255,255,209,72,0,0,47,171,255,255,184,169,0,1,163,108,56,48,50,51,50,53,49,54,45,69,67,48,56,45,52,69,70,65,45,66,67,53,52,45,70,51,67,67,53,57,52,66,70,56,65,50,0,0,0,0,104,95,0,0,96,112,0,2,45,47,0,0,16,0,69,50,67,55,69,67,55,57,45,56,69,54,54,45,52,50,53,57,45,66,53,67,70,45,56,55,53,57,65,56,67,57,52,68,51,53,0,0,98,112,108,105,115,116,48,48,8,8,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9]),
        SubSecTime: '520', SubSecTimeOriginal: '520', SubSecTimeDigitized: '520', FlashpixVersion: Buffer.from([0x30, 0x31, 0x30, 0x30]), ColorSpace: 65535,
        PixelXDimension: 4032, PixelYDimension: 3024, SensingMethod: 2, SceneType: Buffer.from([0x01]), ExposureMode: 0, WhiteBalance: 0,
        DigitalZoomRatio: 1.141132075471698, FocalLengthIn35mmFormat: 15, SceneCaptureType: 0, LensSpecification: [ 1.5399999619997986, 6, 1.8, 2.4 ],
        LensMake: 'Apple', LensModel: 'iPhone 11 Pro Max back triple camera 1.54mm f/2.4'
      },
      gps: {
        GPSLatitudeRef: 'N', GPSLatitude: [ 55, 14, 24.61 ], GPSLongitudeRef: 'W', GPSLongitude: [ 6, 30, 38.2 ], GPSAltitudeRef: 0,
        GPSAltitude: 6.37630192378385, GPSSpeedRef: 'K', GPSSpeed: 0, GPSImgDirectionRef: 'T', GPSImgDirection: 268.3018480492813, GPSDestBearingRef: 'T',
        GPSDestBearing: 268.3018480492813, GPSHPositioningError: 4.884441575209813
      }
    });
  });

  it('should read non-ascii data', function () {
    expect(exif(non_ascii), 'to equal', {
      bigEndian: true,
      image: {
        ImageDescription: Buffer.from([0xE4, 0xB8, 0x80, 0xE4, 0xB8, 0x89, 0xE4, 0xB8, 0x80, 0xE5, 0x9B, 0x9B, 0x00]),
        XResolution: 1,
        YResolution: 1,
        ResolutionUnit: 1,
        YCbCrPositioning: 1
      }
    });
  });

  it('should error when missing Exif tag', function() {
    expect(function() {
      exif(Buffer.alloc(50));
    }, 'to throw', /buffer should start with "Exif", "MM" or "II"/);
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
          'Invalid EXIF data: buffer should start with "Exif", "MM" or "II".',
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

  it('should parse or reject a randomly mutated EXIF data chunk based on the pngWithExif fixture', function () {
    expect(pngWithExif, 'when fuzzed by', mutateGenerator(chanceGenerators), 'to either parse or throw documented error');
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

  it('should parse or reject a randomly truncated EXIF data chunk based on the pngWithExif fixture', function () {
    expect(pngWithExif, 'when fuzzed by', truncateGenerator(chanceGenerators), 'to either parse or throw documented error');
  });

});
