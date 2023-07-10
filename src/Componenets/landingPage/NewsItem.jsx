/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import classes from "../landingPage/NewsItem.module.scss";

export default function NewsItem({ img, title, description, id }) {
  return (
    <div className={classes.item}>
      <img src={img} alt={title} className={classes.itemImg} />
      <div className={classes.itemInner}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={classes.linkContainer}>
        <Link to={`/news/${id}`} className={classes.link}>
          Read More
        </Link>
      </div>
    </div>
  );
}
