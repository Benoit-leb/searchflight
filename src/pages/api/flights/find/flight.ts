import results from "../flights.json";
import { NextApiResponse, NextApiRequest } from "next";

/**
 *get all flights by from / to
 * @param {
 * "from": string,
 * "to": string
 * "date": Date
*/
export default (req: NextApiRequest, res: NextApiResponse) => {
  const { from, to, date } = req.body;


  return res.status(200).json({
    results
  })
};