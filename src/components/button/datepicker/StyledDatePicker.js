import styled from "styled-components";
import { $ } from "@styles";

const StyledDatePicker = styled.div`
	background-color: transparent;
	color: ${({ theme }) => theme.text};
	text-transform: uppercase;
	text-decoration: none;
	border: none;
	border-radius: 8px;
	& label {
		color: #396073;
		display: inline-block;
		font-size: 2rem;
		@media (min-width: ${$.sm}) {
			margin-bottom: 1rem;
		}
	}
	& .block {
		padding: 1rem !important;
		background-color: #ffffff;
		width: 100%;
		height: 5rem;
		border-radius: 8px;
		border-width: 1px;
		border-color: #bebebe;
		border-style: solid;
		& .react-datepicker-wrapper {
			width: calc(100% - 4rem);
			height: 100%;
			& .react-datepicker__input-container {
				width: 100%;
				height: 100%;
			}
		}
		& svg {
			width: 2rem;
			height: 2rem;
		}
	}
	& input {
		cursor: pointer;
		width: 100%;
		height: 100%;
		text-align: center;
		border: none;
		background-color: transparent;
		&:focus {
			outline: 0;
		}
	}
`;

export default StyledDatePicker;
