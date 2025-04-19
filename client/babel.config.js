module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': './', // This sets '@' to the project root
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
      },
    ],
  ],
};
