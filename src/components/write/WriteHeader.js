import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function WriteHeader() {
  const navigation = useNavigation();
  const onClose = () => {
    console.log('글쓰기 헤더 X 버튼');
    navigation.pop();
  };

  return (
    <View style={styles.block}>
      <Pressable
        onPress={onClose}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* TODO: X Icon으로 교체해야함 */}
        <Text>X</Text>
      </Pressable>
      <View style={styles.center}>
        <Text style={styles.title}>글 쓰기</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 56,
    backgroundColor: 'red',
    padding: 16,
    flexDirection: 'row',
  },
  center: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'MinSans-Regular',
    fontSize: 18,
  },
});

export default WriteHeader;
