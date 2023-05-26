import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TYPE } from '../../utils/enum';
import colors from '../../utils/colors';
import styles from './styles';

interface IProps {
  name: string;
  onPress?(name: string): void;
}

export default function FeaturesItem({ name, onPress }: IProps) {
  const getItemIcon = (type: string) => {
    switch (type) {
      case TYPE.NOTICEBOARD:
        return (
          <LinearGradient
            testID={name}
            colors={[colors.darkPurple, colors.lightPurple]}
            style={styles.itemGradientView}>
            <Ionicons
              name="md-newspaper-outline"
              size={30}
              color={colors.white}
            />
          </LinearGradient>
        );

      case TYPE.ACTIVITIES:
        return (
          <LinearGradient
            testID={name}
            colors={[colors.darkGreen, colors.lightGreen]}
            style={styles.itemGradientView}>
            <MaterialIcons name="directions-walk" size={30} color={colors.white} />
          </LinearGradient>
        );
      case TYPE.CALENDAR:
        return (
          <LinearGradient
            testID={name}
            colors={[colors.darkAquamarine, colors.lightAquamarine]}
            style={styles.itemGradientView}>
            <MaterialIcons
              name="calendar-today"
              size={30}
              color={colors.white}
            />
          </LinearGradient>
        );
      case TYPE.MAINTENANCE:
        return (
          <LinearGradient
            testID={name}
            colors={[colors.darkBrownYellow, colors.lightBrownYellow]}
            style={styles.itemGradientView}>
            <Ionicons name="md-hammer-sharp" size={30} color={colors.white} />
          </LinearGradient>
        );
      case TYPE.SETTINGS:
        return (
          <LinearGradient
            testID={name}
            colors={[colors.darkRed, colors.lightRed]}
            style={styles.itemGradientView}>
            <Ionicons
              name="md-settings-outline"
              size={30}
              color={colors.white}
            />
          </LinearGradient>
        );

      default:
        return null;
    }
  };

  const stringFormat = (string: string) => {
    return string?.charAt(0).toUpperCase() + string?.slice(1);
  };

  return (
    <TouchableOpacity
      testID='features-item-id'
      onPress={() => onPress && onPress(name)}
      style={styles.itemView}>
      {getItemIcon(name)}
      <Text style={styles.itemText}>{stringFormat(name)}</Text>
    </TouchableOpacity>
  );
}
