import React from 'react';
import {FlatList} from 'react-native';
import {List, Text} from 'react-native-paper';

/**
 * Props
 */
interface Props {
  data: any;
}

/**
 * Goals Screen
 */
const GoalsScreen = (props: Props) => {
  /**
   * Shows the list item view
   */
  const ListItemView = ({item}) => {
    /**
     * Render
     */
    return (
      <List.Item
        title={item.title}
        description="Item description"
        left={props => <List.Icon {...props} icon="folder" />}
      />
    );
  };

  /**
   * Render
   */
  return (
    <>
      <FlatList
        data={props.data}
        renderItem={ListItemView}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default GoalsScreen;
