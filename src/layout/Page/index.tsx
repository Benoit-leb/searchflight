import React, { FC } from "react";
import { themes } from "@styles";
import GlobalStyle from "./GlobalStyle";
import ResetStyle from "./ResetStyle";
import StyledPage from "./StyledPage";
import { ThemeProvider } from "styled-components";

const Page: FC<any> = (props) => {
	return (
		<React.Fragment>
			<React.StrictMode>
				<ThemeProvider theme={themes.lightTheme}>
					<ResetStyle />
					<GlobalStyle />
					<StyledPage>
						{props.children}
					</StyledPage>
				</ThemeProvider>
			</React.StrictMode>
		</React.Fragment>
	);
};

export default Page;
