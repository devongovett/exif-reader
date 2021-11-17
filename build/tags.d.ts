/**
 * Comprehensive list of TIFF and Exif tags found on
 * http://www.sno.phy.queensu.ca/~phil/exiftool/TagNames/EXIF.html
 */
export declare const exif: {
    readonly 1: "InteropIndex";
    readonly 2: "InteropVersion";
    readonly 11: "ProcessingSoftware";
    readonly 254: "SubfileType";
    readonly 255: "OldSubfileType";
    readonly 256: "ImageWidth";
    readonly 257: "ImageHeight";
    readonly 258: "BitsPerSample";
    readonly 259: "Compression";
    readonly 262: "PhotometricInterpretation";
    readonly 263: "Thresholding";
    readonly 264: "CellWidth";
    readonly 265: "CellLength";
    readonly 266: "FillOrder";
    readonly 269: "DocumentName";
    readonly 270: "ImageDescription";
    readonly 271: "Make";
    readonly 272: "Model";
    readonly 273: "StripOffsets";
    readonly 274: "Orientation";
    readonly 277: "SamplesPerPixel";
    readonly 278: "RowsPerStrip";
    readonly 279: "StripByteCounts";
    readonly 280: "MinSampleValue";
    readonly 281: "MaxSampleValue";
    readonly 282: "XResolution";
    readonly 283: "YResolution";
    readonly 284: "PlanarConfiguration";
    readonly 285: "PageName";
    readonly 286: "XPosition";
    readonly 287: "YPosition";
    readonly 288: "FreeOffsets";
    readonly 289: "FreeByteCounts";
    readonly 290: "GrayResponseUnit";
    readonly 291: "GrayResponseCurve";
    readonly 292: "T4Options";
    readonly 293: "T6Options";
    readonly 296: "ResolutionUnit";
    readonly 297: "PageNumber";
    readonly 300: "ColorResponseUnit";
    readonly 301: "TransferFunction";
    readonly 305: "Software";
    readonly 306: "ModifyDate";
    readonly 315: "Artist";
    readonly 316: "HostComputer";
    readonly 317: "Predictor";
    readonly 318: "WhitePoint";
    readonly 319: "PrimaryChromaticities";
    readonly 320: "ColorMap";
    readonly 321: "HalftoneHints";
    readonly 322: "TileWidth";
    readonly 323: "TileLength";
    readonly 324: "TileOffsets";
    readonly 325: "TileByteCounts";
    readonly 326: "BadFaxLines";
    readonly 327: "CleanFaxData";
    readonly 328: "ConsecutiveBadFaxLines";
    readonly 330: "SubIFD";
    readonly 332: "InkSet";
    readonly 333: "InkNames";
    readonly 334: "NumberofInks";
    readonly 336: "DotRange";
    readonly 337: "TargetPrinter";
    readonly 338: "ExtraSamples";
    readonly 339: "SampleFormat";
    readonly 340: "SMinSampleValue";
    readonly 341: "SMaxSampleValue";
    readonly 342: "TransferRange";
    readonly 343: "ClipPath";
    readonly 344: "XClipPathUnits";
    readonly 345: "YClipPathUnits";
    readonly 346: "Indexed";
    readonly 347: "JPEGTables";
    readonly 351: "OPIProxy";
    readonly 400: "GlobalParametersIFD";
    readonly 401: "ProfileType";
    readonly 402: "FaxProfile";
    readonly 403: "CodingMethods";
    readonly 404: "VersionYear";
    readonly 405: "ModeNumber";
    readonly 433: "Decode";
    readonly 434: "DefaultImageColor";
    readonly 435: "T82Options";
    readonly 437: "JPEGTables";
    readonly 512: "JPEGProc";
    readonly 513: "ThumbnailOffset";
    readonly 514: "ThumbnailLength";
    readonly 515: "JPEGRestartInterval";
    readonly 517: "JPEGLosslessPredictors";
    readonly 518: "JPEGPointTransforms";
    readonly 519: "JPEGQTables";
    readonly 520: "JPEGDCTables";
    readonly 521: "JPEGACTables";
    readonly 529: "YCbCrCoefficients";
    readonly 530: "YCbCrSubSampling";
    readonly 531: "YCbCrPositioning";
    readonly 532: "ReferenceBlackWhite";
    readonly 559: "StripRowCounts";
    readonly 700: "ApplicationNotes";
    readonly 999: "USPTOMiscellaneous";
    readonly 4096: "RelatedImageFileFormat";
    readonly 4097: "RelatedImageWidth";
    readonly 4098: "RelatedImageHeight";
    readonly 18246: "Rating";
    readonly 18247: "XP_DIP_XML";
    readonly 18248: "StitchInfo";
    readonly 18249: "RatingPercent";
    readonly 32781: "ImageID";
    readonly 32931: "WangTag1";
    readonly 32932: "WangAnnotation";
    readonly 32933: "WangTag3";
    readonly 32934: "WangTag4";
    readonly 32995: "Matteing";
    readonly 32996: "DataType";
    readonly 32997: "ImageDepth";
    readonly 32998: "TileDepth";
    readonly 33405: "Model2";
    readonly 33421: "CFARepeatPatternDim";
    readonly 33422: "CFAPattern2";
    readonly 33423: "BatteryLevel";
    readonly 33424: "KodakIFD";
    readonly 33432: "Copyright";
    readonly 33434: "ExposureTime";
    readonly 33437: "FNumber";
    readonly 33445: "MDFileTag";
    readonly 33446: "MDScalePixel";
    readonly 33447: "MDColorTable";
    readonly 33448: "MDLabName";
    readonly 33449: "MDSampleInfo";
    readonly 33450: "MDPrepDate";
    readonly 33451: "MDPrepTime";
    readonly 33452: "MDFileUnits";
    readonly 33550: "PixelScale";
    readonly 33589: "AdventScale";
    readonly 33590: "AdventRevision";
    readonly 33628: "UIC1Tag";
    readonly 33629: "UIC2Tag";
    readonly 33630: "UIC3Tag";
    readonly 33631: "UIC4Tag";
    readonly 33723: "IPTC-NAA";
    readonly 33918: "IntergraphPacketData";
    readonly 33919: "IntergraphFlagRegisters";
    readonly 33920: "IntergraphMatrix";
    readonly 33921: "INGRReserved";
    readonly 33922: "ModelTiePoint";
    readonly 34016: "Site";
    readonly 34017: "ColorSequence";
    readonly 34018: "IT8Header";
    readonly 34019: "RasterPadding";
    readonly 34020: "BitsPerRunLength";
    readonly 34021: "BitsPerExtendedRunLength";
    readonly 34022: "ColorTable";
    readonly 34023: "ImageColorIndicator";
    readonly 34024: "BackgroundColorIndicator";
    readonly 34025: "ImageColorValue";
    readonly 34026: "BackgroundColorValue";
    readonly 34027: "PixelIntensityRange";
    readonly 34028: "TransparencyIndicator";
    readonly 34029: "ColorCharacterization";
    readonly 34030: "HCUsage";
    readonly 34031: "TrapIndicator";
    readonly 34032: "CMYKEquivalent";
    readonly 34118: "SEMInfo";
    readonly 34152: "AFCP_IPTC";
    readonly 34232: "PixelMagicJBIGOptions";
    readonly 34264: "ModelTransform";
    readonly 34306: "WB_GRGBLevels";
    readonly 34310: "LeafData";
    readonly 34377: "PhotoshopSettings";
    readonly 34665: "ExifOffset";
    readonly 34675: "ICC_Profile";
    readonly 34687: "TIFF_FXExtensions";
    readonly 34688: "MultiProfiles";
    readonly 34689: "SharedData";
    readonly 34690: "T88Options";
    readonly 34732: "ImageLayer";
    readonly 34735: "GeoTiffDirectory";
    readonly 34736: "GeoTiffDoubleParams";
    readonly 34737: "GeoTiffAsciiParams";
    readonly 34850: "ExposureProgram";
    readonly 34852: "SpectralSensitivity";
    readonly 34853: "GPSInfo";
    readonly 34855: "ISO";
    readonly 34856: "Opto-ElectricConvFactor";
    readonly 34857: "Interlace";
    readonly 34858: "TimeZoneOffset";
    readonly 34859: "SelfTimerMode";
    readonly 34864: "SensitivityType";
    readonly 34865: "StandardOutputSensitivity";
    readonly 34866: "RecommendedExposureIndex";
    readonly 34867: "ISOSpeed";
    readonly 34868: "ISOSpeedLatitudeyyy";
    readonly 34869: "ISOSpeedLatitudezzz";
    readonly 34908: "FaxRecvParams";
    readonly 34909: "FaxSubAddress";
    readonly 34910: "FaxRecvTime";
    readonly 34954: "LeafSubIFD";
    readonly 36864: "ExifVersion";
    readonly 36867: "DateTimeOriginal";
    readonly 36868: "DateTimeDigitized";
    readonly 37121: "ComponentsConfiguration";
    readonly 37122: "CompressedBitsPerPixel";
    readonly 37377: "ShutterSpeedValue";
    readonly 37378: "ApertureValue";
    readonly 37379: "BrightnessValue";
    readonly 37380: "ExposureBiasValue";
    readonly 37381: "MaxApertureValue";
    readonly 37382: "SubjectDistance";
    readonly 37383: "MeteringMode";
    readonly 37384: "LightSource";
    readonly 37385: "Flash";
    readonly 37386: "FocalLength";
    readonly 37387: "FlashEnergy";
    readonly 37388: "SpatialFrequencyResponse";
    readonly 37389: "Noise";
    readonly 37390: "FocalPlaneXResolution";
    readonly 37391: "FocalPlaneYResolution";
    readonly 37392: "FocalPlaneResolutionUnit";
    readonly 37393: "ImageNumber";
    readonly 37394: "SecurityClassification";
    readonly 37395: "ImageHistory";
    readonly 37396: "SubjectArea";
    readonly 37397: "ExposureIndex";
    readonly 37398: "TIFF-EPStandardID";
    readonly 37399: "SensingMethod";
    readonly 37434: "CIP3DataFile";
    readonly 37435: "CIP3Sheet";
    readonly 37436: "CIP3Side";
    readonly 37439: "StoNits";
    readonly 37500: "MakerNote";
    readonly 37510: "UserComment";
    readonly 37520: "SubSecTime";
    readonly 37521: "SubSecTimeOriginal";
    readonly 37522: "SubSecTimeDigitized";
    readonly 37679: "MSDocumentText";
    readonly 37680: "MSPropertySetStorage";
    readonly 37681: "MSDocumentTextPosition";
    readonly 37724: "ImageSourceData";
    readonly 40091: "XPTitle";
    readonly 40092: "XPComment";
    readonly 40093: "XPAuthor";
    readonly 40094: "XPKeywords";
    readonly 40095: "XPSubject";
    readonly 40960: "FlashpixVersion";
    readonly 40961: "ColorSpace";
    readonly 40962: "PixelXDimension";
    readonly 40963: "PixelYDimension";
    readonly 40964: "RelatedSoundFile";
    readonly 40965: "InteropOffset";
    readonly 41483: "FlashEnergy";
    readonly 41484: "SpatialFrequencyResponse";
    readonly 41485: "Noise";
    readonly 41486: "FocalPlaneXResolution";
    readonly 41487: "FocalPlaneYResolution";
    readonly 41488: "FocalPlaneResolutionUnit";
    readonly 41489: "ImageNumber";
    readonly 41490: "SecurityClassification";
    readonly 41491: "ImageHistory";
    readonly 41492: "SubjectLocation";
    readonly 41493: "ExposureIndex";
    readonly 41494: "TIFF-EPStandardID";
    readonly 41495: "SensingMethod";
    readonly 41728: "FileSource";
    readonly 41729: "SceneType";
    readonly 41730: "CFAPattern";
    readonly 41985: "CustomRendered";
    readonly 41986: "ExposureMode";
    readonly 41987: "WhiteBalance";
    readonly 41988: "DigitalZoomRatio";
    readonly 41989: "FocalLengthIn35mmFormat";
    readonly 41990: "SceneCaptureType";
    readonly 41991: "GainControl";
    readonly 41992: "Contrast";
    readonly 41993: "Saturation";
    readonly 41994: "Sharpness";
    readonly 41995: "DeviceSettingDescription";
    readonly 41996: "SubjectDistanceRange";
    readonly 42016: "ImageUniqueID";
    readonly 42032: "CameraOwnerName";
    readonly 42033: "BodySerialNumber";
    readonly 42034: "LensSpecification";
    readonly 42035: "LensMake";
    readonly 42036: "LensModel";
    readonly 42037: "LensSerialNumber";
    readonly 42112: "GDALMetadata";
    readonly 42113: "GDALNoData";
    readonly 42240: "Gamma";
    readonly 44992: "ExpandSoftware";
    readonly 44993: "ExpandLens";
    readonly 44994: "ExpandFilm";
    readonly 44995: "ExpandFilterLens";
    readonly 44996: "ExpandScanner";
    readonly 44997: "ExpandFlashLamp";
    readonly 48129: "PixelFormat";
    readonly 48130: "Transformation";
    readonly 48131: "Uncompressed";
    readonly 48132: "ImageType";
    readonly 48256: "ImageWidth";
    readonly 48257: "ImageHeight";
    readonly 48258: "WidthResolution";
    readonly 48259: "HeightResolution";
    readonly 48320: "ImageOffset";
    readonly 48321: "ImageByteCount";
    readonly 48322: "AlphaOffset";
    readonly 48323: "AlphaByteCount";
    readonly 48324: "ImageDataDiscard";
    readonly 48325: "AlphaDataDiscard";
    readonly 50215: "OceScanjobDesc";
    readonly 50216: "OceApplicationSelector";
    readonly 50217: "OceIDNumber";
    readonly 50218: "OceImageLogic";
    readonly 50255: "Annotations";
    readonly 50341: "PrintIM";
    readonly 50560: "USPTOOriginalContentType";
    readonly 50706: "DNGVersion";
    readonly 50707: "DNGBackwardVersion";
    readonly 50708: "UniqueCameraModel";
    readonly 50709: "LocalizedCameraModel";
    readonly 50710: "CFAPlaneColor";
    readonly 50711: "CFALayout";
    readonly 50712: "LinearizationTable";
    readonly 50713: "BlackLevelRepeatDim";
    readonly 50714: "BlackLevel";
    readonly 50715: "BlackLevelDeltaH";
    readonly 50716: "BlackLevelDeltaV";
    readonly 50717: "WhiteLevel";
    readonly 50718: "DefaultScale";
    readonly 50719: "DefaultCropOrigin";
    readonly 50720: "DefaultCropSize";
    readonly 50721: "ColorMatrix1";
    readonly 50722: "ColorMatrix2";
    readonly 50723: "CameraCalibration1";
    readonly 50724: "CameraCalibration2";
    readonly 50725: "ReductionMatrix1";
    readonly 50726: "ReductionMatrix2";
    readonly 50727: "AnalogBalance";
    readonly 50728: "AsShotNeutral";
    readonly 50729: "AsShotWhiteXY";
    readonly 50730: "BaselineExposure";
    readonly 50731: "BaselineNoise";
    readonly 50732: "BaselineSharpness";
    readonly 50733: "BayerGreenSplit";
    readonly 50734: "LinearResponseLimit";
    readonly 50735: "CameraSerialNumber";
    readonly 50736: "DNGLensInfo";
    readonly 50737: "ChromaBlurRadius";
    readonly 50738: "AntiAliasStrength";
    readonly 50739: "ShadowScale";
    readonly 50740: "DNGPrivateData";
    readonly 50741: "MakerNoteSafety";
    readonly 50752: "RawImageSegmentation";
    readonly 50778: "CalibrationIlluminant1";
    readonly 50779: "CalibrationIlluminant2";
    readonly 50780: "BestQualityScale";
    readonly 50781: "RawDataUniqueID";
    readonly 50784: "AliasLayerMetadata";
    readonly 50827: "OriginalRawFileName";
    readonly 50828: "OriginalRawFileData";
    readonly 50829: "ActiveArea";
    readonly 50830: "MaskedAreas";
    readonly 50831: "AsShotICCProfile";
    readonly 50832: "AsShotPreProfileMatrix";
    readonly 50833: "CurrentICCProfile";
    readonly 50834: "CurrentPreProfileMatrix";
    readonly 50879: "ColorimetricReference";
    readonly 50898: "PanasonicTitle";
    readonly 50899: "PanasonicTitle2";
    readonly 50931: "CameraCalibrationSig";
    readonly 50932: "ProfileCalibrationSig";
    readonly 50933: "ProfileIFD";
    readonly 50934: "AsShotProfileName";
    readonly 50935: "NoiseReductionApplied";
    readonly 50936: "ProfileName";
    readonly 50937: "ProfileHueSatMapDims";
    readonly 50938: "ProfileHueSatMapData1";
    readonly 50939: "ProfileHueSatMapData2";
    readonly 50940: "ProfileToneCurve";
    readonly 50941: "ProfileEmbedPolicy";
    readonly 50942: "ProfileCopyright";
    readonly 50964: "ForwardMatrix1";
    readonly 50965: "ForwardMatrix2";
    readonly 50966: "PreviewApplicationName";
    readonly 50967: "PreviewApplicationVersion";
    readonly 50968: "PreviewSettingsName";
    readonly 50969: "PreviewSettingsDigest";
    readonly 50970: "PreviewColorSpace";
    readonly 50971: "PreviewDateTime";
    readonly 50972: "RawImageDigest";
    readonly 50973: "OriginalRawFileDigest";
    readonly 50974: "SubTileBlockSize";
    readonly 50975: "RowInterleaveFactor";
    readonly 50981: "ProfileLookTableDims";
    readonly 50982: "ProfileLookTableData";
    readonly 51008: "OpcodeList1";
    readonly 51009: "OpcodeList2";
    readonly 51022: "OpcodeList3";
    readonly 51041: "NoiseProfile";
    readonly 51043: "TimeCodes";
    readonly 51044: "FrameRate";
    readonly 51058: "TStop";
    readonly 51081: "ReelName";
    readonly 51089: "OriginalDefaultFinalSize";
    readonly 51090: "OriginalBestQualitySize";
    readonly 51091: "OriginalDefaultCropSize";
    readonly 51105: "CameraLabel";
    readonly 51107: "ProfileHueSatMapEncoding";
    readonly 51108: "ProfileLookTableEncoding";
    readonly 51109: "BaselineExposureOffset";
    readonly 51110: "DefaultBlackRender";
    readonly 51111: "NewRawImageDigest";
    readonly 51112: "RawToPreviewGain";
    readonly 51125: "DefaultUserCrop";
    readonly 59932: "Padding";
    readonly 59933: "OffsetSchema";
    readonly 65000: "OwnerName";
    readonly 65001: "SerialNumber";
    readonly 65002: "Lens";
    readonly 65024: "KDC_IFD";
    readonly 65100: "RawFile";
    readonly 65101: "Converter";
    readonly 65102: "WhiteBalance";
    readonly 65105: "Exposure";
    readonly 65106: "Shadows";
    readonly 65107: "Brightness";
    readonly 65108: "Contrast";
    readonly 65109: "Saturation";
    readonly 65110: "Sharpness";
    readonly 65111: "Smoothness";
    readonly 65112: "MoireFilter";
};
export declare const gps: {
    readonly 0: "GPSVersionID";
    readonly 1: "GPSLatitudeRef";
    readonly 2: "GPSLatitude";
    readonly 3: "GPSLongitudeRef";
    readonly 4: "GPSLongitude";
    readonly 5: "GPSAltitudeRef";
    readonly 6: "GPSAltitude";
    readonly 7: "GPSTimeStamp";
    readonly 8: "GPSSatellites";
    readonly 9: "GPSStatus";
    readonly 10: "GPSMeasureMode";
    readonly 11: "GPSDOP";
    readonly 12: "GPSSpeedRef";
    readonly 13: "GPSSpeed";
    readonly 14: "GPSTrackRef";
    readonly 15: "GPSTrack";
    readonly 16: "GPSImgDirectionRef";
    readonly 17: "GPSImgDirection";
    readonly 18: "GPSMapDatum";
    readonly 19: "GPSDestLatitudeRef";
    readonly 20: "GPSDestLatitude";
    readonly 21: "GPSDestLongitudeRef";
    readonly 22: "GPSDestLongitude";
    readonly 23: "GPSDestBearingRef";
    readonly 24: "GPSDestBearing";
    readonly 25: "GPSDestDistanceRef";
    readonly 26: "GPSDestDistance";
    readonly 27: "GPSProcessingMethod";
    readonly 28: "GPSAreaInformation";
    readonly 29: "GPSDateStamp";
    readonly 30: "GPSDifferential";
    readonly 31: "GPSHPositioningError";
};
