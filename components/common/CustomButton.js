import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

function CustomButton({title, onPress}) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#F7F6F2',
    borderRadius: 8,
  },
  text: {
    fontFamily: 'MinSans-SemiBold',
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 20,
  },
});

export default CustomButton;
