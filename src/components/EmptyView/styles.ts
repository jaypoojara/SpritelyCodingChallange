import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  emptyViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyViewText: {
    color: colors.textColor,
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0.8,
  },
});

export default styles;
