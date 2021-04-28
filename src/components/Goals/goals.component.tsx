import {useFocusEffect} from '@react-navigation/core';
import React, {useCallback, useState} from 'react';
import {getData} from '../../Constants/storage';
import GoalsScreen from './goals.screen';

/**
 * Goals Component
 */
const GoalsComponent = ({route, navigation}: any) => {
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

  useFocusEffect(
    useCallback(() => {
      checkReturnData();
    }, [checkReturnData]),
  );

  /**
   * Render
   */
  return <GoalsScreen data={data} onFABPress={() => handleFABPress()} />;
};

export default GoalsComponent;
