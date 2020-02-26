import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";
// import Icon from "react-native-vector-icons/dist/FontAwesome";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Home = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.body}>
            {/* // Header and preheader section */}
            <View style={styles.sectionContainer}>
              {/* <Icon name="user-circle" style={styles.icon} /> */}
              <Text style={styles.sectionTitle}>Pen Pals Sentiment</Text>
              <Text style={styles.sectionDescription}>
                Matching you to those who truly care about you
              </Text>
            </View>
            {/* // Envelope section */}
            <View style={styles.container}>
              <View
                style={styles.item}
                onPress={() => {
                  navigation.navigate("SignUp");
                }}
              >
                <Text
                  style={styles.actorText}
                  onPress={() => {
                    navigation.navigate("SignUp");
                  }}
                >
                  Fighters
                </Text>
              </View>
              <View style={styles.item}>
                <Text
                  style={styles.actorText}
                  onPress={() => {
                    navigation.navigate("SignUp");
                  }}
                >
                  Survivors
                </Text>
              </View>
              <View style={styles.item}>
                <Text
                  style={styles.actorText}
                  onPress={() => {
                    navigation.navigate("SignUp");
                  }}
                >
                  Caregivers
                </Text>
              </View>
              <View style={styles.item}>
                <Text
                  style={styles.actorText}
                  onPress={() => {
                    navigation.navigate("SignUp");
                  }}
                >
                  Medical Professionals
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },

  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: "600",
    color: Colors.black,
    textAlign: "center",
    marginTop: 10
  },
  sectionDescription: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.dark,
    textAlign: "center"
  },

  icon: {
    color: Colors.dark,
    fontSize: 40,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right"
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start", // if you want to fill rows left to right
    marginTop: 80
  },
  item: {
    width: "50%", // is 50% of container width
    backgroundColor: "#68a0cf",
    height: 150,
    padding: 10,
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    alignItems: "center"
  },
  actorText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20
  }
});

export default Home;
