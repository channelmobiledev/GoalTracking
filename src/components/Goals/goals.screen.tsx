import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {FAB, List, Text, Title} from 'react-native-paper';
import {Goal} from '../../models/GoalModel';

/**
 * Props
 */
interface Props {
  onFABPress: () => void;
  categoryList: Array<any>;
  data: Array<Goal>;
}

/**
 * Goals Screen
 */
const GoalsScreen = (props: Props) => {
  /**
   * Return the category list
   */
  const getCategoryList = () => {
    return props.categoryList;
  };

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
        left={props => (
          <List.Icon
            {...props}
            icon={
              item.category === -1
                ? 'folder'
                : getCategoryList()[item.category].icon
            }
          />
        )}
      />
    );
  };

  /**
   * Renders if there's data
   */
  const RenderData = () => {
    return (
      <FlatList
        data={props.data}
        renderItem={ListItemView}
        keyExtractor={item => item.id.toString()}
      />
    );
  };

  /**
   * Renders if there's no data
   */
  const RenderNoData = () => {
    return (
      <View style={styles.containerNoData}>
        <Title>No goals added</Title>
      </View>
    );
  };

  /**
   * Render
   */
  return (
    <>
      {props.data ? RenderData() : RenderNoData()}
      <FAB style={styles.fab} icon="plus" onPress={() => props.onFABPress()} />
    </>
  );
};

const styles = StyleSheet.create({
  containerNoData: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default GoalsScreen;
