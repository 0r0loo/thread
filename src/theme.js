const global = {
  white: '#ffffff',
  black: '#000000',

  gray10: '#f1f1f2',
  gray20: '#e3e3e5',
  gray30: '#c8c8cc',
  gray40: '#a0a0a5',
  gray50: '#7c7c80',
  gray60: '#555559',
  gray70: '#3d3d40',
  gray80: '#242426',
  gray90: '#181819',

  orange10: '#fff8f6',
  orange50: '#f9851b',
  orange90: '#331900',
};

const lightTheme = {
  ui01: global.gray70,
  ui02: global.gray50,
  ui03: global.gray30,
  ui04: global.gray20,

  line01: global.gray20,
  line02: global.gray40,

  bg01: global.white,
  bg02: '#F7F6F2',

  point: global.orange50,
  point02: global.orange10,
};

export const theme = {
  tintColor: '#cfcfcf',
  ...lightTheme,
};
