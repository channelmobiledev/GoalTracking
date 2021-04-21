import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  ActivityIndicator,
  Button,
  Modal,
  Portal,
  TextInput,
} from 'react-native-paper';
import {theme} from '../../Constants/constants';

interface Props {
  loading: boolean;
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
   * Loading Animation Component
   */
  const LoadingAnimation = () => {
    /**
     * Render
     */
    return (
      <Portal>
        <Modal
          visible={props.loading}
          contentContainerStyle={styles.containerModal}>
          <ActivityIndicator
            size={'large'}
            animating={true}
            color={theme.colors.accent}
          />
        </Modal>
      </Portal>
    );
  };

  /**
   * Render
   */
  return (
    <View style={styles.container}>
      <LoadingAnimation />
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
  containerModal: {backgroundColor: 'transparent', padding: 20},
});

export default AddGoalScreen;
