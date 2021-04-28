import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  ActivityIndicator,
  Button,
  Modal,
  Portal,
  Provider,
  Text,
  TextInput,
} from 'react-native-paper';
import {theme} from '../../Constants/constants';

interface Props {
  loading: boolean;
  showCategoryList: () => void;
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
  const [description, setDescription] = useState<string>('');

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
          dismissable={false}
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
    <ScrollView style={styles.container}>
      <LoadingAnimation />
      <View style={styles.containerForm}>
        <TextInput
          style={styles.formFieldStyle}
          mode="outlined"
          label="Goal"
          value={goal}
          onChangeText={text => setGoal(text)}
        />
        <Button
          style={styles.formFieldStyle}
          icon="help-circle"
          mode="contained"
          onPress={() => props.showCategoryList()}>
          Category
        </Button>
        <TextInput
          style={styles.formFieldStyle}
          mode="outlined"
          multiline
          label="Description"
          value={description}
          onChangeText={text => setDescription(text)}
        />
      </View>
      <View style={styles.containerConfirm}>
        <Button
          icon="send"
          mode="contained"
          onPress={() => props.onSubmitPress(goal)}>
          Add Goal
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 0,
    paddingHorizontal: 20,
  },
  containerModal: {backgroundColor: 'transparent', padding: 20},
  containerForm: {
    flex: 1,
  },
  containerConfirm: {
    marginVertical: 20,
  },
  formFieldStyle: {
    marginVertical: 5,
  },
});

export default AddGoalScreen;
