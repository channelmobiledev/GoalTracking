import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import GoalsComponent from './src/components/Goals/goals.component';
import ProfileComponent from './src/components/Profile/profile.component';
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from './src/Constants/constants';
import {createStackNavigator} from '@react-navigation/stack';
import AddGoalComponent from './src/components/AddGoal/addgoal.component';
import GoalCategoryComponent from './src/components/GoalCategory/goalcategory.component';

/**
 * Navigation Stacks
 */
const GoalsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

/**
 * Handles the Goals stack navigation
 */
const GoalsStackHandler = () => {
  /**
   * Render
   */
  return (
    <GoalsStack.Navigator>
      <GoalsStack.Screen
        name="Home"
        component={GoalsComponent}
        options={{headerShown: false}}
      />
      <GoalsStack.Screen
        name="AddGoal"
        component={AddGoalComponent}
        options={{title: 'Add a new Goal'}}
      />
      <GoalsStack.Screen
        name="GoalCategory"
        component={GoalCategoryComponent}
        options={{title: 'Select a category'}}
      />
    </GoalsStack.Navigator>
  );
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
        component={GoalsStackHandler}
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
