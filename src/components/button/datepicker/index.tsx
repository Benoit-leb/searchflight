import DatePicker from "react-datepicker";
import StyledDatePicker from "./StyledDatePicker";
import { IdatePicker } from "@models";
import { useState, FC, useEffect } from "react";
import AgendaSvg from "@styles/assets/svg/agenda.svg";

import "react-datepicker/dist/react-datepicker.css";

const inputDatePicker: FC<IdatePicker> = (props) => {
  const [startDate, setStartDate] = useState<Date>(new Date());

  useEffect(() => {
    props.onChange(startDate);
  })
  return (
    <StyledDatePicker>
      <div>
        <label>{props.label}</label>
      </div>
      <div className="block row around-xs middle-xs">
        <AgendaSvg />
        <DatePicker selected={startDate} onChange={(date: Date) => {
          setStartDate(date)
          props.onChange(date)
        }} />
      </div>
    </StyledDatePicker>
  );
};

export default inputDatePicker;
