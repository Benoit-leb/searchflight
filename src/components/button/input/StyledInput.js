import styled from "styled-components";
import { $ } from "@styles";

const StyledSelect = styled.div`
	color: ${({ theme }) => theme.text};
	text-transform: uppercase;
	border: none;
	border-radius: 8px;
	margin-bottom: 2rem;
	& label {
		color: #396073;
		display: inline-block;
		font-size: 2rem;
		@media (min-width: ${$.sm}) {
			margin-bottom: 1rem;
		}
	}
	& .block {
		background-color: #ffffff;
		width: 100%;
		height: 5rem;
		padding: 1rem !important;
		border-radius: 8px;
		border-width: 1px;
		border-color: #bebebe;
		border-style: solid;
		@media (min-width: ${$.sm}) {
			width: 80%;
		}
		& svg {
			width: 2rem;
			height: 2rem;
		}
	}
	& input {
		width: calc(100% - 4rem);
		height: 100%;
		border: none;
		&:focus {
			outline: 0;
		}
	}
`;

export default StyledSelect;
