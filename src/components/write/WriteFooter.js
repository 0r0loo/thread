import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomButton from '../common/CustomButton';

function WriteFooter() {
  return (
    <View style={styles.block}>
      <View style={styles.left}>
        <Text
          style={{
            marginRight: 8,
          }}>
          제목
        </Text>
        <Text
          style={{
            marginRight: 8,
          }}>
          임지
        </Text>
        <Text>일정</Text>
      </View>
      <View>
        <CustomButton
          title={'작성완료'}
          onPress={() => console.log('작성완료')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 62,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: 'red',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {},
});

export default WriteFooter;
