import Footer from "../../common/footer/Footer";
import Header from "../../common/header/Header";
import WebDefaults from "../webdefaults";
import "./Pagelayout.css";
import { Outlet } from "react-router-dom";

export default function PageLayout() {
  return (
    <div className='Pagelayout__main_wrapper'>
      <WebDefaults />
      <Header />
      <main className='Pagelayout__body_container'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
