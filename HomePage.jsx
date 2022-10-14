import { View, Text, Button, StyleSheet} from "react-native";

export const HomePage = ({ navigation }) => {
  return (
    <View>
      <Text>Hello in Home Page</Text>
      <Button  color="#F28536"
        title="Go to Page 1"
        onPress={() => {
        navigation.navigate("Page1");
        }}
      />

      <Button  color="#F28536"
        title="Open Camera Component"
        onPress={() => {
          navigation.navigate("MyCamera");
        }}
      />

      <Button color="#F28536"
        title="Open img PICker"
        onPress={() => {
          navigation.navigate("img");
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
   
  },
  btn: {
    backgroundColor: "#F28536",
    width: 50,
    height: 50,
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
