/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';

const App = () => {


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
