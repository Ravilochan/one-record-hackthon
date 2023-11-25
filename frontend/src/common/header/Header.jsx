import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

// Image
import Logo from "/logos/airline-logo.svg";

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
        id="header"
        class={`Header__header_wrap ${headerScroll && "bg_added"}`}
      >
        <div class="mi_page_container">
          <nav class="Header__navbar">
            <article class="Header__navbar_left">
              <Link to="/" class="brand_logo_link">
                <img src={Logo} alt="Logo" />
              </Link>

              <div className="nav__search_bar_space">
                <div className="nav__search_bar">
                  <input type="text" placeholder="Search your cargo" />
                  <div className="nav__search_icon">
                    <i class="bx bx-search"></i>
                  </div>
                </div>
              </div>
            </article>
            <article class="Header__navbar_right">
              <Link to={"/booking-cargo"} class="mi_btn mi_btn_primary">
                Book Cargo
              </Link>

              <div class="mi_btn_round">
                <i class="bx bx-user"></i>
              </div>
            </article>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
}
