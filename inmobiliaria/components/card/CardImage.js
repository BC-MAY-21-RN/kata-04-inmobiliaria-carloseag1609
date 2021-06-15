import React from 'react';
import {View, ImageBackground, Text, StyleSheet} from 'react-native';

export default function CardImage({url, stars}) {
  return (
    <>
      <ImageBackground
        source={{uri: url}}
        style={styles.cardImage}
        imageStyle={{borderRadius: 10}}
      >
        <View style={styles.starsContainer}>
          <Text style={styles.starsText}>{stars}</Text>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    justifyContent: 'flex-end',
    marginRight: 15
  },
  starsContainer: {
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
