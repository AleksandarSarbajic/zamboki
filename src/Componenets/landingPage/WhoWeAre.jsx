import classes from "../landingPage/WhoWeClasses.module.scss";

export default function WhoWeAre() {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h2>Who we are</h2>
        <p>
          In the darkest chapter of human history, the Holocaust stands as a
          haunting reminder of the atrocities committed against millions of
          innocent lives. While we cannot change the past, we can honor the
          memory of the victims by ensuring their stories are never forgotten.
        </p>
        <span>
          Our foundation, committed to preserving their legacies, serves as a
          beacon of hope, remembrance, and support for Holocaust survivors and
          their families.
        </span>
      </div>
      {/* <div className={classes.imageBox}>
        <img
          src="https://imageproxy.wolt.com/menu/menu-images/64229154ad35819c0a5f88b8/d9780cbc-cd3c-11ed-b868-e689808affde_pizza_pollo_feta.jpeg?w=300"
          alt="image of founders"
          className={classes.image}
        />
      </div> */}
      <div className={classes.quoteBox}>
        <div className={classes.flex}>
          <span className={classes.quot}>&ldquo; </span>
          <span className={classes.line}></span>
        </div>
        <blockquote className={classes.quote}>
          &ldquo; Everybody, every human being has the obligation to contribute
          somehow to this world. &rdquo;
        </blockquote>
        <p className={classes.author}>- Edith Carter</p>
        <span className={`${classes.quot} ${classes.quotRight}`}>&rdquo;</span>
      </div>
    </div>
  );
}
