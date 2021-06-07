import DatePicker from "react-datepicker";
import StyledDatePicker from "./StyledDatePicker";
import { IdatePicker } from "@models";
import { FC } from "react";
import AgendaSvg from "@styles/assets/svg/agenda.svg";

import "react-datepicker/dist/react-datepicker.css";

const inputDatePicker: FC<IdatePicker> = (props) => {
  return (
    <StyledDatePicker>
      <div>
        <label htmlFor={props.id}>{props.label}</label>
      </div>
      <div className="block row around-xs middle-xs">
        <AgendaSvg />
        <DatePicker id={props.id} selected={props.value} onChange={(date: Date) => {
          props.onChange(date)
        }} />
      </div>
    </StyledDatePicker>
  );
};

export default inputDatePicker;
