import VideoPlayer from "../Componenets/UI/VideoPlayer";
import About from "../Componenets/landingPage/AboutContainer";
import Hero from "../Componenets/landingPage/Hero";
import News from "../Componenets/landingPage/News";

import ScrollToTop from "../assets/customHooks/useScrollToTop";
export default function Root() {
  return (
    <>
      <Hero />
      <main>
        {/* <News /> */}
        <About />
        <VideoPlayer />
      </main>
      <ScrollToTop />
    </>
  );
}
