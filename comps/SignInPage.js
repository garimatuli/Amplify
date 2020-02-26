import React, { Component, useState, useEffect } from "react";

import {
  StyleSheet,
  View,
  SafeAreaView,
  Button,
  ScrollView,
  TextInput,
  TouchableHighlight,
  Text,
  KeyboardAvoidingView,
  Alert,
  Image,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";

import FloatingLabelInput from "./common/FloatingLabelInput";

import { LoginButton, AccessToken } from "react-native-fbsdk";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import GoogleSign from "./common/GoogleSign";

import Disclosure from "./common/Disclosure";

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes
} from "@react-native-community/google-signin";

function SignInPage({ navigation }) {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [display, setDisplay] = useState(false);

  function handleSignIn() {
    setUser({ user });
  }

  function handleDisclosure() {
    setDisplay({ display: true });
  }

  function signInBody() {
    return (
      <>
        <FloatingLabelInput
          label="Email"
          value={user.email}
          onChangeText={text => setUser({ ...user, email: text })}
        />

        <FloatingLabelInput
          label="Password"
          secureTextEntry={true}
          value={user.password}
          onChangeText={text => setUser({ ...user, password: text })}
        />

        <Text style={styles.signInText} onPress={() => navigation.navigate("Disclosure")}>
          By Clicking Sign In, you agree to Terms and Privacy
        </Text>

        <Disclosure display={display} data="Abhinav" />

        <TouchableHighlight
          underlayColor="#D4E6F1"
          style={styles.signInButton}
          disabled={!user.email}
          onPress={handleSignIn}
        >
          <Text style={styles.signInTe}>Sign In</Text>
        </TouchableHighlight>

        <LoginButton
          onLoginFinished={(error, result) => {
            if (error) {
              console.log("login has error: " + result.error);
            } else if (result.isCancelled) {
              console.log("login is cancelled.");
            } else {
              console.log("It came in facebook login");
              AccessToken.getCurrentAccessToken().then(data => {
                console.log(data.accessToken.toString());
              });
            }
          }}
          onLogoutFinished={() => console.log("logout.")}
        />
        <GoogleSign navigation={navigation} />
      </>
    );
  }

  return (
    <View style={styles.signInContainer}>
      <View style={styles.signInView}>
        <Text style={styles.firstText}>Eve's Appetite for Cure</Text>
        <Text style={styles.secondText}>
          Connect with someone who really know, how you feel?
        </Text>
      </View>
      <View style={styles.signInBodyView}>{signInBody()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  signInContainer: {
    flex: 1,
    justifyContent: "center"
  },
  signInView: {
    paddingTop: "10%",
    alignItems: "center",
    height: "20%"
  },
  signInBodyView: {
    alignItems: "center",
    height: "80%"
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
  signInButton: {
    width: "50%",
    marginRight: 10,
    marginLeft: 10,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: "#68a0cf",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#fff"
  },
  signInTe: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20
  },
  imageStyle: {
    width: 200,
    height: 300,
    resizeMode: "contain"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 300,
    marginTop: 30
  },
  signInText: {
      color: "#68a0cf",
      fontSize: 20,
      margin: "5%",
      fontWeight: "bold"
    }
});

export default SignInPage;
