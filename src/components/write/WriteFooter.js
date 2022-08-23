import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomButton from '../common/CustomButton';
import IconButton from '../common/IconButton';
import {images} from '../../images';
import styled from 'styled-components/native';
import useThemeContext from '../../hooks/useThemeContext';

function WriteFooter({isTitle, onPressIsTitle, isDone, onSave}) {
  const themeContext = useThemeContext();

  return (
    <View style={styles.block}>
      <Left>
        <IconButton
          type={images.title}
          size={24}
          tintColor={isTitle ? themeContext.point : themeContext.ui02}
          paddingColor={isTitle && themeContext.point02}
          marginRight={16}
          onPressOut={onPressIsTitle}
        />
        <IconButton
          type={images.image}
          size={24}
          tintColor={themeContext.ui02}
          marginRight={16}
        />
        <IconButton
          type={images.event}
          size={24}
          tintColor={themeContext.ui02}
        />
      </Left>
      <View>
        <CustomButton
          title={'작성완료'}
          onPress={() => onSave()}
          type={isDone ? 'point' : 'gray'}
        />
      </View>
    </View>
  );
}

const Container = styled.View``;

const Left = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const styles = StyleSheet.create({
  block: {
    height: 62,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
    // backgroundColor: 'red',
  },
});

export default WriteFooter;
