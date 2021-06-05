import { Iflight } from "@models";
import FlightItem from "@components/flightItem";

const List = (props: { data: { list: Iflight[] | undefined, included: any } }) => {
  return (
    <div>
      {(props.data && props.data.list) && props.data.list.map((el, idx) => {
        return (
          <FlightItem key={`${el.flightNumber}-${idx}`} item={el} included={props.data.included} />
        );
      })}
    </div>
  );
};

export default List;