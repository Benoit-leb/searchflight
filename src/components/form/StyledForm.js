import styled from "styled-components";
import { $ } from "@styles";

const StyledForm = styled.div`
	position: relative;
	background-color: rgb(240, 240, 240);
	padding: 3rem;
	padding-bottom: 5rem;
	margin-top: 5rem;
	text-decoration: none;
	border: none;
	border-radius: 8px;
	@media (min-width: ${$.sm}) {
		padding: 8rem 5rem;
	}
	&:focus {
		outline: 0;
	}
	& .form-button {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translate(-50%, 50%);
	}
`;

export default StyledForm;
