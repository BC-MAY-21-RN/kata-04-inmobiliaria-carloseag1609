import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CardImage from './CardImage';
import CardInfo from './CardInfo';

export default function Card({property}) {
  return (
      <View style={styles.cardContainer}>
        <View style={styles.cardWrapper}>
          <CardImage url={property.image} stars={property.stars} />
          <CardInfo {...property} />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#F5FDFF',
    marginBottom: 20,
    height: 110,
    width: 260,
    borderRadius: 10,
    justifyContent: 'center'
  },
  cardWrapper: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
