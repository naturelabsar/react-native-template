import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, SafeAreaView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { useDispatch, useSelector } from '../../store/hooks';
import { increment } from '../../store/slices/counterSlice';
import { NavigationHomeType } from '../../navigation/navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home2 } from '../home2';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MapScreen } from '../map/map';

export const Home = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const navigation = useNavigation<NavigationHomeType>();
    // TODO: Fix typescript openDrawer
    const onPress = () => navigation.openDrawer();
    const backgroundStyle = {
      backgroundColor: 'white',
    };
    const dispatch = useDispatch();
    const value = useSelector(state => state.counter.value)
    const name = useSelector(state => state.user.name)
    return (
        <View>
            <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
            />
            <Text>
              hola {name}
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

export const HomeTabs = () => {
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
      <Tab.Screen name="Map" component={MapScreen}
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <Icon name="google-maps" />
          ),}} />
      <Tab.Screen name="Contacts" component={Home2} 
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <Icon name="contacts" />
          ),}}
      />
    </Tab.Navigator>
  );
}
