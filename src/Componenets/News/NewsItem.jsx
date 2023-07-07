/* eslint-disable react/prop-types */
import classes from "../News/NewsItem.module.scss";
import { Link } from "react-router-dom";
export default function NewsItem({ item }) {
  const date = item.date.split("T");
  const text = item.summary.slice(0, -80);
  return (
    <div className={classes.newsItem}>
      <div className={classes.upperBox}>
        <div>
          <h3>{item.heading}</h3>
        </div>
        <div>
          <img src={item.image} alt={item.heading} />
        </div>
      </div>
      <div className={classes.lowerBox}>
        <span className={classes["lowerBox__Heading"]}>Informed Summary</span>
        <p className={classes["lowerBox__Summary"]}>{text}...</p>
        <div>
          <Link to={item.id} className={classes["lowerBox__Link"]}>
            Show More
          </Link>
        </div>
      </div>
      <div className={classes.timeBox}>
        <span className={classes["timeBox__New"]}>New</span>
        <span className={classes["timeBox__Type"]}>{item.type}</span>
        <span className={classes["timeBox__Time"]}>{date[0]}</span>
      </div>
    </div>
  );
}
