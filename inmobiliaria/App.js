import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Card from './components/card/Card';
import {properties} from './assets/data.json';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={properties}
        renderItem={({item}) => <Card {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 10,
  }
})
