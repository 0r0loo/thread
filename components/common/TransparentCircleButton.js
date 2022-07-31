import React from 'react';
import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import styled, {css} from 'styled-components/native';

function TransparentCircleButton({
  width = 24,
  height = 24,
  borderRadius = 12,
  hasMarginRight,
  onPress,
}) {
  return (
    <Container
      width={width}
      height={height}
      borderRadius={borderRadius}
      hasMarginRight={hasMarginRight}>
      <IconButton
        width={width}
        height={height}
        borderRadius={borderRadius}
        style={({pressed}) => [
          Platform.OS === 'ios' &&
            pressed && {
              backgroundColor: '#efefef',
            },
        ]}
        onPress={onPress}>
        {/* TODO: Icon 작업 해야함. */}
        <Text>메뉴</Text>
      </IconButton>
    </Container>
  );
}

const Container = styled.View`
  width: ${({width}) => width};
  height: ${({height}) => height};
  border-radius: ${({borderRadius}) => borderRadius};
  overflow: hidden;

  ${({hasMarginRight}) =>
    hasMarginRight &&
    css`
      margin-right: 8px;
    `}
`;

const IconButton = styled.Pressable`
  align-items: center;
  justify-content: center;
  width: ${({width}) => width};
  height: ${({height}) => height};
  border-radius: ${({borderRadius}) => borderRadius};
`;

export default TransparentCircleButton;
