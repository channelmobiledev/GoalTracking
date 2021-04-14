import React from 'react';
import AddGoalScreen from './addgoal.screen';

/**
 * Add goal component
 */
const AddGoalComponent = ({navigation}: any) => {
  /**
   * Returns data from the form
   */
  const handleOnResult = (goal: string) => {
    navigation.navigate('Home', {goal: goal});
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
