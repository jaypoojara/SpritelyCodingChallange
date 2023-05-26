// ./jest/setup.js
import 'react-native-gesture-handler/jestSetup';
jest.mock(
  'react-native-vector-icons/MaterialCommunityIcons',
  () => 'MaterialCommunityIcons',
);
jest.mock('react-native-linear-gradient', () => 'LinearGradient');
