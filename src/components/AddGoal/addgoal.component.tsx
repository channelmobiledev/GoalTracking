import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {GoalCategoryData} from '../../Constants/constants';
import {getData, storeData} from '../../Constants/storage';
import {Goal} from '../../models/GoalModel';
import AddGoalScreen from './addgoal.screen';

/**
 * Add goal component
 */
const AddGoalComponent = ({navigation, route}: any) => {
  /**
   * States
   */
  const [loading, setLoading] = useState<boolean>(false);
  const [categoryId, setCategoryId] = useState<number>(-1);

  /**
   * Handles when user returns to this screen from category
   */
  const handleOnGoingBackCategory = () => {
    if (route.params?.id !== undefined) {
      setCategoryId(route.params?.id);
    }
  };

  /**
   * Add value to the current goal array
   */
  const addToGoalArray = async (
    title: string,
    categoryId: number,
    description: string,
  ) => {
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
       * Get the new goal ID
       */
      let newId = currentGoalArray.length > 0 ? currentGoalArray[0].id + 1 : 0;

      /**
       * Create a new Goal
       */
      const goalValue: Goal = {
        id: newId,
        title,
        description,
        category: categoryId,
      };

      /**
       * Save the new Goal into the Goal Array
       */
      currentGoalArray.unshift(goalValue);
    } else {
      /**
       * Create a new Goal with the default id
       */
      const goalValue: Goal = {id: 0, title, description, category: categoryId};
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
   * Show Category Component
   */
  const showCategoryComponent = () => {
    navigation.navigate('GoalCategory');
  };

  /**
   * Returns data from the form
   */
  const handleOnResult = (goal: string, description: string) => {
    addToGoalArray(goal, categoryId, description);
  };

  /**
   * Calls when screen focus
   */
  useFocusEffect(
    useCallback(() => {
      handleOnGoingBackCategory();
    }, [handleOnGoingBackCategory]),
  );

  /**
   * Render
   */
  return (
    <>
      <AddGoalScreen
        loading={loading}
        categoryList={GoalCategoryData}
        selectedCategory={categoryId}
        showCategoryList={() => showCategoryComponent()}
        onSubmitPress={(goal: string, description: string) =>
          handleOnResult(goal, description)
        }
      />
    </>
  );
};

export default AddGoalComponent;
