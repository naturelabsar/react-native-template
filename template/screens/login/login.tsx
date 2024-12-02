import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationLoginType } from '../../navigation/navigation';
import { useDispatch } from '../../store/hooks';
import { setName } from '../../store/slices/userSlice';

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'black',
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around'
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontWeight: 700,
    letterSpacing: 1,
    fontSize: 20
  },
  inputContainer: {
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 30,
    display: 'flex',
    gap: 10
  },
  input: {
    height: 50,
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  mainButton: {
    backgroundColor: 'blue',
    borderRadius: 8,
    borderWidth: 1,
    elevation: 5,
    borderColor: 'white',
    padding: 10,
    width: '50%',
  },
  footer: {
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})

export const LoginScreen = () => {
  const navigation = useNavigation<NavigationLoginType>();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [hidePassword, setHidePassword] = useState(true);
  const dispatch = useDispatch();
  const handleSignIn = () => {
    if(username && password) {
      username && dispatch(setName(username));
      //navigation.navigate('HomeTabs')
      navigation.navigate('MainApp')
    } else {
      console.log('User invalid');
    }
  }
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          Login
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          autoFocus
          style={styles.input}
          onChangeText={setUsername}
          placeholder='Username'
          textContentType='username'
          // placeholderTextColor={'red'}
        />
        <View style={{ display: 'flex', flexDirection: 'row'}}>
          <TextInput
            style={[styles.input, {width: '90%'}]}
            onChangeText={setPassword}
            placeholder='Password'
            secureTextEntry={hidePassword}
            textContentType='password'
            // passwordRules={}
          />
          <TouchableOpacity style={{ justifyContent:'center' }} onPress={() => setHidePassword(!hidePassword)}>
            <Text style={{color: 'white', textAlign: 'center'}}>
              EyeIcon
            </Text>
          </TouchableOpacity>

        </View>

       <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.mainButton}
            onPress={handleSignIn}
          >
            <Text style={{color: 'white'}}>
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => {console.log('navigate to Forgot password') }}
          >
            <Text style={{color: 'white', fontSize: 10}}>
              Forgot Password
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('HomeTabs') }>
            <Text style={{color: 'white', fontSize: 14}}>
              Create a new user
            </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}