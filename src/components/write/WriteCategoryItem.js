import React from 'react';
import IconButton from '../common/IconButton';
import {images} from '../../images';
import {useNavigation} from '@react-navigation/native';

function WriteCategoryItem({category, onSelectCategory}) {
  return (
    <IconButton
      type={images.addReaction}
      size={'32'}
      tintColor={'#D1CFC9'}
      onPressOut={() => onSelectCategory()}
    />
  );
}

export default WriteCategoryItem;
