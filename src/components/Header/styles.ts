import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  headerViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerImageStyle: {
    width: 110,
    resizeMode: 'contain',
  },
  notificationButtonStyle: {
    height: 50,
    width: 50,
    backgroundColor: colors.white,
    borderRadius: 25,
    elevation: 5,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationCountView: {
    position: 'absolute',
    height: 17,
    width: 17,
    backgroundColor: colors.darkRed,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
  },
  notificationCountText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default styles;
