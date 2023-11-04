import { StyleSheet, View, Text, Pressable } from 'react-native';

function TodoItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#dddddd' }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default TodoItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#D2D6C7',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: '#120438',
    padding: 8,
  },
});
