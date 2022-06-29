/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';


const Biometric = async () => {
  const authenticateAsync = await LocalAuthentication.authenticateAsync();
  if (authenticateAsync.success === true) {
  }
}
const App = () => {
  useEffect(() =>{
    Biometric();
  }, [])

  return (
    <SafeAreaView style={{ flex: 2, backgroundColor: 'white' }}>
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ alignItems: 'center' }}>
          React native project
        </Text>
        
      </View>
    </SafeAreaView>
  );
};


export default App;
