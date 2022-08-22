import React from 'react';
import styled, {css} from 'styled-components/native';

// TODO: 버튼 배경색 커스텀 가능하게 수정할것
function CustomButton({title, buttonBackgroundColor, type, onPress, children}) {
  return (
    <Pressable
      onPress={onPress}
      buttonBackgroundColor={buttonBackgroundColor}
      type={type}>
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
