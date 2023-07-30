import { useParams } from "react-router-dom";
import SingleHeader from "../Componenets/News/SinglePage/SingleHeader";
import SinglePageHeading from "../Componenets/News/SinglePage/SinglePageHeading";

import { newsArray } from "../assets/data/data";
import SinglePageContainer from "../Componenets/News/SinglePage/SinglePageContainer";
import SinglePageItems from "../Componenets/News/SinglePage/SinglePageItems";
import ScrollToTop from "../assets/customHooks/useScrollToTop";
export default function SingleNewsPage() {
  const { id } = useParams();

  const item = [...newsArray].find((item) => item.id === id);

  return (
    <>
      <SingleHeader item={item} />
      <SinglePageHeading item={item} />
      <SinglePageContainer item={item} />
      <SinglePageItems items={newsArray} />
      <ScrollToTop />
    </>
  );
}
