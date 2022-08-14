import React from 'react';
import styled from 'styled-components/native';

// TODO: 버튼 배경색 커스텀 가능하게 수정할것
function CustomButton({title, onPress, children}) {
  return (
    <Pressable onPress={onPress}>{children || <Text>{title}</Text>}</Pressable>
  );
}

const Pressable = styled.Pressable`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #f7f6f2;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.bg02};
`;

const Text = styled.Text`
  font-family: 'Min Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
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
