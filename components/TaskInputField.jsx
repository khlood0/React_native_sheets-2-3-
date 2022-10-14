import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

export const TaskInputField = (props) => {
  const [task, setTask] = useState();

  const handleAddTask = (value) => {
    props.addTask(value);
    setTask(null);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TextInput
        style={styles.inputField}
        value={task}
        onChangeText={(txt) => {
          setTask(txt);
        }}
        placeholder={"Enter Your Task Here"}
      />

      <TouchableOpacity
        onPress={() => {
          handleAddTask(task);
        }}
      >
        <View style={styles.btn}>
          <MaterialIcons name="keyboard-arrow-down" color="white" size={22} />
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
   
  },
  inputField: {
    width: "80%",
    marginLeft: 10,
    height: 50,
    width:200,
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
  },

  btn: {
    backgroundColor: "#007EE5",
    width: 50,
    height: 50,
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
