import { Coder } from "./src/server.js";
import path from 'path';

(() => {
    main();
})()

function main() {

    const channels = {
        mono: [1, 'mono'],
        stereo: [2, 'stereo'],
        surround: [6, '5.1'],
        surround2: [8, '7.1'],
    }

    const input = path.resolve('./PinkPanther30.wav')
    // Coder.execute(input, './outputsEncoded/output_64bit.wav', 'pcm_f64le');
    // Coder.execute(input, './outputsEncoded/output_32bit.wav', 'pcm_f32le');
    // Coder.execute(input, './outputsEncoded/output_16bit.wav', 'pcm_s16le');
    // Coder.execute(input, './outputsEncoded/output_8bit_mono_44100hz.wav', 'pcm_s8', channels.stereo, 44100);
    Coder.execute(input, './outputsEncoded/output_16bit_stereo_8000hz.wav', 'pcm_s16le', channels.stereo, 8000);
    
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