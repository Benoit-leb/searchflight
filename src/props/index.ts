import { PropsContext, PropsResult } from "@core/types";

type Props = {};

type Context = PropsContext;
type Result = PropsResult<Props>;

const getProps = async (context: Context): Promise<Result> => {

	try {
		return { props: {} };
	} catch (err) {
		console.log("err :", err);
		return {
			props: { error: true },
		}
	}
};

export default getProps;
