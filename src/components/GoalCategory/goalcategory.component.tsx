import React from 'react';
import {GoalCategoryData} from '../../Constants/constants';
import GoalCategoryScreen from './goalcategory.screen';

/**
 * Goal Category Component
 */
const GoalCategoryComponent = ({route, navigation}: any) => {
  /**
   * Handles category selection
   */
  const handleCategorySelect = (id: number) => {
    navigation.navigate('AddGoal', {
      id: id,
    });
  };

  /**
   * Render
   */
  return (
    <GoalCategoryScreen
      data={GoalCategoryData}
      onCategorySelect={(id: number) => handleCategorySelect(id)}
    />
  );
};

export default GoalCategoryComponent;
