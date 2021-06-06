import { PageProps } from "@core/types";
import { FC, useState, Fragment } from "react";
import axios from "axios";
import getProps from "@props/index";
import Form from "@components/form";
import List from "@components/list";

export const getServerSideProps = getProps;

type Props = PageProps<typeof getServerSideProps>;

const Index: FC<Props> = (props) => {

	const [results, setResults] = useState();

	/**
	 * 
	 * callback submit from form component
	 */
	const onSubmit = async (params: { from: string, to: string }) => {

		const results = (await axios.post("/api/flights/find/flight", params)).data.results;

		setResults(results);

	};

	return (
		<Fragment>
			<Form onSubmit={onSubmit}></Form>
			<List flights={results} />
		</Fragment>
	);
};

export default Index;
