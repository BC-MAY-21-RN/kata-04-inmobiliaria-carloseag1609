import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  return (
    <TouchableOpacity
        style={styles.likeButton}
        onPress={() => setLiked(!liked)}
        activeOpacity={0.5}
    >
      <Icon
          name={liked ? "favorite" : "favorite-border"}
          color="#FFF"
          size={15}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  likeButton: {
    backgroundColor: '#00B074',
    padding: 7,
    borderRadius: 100,
    position: "absolute",
    right: -8,
    top: 3
  }
})
