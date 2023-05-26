import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import colors from '../../utils/colors'
import styles from './styles'

export default function LoadingIndicator() {
    return (
        <View>
            <View style={styles.loadingView}>
                <ActivityIndicator
                    color={colors.primary}
                    testID="empty-view-activity-loader"
                />
            </View>
        </View>
    )
}