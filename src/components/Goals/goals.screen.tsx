import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Checkbox, FAB, List, Text, Title} from 'react-native-paper';
import {Goal} from '../../models/GoalModel';

/**
 * Props
 */
interface Props {
  data: Array<Goal>;
  categoryList: Array<any>;
  onFABPress: () => void;
  onItemChangeDone: (id: number) => void;
  onItemDelete: (id: number) => void;
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
        left={_props => (
          <>
            <Checkbox
              status={item.isDone ? 'checked' : 'unchecked'}
              onPress={() => {
                props.onItemChangeDone(item.id);
              }}
            />
            <List.Icon
              {..._props}
              icon={
                item.category === -1
                  ? 'folder'
                  : getCategoryList()[item.category].icon
              }
            />
          </>
        )}
        right={_props => (
          <TouchableOpacity onPress={() => props.onItemDelete(item.id)}>
            <List.Icon {..._props} icon={'delete'} />
          </TouchableOpacity>
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
      {props.data.length > 0 ? RenderData() : RenderNoData()}
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
