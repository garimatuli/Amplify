import React, { Component, useState, useEffect } from "react";

import {
  StyleSheet,
  View,
  SafeAreaView,
  Button,
  ScrollView,
  TextInput,
  TouchableHighlight,
  Text
} from "react-native";



import FloatingLabelInput from "./common/FloatingLabelInput";

function SignUpPage() {
  const [signUp, setSignUp] = useState(false);
  const [user, setUser] = useState({
    name: "",
    nickName: "",
    email: "",
    birthYear: "",
    cancerType: "",
    password: "",
    actionType: "nameRegistered"
  });

  function handleSignUp() {
    // console.log("Gender Flag is" + genderFlag);
    if (user.actionType === "signUp") {
      const updateduserName = { ...user, actionType: "nameRegistered" };
      setUser(updateduserName);
      console.log(user.actionType);
    }
    if (user.actionType === "nameRegistered") {
      const updateduserNick = { ...user, actionType: "nickName" };
      setUser(updateduserNick);
    }
    if (user.actionType === "nickName") {
      const updateduserYear = { ...user, actionType: "birthYear" };
      setUser(updateduserYear);
    }
    if (user.actionType === "birthYear") {
      const updateduserCancerType = { ...user, actionType: "cancerType" };
      setUser(updateduserCancerType);
    }
    if (user.actionType === "cancerType") {
      const updateduserEmail = { ...user, actionType: "userEmail" };
      setUser(updateduserEmail);
    }
    if (user.actionType === "userEmail") {
      const updateduserPassword = { ...user, actionType: "userPassword" };
      setUser(updateduserPassword);
    }
  }

  function handleFinalUser() {
    console.log("User Name is" + user.name);
    console.log("Nick Name is" + user.nickName);
    console.log("Email is" + user.email);
    console.log("Password is" + user.password);
    console.log("Birth Year is" + user.birthYear);
    console.log("Cancer Type is" + user.cancerType);
  }

  function signUpBody() {
    switch (user.actionType) {
      case "nameRegistered":
        return (
          <>
            {/* <TextInput
              style={styles.signUpText}
              placeholder="Enter Name"
              onChangeText={text => setUser({ ...user, name: text })}
              value={user.name}
           /> */}

            <FloatingLabelInput
              label="Name"
              value={user.name}
              onChangeText={text => setUser({ ...user, name: text })}
            />

            <TouchableHighlight
              underlayColor="#D4E6F1"
              style={styles.signUpButton}
              disabled={!user.name}
              onPress={handleSignUp}
            >
              <Text style={styles.signUpTe}>Continue</Text>
            </TouchableHighlight>
          </>
        );
        break;
      case "nickName":
        return (
          <>
            {/* <TextInput
              style={styles.signUpText}
              placeholder="Enter Nick Name"
              onChangeText={text => setUser({ ...user, nickName: text })}
           value={user.nickName} 
            />*/}
            <FloatingLabelInput
              label="Nick Name"
              value={user.nickName}
              onChangeText={text => setUser({ ...user, nickName: text })}
            />
            <TouchableHighlight
              underlayColor="#D4E6F1"
              style={styles.signUpButton}
              disabled={!user.nickName}
              onPress={handleSignUp}
            >
              <Text style={styles.signUpTe}>Continue</Text>
            </TouchableHighlight>
          </>
        );
        break;
      case "birthYear":
        return (
          <>
            {/* <TextInput
              style={styles.signUpText}
              placeholder="Enter Birth Year"
              onChangeText={text => setUser({ ...user, birthYear: text })}
              value={user.birthYear}
           /> */}

            <FloatingLabelInput
              label="Birth Year"
              value={user.birthYear}
              onChangeText={text => setUser({ ...user, birthYear: text })}
            />

            <TouchableHighlight
              underlayColor="#D4E6F1"
              style={styles.signUpButton}
              disabled={!user.birthYear}
              onPress={handleSignUp}
            >
              <Text style={styles.signUpTe}>Continue</Text>
            </TouchableHighlight>
          </>
        );
        break;
      case "cancerType":
        return (
          <>
            {/* <TextInput
              style={styles.signUpText}
              placeholder="Enter Cancer Type"
              onChangeText={text => setUser({ ...user, cancerType: text })}
              value={user.cancerType}
           /> */}

            <FloatingLabelInput
              label="Cancer Type"
              value={user.cancerType}
              onChangeText={text => setUser({ ...user, cancerType: text })}
            />

            <TouchableHighlight
              underlayColor="#D4E6F1"
              style={styles.signUpButton}
              disabled={!user.cancerType}
              onPress={handleSignUp}
            >
              <Text style={styles.signUpTe}>Continue</Text>
            </TouchableHighlight>
          </>
        );
        break;
      case "userEmail":
        return (
          <>
            {/* <TextInput
              style={styles.signUpText}
              placeholder="Enter Email"
              onChangeText={text => setUser({ ...user, email: text })}
              value={user.email}
           /> */}

            <FloatingLabelInput
              label="Email"
              value={user.email}
              onChangeText={text => setUser({ ...user, email: text })}
            />

            <TouchableHighlight
              underlayColor="#D4E6F1"
              style={styles.signUpButton}
              disabled={!user.email}
              onPress={handleSignUp}
            >
              <Text style={styles.signUpTe}>Continue</Text>
            </TouchableHighlight>
          </>
        );
        break;
      case "userPassword":
        return (
          <>
            {/* <TextInput
              style={styles.signUpText}
              placeholder="Enter Password"
              onChangeText={text => setUser({ ...user, password: text })}
              value={user.password}
           /> */}

            <FloatingLabelInput
              label="Password"
              secureTextEntry={true}
              value={user.password}
              onChangeText={text => setUser({ ...user, password: text })}
            />

            <TouchableHighlight
              underlayColor="#D4E6F1"
              style={styles.signUpButton}
              disabled={!user.password}
              onPress={handleSignUp}
            >
              <Text style={styles.signUpTe}>Continue</Text>
            </TouchableHighlight>
          </>
        );
        break;
      case "signUp":
        return <Button title="Sign Up" onPress={() => handleSignUp()} />;
        break;
      default:
        return <View></View>;
    }
  }

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}
    >
      <View style={styles.signUpContainer}>
        <View style={styles.signUpView}>
          <Text style={styles.firstText}>Eve's Appetite for Cure</Text>
          <Text style={styles.secondText}>
            Connect with someone who really know, how you feel?
          </Text>
        </View>
        <View style={styles.signUpBodyView}>{signUpBody()}</View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  signUpContainer: {
    flex: 1,
    justifyContent: "center"
  },
  signUpView: {
    paddingTop: "15%",
    paddingBottom: "15%",
    alignItems: "center",
    flex: 1
  },
  signUpBodyView: {
    flex: 1,
    alignItems: "center"
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
  signUpText: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "70%",
    marginBottom: 30
  },
  signUpButton: {
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
  signUpTe: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20
  }
});

export default SignUpPage;
