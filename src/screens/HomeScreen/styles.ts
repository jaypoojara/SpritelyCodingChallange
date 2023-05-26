import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  linearGradientStyle: {flex: 1},
  topViewStyle: {
    marginHorizontal: 30,
  },
  notificationCountText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: colors.white,
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
  weatherInfoView: {
    flexDirection: 'row',
    marginBottom: 25,
    alignItems: 'center',
  },
  weatherInfoText: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '500',
    letterSpacing: 0.7,
    marginLeft: 10,
  },
  unreadNotificationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingLeft: 15,
    marginBottom: 20,
  },
  unreadNotificationText: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0.4,
  },
  unreadNotificationCloseIcon: {
    paddingHorizontal: 12,
  },
  titleMessageText: {
    marginVertical: 10,
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 23,
    letterSpacing: 0.7,
  },
  bodyView: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    elevation: 5,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  flatListStyle: {
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    flexGrow: 1,
    paddingTop: 30,
    paddingHorizontal: 30,
  },
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
  loadingMainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
