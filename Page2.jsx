import { View, Text, Button } from "react-native";

export const Page2 = ({ navigation }) => {
  return (
    <View>
      <Text> Hello we are in Page 222222 </Text>

      <Button
        title="Goto Page 1"
        onPress={() => {
          navigation.navigate("Page1");
          // console.log(props);
        }}
      />
    </View>
  );
};
