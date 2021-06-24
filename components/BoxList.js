import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { items } from "../shared/items";

const Item = ({ item }) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Image style={styles.img} source={item.img} />
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const BoxList = ({items}) => {
  const renderItem = ({ item }) => <Item item={item} />;
  return (
    <ScrollView>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#e1e1e1",
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

export default BoxList;
