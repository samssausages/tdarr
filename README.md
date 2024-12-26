NEED:  Need good working ffmpeg commands for CPU encoding and Quick Sync.
I don't use CPU encoding or quick sync, so I need help from people who have experience with it.
I'd like to add it, but I need good examples of ffmpeg commands that are producing good encoding results.

NOTE: Use v0.8
I'm going to update the page to archive 0.7 soon.  But V0.8 is working well and much improved.  I now calculate bitrates using custom JS, to reduce the number of necessary variables, simplifying the process.

## Tdarr One Flow To Rule Them All
Current Flow file:  [V0.7 nevc hevc vbr](https://github.com/samssausages/tdarr/blob/452e79832a65c514d0fdedc81e9febbeffe41464/V2.0%20nevc%20hevc%20vbr)

Current Library Variable Examples: [flow_library_variables_example](https://github.com/samssausages/tdarr/blob/7a9ca823cd345d1167f9d5c64fb1eb7f86a20f57/flow_library_variables_example)

##### I just did a major rework in v0.8.  While it's working well for me, I'm still running into the occasional unexpected behavior and I'm not done testing that yet, so please run some files through it and let me know if something needs looking at!


Very much a work in process, but works great for 90% of the files that I feed into it.  Working on this as I run into errors and fixes.  Suggestions and feedback welcome!

I use Library Variables.  So you can have a Low Quality Libary, High Quality Library, etc.  Then you put the files in your corresponding library folder and go!  Set the variables in the library and they will be imported into this flow.

I'll document the flow when I have more time.  But the flow itself is quite self explanitory.

Goals:
- Allow for multiple libraries, with different settings, but one flow to rule them all
- Strip audio to where only the tracks you want remain
- Ability to lock bitrate to a predictable size, or use cq
- If a lossless audio track exists, encode in opus
- HDR seems to work fine, but could use more testing, I don't trust it yet
- Deinterlace .ts files. (tv broadcasts) Wouldn't mind to find a way to check for interlacing and apply if found.

Current Known Limitations:
- Only works for nvidia
- my command is made for 20 series nvidia and up, as it uses b-frames. Remove them if you have an older card.
- Audio Transcode fails more often that I would like.  Needs work.
- Sometimes DTS MA isn't picked up properly. 
- Not tuned for avi files, needs work.  Just handles audio and skips them.
- No compatibility audio track

![1_ingest_tag](https://github.com/samssausages/tdarr/blob/main/images/1_ingest_tag.png)

![2_prep](https://github.com/samssausages/tdarr/blob/main/images/2_prep.png)

![3_clean_audio](https://github.com/samssausages/tdarr/blob/main/images/3_clean_audio.png)

![4_encode_audio](https://github.com/samssausages/tdarr/blob/main/images/4_encode_audio.png)

![5a_encode_video](https://github.com/samssausages/tdarr/blob/main/images/5a_encode_video.png)

![5b_encode_video_fallback](https://github.com/samssausages/tdarr/blob/main/images/5b_encode_video_fallback.png)

![6_save_file](https://github.com/samssausages/tdarr/blob/main/images/6_save_file.png)

![library_variables](https://github.com/samssausages/tdarr/blob/main/images/library_variables.png)








