import React from "react";
import "./Home.css";
import Header from "../../common/header/Header";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <section className='Home__wrapper'>
        <div className='mi_page_container'>
          <div className='Home__layout'>
            <div className='Home__content'>
              <h1 className='Home__title_fs'>Logistics beyond expectation</h1>
              <p className='Home__subtitle_fs'>
                Go beyond logistics, make the world go round and revolutionize
                business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
