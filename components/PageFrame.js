import React from 'react';
import {View, Image, Text, StyleSheet, ScrollView, Button} from "react-native"
import { Divider } from "react-native-elements";

const PageFrame = ({title, back}) => {
  return (
    <View style={styles.background}>
      <View style={styles.titleBox}>
        <Image style={styles.logo} source={require("../assets/logo.jpg")} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Divider style={{ backgroundColor: "white", height: 2 }} />
        </View>
      </View>
      {props.children}
      {props.back ? (
          <Button color="#faaf0f" onPress={back} title="Back" />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#82AB01",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 36,
    marginBottom: 20,
  },
  logo: {
    height: 100,
    width: 70,
    marginLeft: 20,
    marginRight: 30,
  },
  titleBox: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    marginRight: 100,
    color: "#ff0000"
  }
})

export default PageFrame;
