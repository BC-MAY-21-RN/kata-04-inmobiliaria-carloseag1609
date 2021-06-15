import React from 'react';
import {View, ImageBackground, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CardImage({url, stars}) {
  return (
    <>
      <ImageBackground
        source={{uri: url}}
        style={styles.cardImage}
        imageStyle={{borderRadius: 10}}
      >
        <View style={styles.starsContainer}>
          <Icon name="star" size={15} color="#EEBA00" />
          <Text style={styles.starsText}>{stars}</Text>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: 'flex-end'
  },
  starsContainer: {
    flexDirection: 'row',
    width: 45,
    height: 25,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#FBEDB7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5
  },
  starsText: {
    color: '#7A6229',
    fontWeight: 'bold',
    fontSize: 12
  }
})
