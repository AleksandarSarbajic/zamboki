import { Outlet } from "react-router-dom";
import GalleryComponent from "../Componenets/gallery/Gallery";

export default function Gallery() {
  return (
    <>
      <GalleryComponent />
      <Outlet />
    </>
  );
}
