import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Goal} from '../../models/GoalModel';
import AddGoalScreen from './addgoal.screen';

/**
 * Add goal component
 */
const AddGoalComponent = ({navigation}: any) => {
  const KEY_GOAL_ARRAY = 'GoalArray';

  /**
   * Save the Goal array in storage
   */
  const storeData = async (goalArray: Array<Goal>) => {
    try {
      const jsonGoalArray = JSON.stringify(goalArray);
      await AsyncStorage.setItem(KEY_GOAL_ARRAY, jsonGoalArray);
    } catch (e) {
      console.log('DEBUG Error storeData: ' + JSON.stringify(e));
    }
  };

  /**
   * Retrieve the Goal array from storage
   */
  const getData = async (): Promise<Goal[]> => {
    try {
      const jsonGoalArray: string | null = await AsyncStorage.getItem(
        KEY_GOAL_ARRAY,
      );
      return jsonGoalArray != null ? JSON.parse(jsonGoalArray) : null;
    } catch (e) {
      console.log('DEBUG Error getData: ' + JSON.stringify(e));
      throw new Error('Error retrieving goal array: ' + e);
    }
  };

  /**
   * Add value to the current goal array
   */
  const addToGoalArray = async (goal: Goal) => {
    /**
     * Get the stored Goal Array
     */
    let currentGoalArray: Array<Goal> = await getData();

    /**
     * If value exists, then adds the new value to the beguinning. Otherwhise just adds
     */
    if (currentGoalArray) {
      currentGoalArray.unshift(goal);
    } else {
      currentGoalArray = new Array<Goal>(goal);
    }

    /**
     * Store data
     */
    await storeData(currentGoalArray);

    /**
     * Navigate back to the Goal Screen
     */
    navigation.navigate('Home');
  };

  /**
   * Returns data from the form
   */
  const handleOnResult = (goal: string) => {
    // TODO Refactor this bit
    const goalValue: Goal = {id: 1, title: goal, description: 'TODO'};

    addToGoalArray(goalValue);
  };

  /**
   * Render
   */
  return (
    <>
      <AddGoalScreen onSubmitPress={(goal: string) => handleOnResult(goal)} />
    </>
  );
};

export default AddGoalComponent;
