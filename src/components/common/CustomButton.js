import React from 'react';
import styled, {css} from 'styled-components/native';

// Default

// TODO: 버튼 배경색 커스텀 가능하게 수정할것
function CustomButton({
  size,
  title,
  buttonBackgroundColor,
  type,
  onPress,
  children,
}) {
  return (
    <Pressable
      onPress={onPress}
      buttonBackgroundColor={buttonBackgroundColor}
      type={type}
      size={size}>
      {children || <Text type={type}>{title}</Text>}
    </Pressable>
  );
}

const Pressable = styled.Pressable`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #f7f6f2;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.bg02};

  ${({size, color, theme}) =>
    size === 'xxs' &&
    `
    padding: 2px 6px;
    border: ${theme.colors[color]};
    font-size: 12px;
    font-weight: 500;
  `};

  ${({size, color, theme}) =>
    size === 'xs' &&
    css`
      padding: 4px 8px;
    `};

  ${({size, color, theme}) =>
    size === 's' &&
    css`
      padding: 8px 12px;
    `};

  ${({size, color, theme}) =>
    size === 'm' &&
    css`
      padding: 12px 16px;
    `};

  ${({size, color, theme}) =>
    size === 'l' &&
    css`
      padding: 12px 33px;
    `};

  ${({type, theme}) =>
    type === 'gray' &&
    css`
      background-color: ${theme.ui03};
    `};

  ${({type, theme}) =>
    type === 'point' &&
    css`
      background-color: ${theme.point};
    `};

  ${({type, theme}) =>
    type === 'default' &&
    css`
      background-color: #31302b;
    `};

  ${({buttonBackgroundColor}) =>
    buttonBackgroundColor &&
    css`
      background-color: ${buttonBackgroundColor};
    `};
`;

const Text = styled.Text`
  font-family: 'Min Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;

  ${({type, theme}) =>
    type === 'point' &&
    css`
      color: #ffffff;
    `};

  ${({type, theme}) =>
    type === 'gray' &&
    css`
      color: #ffffff;
    `};

  ${({type, theme}) =>
    type === 'default' &&
    css`
      color: #ffffff;
    `};
`;

//   <Pressable style={styles.button} onPress={onPress}>
//   <Text style={styles.text}>{title}</Text>
// </Pressable>

// const styles = StyleSheet.create({
//   button: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     backgroundColor: '#F7F6F2',
//     borderRadius: 8,
//   },
//   text: {
//     fontFamily: 'MinSans-SemiBold',
//     fontStyle: 'normal',
//     fontSize: 15,
//     lineHeight: 20,
//   },
// });

export default CustomButton;
