import React from "react";
import { ImageBackground, View, StyleSheet, Image, Text } from "react-native";
function WelcomeScreem(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.loginButton}
          source={require("../assets/icon.png")}
        ></Image>
      </View>
      <Text>Sell what you don't Need</Text>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    alignItems: "center",
    top: 70,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
});

export default WelcomeScreem;
