import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Card({name}) {
  return (
      <View style={styles.cardContainer}>

      </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#F5FDFF',
    marginBottom: 20,
    height: 110,
    borderRadius: 10,
  }
})
