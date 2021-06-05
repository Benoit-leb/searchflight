import { useState, FormEvent } from "react";
import StyledForm from "./StyledForm";
import Select from "@components/button/select";
import InputDatePicker from "@components/button/datepicker";
import Button from "@components/button/button";
import { Iform } from "@models";

const Form = (props: Iform) => {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [errorFrom, setErrorFrom] = useState(false);
  const [errorTo, setErrorTo] = useState(false);

  const testBeforeSubmit = (e: FormEvent) => {
    setErrorFrom(false);
    setErrorTo(false);
    e.preventDefault();
    e.stopPropagation();
    if (!from) {
      setErrorFrom(true);
      return;
    }
    if (!to) {
      setErrorTo(true);
      return;
    }
    props.onSubmit({ from, to });
  }

  return (
    <StyledForm>
      <form onSubmit={testBeforeSubmit}>
        <div className="row center-xs middle-xs">
          <div className="col-xs-12">
            <div className="row start-xs">
              <div className="col-xs-12 col-sm-4">
                <Select onChange={setFrom} list={props.from} label="From"></Select>
                {errorFrom && <div className="row center-xs">Please, select airports</div>}
              </div>
              <div className="col-xs-12 col-sm-4">
                <Select onChange={setTo} list={props.to} label="To"></Select>
                {errorTo && <div className="row center-xs">Please, select airports</div>}
              </div>
              <div className="col-xs-12 col-sm-4">
                <InputDatePicker label="Date" />
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