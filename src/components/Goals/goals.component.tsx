import {useFocusEffect} from '@react-navigation/core';
import React, {useCallback, useState} from 'react';
import {GoalCategoryData} from '../../Constants/constants';
import {deleteData, getData} from '../../Constants/storage';
import GoalsScreen from './goals.screen';

/**
 * Goals Component
 */
const GoalsComponent = ({navigation}: any) => {
  /**
   * States
   */
  const [data, setData] = useState<Array<any>>([]);

  /**
   * Checks for returning data
   */
  const checkReturnData = useCallback(async () => {
    const ArrayGoals = await getData();
    setData(ArrayGoals);
  }, []);

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
    // TODO add loading and confirmation
    // TODO force screen update
    deleteData(goalId);
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
      onItemDelete={(goalId: number) => onGoalDelete(goalId)}
    />
  );
};

export default GoalsComponent;
