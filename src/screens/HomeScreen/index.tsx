import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { homeScreenApiAsync } from '../../redux/HomeScreen/action';
import { AppDispatch, RootState } from '../../redux/store';
import { HomeInitialState } from '../../types/redux/homeSlice';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../components/Header';
import Index from '../../components/FeaturesItem';
import Styles from './styles';
import colors from '../../utils/colors';
import ListEmptyComponent from '../../components/EmptyView';
import LoadingIndicator from '../../components/LoadingIndicator';

export default function HomeScreen() {
  const homeReducer = useSelector<RootState>(
    state => state.homeReducer,
  ) as HomeInitialState;

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(homeScreenApiAsync());
  }, [dispatch]);

  useEffect(() => { }, [homeReducer]);

  const getUserCurrentTime = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return 'Good Morning';
    } else if (currentHour < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  const renderContent = () => {
    if (homeReducer.loading) {
      return (
        <View testID='loading-id' style={Styles.loadingMainView}>
          <LoadingIndicator />
        </View>
      );
    }
    return (
      <>
        <View style={Styles.topViewStyle}>
          <Header notificationCount={homeReducer.data?.notficationCount} />

          <Text style={Styles.titleMessageText}>
            {getUserCurrentTime()}, {homeReducer.data?.firstName}
          </Text>

          <View style={Styles.weatherInfoView}>
            <Ionicons name="sunny" size={30} color={colors.darkYellow} />
            <Text style={Styles.weatherInfoText}>
              {homeReducer.data?.weatherHigh || '-'}°C/
              {homeReducer.data?.weatherLow || '-'}°C
            </Text>
          </View>

          {homeReducer.data?.notficationCount ? (
            <TouchableOpacity style={Styles.unreadNotificationButton}>
              <View>
                <MaterialCommunityIcons
                  name="bell"
                  size={30}
                  color={colors.primary}
                />
                <View style={Styles.notificationCountView}>
                  <Text style={Styles.notificationCountText}>
                    {homeReducer.data?.notficationCount}
                  </Text>
                </View>
              </View>
              <Text style={Styles.unreadNotificationText}>
                {homeReducer.data?.notficationCount} unread notifications
              </Text>
              <TouchableOpacity style={Styles.unreadNotificationCloseIcon}>
                <MaterialCommunityIcons
                  name="window-close"
                  size={25}
                  color={colors.primary}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          ) : null}
        </View>

        {/* Body */}
        <View style={Styles.bodyView}>
          <FlatList
            contentContainerStyle={Styles.flatListStyle}
            data={homeReducer.data?.features}
            keyExtractor={item => item}
            renderItem={({ item }) => <Index name={item} />}
            ListEmptyComponent={<ListEmptyComponent />}
          />
        </View>
      </>
    );
  };

  return (
    <LinearGradient
      colors={[colors.primary, colors.secondary]}
      start={{ x: 0.2, y: 0.1 }}
      end={{ x: 0.9, y: 0.4 }}
      style={Styles.linearGradientStyle}>
      {renderContent()}
    </LinearGradient>
  );
}
