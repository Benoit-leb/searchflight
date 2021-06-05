import { NextApiResponse, NextApiRequest } from "next";
import result from "./flights.json";
import { Iairport } from "@models";

/**
 * 
 * filter airports by departure and arrival
*/
export default (req: NextApiRequest, res: NextApiResponse) => {
  const airports = result.data.map((el) => { return { departureAirport: el.departureAirport, arrivalAirport: el.arrivalAirport } });

  const from: Array<Iairport> = [];

  const to: Array<Iairport> = [];

  const list = result.included;

  // only different item
  airports.forEach((el) => {
    if (!from.find((item) => item.value === el.departureAirport)) {
      list[el.departureAirport].value = el.departureAirport;
      from.push(list[el.departureAirport])
    }
    if (!to.find((item) => item.value === el.arrivalAirport)) {
      list[el.arrivalAirport].value = el.arrivalAirport;
      to.push(list[el.arrivalAirport])
    }
  })

  return res.status(200).json({
    from,
    to,
    ref: list
  })
}

