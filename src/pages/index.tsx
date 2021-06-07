import { PageProps } from "@core/types";
import { FC, useState, Fragment } from "react";
import { Iflight } from "@models";
import axios from "axios";
import getProps from "@props/index";
import Form from "@components/form";
import FlightItem from "@components/flightItem";

export const getServerSideProps = getProps;

type Props = PageProps<typeof getServerSideProps>;

const Index: FC<Props> = (props) => {

	const [results, setResults] = useState();

	/**
	 * 
	 * callback submit from form component
	 */
	const onSubmit = async (params: { from: string, to: string, date: Date }) => {

		const results = (await axios.post("/api/flights/find/flight", params)).data.results;

		setResults(results);

	};

	return (
		<Fragment>
			<Form onSubmit={onSubmit}></Form>
			<div>
				{results && results.data.map((el: Iflight, idx: number) => {
					return (
						<FlightItem key={`${el.flightNumber}-${idx}`} item={el} included={results.included} />
					);
				})}
			</div>
		</Fragment>
	);
};

export default Index;
