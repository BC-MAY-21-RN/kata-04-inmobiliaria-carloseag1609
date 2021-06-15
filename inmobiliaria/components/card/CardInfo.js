import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LikeButton from './LikeButton';

export default function CardInfo({
    name,
    address,
    num_rooms,
    num_bath,
    surface,
    price_monthly,
}) {
  return (
    <View>
      <Text style={styles.nameText}>{name}</Text>
      <View style={styles.addressContainer}>
        <Text style={styles.addressText}>{address}</Text>
      </View>
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.infoText}>{num_rooms}</Text>
        </View>
        <View>
          <Text style={styles.infoText}>{num_bath}</Text>
        </View>
        <View>
          <Text style={styles.infoText}>{surface}</Text>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>${price_monthly}/m</Text>
        <LikeButton/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addressContainer: {
    flexDirection: 'row'
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nameText: {
    fontSize: 16,
    color: '#151525',
  },
  addressText: {
    fontSize: 12,
    color: '#737373',
    fontWeight: '400'
  },
  infoText: {
    color: '#2D2F35',
    fontSize: 14,
    fontWeight: 'bold'
  },
  priceText: {
    fontSize: 16,
    color: '#151525',
    fontWeight: 'bold'
  }
});
