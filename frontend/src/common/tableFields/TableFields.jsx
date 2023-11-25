import React from "react";
import "./TableFields.css";

// Image
import Arrow from "/icons/arrow.svg";

export default function TableFields({ type, title, data, airline, from, to }) {
  return (
    <React.Fragment>
      {type === "data" && <CartingTableData title={title} data={data} />}
      {type === "location" && (
        <DestinationTableData title={title} from={from} to={to} />
      )}
      {type === "airline" && <AirlineTableData airline={airline} data={data} />}
      {type === "flight" && (
        <FlightTableData title={title} airline={airline} data={data} />
      )}
    </React.Fragment>
  );
}

// Table Data Info
function CartingTableData({ title, data }) {
  return (
    <div className="CartingTableData__wrap">
      <p className="mi_tiny TableData__heading">{title}</p>
      <h1 className="mi_small TableData__bodyInfo">{data}</h1>
    </div>
  );
}

// Table Destination Info
function DestinationTableData({ title, from, to }) {
  return (
    <div className="CartingTableData__wrap">
      <p className="mi_tiny TableData__heading">{title}</p>
      <div className="DestinationTableData__location_wrap">
        <h1 className="mi_small TableData__bodyInfo">{from}</h1>
        <img src={Arrow} alt="Arrow" />
        <h1 className="mi_small TableData__bodyInfo">{to}</h1>
      </div>
    </div>
  );
}

// Table Airline Info
function AirlineTableData({ data }) {
  return (
    <div className="CartingTableData__wrap">
      <p className="mi_tiny TableData__heading">{title}</p>
      <h1 className="mi_small TableData__bodyInfo">{data}</h1>
    </div>
  );
}

// Table Flight Info
function FlightTableData({ title, data }) {
  return (
    <div className="FlightTableData__wrap">
      <p className="mi_tiny TableData__heading">{title}</p>
      <div className="FlightTableData__flight_wrap">
        <h1 className="mi_small TableData__bodyInfo">{data}</h1>
      </div>
    </div>
  );
}
