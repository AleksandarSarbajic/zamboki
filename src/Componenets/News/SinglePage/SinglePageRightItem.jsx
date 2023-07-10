/* eslint-disable react/prop-types */
import classes from "../SinglePage/SinglePageRight.module.scss";

import { Link } from "react-router-dom";

export default function SinglePageRightItem({ item, i }) {
  const date = item.date.split("T");

  return (
    <li className={classes.item}>
      <Link to={`/news/${item.id}`} className={classes.link}>
        <span className={classes["link__number"]}>{i + 1}</span>
        <div>
          <h4 className={classes["link__heading"]}>{item.heading}</h4>
          <span className={classes["link__type"]}>{item.type}</span>
          <span className={classes["link__date"]}>{date[0]}</span>
        </div>
      </Link>
    </li>
  );
}
