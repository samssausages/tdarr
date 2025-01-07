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
Encoder hevc_vaapi [H.265/HEVC (VAAPI)]:
    General capabilities: dr1 delay hardware 
    Threading capabilities: none
    Supported hardware devices: vaapi 
    Supported pixel formats: vaapi
h265_vaapi AVOptions:
  -low_power         <boolean>    E..V....... Use low-power encoding mode (only available on some platforms; may not support all encoding features) (default false)
  -idr_interval      <int>        E..V....... Distance (in I-frames) between IDR frames (from 0 to INT_MAX) (default 0)
  -b_depth           <int>        E..V....... Maximum B-frame reference depth (from 1 to INT_MAX) (default 1)
  -async_depth       <int>        E..V....... Maximum processing parallelism. Increase this to improve single channel performance. This option doesn't work if driver doesn't implement vaSyncBuffer function. (from 1 to 64) (default 4)
  -max_frame_size    <int>        E..V....... Maximum frame size (in bytes) (from 0 to INT_MAX) (default 0)
  -rc_mode           <int>        E..V....... Set rate control mode (from 0 to 6) (default auto)
     auto            0            E..V....... Choose mode automatically based on other parameters
     CQP             1            E..V....... Constant-quality
     CBR             2            E..V....... Constant-bitrate
     VBR             3            E..V....... Variable-bitrate
     ICQ             4            E..V....... Intelligent constant-quality
     QVBR            5            E..V....... Quality-defined variable-bitrate
     AVBR            6            E..V....... Average variable-bitrate
  -qp                <int>        E..V....... Constant QP (for P-frames; scaled by qfactor/qoffset for I/B) (from 0 to 52) (default 0)
  -aud               <boolean>    E..V....... Include AUD (default false)
  -profile           <int>        E..V....... Set profile (general_profile_idc) (from -99 to 255) (default -99)
     main            1            E..V.......
     main10          2            E..V.......
     rext            4            E..V.......
  -tier              <int>        E..V....... Set tier (general_tier_flag) (from 0 to 1) (default main)
     main            0            E..V.......
     high            1            E..V.......
  -level             <int>        E..V....... Set level (general_level_idc) (from -99 to 255) (default -99)
     1               30           E..V.......
     2               60           E..V.......
     2.1             63           E..V.......
     3               90           E..V.......
     3.1             93           E..V.......
     4               120          E..V.......
     4.1             123          E..V.......
     5               150          E..V.......
     5.1             153          E..V.......
     5.2             156          E..V.......
     6               180          E..V.......
     6.1             183          E..V.......
     6.2             186          E..V.......
  -sei               <flags>      E..V....... Set SEI to include (default hdr+a53_cc)
     hdr                          E..V....... Include HDR metadata for mastering display colour volume and content light level information
     a53_cc                       E..V....... Include A/53 caption data
  -tiles             <image_size> E..V....... Tile columns x rows
```
## Additional

# 9.28 VAAPI encoders

Wrappers for hardware encoders accessible via VAAPI.

These encoders only accept input in VAAPI hardware surfaces. If you have input in software frames, use the `hwupload` filter to upload them to the GPU.

## Standard libavcodec Options
The following standard libavcodec options are used:

- **g / gop_size**
- **bf / max_b_frames**
- **profile**
  - If not set, this will be determined automatically from the format of the input frames and the profiles supported by the driver.
- **level**
- **b / bit_rate**
- **maxrate / rc_max_rate**
- **bufsize / rc_buffer_size**
- **rc_init_occupancy / rc_initial_buffer_occupancy**
- **compression_level**
  - Speed / quality tradeoff: higher values are faster / worse quality.
- **q / global_quality**
  - Size / quality tradeoff: higher values are smaller / worse quality.
- **qmin**
- **qmax**
- **i_qfactor / i_quant_factor**
- **i_qoffset / i_quant_offset**
- **b_qfactor / b_quant_factor**
- **b_qoffset / b_quant_offset**
- **slices**

### Additional Options Supported by All Encoders

- **low_power**
  - Some drivers/platforms offer a second encoder for some codecs intended to use less power than the default encoder; setting this option will attempt to use that encoder. Note that it may support a reduced feature set, so some other options may not be available in this mode.

- **idr_interval**
  - Set the number of normal intra frames between full-refresh (IDR) frames in open-GOP mode. The intra frames are still IRAPs, but will not include global headers and may have non-decodable leading pictures.

- **b_depth**
  - Set the B-frame reference depth. When set to one (the default), all B-frames will refer only to P- or I-frames. When set to greater values multiple layers of B-frames will be present, frames in each layer only referring to frames in higher layers.

- **async_depth**
  - Maximum processing parallelism. Increase this to improve single channel performance. This option doesn’t work if the driver doesn’t implement `vaSyncBuffer` function. Please make sure there are enough `hw_frames` allocated if a large number of `async_depth` is used.

- **max_frame_size**
  - Set the allowed max size in bytes for each frame. If the frame size exceeds the limitation, the encoder will adjust the QP value to control the frame size. Invalid in CQP rate control mode.

- **rc_mode**
  - Set the rate control mode to use. A given driver may only support a subset of modes.
    - **auto**: Choose the mode automatically based on driver support and the other options. This is the default.
    - **CQP**: Constant-quality.
    - **CBR**: Constant-bitrate.
    - **VBR**: Variable-bitrate.
    - **ICQ**: Intelligent constant-quality.
    - **QVBR**: Quality-defined variable-bitrate.
    - **AVBR**: Average variable bitrate.

- **blbrc**
  - Enable block level rate control, which assigns different bitrate block by block. Invalid for CQP mode.

## Specific Encoder Options

### av1_vaapi
- **profile**: sets the value of `seq_profile`.
- **tier**: sets the value of `seq_tier`.
- **level**: sets the value of `seq_level_idx`.
- **tiles**: Set the number of tiles to encode the input video with, as columns x rows. (default is `auto`, which means use minimal tile column/row number).
- **tile_groups**: Set tile groups number. All the tiles will be distributed as evenly as possible to each tile group. (default is 1).

### h264_vaapi
- **profile**: sets the value of `profile_idc` and the `constraint_set*_flags`.
- **level**: sets the value of `level_idc`.
- **coder**: Set entropy encoder (default is `cabac`).
  - `ac`/`cabac`: Use CABAC.
  - `vlc`/`cavlc`: Use CAVLC.
- **aud**: Include access unit delimiters in the stream (not included by default).
- **sei**: Set SEI message types to include. Some combination of:
  - `identifier`: Include a user_data_unregistered message containing information about the encoder.
  - `timing`: Include picture timing parameters (buffering_period and pic_timing messages).
  - `recovery_point`: Include recovery points where appropriate (recovery_point messages).

### hevc_vaapi
- **profile** and **level**: set the values of `general_profile_idc` and `general_level_idc` respectively.
- **aud**: Include access unit delimiters in the stream (not included by default).
- **tier**: Set `general_tier_flag`. This may affect the level chosen for the stream if it is not explicitly specified.
- **sei**: Set SEI message types to include. Some combination of:
  - `hdr`: Include HDR metadata if the input frames have it (mastering_display_colour_volume and content_light_level messages).
- **tiles**: Set the number of tiles to encode the input video with, as columns x rows. Larger numbers allow greater parallelism in both encoding and decoding, but may decrease coding efficiency.

### mjpeg_vaapi
- Only baseline DCT encoding is supported. The encoder always uses the standard quantization and Huffman tables - `global_quality` scales the standard quantization table (range 1-100).
- For YUV, 4:2:0, 4:2:2, and 4:4:4 subsampling modes are supported. RGB is also supported, and will create an RGB JPEG.
- **jfif**: Include JFIF header in each frame (not included by default).
- **huffman**: Include standard Huffman tables (on by default). Turning this off will save a few hundred bytes in each output frame, but may lose compatibility with some JPEG decoders which don’t fully handle MJPEG.

### mpeg2_vaapi
- **profile** and **level**: set the value of `profile_and_level_indication`.

### vp8_vaapi
- B-frames are not supported.
- **global_quality**: sets the `q_idx` used for non-key frames (range 0-127).
- **loop_filter_level**
- **loop_filter_sharpness**: Manually set the loop filter parameters.

### vp9_vaapi
- **global_quality**: sets the `q_idx` used for P-frames (range 0-255).
- **loop_filter_level**
- **loop_filter_sharpness**: Manually set the loop filter parameters.
- B-frames are supported, but the output stream is always in encode order rather than display order. If B-frames are enabled, it may be necessary to use the `vp9_raw_reorder` bitstream filter to modify the output stream to display frames in the correct order.
- Only normal frames are produced - the `vp9_superframe` bitstream filter may be required to produce a stream usable with all decoders.
