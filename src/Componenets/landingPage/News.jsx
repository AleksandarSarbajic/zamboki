import { Link } from "react-router-dom";
import classes from "../landingPage/News.module.scss";
import NewsItem from "./NewsItem";
import { FiChevronRight } from "react-icons/fi";
import { newsArray } from "../../assets/data/data";

export default function News() {
  return (
    <div className={`${classes.news} page`}>
      <div className={classes.newsContainer}>
        <h2> News and Events </h2>
        <Link to={"/"} className={classes.newsLink}>
          All events <FiChevronRight className={classes.newsIcon} />
        </Link>
      </div>
      <div className={classes.items}>
        {newsArray.map((item) => {
          return (
            <NewsItem
              key={item.id}
              img={item.image}
              title={item.heading}
              description={item.description}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}
