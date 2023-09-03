import VideoPlayer from "../Componenets/UI/VideoPlayer";
import AboutUsContact from "../Componenets/aboutUS/AbouUsContact";
import AboutUsFounder from "../Componenets/aboutUS/AboutUsFounder";
import AboutUs from "../Componenets/aboutUS/aboutUs";
import ScrollToTop from "../assets/customHooks/useScrollToTop";

export default function AboutUsRoot() {
  return (
    <>
      <ScrollToTop />
      <AboutUs />
      <VideoPlayer
        heading="Dixi ne zna da igra drustvene igre bez youtuba"
        src="https://www.youtube.com/embed/MWq1gTJohpM?si=S2bQX64sc-ODw9_e"
      />
      <AboutUsFounder />
      <AboutUsContact />
    </>
  );
}
