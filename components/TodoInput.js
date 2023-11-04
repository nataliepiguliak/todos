import { useState } from 'react';
import { View, TextInput, StyleSheet, Modal } from 'react-native';
import { Button, Icon } from 'react-native-paper';

function TodoInput(props) {
  const [enteredTodoText, setEnteredTodoText] = useState('');

  function todoInputHandler(enteredText) {
    setEnteredTodoText(enteredText);
  }

  function addTodoHandler() {
    props.onAddTodo(enteredTodoText);
    setEnteredTodoText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <View style={styles.icon}>
          <Icon source="checkbox-marked-outline" color="#1D2E28" size={80} />
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Todo..."
          onChangeText={todoInputHandler}
          value={enteredTodoText}
        />
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            textColor="white"
            buttonColor="#78866B"
            style={styles.button}
            onPress={props.onCancel}
          >
            Cancel
          </Button>
          <Button
            mode="contained"
            textColor="#000000"
            buttonColor="#F7E6D3"
            style={styles.button}
            onPress={addTodoHandler}
          >
            Save
          </Button>
        </View>
      </View>
    </Modal>
  );
}

export default TodoInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#AAAF99',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#D2D6C7',
    backgroundColor: '#D2D6C7',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  icon: {
    marginBottom: 24,
  },
});
