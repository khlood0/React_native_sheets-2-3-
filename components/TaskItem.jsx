import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const TaskItem = (props) => {
  return (
    <View>
      <View>
        <Text> idx : {props.index}</Text>
      </View>
      <View>
        <Text> Task text : {props.task}</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          props.deleteTask();
        }}
      >
        <MaterialIcons name="delete" size={40} color="#F28536" />
      </TouchableOpacity>
    </View>
  );
};
