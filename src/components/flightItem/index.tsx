import { FC } from "react";
import { Iflight } from "@models";
import { Iincluded } from "@models";
import StyledflightItem from "./StyledflightItem";
import Button from "@components/button/button";

const FlightItem: FC<{ item: Iflight, included: Iincluded }> = (props) => {

  const { item } = props;
  const { included } = props;
  return (
    <StyledflightItem>
      <div className="row around-xs top-xs">
        <div className="col-xs-12 col-sm-2">
          <div>{included[item.airline].name}</div>
          <div>{item.flightNumber}</div>
        </div>
        <div className="col-xs-8 col-sm-4">
          <div className="box">
            <span>{item.takeoff}</span>
            <span> - </span>
            <span>{item.landing} (local time)</span>
          </div>
          <div className="box">
            <div>{`${included[item.departureAirport].city} - ${included[item.departureAirport].name}`}</div>
            <div>{`${included[item.arrivalAirport].city} - ${included[item.arrivalAirport].name}`}</div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-3 last-xs start-xs">{parseInt(item.duration / 60)}h {item.duration % 60}min</div>
        <div className="col-xs-4 col-sm-3 last-sm">
          <div className="box">
            <div className="row between-sm center-xs">
              {item.price / 100} {item.currencyCode}
              <Button
                label="Select flight"
                type="button"
                class="small"
                onSubmit={() => { console.log("flight=", item) }} />
            </div>
          </div>
        </div>
      </div>
    </StyledflightItem>
  );
};

export default FlightItem;