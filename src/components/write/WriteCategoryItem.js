import React from 'react';
import IconButton from '../common/IconButton';
import {images} from '../../images';

function WriteCategoryItem({category}) {
  return (
    <IconButton type={images.addReaction} size={'32'} tintColor={'#D1CFC9'} />
  );
}

export default WriteCategoryItem;
