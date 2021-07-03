import React from 'react';

import {
  View,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
} from "react-native";

import { itemCardStyles as styles } from '../shared/styles'

const Recipes = ({recipes}) => {
  const recipeList = recipes.map((recipe) => {
    
    return (
      <View style={styles.recipeLink}>
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

export default Card;