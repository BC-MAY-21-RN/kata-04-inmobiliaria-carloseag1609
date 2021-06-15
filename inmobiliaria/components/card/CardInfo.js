import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
    <View style={styles.cardInfocontainer}>
      <Text style={styles.nameText}>{name}</Text>
      <View style={styles.addressContainer}>
        <Icon name="map-marker" size={13} color="#737373" />
        <Text style={styles.addressText}>{address}</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Icon name="bed-king-outline" size={15} color="#747783" style={{ marginRight: 5 }} />
          <Text style={styles.infoText}>{num_rooms}</Text>
        </View>
        <View style={styles.info}>
          <Icon name="shower" size={15} color="#747783" style={{ marginRight: 5 }} />
          <Text style={styles.infoText}>{num_bath}</Text>
        </View>
        <View style={styles.info}>
          <Icon name="floor-plan" size={15} color="#747783" style={{ marginRight: 5 }} />
          <Text style={styles.infoText}>{surface} ft</Text>
          <Text style={{ fontSize: 8, lineHeight: 8, fontWeight: 'bold' }}> 2</Text>
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
  cardInfocontainer: {
    justifyContent: 'space-between'
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nameText: {
    fontSize: 18,
    color: '#151525',
  },
  addressText: {
    fontSize: 12,
    color: '#737373',
    fontWeight: '400'
  },
  infoText: {
    color: '#2D2F35',
    fontSize: 12,
    fontWeight: 'bold'
  },
  priceText: {
    fontSize: 16,
    color: '#151525',
    fontWeight: 'bold'
  }
});
