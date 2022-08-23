import React, {useContext, useMemo, useState} from 'react';
import CalendarView from '../components/CalendarView';
import threadContext from '../contexts/ThreadContext';
import {format} from 'date-fns';

function CalendarScreen() {
  const {threads} = useContext(threadContext);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );

  const markedDates = useMemo(
    () =>
      threads.reduce((acc, cur) => {
        const formattedDate = format(new Date(cur.date), 'yyyy-MM-dd');
        acc[formattedDate] = {marked: true};
        return acc;
      }, {}),
    [threads],
  );

  const filterThreads = threads.filter(
    thread => format(new Date(thread.date), 'yyyy-MM-dd') === selectedDate,
  );

  return (
    <>
      <CalendarView
        markedDates={markedDates}
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
      />
    </>
  );
}

export default CalendarScreen;
