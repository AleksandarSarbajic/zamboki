import About from "../Componenets/landingPage/AboutContainer";
import Hero from "../Componenets/landingPage/Hero";
import News from "../Componenets/landingPage/News";

export default function Root() {
  return (
    <>
      <Hero />
      <main>
        <News />
        <About />
      </main>
    </>
  );
}
