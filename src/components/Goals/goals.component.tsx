import {useFocusEffect} from '@react-navigation/core';
import React, {useCallback, useState} from 'react';
import {GoalCategoryData} from '../../Constants/constants';
import {deleteData, getData, updateGoalCheck} from '../../Constants/storage';
import {Goal} from '../../models/GoalModel';
import GoalsScreen from './goals.screen';

/**
 * Goals Component
 */
const GoalsComponent = ({navigation}: any) => {
  /**
   * States
   */
  const [data, setData] = useState<Array<Goal>>([]);

  /**
   * Checks for returning data
   */
  const checkReturnData = useCallback(async () => {
    const ArrayGoals = await getData();
    setData(ArrayGoals);
  }, [data]);

  /**
   * Handles FAB Press
   */
  const handleFABPress = () => {
    navigation.navigate('AddGoal');
  };

  /**
   * Delete the selected goal
   */
  const onGoalDelete = (goalId: number) => {
    deleteData(goalId);
    checkReturnData();
  };

  /**
   * Change the state of the goal check
   */
  const onGoalCheck = (goalId: number) => {
    updateGoalCheck(goalId);
    checkReturnData();
  };

  /**
   * Calls when screen focus
   */
  useFocusEffect(
    useCallback(() => {
      checkReturnData();
    }, [checkReturnData]),
  );

  /**
   * Render
   */
  return (
    <GoalsScreen
      data={data}
      categoryList={GoalCategoryData}
      onFABPress={() => handleFABPress()}
      onItemChangeDone={(goalId: number) => onGoalCheck(goalId)}
      onItemDelete={(goalId: number) => onGoalDelete(goalId)}
    />
  );
};

export default GoalsComponent;
