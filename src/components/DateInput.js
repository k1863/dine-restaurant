import React, { useState } from 'react';
import subDays from "date-fns/subDays";
import { setHours, setMinutes } from "date-fns";
import DatePicker from "react-datepicker";

function DateInput(props) {
    const [startDate, setStartDate] = useState(
      new Date(setHours(setMinutes(new Date(), 0), 9))
    );
    return (
      <div>
        <div className="my-0 flex row mt-5">
          <label className="input-label -mr-3">Pick a date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="input-date"
            placeholderText="DD/MM/YYYY"
            minDate={subDays(new Date(), 0)}
          />
        </div>
        <div className="mt-1">
          <label className="input-label mr-10">Pick a time</label>
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