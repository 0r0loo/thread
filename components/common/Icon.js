import React from 'react';
import SvgIcon from 'react-native-svg-icon';
import round from '../../assets/svg/round/add.svg';
// import roundFill from 'assets/svg/round_fill';
// import square from 'assets/svg/square';
// import squareFill from 'assets/svg/square_fill';

function Icon(props) {
  const {folder} = props;
  const folderObj = {
    round,
    // roundFill,
    // square,
    // squareFill,
  };
  console.log('-> props', props);
  // return <SvgIcon width={50} height={50} svgs={round} fill="#0f0" />;
  return null;
}

export default Icon;
