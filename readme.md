## Tdarr - One Flow To Rule Them All

Goal to have one Flow (set of flows) for all your encoding needs.
I accomplish this by using Library Variables.  This allows us to change our quality and encoding settings in the library.  This is much easier than trying to edit the flow every time we want to encode differently.
I have a library for low quality, high quality, Animation, Movies.  Each has their own quality settings.  Then I just move the files I'm processing into the corresponding library folder and tdarr will process as needed.

Current Version:
V0.9

- Consider this beta, do not trust it with your media library until you have ran a bunch of various files through it!  Let me know if you run into unexpected behavior!
- Do not use with DV or HDR+.  Could cause playback error.  Works fine with basic HDR
- CPU & QSV need more testing, as I don't use them often.  NVENC is well tested
- This Flow is designed to be used with an imput and output directory
- Uses the -vbr method to obtain a predictable bitrate.  With cq as a fallback method.
- Languages not defined in the audio_language variable are removed

# Features
- Uses Library Variables for Quality Settings. This way you can have different libraries for different quality settings
- Uses Centralized Flow Variables for configurables in one location (1 - Input) No need to hunt the entire flow for configurables
- We calculate things like -maxrate based on your target bitrate. Simplifying user imput
- Lots of notes & documentation in the flow
- Extensive logging and use of icons to make tracking down failures a breeze
- Works with Nvidia, Intel QuickSync and CPU (Help me add others by saring your ffmpeg command)
- Strip audio to where only the tracks you want remain
- If a lossless audio track exists, encode in opus (can disable)
- Deinterlace .ts files. (tv DVR broadcasts)
- Export Embedded Subtitles (Could use more testing and refinement)

  

I broke it down into 5 steps/flows:

1 - Input (Define Flow Variables & Configurables.  Tags files that may need special processing down the stack)

2 - Prep (Standardizes the File so it is less likely to fail encoding later)

3 - Audio (Clean audio and encode to Opus, if enabled)

4 - Video (Define desired bitrate by resolution, fall back on cq)

5 - Save (final checks and move operations)

# Installation
1. Create a new flow for each of the above steps (1-5) by:
   
    a. Go to Tdarr Flows

    b. Click "add flow"

    c. Scoll to bottom and copy/paste json into "Import JSON Template" 

3. Create a new Library with the Variables listed below (Make Sure your library has an input folder defined & output folders exist)
4. Profit

# Tweaks
- All the configurable Flow Settings can be edited in flow 1 - Input
- If you have an Nvidia 2000 series or up, enable flow plugin fl_nvenc_b-frames in the 1-Input flow. (1660 Super as well)
- You can disable audio processing with library variable do_audio = false

Library variables you need to add, with example setting:

# Variable Notes:
Audio bitrates and cutoff are set PER CHANNEL.  We use that to calculate based on number of channels in the audio stream.

# Low Quality:
```
test_mode true # true = will not delete source file.  False = will delete source file

output_dir_done /media/4_done # path from within tdarr

output_dir_review /media/4_done_review # if something didn't go right, we move to review folder.

do_audio true # process audio? Currently Opus

v_cq 20 # quality setting for cq fallback method

disable_cq = false # Disable Fallback encoding method

bitrate_480p 1250k # bitrate you want for given resolution

bitrate_576p 1400k

bitrate_720p 2000k

bitrate_1080p 2500k

bitrate_1440p 3800k

bitrate_4k 10000k

bitrate_4k_hdr 12500k

bitrate_audio 160k # Audio bitrate we will encode to.  This is PER CHANNEL

bitrate_audio_cutoff 192k # will not encode source audio under this bitrate.  This is PER CHANNEL

audio_language und,un,eng,en,ger,deu,de,zho,zh,chi,jpn,ja,kor,ko,spa,es,cpe,  # languages that you want to keep

```

# Mid-High Quality:

```

test_mode true # true = will not delete source file.  False = will delete source file

output_dir_done /media/4_done # path from within tdarr

output_dir_review /media/4_done_review # if something didn't go right, we move to review folder.

do_audio true # process audio? Currently Opus

v_cq 18 # quality setting for cq fallback method

disable_cq = false # Disable Fallback encoding method

bitrate_480p 1750k # bitrate you want for given resolution

bitrate_576p 2000k

bitrate_720p 3000k

bitrate_1080p 4000k

bitrate_1440p 6000k

bitrate_4k 17500k

bitrate_4k_hdr 20000k

bitrate_audio 256k # Audio bitrate we will encode to.  This is PER CHANNEL

bitrate_audio_cutoff 384k # will not encode source audio under this bitrate.  This is PER CHANNEL

audio_language und,un,eng,en,ger,deu,de,zho,zh,chi,jpn,ja,kor,ko,spa,es,cpe,  # languages that you want to keep


```

## Flow Screenshot
The flow is huge, but here is an esample.

![Video Example](https://github.com/samssausages/tdarr/blob/80ee7f3c63ab8f017eefac86c9a25f7f101f129a/video_example.png)
![Input Example](https://github.com/samssausages/tdarr/blob/80ee7f3c63ab8f017eefac86c9a25f7f101f129a/input_example.png)
