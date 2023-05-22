export type ImageTags = Partial<{
  ProcessingSoftware: string;
}>;

export type ExifTags = Partial<{
  Image: ImageTags;
  Photo: {};
  Iop: {};
  GPSInfo: {};
  // MpfInfo not supported
}>;
