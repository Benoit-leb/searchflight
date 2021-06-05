import result from "../flights.json";
import { NextApiResponse, NextApiRequest } from "next";

/**
 *get all flights by from / to
 * @param {
 * "from": string,
 * "to": string
*/
export default (req: NextApiRequest, res: NextApiResponse) => {
  const { from, to } = req.body;

  const list = result.data.filter((el) =>
    el.departureAirport === from &&
    el.arrivalAirport === to
  );

  return res.status(200).json({
    result: { list, included: result.included }
  })
};