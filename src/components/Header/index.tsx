import { View, Text, Image, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ICONS from '../../asset/icons';
import colors from '../../utils/colors';
import styles from './styles';

interface IProps {
  notificationCount?: number;
  onPressNotification?: () => void;
}

export default function Header({
  notificationCount = 0,
  onPressNotification,
}: IProps) {
  return (
    <SafeAreaView testID='home-header-id' style={styles.headerViewStyle}>
      <StatusBar hidden />
      <Image source={ICONS.SpiritelyLogo} style={styles.headerImageStyle} />
      <TouchableOpacity
        testID='notification-button-id'
        onPress={onPressNotification}
        style={styles.notificationButtonStyle}>
        <View>
          <MaterialCommunityIcons
            name="bell"
            size={30}
            color={colors.primary}
          />
          {notificationCount ? (
            <View testID='notification-count-id' style={styles.notificationCountView}>
              <Text style={styles.notificationCountText}>
                {String(notificationCount)}
              </Text>
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
