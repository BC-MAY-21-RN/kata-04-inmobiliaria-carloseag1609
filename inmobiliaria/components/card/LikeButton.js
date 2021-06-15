import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function LikeButton() {
  return (
    <View style={{
      backgroundColor: '#00B074',
      padding: 7,
      borderRadius: 100,
      position: "absolute",
      right: -8,
      top: 0
    }}>
      <Icon name="favorite" color="#FFF" size={15}/>
    </View>
  );
};
