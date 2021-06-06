import { FC } from "react";
import StyledButton from "./StyledButton";
import { Ibutton } from "@models";

const Button: FC<Ibutton> = (props) => {
	return (
		<StyledButton className={props.class}>
			<button type={props.type} onClick={props.onSubmit}>
				{props.label}
			</button>
		</StyledButton>
	);
};

export default Button;
