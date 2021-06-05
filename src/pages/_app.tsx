import { AppProps } from "next/app";
import { FC } from "react";
import "@styles/css/_index.css";
import Page from "@layout/Page";

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
	return (
		<Page>
			<Component {...pageProps} />
		</Page>
	);
};

export default App;
