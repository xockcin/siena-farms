import React from "react";

import {TouchableOpacity, Image, Text, StyleSheet} from "react-native"

const BoxItem = ({ item, activate }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={() => activate(item)}>
      <Image style={styles.img} source={item.image} />
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#e5e5e5",
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 32,
    fontFamily: "serif",
  },
  img: {
    height: 90,
    width: 90,
    marginRight: 10,
  },
});

export default BoxItem