import ffmpeg from "fluent-ffmpeg";
import path from "path";
import fs from "fs";

export class Coder {
  constructor() {}

  static execute(inputFile, outputFile, codec, channels, sampleRate) {
    Coder.ensureDirectoryExistence(outputFile);
    ffmpeg(inputFile)
      .audioCodec(codec)
      .audioChannels(channels[0])
      .audioFilters(
        `aformat=sample_fmts=dbl:channel_layouts=${channels[1]},aresample=${sampleRate}`
      )
      .on("progress", (progress) => {
        console.log(`Progreso: ${progress.percent}%`);
        console.log(`Velocidad de transferencia: ${progress.currentKbps} kbps`);
      })
      .on("end", () => {
        console.log(`Codificación completa: ${outputFile}`);
      })
      .on("error", (err) => {
        console.error(`Error durante la codificación: ${err.message}`);
      })
      .save(outputFile);
  }

  static executeDecoder(inputFile, outputFile) {
    Coder.ensureDirectoryExistence(outputFile);
    ffmpeg(inputFile)
      .audioCodec("libmp3lame")
      .on("end", () => {
        console.log(`Decodificación completa: ${outputFile}`);
      })
      .on("error", (err) => {
        console.error(`Error durante la decodificación: ${err.message}`);
      })
      .save(outputFile);
  }

  static executeCoderVideo({ inputVideo, outputFile, codec }) {
    Coder.ensureDirectoryExistence(outputFile);
    console.log({ inputVideo, outputFile, codec });
    ffmpeg(inputVideo)
      .videoCodec(codec)
      .outputOptions(["-preset fast", "-crf 23", "-c:a aac", "-pix_fmt rgba"])
      .on("progress", (progress) => {
        console.log(`Velocidad de transferencia: ${progress.currentKbps} kbps`);
      })
      .on("end", () => {
        console.log("Codificación completada.");
      })
      .on("error", (err) => {
        console.error("Error durante la codificación:", err.message);
      })
      .save(outputFile);
  }

  static executeDecoderVideo({ inputFile, outputFile, bitDepth, colorSpace }) {
    Coder.ensureDirectoryExistence(outputFile);

    let pixelFormat;
    if (colorSpace === "yuv") {
      pixelFormat = bitDepth === 8 ? "yuv420p" : `yuv${bitDepth}p`;
    } else if (colorSpace === "rgb") {
      pixelFormat = bitDepth === 8 ? "rgb24" : `rgba`;
    } else {
      throw new Error("Espacio de color no soportado.");
    }

    ffmpeg(inputFile)
      .outputOptions([
        `-pix_fmt ${pixelFormat}`, // Especifica el formato de píxel
      ])
      .on("end", () => {
        console.log(`Decodificación completada a ${bitDepth} bits.`);
      })
      .on("error", (err) => {
        console.error("Error durante la decodificación:", err.message);
      })
      .save(outputFile);
  }

  static getFrameRate(inputVideo) {
    ffmpeg.ffprobe(inputVideo, (err, metadata) => {
      if (err) {
        console.error("Error al obtener metadata:", err.message);
        return;
      }

      const videoStream = metadata.streams.find(
        (stream) => stream.codec_type === "video"
      );

      if (videoStream) {
        const frameRate = videoStream.avg_frame_rate;
        console.log("Tasa de fotogramas:", frameRate);
      } else {
        console.log("No se encontró un stream de video.");
      }
    });
  }

  static ensureDirectoryExistence(filePath) {
    const dirname = path.dirname(filePath);
    if (!fs.existsSync(dirname)) {
      fs.mkdirSync(dirname, { recursive: true });
    }
  }
}
