This is currently a Beta Version of the next major relase.  It's a total rework.  It works pretty well, but I'm still running into issues here and there, so don't have it delete your files until you test them.

Help me test this by running some files through it and letting me know if something isn't as expected!


What makes my flow unique is that I use Library Variables for the Quality Settings.  This way you can have a library for Low Quality, High Quality, Animation etc.
This way you set your quality settings in the library variables and only need to manage 1 Flow!

This newest version v0.8 has some big improvements.  I added custom JS to calculate things such as video/audio bitrates and cutoffs.  This means you need to configure fewer variables and can essentially define:  If the file is 1080p and video is over 4000k, then encode it to 2000k.


Currently setup for nvenc, but could be converted.


I broke it down into 5 steps/flows:

1 - Input Sort & Tag  (Tags files that may need special processing down the stack)

2 - Prep & Clean (Standardizes the File so it is less likely to fail encoding later)

3 - Audio (Clean audio and encode to Opus, if wanted)

4 - Video (Define desired bitrate by resolution, fall back on cq)

5 - Save File (will also add notifications to this later)

V0.7 has been tested and works really well.  But I consider obsolete now and not as user friendly and needs more variables defined.


V0.8 is new and I consider Beta, as I haven't extensively tested it.  I fed 100 files into it and it worked without issues on 94 of them.  The others failed to process due to size issues.  Two moved without encoding and I haven't looked into why yet.
I need people to run some files through it and let me know what isn't functioning as expected.
