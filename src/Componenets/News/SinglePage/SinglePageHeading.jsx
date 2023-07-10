/* eslint-disable react/prop-types */
import classes from "../SinglePage/SinglePageHeading.module.scss";

export default function SinglePageHeading({ item }) {
  const date = item.date.split("T");

  return (
    <div className={classes.container}>
      <h2>{item.heading}</h2>
      <div className={classes.timeBox}>
        <span className={classes["timeBox__Written"]}>{item.written}</span>
        <span className={classes["timeBox__Type"]}>{item.type}</span>
        <span className={classes["timeBox__New"]}>New</span>
        <span className={classes["timeBox__Time"]}>{date[0]}</span>
      </div>
    </div>
  );
}
