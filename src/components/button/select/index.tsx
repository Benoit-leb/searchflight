import { Iselect } from "@models";
import StyledSelect from "./StyledSelect";
import PlaneSvg from "@styles/assets/svg/plane.svg";
import { useState } from "react";

const Select = (props: Iselect) => {
  const [value, setValue] = useState();

  return (

    <StyledSelect>
      <div>
        <label>{props.label}</label>
      </div>
      <div className="block row around-xs middle-xs">
        <PlaneSvg />
        <select onChange={(e) => {
          setValue(e.target.value)
          props.onChange(e.target.value)
        }} value={value}>
          <option key="default" value=""></option>
          {props.list.map((el, idx) => {
            return (
              <option key={`${idx} ${el.name}`} value={el.value}>{el.city} - {el.name}</option>
            );
          })}
        </select>
      </div>
    </StyledSelect>
  );
};

export default Select;