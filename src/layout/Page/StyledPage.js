import styled from "styled-components";
import { $ } from "@styles";

const StyledPage = styled.div`
	max-width: ${$.maxWidth};
	min-height: 100vh;
	margin: 0 1rem 3rem;
	@media (min-width: ${$.sm}) {
		margin: 0 auto 3rem;
	}
`;

export default StyledPage;
