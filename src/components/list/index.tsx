import { Idata } from "@models";
import { FC } from "react";
import FlightItem from "@components/flightItem";

const List: FC<{ flights: Idata }> = (props) => {
  return (
    <div>
      {(props && props.flights) && props.flights.data.map((el, idx) => {
        return (
          <FlightItem key={`${el.flightNumber}-${idx}`} item={el} included={props.flights.included} />
        );
      })}
    </div>
  );
};

export default List;