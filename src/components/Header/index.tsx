import {View, Text, Image, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
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
    <SafeAreaView style={styles.headerViewStyle}>
      <StatusBar hidden />
      <Image source={ICONS.SpiritelyLogo} style={styles.headerImageStyle} />
      <TouchableOpacity
        onPress={onPressNotification}
        style={styles.notificationButtonStyle}>
        <View>
          <MaterialCommunityIcons
            name="bell"
            size={30}
            color={colors.primary}
          />
          {notificationCount ? (
            <View style={styles.notificationCountView}>
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
