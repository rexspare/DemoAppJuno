module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
      '|@react-native' +
      '|@react-navigation' +
      '|react-native-responsive-screen' +
      '|react-native-vector-icons' +
      '|react-native-iphone-x-helper' +
      '|react-native-keyboard-aware-scroll-view' +
      '|react-redux' +
      ')/)',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
