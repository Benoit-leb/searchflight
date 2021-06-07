export type Iinput = {
  onChange: (value: string) => void;
  label: string;
  value: string;
  id: string;
};

export type IdatePicker = {
  label: string;
  onChange: (value: Date) => void;
  value: Date;
  id: string;
}

export type Ibutton = {
  label: string;
  type: "button" | "submit" | "reset" | undefined;
  class?: string;
  onSubmit?: (() => void) | undefined;

};

export type Iflight = {
  id: string;
  flightNumber: string;
  airline: string;
  takeoff: string;
  landing: string;
  duration: number;
  price: number;
  currencyCode: string;
  departureAirport: string;
  arrivalAirport: string;
}

export type Iincluded = {
  [key: string]: any
}

export type Idata = {
  data: Iflight[];
  included: Iincluded
}

export type Iform = {
  onSubmit: (params: { from: string, to: string, date: Date }) => void;
};
