module.exports = async (args) => {
  // Define lossless audio codecs
  const losslessCodecs = ["pcm_s16le", "pcm_s24le", "pcm_f32le"];
  
  // Check if the audio codec of the file is in the lossless list
  const streams = args.inputFileObj.ffProbeData.streams || [];
  let isLossless = false;

  for (const stream of streams) {
    if (stream.codec_type === "audio" && losslessCodecs.includes(stream.codec_name.toLowerCase())) {
      isLossless = true;
      break;
    }
  }

  // Tag the file as `is_audio_lossless` if it meets the condition
  args.variables.is_audio_lossless = isLossless;

  return {
    outputFileObj: args.inputFileObj,
    outputNumber: 1, // Continue the workflow
    variables: args.variables, // Pass the updated variables
  };
};
