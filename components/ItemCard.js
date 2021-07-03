import React from 'react';

import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";

const Recipes = ({recipes}) => {
  const recipeList = recipes.map((recipe) => {
    
    return (
      <View style={styles.recipe}>
        <Text style={styles.recipeText}>{recipe}</Text>
      </View>
    );
  });
  return (
    <View>
      <Text style={{ textAlign: "center", fontSize: 36, fontFamily: "serif" }}>
        Recipes
      </Text>
      {recipeList}
    </View>
  );
}

const Card = ({item}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.background}>
          <Image style={styles.image} source={item.image} />
          <Text style={styles.text}>{item.text}</Text>
          {item.recipes.length ? <Recipes recipes={item.recipes} /> : null}
        </View>
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
    padding: 10,
  },
  background: {
    backgroundColor: "#e5e5e5",
    padding: 20,
    justifyContent: "center",
  },
  image: {
    height: 150,
    width: 250,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
  },
  recipe: {
    backgroundColor: "#F8981C",
    borderWidth: 2,
    borderColor: "#FFFFFF",
    margin: 3,
    padding: 10,
  },
  recipeText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export default Card;