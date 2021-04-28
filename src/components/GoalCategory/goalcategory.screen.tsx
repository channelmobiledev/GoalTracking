import React from 'react';
import {FlatList} from 'react-native';
import {List, Text} from 'react-native-paper';

/**
 * Goal Category Screen
 */
const GoalCategoryScreen = () => {
  /**
   * Category data
   */
  const data = [
    {
      id: 1,
      title: 'Financial',
      icon: 'currency-usd',
    },
    {
      id: 2,
      title: 'Heath',
      icon: 'dumbbell',
    },
    {
      id: 3,
      title: 'Career',
      icon: 'briefcase-outline',
    },
    {
      id: 4,
      title: 'Relationship',
      icon: 'heart-pulse',
    },
    {
      id: 5,
      title: 'Education',
      icon: 'book-open-page-variant',
    },
  ];

  /**
   * Render Item List
   */
  const renderItem = ({item}: any) => (
    <List.Item
      title={item.title}
      onPress={() => {}}
      left={props => <List.Icon {...props} icon={item.icon} />}
    />
  );

  /**
   * Render
   */
  return (
    <>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </>
  );
};

export default GoalCategoryScreen;
