import './index.css';

const Calendar = () => {
  const daysOfTheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  let currentDate = new Date();
  currentDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() - 2,
    15
  );

  const getFirstDayOfMonth = (type) => {
    const firstDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );

    if (type === 'month') {
      return firstDay.getDate();
    }
    return firstDay.getDay();
  };

  const getLastDayOfMonth = (type) => {
    const lastDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );
    if (type === 'month') {
      return lastDay.getDate();
    }
    return lastDay.getDay();
  };
  const getLastDayOfPreviousMonth = (type) => {
    const lastDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    );
    if (type === 'month') {
      return lastDay.getDate();
    }
    return lastDay.getDay();
  };

  let days = [];
  const firstWeekdayOfMonth = getFirstDayOfMonth();
  const lastWeekdayOfMonth = getLastDayOfMonth();
  const lastDayOfMonth = getLastDayOfMonth('month');
  const lastDayOfPreviousMonth = getLastDayOfPreviousMonth('month');

  for (let i = 0; i < firstWeekdayOfMonth; i++) {
    days.push(lastDayOfPreviousMonth - firstWeekdayOfMonth + i + 1);
  }
  for (let i = 0; i < lastDayOfMonth; i++) {
    days.push(i + 1);
  }
  for (let i = 0; i < 7 - lastWeekdayOfMonth - 1; i++) {
    days.push(i + 1);
  }

  return (
    <div className="calendar">
      <div className="calendar__header">
        {daysOfTheWeek.map((day, index) => (
          <div key={index} className="calendar__header-cell">
            {day}
          </div>
        ))}
      </div>
      <div className="calendar__body">
        {days.map((day, index) => (
          <div key={index} className="calendar__body-cell">
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
