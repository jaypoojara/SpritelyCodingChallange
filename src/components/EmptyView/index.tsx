import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';

export default function ListEmptyComponent() {
  return (
    <View style={styles.emptyViewStyle}>
      <Text style={styles.emptyViewText}>Data not found!</Text>
    </View>
  );
}
