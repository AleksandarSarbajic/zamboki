import { FiChevronDown } from "react-icons/fi";
import classes from "../News/News.module.scss";
import NewsItem from "./NewsItem";

import { newsArray } from "../../assets/data/data";
export default function News() {
  return (
    <section className={` ${classes.container}`} id="link">
      <button className={classes.btn}>
        Today <FiChevronDown className={classes.btnIcon} />
      </button>

      {newsArray.map((item, index) => (
        <NewsItem key={index} item={item} />
      ))}
    </section>
  );
}
