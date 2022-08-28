import React from 'react';
import {Text, View} from 'react-native';
import Modal from 'react-native-modal';
import styled from 'styled-components';
import CustomButton from '../CustomButton';

function DefaultModal({
  isVisible,
  onBackdropPress,
  title,
  content,
  leftTitle,
  leftType,
  onPressLeft,
  rightTitle,
  rightType,
  onPressRight,
}) {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onBackdropPress}>
      <ModalContainer>
        <TitleText>{title}</TitleText>
        <ContentText>{content}</ContentText>
        <ButtonWrapper>
          <CustomButton
            title={leftTitle}
            onPress={onPressLeft}
            type={leftType}
            size={'l'}
          />
          <CustomButton
            title={rightTitle}
            onPress={onPressRight}
            type={rightType}
            size={'l'}
          />
        </ButtonWrapper>
      </ModalContainer>
    </Modal>
  );
}

const ModalContainer = styled.View`
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  margin: 0 auto;
  width: 295px;
`;

const TitleText = styled.Text`
  text-align: center;
  font-family: 'Min Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  margin-bottom: 8px;
`;

const ContentText = styled.Text`
  text-align: center;
  font-family: 'Min Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${({theme}) => theme.ui02};
`;

const ButtonWrapper = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

// const styles = StyleSheet.create({
//   content: {
//     backgroundColor: 'white',
//     padding: 22,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 4,
//     borderColor: 'rgba(0, 0, 0, 0.1)',
//   },
//   contentTitle: {
//     fontSize: 20,
//     marginBottom: 12,
//   },
// });

export default DefaultModal;
