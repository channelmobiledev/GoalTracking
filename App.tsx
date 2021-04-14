import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import GoalsComponent from './src/components/Goals/goals.component';
import ProfileComponent from './src/components/Profile/profile.component';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

/**
 * Navigation Stacks
 */
const Tab = createMaterialBottomTabNavigator();
const theme = {
  ...DefaultTheme,
  roundness: 2,
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#009688',
    accent: '#00BCD4',
    LightPrimary: '#B2DFDB',
    DarkPrimary: '#00796B',
    text: '#212121',
    textPrimary: '#FFFFFF',
    secondaryText: '#757575',
    divider: '#BDBDBD',
  },
};

/**
 * Navigation Component
 */
const Navigation = () => {
  /**
   * Render
   */
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Goals"
        component={GoalsComponent}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="death-star" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileComponent}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

/**
 * Main Component
 */
const App = () => {
  /**
   * Render
   */
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <SafeAreaView style={styles.container}>
          <View style={styles.navigationContainer}>
            <Navigation />
          </View>
        </SafeAreaView>
      </NavigationContainer>
    </PaperProvider>
  );
};

/**
 * Styles
 */
const styles = StyleSheet.create({
  container: {flex: 1},
  navigationContainer: {flex: 1},
});

export default App;
