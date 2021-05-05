import React from 'react';
import {FlatList} from 'react-native';
import {List} from 'react-native-paper';

/**
 * Props
 */
interface Props {
  data: Array<any>;
  onCategorySelect: (id: number) => void;
}

/**
 * Goal Category Screen
 */
const GoalCategoryScreen = (props: Props) => {
  /**
   * Render Item List
   */
  const renderItem = ({item}: any) => (
    <List.Item
      title={item.title}
      onPress={() => {
        props.onCategorySelect(item.id);
      }}
      left={props => <List.Icon {...props} icon={item.icon} />}
    />
  );

  /**
   * Render
   */
  return (
    <>
      <FlatList
        data={props.data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </>
  );
};

export default GoalCategoryScreen;
