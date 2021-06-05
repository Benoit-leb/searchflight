import { Iflight } from "@models";
import StyledflightItem from "./StyledflightItem";
import Button from "@components/button/button";

const FlightItem = (props: { item: Iflight, included: any }) => {

  const { item } = props;
  return (
    <StyledflightItem>
      <div className="row around-xs top-xs">
        <div className="col-xs-2 col-sm-2">{item.flightNumber}</div>
        <div className="col-xs-6 col-sm-4">
          <div className="box">
            <span>{item.takeoff}</span>
            <span> - </span>
            <span>{item.landing} (local time)</span>
          </div>
          <div className="box">
            <div>{`${props.included[item.departureAirport].city} - ${props.included[item.departureAirport].name}`}</div>
            <div>{`${props.included[item.arrivalAirport].city} - ${props.included[item.arrivalAirport].name}`}</div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-3 last-xs center-xs start-sm">{parseInt(item.duration / 60)}h {item.duration % 60}min</div>
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