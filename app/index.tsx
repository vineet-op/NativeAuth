import { StyleSheet, View } from "react-native";
import RegisterScreen from "./Register";



export default function Index() {


  return (
    <View style={styles.container}>
      <RegisterScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f0f0f0"
  },
});