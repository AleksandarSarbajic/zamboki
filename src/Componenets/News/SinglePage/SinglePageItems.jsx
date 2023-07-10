/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import SinglePageItem from "./SinglePageItem";
import classes from "../SinglePage/SinglePageItems.module.scss";
export default function SinglePageItems({ items }) {
  const { id } = useParams();
  const filteredItems = items.filter((item) => item.id !== id);
  return (
    <section className={"page"}>
      <h3 className={classes.heading}>Other Posts</h3>
      <ul className={classes.list}>
        {filteredItems.map((item) => (
          <SinglePageItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
