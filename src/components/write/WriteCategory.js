import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {format} from 'date-fns';
import {ko} from 'date-fns/locale';
import IconButton from '../common/IconButton';

function WriteCategory() {
  const now = format(new Date(), 'PPP', {locale: ko});

  return (
    <View style={styles.block}>
      <Text style={styles.now}>{now}, 오늘</Text>
      <View style={styles.categories}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  now: {
    color: '#A5A39B',
    fontFamily: 'MinSans-Medium',
    fontSize: 15,
  },
  categories: {
    marginTop: 20,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingHorizontal: 40,
  },
});

export default WriteCategory;
