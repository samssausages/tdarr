module.exports = async (args) => {
      // Define the base bitrate per channel from the library variable
      const baseBitratePerChannel = parseInt(args.userVariables.library.bitrate_audio_cutoff);

      // Convert from kilobits to bits
      const baseBitratePerChannelBits = baseBitratePerChannel * 1000;

      // Function to set channel bitrates
      function setChannelBitrate(channelCount) {
          const totalBitrate = baseBitratePerChannelBits * channelCount;
          const variableName = `bitrate_audio_cutoff_${channelCount}`;
          args.variables[variableName] = totalBitrate;
          console.log(`${variableName}: ${totalBitrate} bits`);
      }

      // Set bitrates for different channel configurations
      setChannelBitrate(1);  // For mono
      setChannelBitrate(2);  // For stereo (2-channel)
      setChannelBitrate(6);  // For 5.1 surround sound
      setChannelBitrate(8);  // For 7.1 surround sound

   return {
    outputFileObj: args.inputFileObj,
    outputNumber: 1,
    variables: args.variables,
  };
};
