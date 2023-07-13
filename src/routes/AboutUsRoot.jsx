import AboutUsContact from "../Componenets/aboutUS/AbouUsContact";
import AboutUsFounder from "../Componenets/aboutUS/AboutUsFounder";
import AboutUs from "../Componenets/aboutUS/aboutUs";
import ScrollToTop from "../assets/customHooks/useScrollToTop";

export default function AboutUsRoot() {
  return (
    <>
      <ScrollToTop />
      <AboutUs />
      <AboutUsFounder />
      <AboutUsContact />
    </>
  );
}
