import React from 'react';

import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';

const DatePicker = () => {
  const [selectDate, setDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const handleDateChange = date => {
    setDate(date);
  }
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          className={styles.picker}
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          id="date-picker-inline"
          label="Choose date"
          value={selectDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          className={styles.picker}
          id="time-picker"
          label="Choose time"
          value={selectDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </MuiPickersUtilsProvider>
    </div>

  );
};

export default DatePicker;