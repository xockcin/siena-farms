import React from 'react';
import {View, Image, Text, StyleSheet, ScrollView, Button} from "react-native"
import { Divider } from "react-native-elements";
import { pageFrameStyles as styles } from '../shared/styles';

const PageFrame = ({title, back, children}) => {
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../assets/logo.jpg")} />
        <View>
          <Text style={styles.headerText}>{title}</Text>
          <Divider style={{ backgroundColor: "white", height: 2 }} />
        </View>
      </View>
      {children}
      {back ? <Button color="#faaf0f" onPress={back} title="Back" /> : null}
    </View>
  );
}

export default PageFrame;
