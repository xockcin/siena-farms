import React from "react";

import {TouchableOpacity, Image, Text, StyleSheet} from "react-native"

import { boxItemStyles as styles } from "../shared/styles";

const BoxItem = ({ item, activate }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={() => activate(item)}>
      <Image style={styles.img} source={item.image} />
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default BoxItem