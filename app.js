import { Coder } from "./src/server.js";
import path from "path";

(() => {
  main();
})();

function main() {
  const channels = {
    mono: [1, "mono"],
    stereo: [2, "stereo"],
    surround: [6, "5.1"],
    surround2: [8, "7.1"],
  };

  //const input = path.resolve("./PinkPanther30.wav");
  // Coder.execute(input, './outputsEncoded/output_64bit.wav', 'pcm_f64le');
  // Coder.execute(input, './outputsEncoded/output_32bit.wav', 'pcm_f32le');
  // Coder.execute(input, './outputsEncoded/output_16bit.wav', 'pcm_s16le');
  // Coder.execute(input, './outputsEncoded/output_8bit_mono_44100hz.wav', 'pcm_u8', channels.stereo, 44100);
  // Coder.execute(input, './outputsEncoded/mono/output_16bit_96000hz.wav', 'pcm_s16le', channels.mono, 96000);
  // Coder.execute(
  //   input,
  //   "./outputsEncoded/channel_8/8bits/output_8000hz.wav",
  //   "pcm_u8",
  //   channels.surround2,
  //   8000
  // );
  // Coder.execute(
  //   input,
  //   "./outputsEncoded/channel_8/64bits/output_8000hz.wav",
  //   "pcm_f64le",
  //   channels.surround2,
  //   8000
  // );

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

  const inputVideo = path.resolve("./original.mp4");
  const outputFile = path.resolve("./videoEncoded/32bits/output.mkv");

  // console.log({inputVideo});
  Coder.executeCoderVideo({
    inputVideo,
    outputFile,
    // codec: "libx264", //* 8 bits
    // codec: "ffv1", //* 16 bits
    codec: "png", //* 32 bits
  });


  Coder.getFrameRate(outputFile);
}
