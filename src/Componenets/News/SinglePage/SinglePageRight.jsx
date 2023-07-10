/* eslint-disable react/prop-types */
import classes from "../SinglePage/SinglePageRight.module.scss";
import { newsArray } from "../../../assets/data/data";
import SinglePageRightItem from "./SinglePageRightItem";

export default function SinglePageRight({ item }) {
  const filteredNews = newsArray.filter((news) => news.id !== item.id);
  console.log(filteredNews);
  return (
    <aside>
      <h2 className={classes.title}>Similiar Posts</h2>
      <ul className={classes.list}>
        {newsArray
          .filter((news) => news.id !== item.id)
          .map((item, index) => {
            return <SinglePageRightItem key={item.id} item={item} i={index} />;
          })}
      </ul>
    </aside>
  );
}
