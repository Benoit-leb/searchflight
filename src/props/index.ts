import { PropsContext, PropsResult } from "@core/types";
import { Iairport } from "@models";

type Props = {
	data: {
		from: Iairport[];
		to: Iairport[];
		list: any;
	}
};

type Context = PropsContext;
type Result = PropsResult<Props>;

const getProps = async (context: Context): Promise<Result> => {

	try {
		const res = await fetch(`http://${context.req.headers.host}/api/flights/getAirports`);
		const data = await res.json();

		return {
			props: { data, error: false },
		}
	} catch (err) {
		console.log("err :", err);
		return {
			props: { error: true },
		}
	}
};

export default getProps;
