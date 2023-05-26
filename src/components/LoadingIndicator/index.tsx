import { View, ActivityIndicator } from 'react-native';
import React from 'react';
import colors from '../../utils/colors';
import styles from './styles';

export default function LoadingIndicator() {
    return (
        <View testID="activity-loader-id" style={styles.loadingView}>
            <ActivityIndicator
                color={colors.primary}
            />
        </View>
    );
}