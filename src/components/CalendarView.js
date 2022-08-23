import React from 'react';
import styled from 'styled-components/native';
import {Calendar} from 'react-native-calendars';
import useThemeContext from '../hooks/useThemeContext';
import {LocaleConfig} from 'react-native-calendars/src/index';
//
// markedDates={{
//   '2022-08-16': {
//     selected: true,
//       marked: true,
//       selectedColor: themeContext.ui01,
//       dotColor: themeContext.point,
//   },
//   '2022-08-17': {marked: true},
//   '2022-08-18': {
//     marked: true,
//       dotColor: themeContext.point,
//       activeOpacity: 0,
//   },
//   '2022-08-19': {disabled: true, disableTouchEvent: true},
// }}

LocaleConfig.locales.ko = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  dayNames: [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  // today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = 'ko';

function CalendarView({markedDates, selectedDate, onSelectDate}) {
  const markedSelectedDate = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates?.[selectedDate]?.marked,
    },
  };

  console.log('-> markedSelectedDate', markedSelectedDate);

  const themeContext = useThemeContext();
  return (
    <CustomCalendar
      theme={{
        backgroundColor: themeContext.bg02,
        selectedDayBackgroundColor: themeContext.ui01,
        dotColor: themeContext.point,
        'stylesheet.calendar.header': {
          // header: {
          //   height: 0,
          // },
          // week: {
          //   height: 0,
          // },
          // dayTextAtIndex0: {
          //   color: 'red',
          // },
          // dayTextAtIndex6: {
          //   color: 'blue',
          // },
        },
      }}
      onDayPress={day => {
        onSelectDate(day.dateString);
      }}
      markedDates={markedSelectedDate}
    />
  );
}

const CustomCalendar = styled(Calendar)``;

export default CalendarView;
