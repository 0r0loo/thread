import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {format} from 'date-fns';
import {ko} from 'date-fns/locale';
import styled from 'styled-components/native';
import WriteCategoryItem from './WriteCategoryItem';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const DateText = styled.Text`
  color: ${({theme}) => theme.ui02};
  font-family: 'Min Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
`;

const CustomFlatList = styled.FlatList`
  flex-grow: 0;
`;

function WriteCategory() {
  const now = format(new Date(), 'PPP', {locale: ko});

  return (
    <Container>
      <DateText>{now}, 오늘</DateText>
      <CustomFlatList
        data={[
          {id: 1, name: 'hi'},
          {id: 2, name: 'hi'},
          {id: 3, name: 'hi'},
          {id: 4, name: 'hi'},
          {id: 5, name: 'hi'},
        ]}
        numColumns={5}
        keyExtractor={item => item.id}
        renderItem={item => <WriteCategoryItem category={item} />}
      />
    </Container>
  );
}

export default WriteCategory;
