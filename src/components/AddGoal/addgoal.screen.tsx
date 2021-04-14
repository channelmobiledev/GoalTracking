import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

interface Props {
  onSubmitPress: (goal: string) => void;
}

/**
 * Add goal screen
 */
const AddGoalScreen = (props: Props) => {
  /**
   *
   */
  const [goal, setGoal] = useState<string>('');

  /**
   * Render
   */
  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label="Goal"
        value={goal}
        onChangeText={text => setGoal(text)}
      />
      <Button
        icon="send"
        mode="contained"
        onPress={() => props.onSubmitPress(goal)}>
        Add Goal
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 20,
  },
});

export default AddGoalScreen;
