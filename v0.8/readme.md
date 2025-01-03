This is the next major release.  It's a total rework.  It works pretty well, but I'm still running into issues here and there, so don't have it delete your files until you test them.  Keep the library variable "test_mode" set to true and it won't delete your original file.

Help me test this by running some files through it and letting me know if something isn't as expected!


What makes my flow unique is that I use Library Variables for the Quality Settings.  This way you can have a library for Low Quality, High Quality, Animation etc.
This way you set your quality settings in the library variables and only need to manage 1 Flow!

This newest version v0.8 has some big improvements.  I added custom JS to calculate things such as video/audio bitrates and cutoffs.  This means you need to configure fewer variables and can essentially define:

If the file is 1080p and video is over 4000k, then encode it to 2000k.

I broke it down into 5 steps/flows:


1 - Input Sort & Tag  (Tags files that may need special processing down the stack)

2 - Prep & Clean (Standardizes the File so it is less likely to fail encoding later)

3 - Audio (Clean audio and encode to Opus, if wanted)

4 - Video (Define desired bitrate by resolution, fall back on cq)

5 - Save File (will also add notifications to this later)

Notes:

Currently setup for nvenc, I will add other methods once it's perfected.

If your nvidia card is older than 20 series, then you need to remove b-frames from the ffmpeg command.  b-frames works only on 20 series and up.

The audio bitrates in the flow variable are PER CHANNEL.  The flow calculates what that should be for 1, 2, 6, 8 channels.  The cutoff is also per channel.

There is a do_audio tag that you can set to true or false, audio will only encode if you set it to true.

The lang variable is used to delete all languages not listed!

Library variables you need to add, with example setting for what I consider low quality:

```
test_mode true # true = will not delete source file.  False = will delete source file

output_dir_done /media/4_done # path from within tdarr

output_dir_review /media/4_done_review # if something didn't go right, we move to review folder.

do_audio true # process audio? Currently Opus

v_cq 20 # quality setting for cq fallback method

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
Example of Mid-High Quality:

```

test_mode true # true = will not delete source file.  False = will delete source file

output_dir_done /media/4_done # path from within tdarr

output_dir_review /media/4_done_review # if something didn't go right, we move to review folder.

do_audio true # process audio? Currently Opus

v_cq 18 # quality setting for cq fallback method

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
