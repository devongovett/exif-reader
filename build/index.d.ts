/// <reference types="node" />
declare type ReadResult = ReturnType<typeof readTags>;
export default function (buffer: Buffer): {
    image: ReadResult;
    thumbnail?: ReadResult;
    exif?: ReadResult;
    gps?: ReadResult;
    interop?: ReadResult;
};
declare function readTags(buffer: Buffer, offset: number, bigEndian: boolean, tags: Record<number, string>): Record<string, string | number | number[] | Date | Buffer>;
export {};
