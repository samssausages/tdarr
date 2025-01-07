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
Encoder hevc_amf [AMD AMF HEVC encoder]:
    General capabilities: dr1 delay hardware 
    Threading capabilities: none
    Supported pixel formats: nv12 yuv420p p010le bgra bgr0
hevc_amf AVOptions:
  -usage             <int>        E..V....... Encoder Usage (from 0 to 5) (default transcoding)
     transcoding     0            E..V....... Transcoding, video editing
     ultralowlatency 1            E..V....... Video game streaming
     lowlatency      2            E..V....... Video collaboration, RDP
     webcam          3            E..V....... Video conferencing
     highquality     4            E..V....... High-quality encoding
     llhighquality   5            E..V....... High-quality encoding (low latency)
  -profile           <int>        E..V....... Profile (from 1 to 2) (default main)
     main            1            E..V....... 
     main10          2            E..V....... 
  -profile_tier      <int>        E..V....... Profile Tier (from 0 to 1) (default main)
     main            0            E..V....... 
     high            1            E..V....... 
  -level             <int>        E..V....... Profile Level (from 0 to 186) (default auto)
     auto            0            E..V....... 
     1.0             30           E..V....... 
     2.0             60           E..V....... 
     2.1             63           E..V....... 
     3.0             90           E..V....... 
     3.1             93           E..V....... 
     4.0             120          E..V....... 
     4.1             123          E..V....... 
     5.0             150          E..V....... 
     5.1             153          E..V....... 
     5.2             156          E..V....... 
     6.0             180          E..V....... 
     6.1             183          E..V....... 
     6.2             186          E..V....... 
  -quality           <int>        E..V....... Quality Preset (from 0 to 10) (default speed)
     speed           10           E..V....... Prefer Speed
     balanced        5            E..V....... Balanced
     quality         0            E..V....... Prefer Quality
  -rc                <int>        E..V....... Rate Control Method (from -1 to 3) (default -1)
     cqp             0            E..V....... Constant Quantization Parameter
     cbr             3            E..V....... Constant Bitrate
     vbr_peak        2            E..V....... Peak Contrained Variable Bitrate
     vbr_latency     1            E..V....... Latency Constrained Variable Bitrate
  -header_insertion_mode <int>        E..V....... Set header insertion mode (from 0 to 2) (default none)
     none            0            E..V....... 
     gop             1            E..V....... 
     idr             2            E..V....... 
  -gops_per_idr      <int>        E..V....... GOPs per IDR 0-no IDR will be inserted (from 0 to INT_MAX) (default 1)
  -preanalysis       <boolean>    E..V....... Enable Pre-Encode/Analysis for rate rontrol (2-Pass) (default false)
  -vbaq              <boolean>    E..V....... Enable VBAQ (default false)
  -hmqb              <boolean>    E..V....... Enable High Motion Quality Boost (default false)
  -enforce_hrd       <boolean>    E..V....... Enforce HRD (default false)
  -filler_data       <boolean>    E..V....... Filler Data Enable (default false)
  -max_au_size       <int>        E..V....... Maximum Access Unit Size for rate control (in bits) (from 0 to INT_MAX) (default 0)
  -min_qp_i          <int>        E..V....... Min Quantization Parameter for I-frame (from -1 to 51) (default -1)
  -max_qp_i          <int>        E..V....... Max Quantization Parameter for I-frame (from -1 to 51) (default -1)
  -min_qp_p          <int>        E..V....... Min Quantization Parameter for P-frame (from -1 to 51) (default -1)
  -max_qp_p          <int>        E..V....... Max Quantization Parameter for P-frame (from -1 to 51) (default -1)
  -qp_p              <int>        E..V....... Quantization Parameter for P-frame (from -1 to 51) (default -1)
  -qp_i              <int>        E..V....... Quantization Parameter for I-frame (from -1 to 51) (default -1)
  -skip_frame        <boolean>    E..V....... Rate Control Based Frame Skip (default false)
  -me_half_pel       <boolean>    E..V....... Enable ME Half Pixel (default true)
  -me_quarter_pel    <boolean>    E..V....... Enable ME Quarter Pixel (default true)
  -aud               <boolean>    E..V....... Inserts AU Delimiter NAL unit (default false)
  -log_to_dbg        <boolean>    E..V....... Enable AMF logging to debug output (default false)
```
