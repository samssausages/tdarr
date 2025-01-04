module.exports = async (args) => {
  const bitrates = {
    "480p": parseInt(args.userVariables.library.bitrate_480p),
    "576p": parseInt(args.userVariables.library.bitrate_576p),
    "720p": parseInt(args.userVariables.library.bitrate_720p),
    "1080p": parseInt(args.userVariables.library.bitrate_1080p),
    "1440p": parseInt(args.userVariables.library.bitrate_1440p),
    "4k": parseInt(args.userVariables.library.bitrate_4k),
    "4k_hdr": parseInt(args.userVariables.library.bitrate_4k_hdr),
  };

  // Check if all bitrates are valid
  for (let resolution in bitrates) {
    if (isNaN(bitrates[resolution]) || bitrates[resolution] <= 0) {
      throw new Error(`Invalid bitrate_${resolution} value. Please ensure it is a positive integer.`);
    }
  }

  let variables = args.variables || {}; // Preserve existing variables/tags

  for (let resolution in bitrates) {
    const bitrate = bitrates[resolution];
    const maxrate = bitrate * 2; // Maxrate is double the bitrate
    const bufsize = maxrate * 2; // Bufsize is double the maxrate
    const cutoff = Math.round(bitrate * 1.15 * 1000); // Cutoff is 115% of the bitrate, rounded to nearest integer. In bps, not kbs
    
    // Store in variables
    variables[`bitrate_${resolution}`] = `${bitrate}k`;
    variables[`maxrate_${resolution}`] = `${maxrate}k`;
    variables[`bufsize_${resolution}`] = `${bufsize}k`;
    variables[`cutoff_${resolution}`] = `${cutoff}`;  // In bps
  }

  return {
    outputFileObj: args.inputFileObj,
    outputNumber: 1,
    variables: variables,
  };
};
