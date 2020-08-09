import React, { useState } from 'react';
import subDays from "date-fns/subDays";
import { setHours, setMinutes } from "date-fns";
import DatePicker from "react-datepicker";

import "./BookingStyles.css";

function DateInput(props) {
    const [startDate, setStartDate] = useState(
      new Date(setHours(setMinutes(new Date(), 0), 9))
    );
    return (
      <div>
        <div className="date-box">
          <label className="input-label">Pick a date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="input-date"
            placeholderText="DD/MM/YYYY"
            minDate={subDays(new Date(), 0)}
          />
        </div>
        <div className="time-box">
          <label className="input-label">Pick a time</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="input-date"
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
            minTime={setHours(setMinutes(new Date(), 0), 9)}
            maxTime={setHours(setMinutes(new Date(), 30), 22)}
          />
        </div>
      </div>
    );
}

export default DateInput;