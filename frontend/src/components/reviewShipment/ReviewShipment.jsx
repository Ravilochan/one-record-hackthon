import React from "react";
import "./ReviewShipment.css";
import TableFields from "../../common/tableFields/TableFields";

export default function ReviewShipment() {
  return (
    <React.Fragment>
      <div className="ModalForm__container">
        <article className="Input__row_section">
          <hgroup className="Input__title_label_space">
            <h2 className="mi_note">AWB & Flight Info</h2>
          </hgroup>

          <div className="Input__three_column ">
            <div className="Input__col_field">
              <TableFields type="data" title="AWB Number" data="576-74637284" />
            </div>
            <div className="Input__col_field">
              <TableFields type="flight" title="Airline" data="QATAR" />
            </div>
            <div className="Input__col_field">
              {" "}
              <TableFields
                type="flight"
                title="Flight Number"
                data="GB-74637284"
              />
            </div>
          </div>
          <div className="Input__three_column border_added_bottom">
            <div className="Input__col_field">
              <TableFields
                type="data"
                title="Flight date"
                data="16 july 22 | 22:30"
              />
            </div>
            <div className="Input__col_field">
              <TableFields type="data" title="Total Price" data="Rs 12,000" />
            </div>
            <div className="Input__col_field"></div>
          </div>
        </article>

        <article className="Input__row_section border_added_bottom">
          <hgroup className="Input__title_label_space">
            <h2 className="mi_note">Cargo details</h2>
          </hgroup>

          <div className="Input__three_column">
            <div className="Input__col_field">
              <TableFields type="data" title="Gross Weight" data="400 Kg" />
            </div>
            <div className="Input__col_field">
              <TableFields
                type="data"
                title="Chargeable Weight"
                data="500 Kg"
              />
            </div>
            <div className="Input__col_field">
              <TableFields type="data" title="Expected Pieces" data="10" />
            </div>
          </div>
          <div className="Input__three_column">
            <div className="Input__col_field">
              <TableFields type="data" title="Country" data="Chennai" />
            </div>
            <div className="Input__col_field">
              <TableFields
                type="data"
                title="Address of Desitination"
                data="Hong Kong"
              />
            </div>
            <div className="Input__col_field">
              <TableFields
                type="data"
                title="Comodity / Commodity Type"
                data="Pharma / Pharma type"
              />
            </div>
          </div>
        </article>

        <article className="Input__row_section ">
          <hgroup className="Input__title_label_space">
            <h2 className="mi_note">Shipment Handling Info</h2>
          </hgroup>
          <div className="Input__three_column">
            <div className="Input__col_field">
              <TableFields type="data" title="SHC - 1" data="SHC Code 1" />
            </div>
            <div className="Input__col_field">
              <TableFields type="data" title="SHC Weight" data="100 kg" />
            </div>
            <div className="Input__col_field"></div>
          </div>
          <div className="Input__three_column">
            <div className="Input__col_field">
              <TableFields type="data" title="SHC - 2" data="SHC Code 2" />
            </div>
            <div className="Input__col_field">
              <TableFields type="data" title="SHC Weight" data="100 kg" />
            </div>
            <div className="Input__col_field"></div>
          </div>
        </article>
      </div>
    </React.Fragment>
  );
}
