import ffmpeg from 'fluent-ffmpeg';
import path from 'path';
import fs from 'fs';

export class Coder {
    constructor() { }

    static execute(inputFile, outputFile, codec) {
        Coder.ensureDirectoryExistence(outputFile)
        ffmpeg(inputFile)
            .audioCodec(codec)
            .on('end', () => {
                console.log(`Codificación completa: ${outputFile}`);
            })
            .on('error', (err) => {
                console.error(`Error durante la codificación: ${err.message}`);
            })
            .save(outputFile);
    }

    static executeDecoder(inputFile, outputFile) {
        Coder.ensureDirectoryExistence(outputFile)
        ffmpeg(inputFile)
            .audioCodec('libmp3lame')
            .on('end', () => {
                console.log(`Decodificación completa: ${outputFile}`);
            })
            .on('error', (err) => {
                console.error(`Error durante la decodificación: ${err.message}`);
            })
            .save(outputFile);
    }

    static ensureDirectoryExistence(filePath){
        const dirname = path.dirname(filePath);
        if (!fs.existsSync(dirname)) {
            fs.mkdirSync(dirname, { recursive: true });
        }
    };
}