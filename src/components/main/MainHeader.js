import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import TransparentCircleButton from '../common/TransparentCircleButton';
import styled from 'styled-components/native';
import {format} from 'date-fns';
import {ko} from 'date-fns/locale';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {images} from '../../images';
import IconButton from '../common/IconButton';
import DateTimePicker from 'react-native-modal-datetime-picker';

/*
 * 글이 없는 경우 : 빈 컴포넌트를 보여줘야한다.
 * 리스트 보기 : 리스트대로 쫘라라락
 * 캘린더 보기 : 캘린더 and 캘린더 스크롤
 *
 * */

function MainHeader({date, mainType, onPressViewType}) {
  const {top} = useSafeAreaInsets();
  const [visible, setVisible] = useState(false);

  const onPressSelectDate = () => {
    setVisible(true);
  };

  const onConfirm = selectedDate => {
    setVisible(false);
    console.log('-> selectedDate', selectedDate);
  };

  const onCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <View style={{height: top, backgroundColor: '#f7f6f2'}} />
      <Container>
        <View>
          {mainType === 'LIST' ? (
            <HeaderTitle>스레드</HeaderTitle>
          ) : (
            <DateContainer>
              <DateText>{format(new Date(), 'PPP', {locale: ko})}</DateText>
              {/* TODO: */}
              <IconButton
                type={images.arrowDropDown}
                size={12}
                onPressOut={onPressSelectDate}
                tintColor={'#333333'}
              />
            </DateContainer>
          )}
        </View>
        <Buttons>
          <IconButton
            type={mainType === 'LIST' ? images.list : images.calendarToday}
            marginRight={20}
            tintColor={'#31302B'}
            onPressOut={onPressViewType}
          />
          <IconButton type={images.setting} tintColor={'#31302B'} />
          {/*<TransparentCircleButton hasMarginRight={20} />*/}
          {/*<TransparentCircleButton />*/}
        </Buttons>
        <DateTimePicker
          isVisible={visible}
          mode={'date'}
          onConfirm={() => onConfirm()}
          onCancel={() => onCancel()}
        />
      </Container>
    </>
  );
}

const Container = styled.View`
  height: 64px;
  background: #f7f6f2;
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 20px;
`;

const HeaderTitle = styled.Text`
  font-family: 'MinSans-Bold';
  color: #31302b;
  line-height: 28px;
  font-size: 21px;
`;

const DateContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const DateText = styled.Text`
  font-family: 'MinSans-Bold';
  font-weight: 700;
  font-size: 21px;
  line-height: 29px;
`;

const Buttons = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default MainHeader;
