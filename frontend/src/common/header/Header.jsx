import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

// Image
import Logo from "../../assets/logos/airline-logo.svg";

export default function Header() {
  const [headerScroll, setheaderScroll] = React.useState(false);

  window.addEventListener("scroll", onScroll);

  function onScroll() {
    if (window.scrollY >= 100) {
      setheaderScroll(true);
    } else {
      setheaderScroll(false);
    }
  }

  return (
    <React.Fragment>
      <header
        id='header'
        className={`Header__header_wrap ${headerScroll && "bg_added"}`}
      >
        <div className='mi_page_container'>
          <nav className='Header__navbar'>
            <article className='Header__navbar_left'>
              <Link to='/' className='brand_logo_link'>
                <img src={Logo} alt='Logo' />
              </Link>

              <div className='nav__search_bar_space'>
                <div className='nav__search_bar'>
                  <input type='text' placeholder='Search your cargo' />
                  <div className='nav__search_icon'>
                    <i className='bx bx-search'></i>
                  </div>
                </div>
              </div>
            </article>
            <article className='Header__navbar_right'>
              <Link to={"/booking-cargo"} className='mi_btn mi_btn_primary'>
                Book Cargo
              </Link>

              <div className='mi_btn_round'>
                <i className='bx bx-user'></i>
              </div>
            </article>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
}
