import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  itemGradientView: {
    height: 60,
    width: 45,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    color: colors.textColor,
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 0.8,
    paddingHorizontal: 20,
  },
  itemView: {
    backgroundColor: colors.white,
    elevation: 5,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    marginBottom: 20,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
