import styled from "styled-components";

const StyleButton = styled.div`
	& button {
		cursor: pointer;
		background-color: ${({ theme }) => theme.brandColor};
		color: ${({ theme }) => theme.textBrand};
		text-decoration: none;
		border: none;
		border-radius: 8px;
		padding: 2rem;
		font-size: 2rem;
		font-weight: 700;
		&:focus {
			outline: 0;
		}
	}
	&.small {
		& button {
			font-size: 1.5rem;
			font-weight: 400;
			padding: 1rem;
		}
	}
`;

export default StyleButton;
