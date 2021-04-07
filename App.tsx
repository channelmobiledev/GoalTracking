import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <StatusBar />
        <Text> Hello :D </Text>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
