import { Outlet } from "react-router-dom";
import GalleryComponent from "../Componenets/gallery/Gallery";
import ScrollToTop from "../assets/customHooks/useScrollToTop";

export default function Gallery() {
  return (
    <>
      <GalleryComponent />
      <Outlet />
      <ScrollToTop />
    </>
  );
}
