import VideoPlayer from "../Componenets/UI/VideoPlayer";
import About from "../Componenets/landingPage/AboutContainer";
import Hero from "../Componenets/landingPage/Hero";
// import News from "../Componenets/landingPage/News";

import ScrollToTop from "../assets/customHooks/useScrollToTop";
export default function Root() {
  return (
    <>
      <Hero />
      <main>
        {/* <News /> */}
        <About />
        <VideoPlayer
          heading="Dixi ne zna da igra drustvene igre bez youtuba"
          text="Dixi je tip osobe koji dodje tako sto pogleda tutorial kako se sipa voda u casu"
          src="https://www.youtube.com/embed/MWq1gTJohpM?si=S2bQX64sc-ODw9_e"
        />
      </main>
      <ScrollToTop />
    </>
  );
}
