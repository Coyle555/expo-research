import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function App() {
  const { appName } = Constants.expoConfig.extra;

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 35 }}>{appName}</Text>
    </View>
  );
}
