import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled, {css} from 'styled-components/native';

const Cotainer = styled(TouchableOpacity)`
  padding: 6px;
  border-radius: 8px;

  ${({paddingColor}) =>
    paddingColor &&
    css`
      background-color: ${paddingColor};
    `};

  ${({marginRight}) =>
    marginRight &&
    css`
      margin-right: ${marginRight}px;
    `};
`;

const Icon = styled.Image`
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;

  ${({tintColor}) =>
    tintColor &&
    css`
      tint-color: ${tintColor};
    `}

  ${({size}) =>
    size &&
    css`
      width: ${size}px;
      height: ${size}px;
    `}
`;

function IconButton({
  type,
  onPressOut,
  width = 24,
  height = 24,
  marginRight = 0,
  tintColor,
  size,
  paddingColor,
}) {
  return (
    <Cotainer
      onPressOut={onPressOut}
      paddingColor={paddingColor}
      marginRight={marginRight}>
      <Icon
        source={type}
        width={width}
        height={height}
        tintColor={tintColor}
        size={size}
      />
    </Cotainer>
  );
}

export default IconButton;
