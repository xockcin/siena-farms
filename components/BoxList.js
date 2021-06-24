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

const Item = ({ name, img }) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Image style={styles.img} source={img} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

const BoxList = () => {
  const renderItem = ({ item }) => <Item name={item.name} img={item.image} />;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#FFFFFF",
  },
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
