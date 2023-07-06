import { Outlet } from "react-router-dom";
import Nav from "../Componenets/UI/Nav";

export default function RootLayout() {
  return (
    <>
      <Nav />
      <Outlet />
      {/* <footer>Dsdsd</footer> */}
    </>
  );
}
