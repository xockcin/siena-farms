import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack"
import logo from './assets/logo.jpg'
import PageFrame from './components/PageFrame'
import BoxList from './components/BoxList'
import ItemCard from './components/ItemCard'

import {items} from './shared/items'

const BoxListScreen = () => {
  return (
    <PageFrame title="In The Box">
      <BoxList />
    </PageFrame>
  )
}

const ItemCardScreen = ({item}) => {
  return (
    <PageFrame title={item.name}>
      <ItemCard item={item} />
    </PageFrame>
  )
}

export default function App() {
  return (
    <BoxListScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "blue",
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});
