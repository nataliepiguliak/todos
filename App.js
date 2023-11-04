import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import { PaperProvider, Button, Text } from 'react-native-paper';
import { useState } from 'react';

import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [todos, setTodos] = useState([]);

  function startAddTodoHandler() {
    setModalIsVisible(true);
  }

  function endAddTodoHandler() {
    setModalIsVisible(false);
  }

  function addTodoHandler(enteredTodoText) {
    setTodos((currentTodos) => [
      ...currentTodos,
      { text: enteredTodoText, id: Math.random().toString() },
    ]);
    endAddTodoHandler();
  }

  function deleteTodoHandler(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text variant="titleMedium">Todos</Text>
        </View>
        <TodoInput
          onAddTodo={addTodoHandler}
          visible={modalIsVisible}
          onCancel={endAddTodoHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={todos}
            renderItem={(itemData) => {
              return (
                <TodoItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteTodoHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
        <Button
          icon="plus"
          mode="contained"
          buttonColor="#F7E6D3"
          textColor="#000000"
          onPress={startAddTodoHandler}
          style={styles.addButton}
        >
          Add todo
        </Button>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    justifyContent: 'center',
  },
  header: {
    flex: 0.8,
    alignItems: 'center',
  },
  goalsContainer: {
    flex: 12,
    paddingHorizontal: 16,
  },
  addButton: {
    flex: 1,
    height: 60,
    borderRadius: 0,
  },
});
