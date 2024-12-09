This is currently a Beta Version of the next major relase.  It's a total rework.  It works pretty well, but I'm still running into issues here and there, so don't have it delete your files until you test them.

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
