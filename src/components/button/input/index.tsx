import { Iinput } from "@models";
import StyledInput from "./StyledInput";
import PlaneSvg from "@styles/assets/svg/plane.svg";
import { FC } from "react";

const Select: FC<Iinput> = (props) => {
  return (
    <StyledInput>
      <div>
        <label htmlFor={props.id}>{props.label}</label>
      </div>
      <div className="block row around-xs middle-xs">
        <PlaneSvg />
        <input id={props.id} onChange={(e) => {
          props.onChange(e.target.value)
        }} value={props.value ? props.value : ""} />
      </div>
    </StyledInput>
  );
};

export default Select;