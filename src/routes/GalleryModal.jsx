import GalleryImagePreview from "../Componenets/gallery/modal/GalleryImagePreview";

import ScrollToTop from "../assets/customHooks/useScrollToTop";
export default function GalleryModal() {
  return (
    <>
      <ScrollToTop />
      <GalleryImagePreview />
    </>
  );
}
