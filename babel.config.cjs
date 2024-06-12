// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo'],
//   };
// };

module.exports = {
  presets: [
    // 'babel-preset-expo',
    '@babel/preset-typescript',
    {
      targets: {
        node: 'current'
      }
    }
  ]
}
