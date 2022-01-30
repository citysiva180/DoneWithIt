import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  Image,
  Button,
  Alert,
} from "react-native";
// import logo from "./assets/ShivthePhotographer.png";
//View --> UIView
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
export default function App() {
  const handlePress = () => console.log("Text Pressed");
  console.log(useDimensions());
  const { landscape } = useDeviceOrientation(); //Helps to dynamically add the landascape and other modes!
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: landscape ? "100%" : "30%",
        }}
      ></View>
    </SafeAreaView>
  );
}
// resizeMode="contain"
//View - Helps in viewing details
//Text Component - DisplaysText component
//The styles variable utilizes the create function to add styles to your app.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // backgroundImage: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
    // alignItems: "center",
    // justifyContent: "center",
  },
  logo: {
    width: 50,
    height: 50,
  },
});

// backgroundColor: #21D4FD;
// backgroundImage: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
{
  /* <Text numberOfLines={1} onPress={() => console.log("Text Clicked")}>
        The only possible way for the victims of phishing to find a remedy is to
        report at the police station where the crime has been committed. Due to
        the lack of technology, the Indian police department is not
        well-equipped to solve these identity theft-related crimes.
      </Text>
      <TouchableHighlight onPress={() => console.log("Image Tapped")}>
        <Image
          // blurRadius={10}
          fadeDuration={5000}
          source={{
            width: 200,
            height: 200,
            uri: "https://picsum.photos/200",
          }}
        />
      </TouchableHighlight>
      <Button
        title="click me"
        onPress={() => console.log("Button Pressed")}
      ></Button>
      <Button
        color="black"
        title="click me"
        onPress={() => alert("Button Pressed")}
      ></Button>
      <Button
        color="green"
        title="click me"
        onPress={() =>
          Alert.alert("This is a prompt Button", "Eat Pizza?", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") },
          ])
        }
      ></Button>
      <Button
        color="purple"
        title="click me"
        onPress={() =>
          Alert.prompt("This is a prompt Button", "Eat Pizza?", (text) =>
            console.log(text)
          )
        }
      ></Button>

      <StatusBar style="auto" /> */
}

// DoneWithIt is a react-native mobile App which lists down your to-dos and helps you manage your day to day activities. Its part of an online course for react native and the end project will have a production level react native product.
