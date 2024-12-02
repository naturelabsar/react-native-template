import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    display: 'flex',
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
})

export const MapScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <Text>
          Map
        </Text>
      </View>
    </SafeAreaView>
  )
}