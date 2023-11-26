import "./ReviewShipment.css";
import TableFields from "../../common/tableFields/TableFields";

export default function ReviewShipment() {
  return (
    <div className='ModalForm__container'>
      <article className='Input__row_section'>
        <hgroup className='Input__title_label_space'>
          <h2 className='mi_note'>AWB & Flight Info</h2>
        </hgroup>

        <div className='Input__three_column '>
          <div className='Input__col_field'>
            <TableFields type='data' title='AWB Number' data='157-46078104' />
          </div>
          <div className='Input__col_field'>
            <TableFields type='flight' title='Airline' data='QATAR' />
          </div>
          <div className='Input__col_field'>
            {" "}
            <TableFields type='flight' title='Flight Number' data='QR40' />
          </div>
        </div>
        <div className='Input__three_column border_added_bottom'>
          <div className='Input__col_field'>
            <TableFields
              type='data'
              title='Flight date'
              data='16 july 22 | 22:30'
            />
          </div>
          <div className='Input__col_field'>
            <TableFields type='data' title='Total Price' data='Rs 12,000' />
          </div>
          <div className='Input__col_field'></div>
        </div>
      </article>

      <article className='Input__row_section border_added_bottom'>
        <hgroup className='Input__title_label_space'>
          <h2 className='mi_note'>Cargo details</h2>
        </hgroup>

        <div className='Input__three_column'>
          <div className='Input__col_field'>
            <TableFields type='data' title='Gross Weight' data='200 Kg' />
          </div>
          <div className='Input__col_field'>
            <TableFields type='data' title='No of ULD' data='4' />
          </div>
          <div className='Input__col_field'>
            <TableFields type='data' title='Expected Pieces' data='2' />
          </div>
        </div>
        <div className='Input__three_column'>
          <div className='Input__col_field'>
            <TableFields type='data' title='Country' data='Paris' />
          </div>
          <div className='Input__col_field'>
            <TableFields
              type='data'
              title='Address of Destination'
              data='DOH'
            />
          </div>
          <div className='Input__col_field'>
            <TableFields
              type='data'
              title='Commodity / Commodity Type'
              data='9999 / GCR'
            />
          </div>
        </div>
      </article>

      <article className='Input__row_section '>
        <hgroup className='Input__title_label_space'>
          <h2 className='mi_note'>Shipment Handling Info</h2>
        </hgroup>
        <div className='Input__three_column'>
          <div className='Input__col_field'>
            <TableFields type='data' title='SHC' data='GEN' />
          </div>
          <div className='Input__col_field'>
            <TableFields type='data' title='SHC Weight' data='200 kg' />
          </div>
          <div className='Input__col_field'></div>
        </div>
        {/* <div className='Input__three_column'>
          <div className='Input__col_field'>
            <TableFields type='data' title='SHC - 2' data='SHC Code 2' />
          </div>
          <div className='Input__col_field'>
            <TableFields type='data' title='SHC Weight' data='100 kg' />
          </div>
          <div className='Input__col_field'></div> 
        </div> */}
      </article>
    </div>
  );
}
