import styled from "styled-components";
import { $ } from "@styles";

const StyledflightItem = styled.div`
	animation: slide-to-top 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	position: relative;
	background-color: rgb(240, 240, 240);
	border: solid 1px ${({ theme }) => theme.brandColor};
	padding: 1rem;
	margin-top: 5rem;
	border-radius: 8px;
	@media (min-width: ${$.sm}) {
		padding: 3rem;
	}
`;

export default StyledflightItem;
