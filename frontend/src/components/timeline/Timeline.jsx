import React from "react";
import "./Timeline.css";

export default function Timeline({ layout, popup }) {
  return (
    <div className={`Timeline__container ${popup && "padding_none"}`}>
      {popup ? null : (
        <h1 className='mi_body Timeline__title_fs'>Cargo timeline</h1>
      )}

      {layout === "agent" && (
        <div className='Timeline__flow_card_list'>
          <TimelineFlowCard
            title='Shipment Info Added'
            date='26 Nov 2023 | 04:30'
            icon='fa-solid fa-file-lines'
            status='completed'
          />

          <TimelineFlowCard
            title='Payment Complete'
            date='26 Nov 2023 | 4:35'
            icon='fa-solid fa-file-circle-check'
            status='completed'
          />

          <TimelineFlowCard
            title='Flight Departed'
            date='26 NOv 2023 | 22:30'
            icon='fa-solid fa-truck'
            status='active'
          />

          <TimelineFlowCard
            title='Flight Arrived'
            icon='fa-solid fa-box-archive'
            status='pending'
          />
          <TimelineFlowCard
            title='NFD - Pickup'
            icon='fa-solid  fa-clock'
            status='pending'
          />

          <TimelineFlowCard
            title='Delivery - DLV'
            icon='fa-solid fa-file-invoice'
            status='pending'
          />
        </div>
      )}
    </div>
  );
}

function TimelineFlowCard({ title, date, icon, status }) {
  return (
    <div className='TimelineFlowCard__wrapper'>
      <div className={`TimelineFlowCard__icon ${status}`}>
        <i className={icon}></i>
      </div>
      <div className='TimelineFlowCard__details'>
        <div className='Flow__header'>
          <h1 className='mi_small flow__heading_fs'>{title}</h1>
        </div>
        <p className='mi_tiny flow__date_fs'>{date ? date : "-"}</p>
      </div>
    </div>
  );
}
