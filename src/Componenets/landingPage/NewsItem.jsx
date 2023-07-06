/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import classes from "../landingPage/NewsItem.module.scss";
import Skeleton from "react-loading-skeleton";
export default function NewsItem({ img, title, description, link }) {
  const falser = false;
  return (
    <div className={classes.item}>
      <img src={img} alt={title} className={classes.itemImg} />
      <div className={classes.itemInner}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={classes.linkContainer}>
        <Link to={link} className={classes.link}>
          Read More
        </Link>
      </div>
    </div>
  );
}
