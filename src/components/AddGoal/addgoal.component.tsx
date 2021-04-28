import React, {useState} from 'react';
import {getData, storeData} from '../../Constants/storage';
import {Goal} from '../../models/GoalModel';
import AddGoalScreen from './addgoal.screen';

/**
 * Add goal component
 */
const AddGoalComponent = ({navigation}: any) => {
  /**
   * States
   */
  const [loading, setLoading] = useState<boolean>(false);

  /**
   * Add value to the current goal array
   */
  const addToGoalArray = async (title: string, description: string) => {
    /**
     * Shows loading animation
     */
    setLoading(true);

    /**
     * Get the stored Goal Array
     */
    let currentGoalArray: Array<Goal> = await getData();

    /**
     * If value exists, then adds the new value to the beguinning. Otherwhise just adds
     */
    if (currentGoalArray) {
      /**
       * Create a new Goal
       */
      const goalValue: Goal = {
        id: currentGoalArray[0].id + 1,
        title,
        description,
      };

      /**
       * Save the new Goal into the Goal Array
       */
      currentGoalArray.unshift(goalValue);
    } else {
      /**
       * Create a new Goal with the default id
       */
      const goalValue: Goal = {id: 0, title, description};
      /**
       * Save the first Goal into the Goal Array
       */
      currentGoalArray = new Array<Goal>(goalValue);
    }

    /**
     * Store data
     */
    await storeData(currentGoalArray);

    /**
     * hides loading animation
     */
    setLoading(false);

    /**
     * Navigate back to the Goal Screen
     */
    navigation.navigate('Home');
  };

  /**
   * Returns data from the form
   */
  const handleOnResult = (goal: string) => {
    // TODO Refactor the description with an actual description
    addToGoalArray(goal, 'TODO');
  };

  /**
   * Render
   */
  return (
    <>
      <AddGoalScreen
        loading={loading}
        onSubmitPress={(goal: string) => handleOnResult(goal)}
      />
    </>
  );
};

export default AddGoalComponent;
