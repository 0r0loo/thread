import React, {useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Animated, Platform, Pressable, StyleSheet, Text} from 'react-native';
import {images} from '../../images';
import IconButton from './IconButton';

function FloatingWriteButton({hidden}) {
  const navigation = useNavigation();

  const onPress = () => {
    console.log('플로팅버튼 눌림');
    navigation.navigate('Write');
  };

  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(animation, {
      toValue: hidden ? 1 : 0,
      useNativeDriver: true,
      tension: 45,
      friction: 5,
    }).start();
  }, [animation, hidden]);

  return (
    <Animated.View
      style={[
        styles.wrapper,
        {
          transform: [
            {
              translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 88],
              }),
            },
          ],
          opacity: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
        },
      ]}>
      <Pressable
        style={({pressed}) => [
          styles.button,
          Platform.OS === 'ios' && {opacity: pressed ? 0.6 : 1},
        ]}
        onPress={onPress}>
        <IconButton
          type={images.add}
          tintColor={'white'}
          onPressOut={onPress}
        />
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 56,
    borderRadius: 28,
    shadowColor: '#4d4d4d',
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 4,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#F9851B',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FloatingWriteButton;
