import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, StatusBar, Text, useColorScheme, View } from 'react-native';

export const Home2 = () => {
    // const navigation = useNavigation();
    // const onPress = () => navigation.navigate('Home')
    const backgroundStyle = {
      backgroundColor: 'white',
    };
    return (
        <View>
            <StatusBar
            // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
            />
            <Text>
            hola22
            </Text>
            {/* <Button title='click' onPress={onPress}/> */}
        </View>
    )
  }