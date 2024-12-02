import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { MyTabs } from "../screens/home";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "../screens/login/login";
import { HomeTabs } from "../screens/homeTabs/homeTabs";
import { MainApp } from "../screens/mainApp/mainApp";

export type RootStackParamList = {
  Login: undefined;
  HomeTabs: undefined;
  MainApp: undefined;
  // Profile: { userId: string };
  // Feed: { sort: 'latest' | 'top' } | undefined;
};

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'HomeTabs'>;
export type NavigationHomeType = HomeProps['navigation'];

export type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type NavigationLoginType = HomeProps['navigation'];

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
    return (
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false}} />
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false}} />
        {/* <Stack.Screen name="SignUp" component={LoginScreen} options={{ headerShown: false}}/> */}
        {/* <Stack.Screen name="Home2" component={Home2} /> */}
      </Stack.Navigator>
    );
  };

export const Navigation = () => (
    <NavigationContainer>
        <RootStack />
    </NavigationContainer>
)
