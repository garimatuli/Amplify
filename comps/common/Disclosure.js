import React, { Component } from "react";
import { Modal, Text, TouchableHighlight, View, Alert, StyleSheet } from "react-native";

class Disclosure extends Component {
  render() {
  console.log('it comes in disclosure');
    return (
    <View style={styles.containerStyle}>
      <Modal
        visible={this.props.display}
        animationType="slide"
        onRequestClose={() => console.log("closed")}
      >
        >
        <View style={{flex:1}}>
          <Text style={styles.text}>{this.props.data}</Text>
        </View>
      </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    marginTop: 20,
    marginLeft: 90,
    height: 200,
    width: 200
  },
  text: {
    fontSize: 1000,
    marginLeft: 150
  },
  containerStyle: {
  flex:1,
  position: "absolute",
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop:10,
    }
});

export default Disclosure;
