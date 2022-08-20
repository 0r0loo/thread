import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import IconButton from '../common/IconButton';
import {images} from '../../images';
import CustomButton from '../common/CustomButton';
import {format} from 'date-fns';
import {ko} from 'date-fns/locale';

const Container = styled.View`
  flex-direction: row;
  padding: 0 20px;
  //background-color: aqua;
  width: 100%;
`;

const Left = styled.View`
  //background-color: pink;
  margin-right: 12px;
`;

const CategoryWrapper = styled.View``;

const Category = styled.Text`
  font-size: 24px;
`;

const BorderWrapper = styled.View`
  background-color: blueviolet;
  width: 2px;
`;

const Right = styled.View`
  //background-color: antiquewhite;
  flex: 1;
`;
const RightHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;
const DateText = styled.Text`
  color: #a5a39b;
`;

const Title = styled.Text`
  font-family: 'Min Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 36px;
`;

const RightBody = styled.View`
  margin-bottom: 12px;
`;

const Content = styled.Text`
  font-family: 'Min Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

function Thread({thread}) {
  const width = Dimensions.get('window').width;
  const {categoryId, content, date, title} = thread;

  return (
    <Container width={width}>
      <Left>
        <CategoryWrapper>
          <Category>{categoryId}</Category>
          <BorderWrapper></BorderWrapper>
        </CategoryWrapper>
      </Left>
      <Right>
        <RightHeader>
          <DateText>{format(new Date(), 'PPP', {locale: ko})}</DateText>
          <IconButton tintColor={'#A5A39B'} type={images.moreHoriz} size={16} />
        </RightHeader>
        <Title>{title}</Title>
        <RightBody>
          <Content>{content}</Content>
        </RightBody>
        <CustomButton title={'생각 엮기'} />
      </Right>
    </Container>
  );
}
// const styles = StyleSheet.create({
//   block: {
//     flexDirection: 'row',
//     // paddingHorizontal: 20,
//     backgroundColor: 'pink',
//   },
//   left: {
//     // marginRight: 12,
//   },
//   line: {},
//   right: {},
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
// });

export default Thread;
//
// (
//   <View style={styles.block}>
//     <View style={styles.left}>
//       <Text>📕</Text>
//       <View style={styles.line} />
//     </View>
//     <View style={styles.right}>
//       <View style={styles.header}>
//         <Text>2022년 2월 22일</Text>
//         <Text>메뉴</Text>
//       </View>
//       <View>
//         <Text>
//           오늘날에도 대부분의 사람들은 땅 위에 살고 있기 때문에 '공간'으로서의
//           '땅'의 의미가 다소 확장되었다. 이를 볼 수 있는 예가 EVE 온라인인데,
//           우주를 다루기에 물질적인 의미의 '땅'은 없는데도 불구하고 "도딕시는
//           갈란테 땅, 지타는 칼다리 땅"이란 말을 쓰고 있다.
//         </Text>
//         <CustomButton title={'생각 엮기'} />
//       </View>
//     </View>
//   </View>)
