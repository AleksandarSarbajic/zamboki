import News from "../Componenets/News/News";
import NewsHeading from "../Componenets/News/NewsHeading";
import ScrollToTop from "../assets/customHooks/useScrollToTop";
export default function NewsRoot() {
  return (
    <>
      <NewsHeading />
      <News />
      <ScrollToTop />
    </>
  );
}
