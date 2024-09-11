import { Coder } from "./src/server.js";
import path from 'path';

(() => {
    main();
})()

function main() {
    const input = path.resolve('./PinkPanther30.wav')
    // Coder.execute(input, './outputsEncoded/output_64bit.wav', 'pcm_f64le');
    // Coder.execute(input, './outputsEncoded/output_32bit.wav', 'pcm_f32le');
    // Coder.execute(input, './outputsEncoded/output_16bit.wav', 'pcm_s16le');
    Coder.execute(input, './outputsEncoded/output_8bit_new.wav', 'pcm_s8');
    
    //* Decodificar
    
    // const encodedFiles = [
    //     './outputs/output_8bit.wav',
    //     './outputs/output_16bit.wav',
    //     './outputs/output_32bit.wav',
    //     './outputs/output_64bit.wav'
    // ];

    // encodedFiles.forEach( file => {
    //     const outputFile = path.join('decodedAudios', path.basename(file, path.extname(file)) + '.mp3');
    //     Coder.executeDecoder(file, outputFile);
    // })
}