import classes from "../SinglePage/SinglePageLeft.module.scss";
/* eslint-disable react/prop-types */

export default function SinglePageLeft({ item }) {
  return (
    <section className={classes.container}>
      <p>{item.description}</p>
    </section>
  );
}
