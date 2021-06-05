import { PageProps } from "@core/types";
import { FC, useState, Fragment } from "react";
import axios from "axios";
import getProps from "@props/index";
import Form from "@components/form";
import List from "@components/list";

export const getServerSideProps = getProps;

type Props = PageProps<typeof getServerSideProps>;

const Index: FC<Props> = (props) => {

	const [flights, setFlights] = useState();

	/**
	 * 
	 * callback submit from form component
	 */
	const onSubmit = async (params: { from: string, to: string }) => {

		const result = (await axios.post("/api/flights/find/flight", params)).data.result;

		setFlights(result);

	};

	return (
		<Fragment>
			<Form to={props.data.to} from={props.data.from} onSubmit={onSubmit}></Form>
			<List data={flights} />
		</Fragment>
	);
};

export default Index;
