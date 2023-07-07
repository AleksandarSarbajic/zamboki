import { Outlet } from "react-router-dom";
import Nav from "../Componenets/UI/Nav";
import Footer from "../Componenets/UI/Footer";

export default function RootLayout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
