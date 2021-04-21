import {useFocusEffect} from '@react-navigation/core';
import React, {useCallback, useState} from 'react';
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
  const checkReturnData = useCallback(() => {
    if (route.params?.goal) {
      setData([
        ...data,
        {
          id: (data.length + 1).toString(),
          title: 'Hello :D 1',
        },
      ]);
    }
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
