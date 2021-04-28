import React from 'react';
import GoalCategoryScreen from './goalcategory.screen';

/**
 * Goal Category Component
 */
const GoalCategoryComponent = () => {
  /**
   * Category data
   */
  const data = [
    {
      id: 0,
      title: 'Financial',
      icon: 'currency-usd',
    },
    {
      id: 1,
      title: 'Heath',
      icon: 'dumbbell',
    },
    {
      id: 2,
      title: 'Career',
      icon: 'briefcase-outline',
    },
    {
      id: 3,
      title: 'Relationship',
      icon: 'heart-pulse',
    },
    {
      id: 4,
      title: 'Education',
      icon: 'book-open-page-variant',
    },
  ];

  /**
   * Handles category selection
   */
  const handleCategorySelect = (id: number) => {
    // TODO
  };

  /**
   * Render
   */
  return (
    <GoalCategoryScreen
      data={data}
      onCategorySelect={(id: number) => handleCategorySelect(id)}
    />
  );
};

export default GoalCategoryComponent;
