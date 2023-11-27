import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shered/Navbar/Navbar";
import Footer from "../Components/Shered/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
