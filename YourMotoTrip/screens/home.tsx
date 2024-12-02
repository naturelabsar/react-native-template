import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, SafeAreaView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { useDispatch, useSelector } from '../store/hooks';
import { increment } from '../store/slices/counterSlice';
import { NavigationHomeType } from '../navigation/navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home2 } from './home2';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });

export const Home = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const navigation = useNavigation<NavigationHomeType>();
    const onPress = () => navigation.openDrawer();
    const backgroundStyle = {
      backgroundColor: 'white',
    };
    const dispatch = useDispatch();
    const value = useSelector(state => state.counter.value)
    return (
        <View>
            <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
            />
            <Text>
            hola 12312
            </Text>
            <Text>
              value: {value}
            </Text>
            <Button title='click' onPress={onPress}/>
            <Button title={'increment'} onPress={() => dispatch(increment())}/>
        </View>
    )
  }


const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        options={{ 
          tabBarLabel: 'Home', 
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" />
          ),}} 
          name="Home" 
          component={Home} 
        />
      <Tab.Screen name="Profileasd" component={Home2} />
      <Tab.Screen name="Map" component={Home2} />
      <Tab.Screen name="Contacts" component={Home2} />
    </Tab.Navigator>
  );
}
