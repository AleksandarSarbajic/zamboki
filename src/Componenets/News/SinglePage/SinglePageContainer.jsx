import SinglePageLeft from "./SinglePageLeft";
import SinglePageRight from "./SinglePageRight";
/* eslint-disable react/prop-types */

export default function SinglePageContainer({ item }) {
  return (
    <main className="page news">
      <SinglePageLeft item={item} />
      <SinglePageRight item={item} />
    </main>
  );
}
