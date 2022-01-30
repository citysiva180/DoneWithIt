import { StatusBar } from "expo-status-bar";
import { View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "baseline", //main axis is horizontal axis
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 300,
          // alignSelf: "flex-start",
        }}
      ></View>
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 200,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      ></View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
