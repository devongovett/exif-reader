
# Use standard Exif group and tagnames, use Exiv2 metatdata as source of truth 

Note: This is a RFC and not a real issue. My whole intention is to receive some
feedback about an idea I had when tried to solve my own issue #27 for better
Typescript support out of the box.

While working on this issue I noticed some things that made me scratch my head
 - where could I find an official Exif spec?
 - why are tags distributed into different groups?
 - why do we have the same tag name for different tag ids?
 - what types have those tags? 
 - and why are some tags for my use case only behind numbers? 

So I spent quite some time looking at 
[exiftool](http://www.sno.phy.queensu.ca/~phil/exiftool/TagNames/EXIF.html)
which seems to be the original inspiration to this project. 

Then I found the nice [Exiv2 project](https://exiv2.org/index.html) that at least
had a working link to the [Exif spec](https://www.cipa.jp/std/documents/e/DC-008-2012_E.pdf) 
and a well structured list of all [standard Exif tags](https://exiv2.org/tags.html)

I realised that I had actually the cli installed on my machine, so I could easily inspect
the exif tags with `exiv2 -p e some.jpg`. So I could compare that ouptut of exiv2 and 
exif-reader. IMHO the exiv2 project is following one to one, while the exiftool project
diverges a bit. For example the tag 0x0132 is called `DateTime` in Exif and Exiv2, but `ModifyDate`
in exiftool and exif-reader. 
Also the exiv2 project provides structured access to the data type of each tag, my
original motiviation for starting all this. 

So my proposal is, can we just generate the `tags.js` file and the type definition `index.d.ts`
based on the metadata from eviv2? That would give us some benefits
- standard group and tagnames, reuse of the eviv2 documentation
- a more uptodate list of tags
- automatic generated typescript types 
  
It also has some drawbacks:
- some tag names would change (e.g. ModifyDate to DateTime) so this 
  is a breaking change tha needs a major (2.0) release
- non Exif tags (e.g. `InkSet`, `InkNames` or `FaxRecvParams`) now no longer have a tag name (but would
still be accessible by tag id if they are actually inside a file)  
- dependent project must apply changes when upgrading (easy with Typescript support)  

I prepared a [branch of my proposed change](at https://github.com/atombrenner/exif-reader/tree/feature/generate-tags-and-types-from-exiv2)
I think this change would align this project with the Exif Spec, but I fully understand
that this is a breaking change that will cause effort for users of this project.
Mostly it's just adjusting tag names. Only if someone relied on non-standard tag overwriting
behaviour the change could be more demanding. 

### Changed Tag Names

| from | to |
| --- | --- |
|ExifOffset | ExifTag |
|GPSInfo | GPSTag |
|InteropOffset | InteroperabilityTag |
|ImageHeight| ImageLength|
|ModifyDate | DateTime |
|ISO | ISOSpeedRatings |
|FocalLengthIn35mmFormat |FocalLengthIn35mmFilm|
|ThumbnailOffset | JPEGInterchangeFormat |
|ThumbnailLength | JPEGInterchangeFormatLength |
|TIFF-EPStandardID | TIFFEPStandardID |
|36880 | OffsetTime |
|36881 | OffsetTimeOriginal |
|36882 | OffsetTimeDigitized |
|42080 | CompositeImage |