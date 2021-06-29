// IMPORTS

import React, { useState } from "react";

import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";

import PageFrame from "./components/PageFrame";
import ItemCard from "./components/ItemCard";
import BoxItem from "./components/BoxItem";

import { items } from "./shared/items";

// FUNCTIONS

export default function App() {
  // i.e. at first, no item is being shown
  [shownItem, setShownItem] = useState(null);

  const showThisItem = (item) => setShownItem(item);
  const returnToBoxList = () => setShownItem(null);

  // i.e. if shownItem isn't null || if there is an item being shown
  if (shownItem) {
    return (
      <PageFrame title={shownItem.name} back={returnToBoxList}>
        <ItemCard item={shownItem} />
      </PageFrame>
    );
  }

  // else

  const renderItem = ({ item }) => (
    <BoxItem item={item} activate={showThisItem} />
  );

  return (
    <PageFrame title="In The Box">
      <View style={styles.container}>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </PageFrame>
  );
}

// STYLES

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "blue",
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});
