## Formatos para los canales

* 1 canal: ```mono```
* 2 canales : ```stereo```
* 6 canales : ```5.1``` surround
* 8 canales : ```7.1```

```ffmpeg -layouts```

## Opciones de sample_fmts en FFmpeg

````ffmpeg -sample_fmts```

```s16```: Signed 16-bit PCM.
- Es uno de los formatos de muestra más comunes para audio de alta calidad en aplicaciones y archivos de audio.

```s32```: Signed 32-bit PCM.
- Ofrece una mayor precisión en la representación del audio, pero también produce archivos más grandes.

```u8```: Unsigned 8-bit PCM.
- Generalmente usado en aplicaciones que requieren menos precisión y tamaño de archivo reducido y usa valores sin signo.

```flt```: 32-bit floating-point PCM.
- Proporciona una alta calidad de audio con una mayor precisión en la representación de las señales de audio.

```dbl```: 64-bit floating-point PCM.
- Ofrece una precisión aún mayor que flt, utilizada principalmente en aplicaciones profesionales y de alta calidad.

```pcm_f32le```: 32-bit floating-point PCM (little-endian).
- Similar a flt, pero especifica el formato de endianidad de los datos.

```pcm_f64le```: 64-bit floating-point PCM (little-endian).
- Similar a dbl, pero especifica el formato de endianidad de los datos.

```pcm_s16le```: Signed 16-bit PCM (little-endian).
- Común en muchas aplicaciones y formatos de archivo, como WAV.

```pcm_s24le```: Signed 24-bit PCM (little-endian).
- Ofrece una mayor profundidad de bits que s16, proporcionando una mayor calidad de audio.

```pcm_s32le```: Signed 32-bit PCM (little-endian).
- Similar a s32, pero especifica el formato de endianidad de los datos.


