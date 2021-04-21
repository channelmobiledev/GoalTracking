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

    console.log('DEBUG jsonGoalArray: ' + jsonGoalArray);
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
    return jsonGoalArray != null ? JSON.parse(jsonGoalArray) : null;
  } catch (e) {
    console.log('DEBUG Error getData: ' + JSON.stringify(e));
    throw new Error('Error retrieving goal array: ' + e);
  }
};
