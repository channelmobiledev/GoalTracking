import AsyncStorage from '@react-native-async-storage/async-storage';
import {Goal} from '../models/GoalModel';

/**
 * Storage keys
 */
const KEY_GOAL_ARRAY = 'GoalArray';

/**
 * Save the Goal array in storage
 */
export const storeData = async (goalArray: Array<Goal>) => {
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
export const getData = async (): Promise<Goal[]> => {
  try {
    const jsonGoalArray: string | null = await AsyncStorage.getItem(
      KEY_GOAL_ARRAY,
    );
    return jsonGoalArray != null ? JSON.parse(jsonGoalArray) : [];
  } catch (e) {
    console.log('DEBUG Error getData: ' + JSON.stringify(e));
    throw new Error('Error retrieving goal array: ' + e);
  }
};

/**
 * Delete a Goal from storage
 */
export const deleteData = async (id: number) => {
  try {
    // Get stored goals
    let goalArray = await getData();

    // Check if the id exists on goals
    const indexToDelete = goalArray.findIndex(goal => goal.id === id);

    // Check if goal exists, if not end operation
    if (indexToDelete === -1) {
      // TODO Make this better :V
      return;
    }

    // Delete the goal from the goals list
    goalArray.splice(indexToDelete, 1);

    // Save goal list
    await storeData(goalArray);
  } catch (e) {
    console.log('DEBUG Error deleteData: ' + JSON.stringify(e));
    throw new Error('Error delete goal data: ' + e);
  }
};
