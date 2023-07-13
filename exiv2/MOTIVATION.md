
# Use standard Exif group and tagnames, use Exiv2 metatdata as source of truth 

This PR adds Typescript definitions and standard Exif names. 
It was motivated by issue #27, but expanded into bringing standard Exif tags
and type them properly. This is a breaking change, as new tags are added
or renamed to match the Exif standard, and non standard tags are removed. 

The original inspiration for this project was probably
[exiftool](http://www.sno.phy.queensu.ca/~phil/exiftool/TagNames/EXIF.html)
which maintains a huge list of standard and non standard tags. 
Many tag names are are slightly from the [Exif spec](https://www.cipa.jp/std/documents/e/DC-008-2012_E.pdf)
and the type description is often a little bit fuzzy. 

The [Exiv2 project](https://exiv2.org/index.html) maintains a well structured list 
of all [standard Exif tags](https://exiv2.org/tags.html) together with type information. 

Exiv2 tries to follow the spec by the book, while the exiftool project
diverges a bit. For example the tag 0x0132 is called `DateTime` in the specs, 
but exiftool calls it `ModifyDate`. 

The Exiv2 project includes a tool called taglist, that list all standard tag names with their types.
The output of this tool is used to generate the `tags.js` file and the type definition `index.d.ts`.

The goal is, to keep exif-reader tag names in sync with exiv2 definition and documentation.

## Upgrade Instructions

Remove separate types package `@types/exif-reader` from your dependencies if present.

Code that used renamed or removed tagnames will cause Typescript errors. 
The following tables of changed tag names will help with migration. 
Non standard tags can still be accessed by their numeric tag-id,
 e.g. the id for `FaxRecvParams` is `34908`.

### Duplicate Tag Names
This is most probably a bug in exif-reader, as those tags would return wrong results if 
they exist in the same file: 
| Tag Name | TagIds |
|--- | ---
| ImageWidth | 0x0100, 0xbc80 |
| ImageHeight | 0x0101, 0xbc81 |
| JPEGTables | 0x015b, 0x01b5 |
| FlashEnergy | 0x920b, 0xa20b |
| SpatialFrequencyResponse | 0x920c, 0xa20c |
| Noise | 0x920d, 0xa20d |
| FocalPlaneXResolution | 0x920e, 0xa20e |
| FocalPlaneYResolution | 0x920f, 0xa20f |
| FocalPlaneResolutionUnit | 0x9210, 0xa210 |
| ImageNumber | 0x9211, 0xa211 |
| SecurityClassification | 0x9212, 0xa212 |
| ImageHistory | 0x9213, 0xa213 |
| ExposureIndex | 0x9215, 0xa215 |
| TIFF-EPStandardID | 0x9216, 0xa216 |
| SensingMethod | 0x9217, 0xa217 |
| WhiteBalance | 0xa403, 0xfe4e |
| Contrast | 0xa408, 0xfe54 |
| Saturation | 0xa409, 0xfe55 |
| Sharpness | 0xa40a, 0xfe56 |

### Changed Tag Names

| Current Tag Name | Proposed Tag Name Exiv2/Exif  |
| --- | --- |
|InteropIndex|InteroperabilityIndex|
|InteropVersion|InteroperabilityVersion|
|OldSubfileType|SubfileType|
|ImageHeight|ImageLength|
|ModifyDate|DateTime|
|SubIFD|SubIFDs|
|NumberofInks|NumberOfInks|
|ThumbnailOffset|JPEGInterchangeFormat|
|ThumbnailLength|JPEGInterchangeFormatLength|
|ApplicationNotes|XMLPacket|
|RelatedImageHeight|RelatedImageLength|
|CFAPattern2|CFAPattern|
|IPTC-NAA|IPTCNAA|
|PhotoshopSettings|ImageResources|
|ExifOffset|ExifTag|
|ICC_Profile|InterColorProfile|
|GPSInfo|GPSTag|
|ISO|ISOSpeedRatings|
|Opto-ElectricConvFactor|OECF|
|TIFF-EPStandardID|TIFFEPStandardID|
|InteropOffset|InteroperabilityTag|
|FocalLengthIn35mmFormat|FocalLengthIn35mmFilm|
|PrintIM|PrintImageMatching|
|DNGLensInfo|LensInfo|
|CameraCalibrationSig|CameraCalibrationSignature|
|ProfileCalibrationSig|ProfileCalibrationSignature|
|ProfileIFD|ExtraCameraProfiles|
|OriginalBestQualitySize|OriginalBestQualityFinalSize|

### New Tag Names

| Current Tag Name | Proposed Tag Name Exiv2/Exif  |
| --- | --- |
|28722|VignettingCorrParams|
|28725|ChromaticAberrationCorrParams|
|28727|DistortionCorrParams|
|51177|DepthFormat|
|51178|DepthNear|
|51179|DepthFar|
|51180|DepthUnits|
|51181|DepthMeasureType|
|51182|EnhanceParams|
|52525|ProfileGainTableMap|
|52526|SemanticName|
|52528|SemanticInstanceID|
|52529|CalibrationIlluminant3|
|52530|CameraCalibration3|
|52531|ColorMatrix3|
|52532|ForwardMatrix3|
|52533|IlluminantData1|
|52534|IlluminantData2|
|52535|IlluminantData3|
|52536|MaskSubArea|
|52537|ProfileHueSatMapData3|
|52538|ReductionMatrix3|
|52539|RGBTables|
|36880|OffsetTime|
|36881|OffsetTimeOriginal|
|36882|OffsetTimeDigitized|
|37888|Temperature|
|37889|Humidity|
|37890|Pressure|
|37891|WaterDepth|
|37892|Acceleration|
|37893|CameraElevationAngle|
|42080|CompositeImage|
|42081|SourceImageNumberOfCompositeImage|
|42082|SourceExposureTimesOfCompositeImage|

### Non standard Tag Names (removed)
A sampling of those values on https://exiftool.org/TagNames/EXIF.html indicates that they are either
offsets to vendor specific IFDs or are not part of any IFD (basicly undocumented on exiftool)

| Current Tag Name | Generic Tag Id, not present in Exif Standard  |
| --- | --- |
|MinSampleValue|280|
|MaxSampleValue|281|
|FreeOffsets|288|
|FreeByteCounts|289|
|ColorResponseUnit|300|
|BadFaxLines|326|
|CleanFaxData|327|
|ConsecutiveBadFaxLines|328|
|GlobalParametersIFD|400|
|ProfileType|401|
|FaxProfile|402|
|CodingMethods|403|
|VersionYear|404|
|ModeNumber|405|
|Decode|433|
|DefaultImageColor|434|
|T82Options|435|
|StripRowCounts|559|
|USPTOMiscellaneous|999|
|XP_DIP_XML|18247|
|StitchInfo|18248|
|WangTag1|32931|
|WangAnnotation|32932|
|WangTag3|32933|
|WangTag4|32934|
|Matteing|32995|
|DataType|32996|
|ImageDepth|32997|
|TileDepth|32998|
|Model2|33405|
|KodakIFD|33424|
|MDFileTag|33445|
|MDScalePixel|33446|
|MDColorTable|33447|
|MDLabName|33448|
|MDSampleInfo|33449|
|MDPrepDate|33450|
|MDPrepTime|33451|
|MDFileUnits|33452|
|PixelScale|33550|
|AdventScale|33589|
|AdventRevision|33590|
|UIC1Tag|33628|
|UIC2Tag|33629|
|UIC3Tag|33630|
|UIC4Tag|33631|
|IntergraphPacketData|33918|
|IntergraphFlagRegisters|33919|
|IntergraphMatrix|33920|
|INGRReserved|33921|
|ModelTiePoint|33922|
|Site|34016|
|ColorSequence|34017|
|IT8Header|34018|
|RasterPadding|34019|
|BitsPerRunLength|34020|
|BitsPerExtendedRunLength|34021|
|ColorTable|34022|
|ImageColorIndicator|34023|
|BackgroundColorIndicator|34024|
|ImageColorValue|34025|
|BackgroundColorValue|34026|
|PixelIntensityRange|34027|
|TransparencyIndicator|34028|
|ColorCharacterization|34029|
|HCUsage|34030|
|TrapIndicator|34031|
|CMYKEquivalent|34032|
|SEMInfo|34118|
|AFCP_IPTC|34152|
|PixelMagicJBIGOptions|34232|
|ModelTransform|34264|
|WB_GRGBLevels|34306|
|LeafData|34310|
|TIFF_FXExtensions|34687|
|MultiProfiles|34688|
|SharedData|34689|
|T88Options|34690|
|ImageLayer|34732|
|GeoTiffDirectory|34735|
|GeoTiffDoubleParams|34736|
|GeoTiffAsciiParams|34737|
|FaxRecvParams|34908|
|FaxSubAddress|34909|
|FaxRecvTime|34910|
|LeafSubIFD|34954|
|CIP3DataFile|37434|
|CIP3Sheet|37435|
|CIP3Side|37436|
|StoNits|37439|
|MSDocumentText|37679|
|MSPropertySetStorage|37680|
|MSDocumentTextPosition|37681|
|ImageSourceData|37724|
|TIFF-EPStandardID|41494|
|GDALMetadata|42112|
|GDALNoData|42113|
|ExpandSoftware|44992|
|ExpandLens|44993|
|ExpandFilm|44994|
|ExpandFilterLens|44995|
|ExpandScanner|44996|
|ExpandFlashLamp|44997|
|PixelFormat|48129|
|Transformation|48130|
|Uncompressed|48131|
|ImageType|48132|
|ImageHeight|48257|
|WidthResolution|48258|
|HeightResolution|48259|
|ImageOffset|48320|
|ImageByteCount|48321|
|AlphaOffset|48322|
|AlphaByteCount|48323|
|ImageDataDiscard|48324|
|AlphaDataDiscard|48325|
|OceScanjobDesc|50215|
|OceApplicationSelector|50216|
|OceIDNumber|50217|
|OceImageLogic|50218|
|Annotations|50255|
|USPTOOriginalContentType|50560|
|RawImageSegmentation|50752|
|AliasLayerMetadata|50784|
|PanasonicTitle|50898|
|PanasonicTitle2|50899|
|Padding|59932|
|OffsetSchema|59933|
|OwnerName|65000|
|SerialNumber|65001|
|Lens|65002|
|KDC_IFD|65024|
|RawFile|65100|
|Converter|65101|
|Exposure|65105|
|Shadows|65106|
|Brightness|65107|
|Smoothness|65111|
|MoireFilter|65112|