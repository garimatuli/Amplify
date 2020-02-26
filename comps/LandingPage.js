import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TouchableHighlight,
  StyleSheet
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  centerView: {
    alignItems: "center",

    paddingBottom: "15%"
  },
  signUpView: {
    alignItems: "center"
  },
  signInView: {
    alignItems: "center"
  },
  signInText: {
    color: "#68a0cf",
    fontSize: 20,
    margin: "5%",
    fontWeight: "bold"
  },
  firstText: {
    color: "#000000",
    fontSize: 35,
    fontWeight: "400"
  },
  secondText: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "400"
  },
  signUpButton: {
    width: "70%",
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#68a0cf",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#fff"
  },
  signUpText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20
  }
});

function LandingPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.centerView}>
        <Text style={styles.firstText}>Eve's Appetite for Cure</Text>
        <Text style={styles.secondText}>
          Connect with someone who really know, how you feel?
        </Text>
      </View>
      <View style={styles.signUpView}>
        <TouchableHighlight
          underlayColor="#D4E6F1"
          style={styles.signUpButton}
          onPress={() => navigation.navigate("SignUpProgress")}
        >
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.signUpView}>
        <Text
          style={styles.signInText}
          onPress={() => navigation.navigate("SignIn")}
        >
          Already a member, Sign In!
        </Text>
      </View>
    </View>
  );
}

export default LandingPage;
