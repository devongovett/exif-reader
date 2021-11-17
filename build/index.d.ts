/// <reference types="node" />
declare type ReadResult = ReturnType<typeof readTags>;
declare const _default: (buffer: Buffer) => {
    image: ReadResult;
    thumbnail?: ReadResult;
    exif?: ReadResult;
    gps?: ReadResult;
    interop?: ReadResult;
};
export = _default;
declare function readTags(buffer: Buffer, offset: number, bigEndian: boolean, tags: Record<number, string>): Record<string, string | number | number[] | Date | Buffer>;
