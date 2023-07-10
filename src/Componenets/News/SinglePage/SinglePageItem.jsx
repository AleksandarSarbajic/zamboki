import { Link } from "react-router-dom";
import classes from "../SinglePage/SinglePageItems.module.scss";

/* eslint-disable react/prop-types */
export default function SinglePageItem({ item }) {
  const date = item.date.split("T");
  const text = item.summary.slice(0, -150);

  return (
    <Link to={`/news/${item.id}`} className={classes.link}>
      <img src={item.image} alt={item.alt} className={classes["link__img"]} />
      <div className={classes["link__box"]}>
        <span className={classes["link__date"]}>{date[0]}</span>
        <h3 className={classes["link__title"]}>{item.heading}</h3>
        <p className={classes["link__text"]}>{text}...</p>
        <span className={classes["link__type"]}>{item.type} </span>
      </div>
    </Link>
  );
}
