list your encoders run: 
```
ffmpeg -encoders
```

search the list run: 
```
ffmpeg -encoders | grep hevc
```

To query an encoder's options run: 
```
ffmpeg -h encoder=hevc_nvenc
```

Example:
GA102GL [RTX A5000]

```
Encoder libx265 [libx265 H.265 / HEVC]:
    General capabilities: dr1 delay threads 
    Threading capabilities: other
    Supported pixel formats: yuv420p yuvj420p yuv422p yuvj422p yuv444p yuvj444p gbrp yuv420p10le yuv422p10le yuv444p10le gbrp10le yuv420p12le yuv422p12le yuv444p12le gbrp12le gray gray10le gray12le
libx265 AVOptions:
  -crf               <float>      E..V....... set the x265 crf (from -1 to FLT_MAX) (default -1)
  -qp                <int>        E..V....... set the x265 qp (from -1 to INT_MAX) (default -1)
  -forced-idr        <boolean>    E..V....... if forcing keyframes, force them as IDR frames (default false)
  -preset            <string>     E..V....... set the x265 preset
  -tune              <string>     E..V....... set the x265 tune parameter
  -profile           <string>     E..V....... set the x265 profile
  -udu_sei           <boolean>    E..V....... Use user data unregistered SEI if available (default false)
  -a53cc             <boolean>    E..V....... Use A53 Closed Captions (if available) (default true)
  -x265-params       <dictionary> E..V....... set the x265 configuration using a :-separated list of key=value parameters
```
## Addtional

# 9.17 libx265
**x265 H.265/HEVC encoder wrapper.**

This encoder requires the presence of the libx265 headers and library during configuration. You need to explicitly configure the build with `--enable-libx265`.

## 9.17.1 Options

- **b**  
  Sets target video bitrate.

- **bf**  

- **g**  
  Set the GOP size.

- **keyint_min**  
  Minimum GOP size.

- **refs**  
  Number of reference frames each P-frame can use. The range is from 1-16.

- **preset**  
  Set the x265 preset.

- **tune**  
  Set the x265 tune parameter.

- **profile**  
  Set profile restrictions.

- **crf**  
  Set the quality for constant quality mode.

- **qp**  
  Set constant quantization rate control method parameter.

- **qmin**  
  Minimum quantizer scale.

- **qmax**  
  Maximum quantizer scale.

- **qdiff**  
  Maximum difference between quantizer scales.

- **qblur**  
  Quantizer curve blur

- **qcomp**  
  Quantizer curve compression factor

- **i_qfactor**  

- **b_qfactor**  

- **forced-idr**  
  Normally, when forcing a I-frame type, the encoder can select any type of I-frame. This option forces it to choose an IDR-frame.

- **udu_sei**  
  Import user data unregistered SEI if available into output. Default is 0 (off).

- **x265-params**  
  Set x265 options using a list of key=value couples separated by ":". See x265 `--help` for a list of options.

**For example to specify libx265 encoding options with `-x265-params`:**

```bash
ffmpeg -i input -c:v libx265 -x265-params crf=26:psy-rd=1 output.mp4
