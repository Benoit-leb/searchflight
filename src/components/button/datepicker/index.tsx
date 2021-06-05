import DatePicker from "react-datepicker";
import StyledDatePicker from "./StyledDatePicker";
import { IdatePicker } from "@models";
import { useState } from "react";
import AgendaSvg from "@styles/assets/svg/agenda.svg";

import "react-datepicker/dist/react-datepicker.css";

const inputDatePicker = (props: IdatePicker) => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  return (
    <StyledDatePicker>
      <div>
        <label>{props.label}</label>
      </div>
      <div className="block row around-xs middle-xs">
        <AgendaSvg />
        <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
      </div>
    </StyledDatePicker>
  );
};

export default inputDatePicker;
