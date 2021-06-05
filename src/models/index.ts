export type Iairport = {
  name: string;
  city: string;
  value: string;
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

export type Iform = {
  from: Iairport[];
  to: Iairport[];
  onSubmit: (params: { from: string, to: string }) => void;
};

export type Iselect = {
  list: Iairport[];
  onChange: (value: string) => void;
  label: string;
};

export type Ibutton = {
  label: string;
  type: "button" | "submit" | "reset" | undefined;
  class?: string;
  onSubmit?: ((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined

};


export type IdatePicker = {
  label: string
}