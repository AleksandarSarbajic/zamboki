/* eslint-disable react/prop-types */

import classes from "../SinglePage/SingleHeader.module.scss";
export default function SingleHeader({ item }) {
  return (
    <header className={classes.section}>
      <img src={item.image} alt={item.heading} className={classes.img} />
    </header>
  );
}
