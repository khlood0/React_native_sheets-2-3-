import {
  Keyboard,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { TaskInputField } from "./components/TaskInputField";
import { TaskItem } from "./components/TaskItem";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  };
  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((val, idx) => idx != deleteIndex));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}> ToDo App</Text>

      <TaskInputField addTask={addTask} />

      <ScrollView>
        {tasks.map((task, idx) => {
          return (
            <View key={idx}>
              <TaskItem
                index={idx + 1}
                task={task}
                deleteTask={() => {
                  deleteTask(idx);
                }}
              />
            </View>
          );
        })}
      </ScrollView>

      <View style={styles.btn}>
        <Button
          title="Delete All"
          color={"#E03A3B"}
          onPress={() => {
            setTasks([]);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  heading: {
    marginTop: 40,
    color: "black",
    fontSize: 20,
    fontWeight: "800",
  },
  btn: {
    width: 100,
    borderWidth: 2,
    borderRadius: 25,
    overflow: "hidden",
    margin: 20,
  },
});
