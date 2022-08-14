import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled, {css} from 'styled-components/native';

const Icon = styled.Image`
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
  margin-right: ${({marginRight}) => marginRight}px;
  ${({tintColor}) =>
    tintColor &&
    css`
      tint-color: ${tintColor};
    `}

  ${({size}) =>
    size &&
    css`
      width: ${size};
      height: ${size};
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
}) {
  return (
    <TouchableOpacity onPressOut={onPressOut}>
      <Icon
        source={type}
        width={width}
        height={height}
        marginRight={marginRight}
        tintColor={tintColor}
        size={size}
      />
    </TouchableOpacity>
  );
}

export default IconButton;
