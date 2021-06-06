import { FC, useState, FormEvent } from "react";
import StyledForm from "./StyledForm";
import Input from "@components/button/input";
import InputDatePicker from "@components/button/datepicker";
import Button from "@components/button/button";
import { Iform } from "@models";

const Form: FC<Iform> = (props) => {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [date, setDate] = useState();
  const [errorFrom, setErrorFrom] = useState(false);
  const [errorTo, setErrorTo] = useState(false);

  const testBeforeSubmit = (e: FormEvent) => {
    setErrorFrom(false);
    setErrorTo(false);
    e.preventDefault();
    e.stopPropagation();

    // check if city is ok
    if (!from || from.toLowerCase().replaceAll(" ", "").replaceAll("-", "").trim() !== "paris") {
      setErrorFrom(true);
      return;
    }

    if (!to || to.toLowerCase().replaceAll(" ", "").replaceAll("-", "").trim() !== "newyork") {
      setErrorTo(true);
      return;
    }
    props.onSubmit({ from, to, date });
  }

  return (
    <StyledForm>
      <form onSubmit={testBeforeSubmit}>
        <div className="row center-xs middle-xs">
          <div className="col-xs-12">
            <div className="row start-xs">
              <div className="col-xs-12 col-sm-4">
                <Input onChange={setFrom} value={from} label="From"></Input>
                {errorFrom && <div className="row center-xs">Please, write Paris</div>}
              </div>
              <div className="col-xs-12 col-sm-4">
                <Input onChange={setTo} value={to} label="To"></Input>
                {errorTo && <div className="row center-xs">Please, write New york</div>}
              </div>
              <div className="col-xs-12 col-sm-4">
                <InputDatePicker label="Date" onChange={(date: Date) => setDate(date)} />
              </div>
            </div>
          </div>
        </div>
        <Button label="Search" type="submit" class="form-button" />
      </form>
    </StyledForm>
  );
};

export default Form;