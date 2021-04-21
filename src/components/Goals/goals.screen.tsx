import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {FAB, List} from 'react-native-paper';

/**
 * Props
 */
interface Props {
  onFABPress: () => void;
  data: any;
}

/**
 * Goals Screen
 */
const GoalsScreen = (props: Props) => {
  /**
   * Shows the list item view
   */
  const ListItemView = ({item}: any) => {
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
      <FAB style={styles.fab} icon="plus" onPress={() => props.onFABPress()} />
    </>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default GoalsScreen;
