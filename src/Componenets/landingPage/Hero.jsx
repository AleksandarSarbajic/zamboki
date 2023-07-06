import classes from "../landingPage/Hero.module.scss";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function Hero() {
  const [animationClass, setAnimationClass] = useState({
    heading: false,
    description: false,
    button: false,
  });
  useEffect(() => {
    setTimeout(() => {
      setAnimationClass((s) => {
        return {
          ...s,
          heading: true,
        };
      });
    }, 300);
    setTimeout(() => {
      setAnimationClass((s) => {
        return {
          ...s,
          description: true,
        };
      });
    }, 800);
    setTimeout(() => {
      setAnimationClass((s) => {
        return {
          ...s,
          button: true,
        };
      });
    }, 1200);
  });

  return (
    <header className={`${classes.hero} page`}>
      <div className={classes.text}>
        <h1
          className={`${classes.textHeading} ${
            animationClass.heading ? classes.animation : null
          }`}
        >
          If The Holocaust Is Forgotten, Dead Will Be Killed A Second Time
        </h1>
        <p
          className={`${classes.textSubHeading} ${
            animationClass.description ? classes.animation : null
          }`}
        >
          Unite with us as we embark on a transformative journey, empowering
          Holocaust survivors, preserving the rich tapestry of history, and
          tirelessly advocating for justice, so that together we can build a
          brighter future for generations to come.
        </p>
        <Link
          to={"/aboutus"}
          className={`${classes.button} ${
            animationClass.button ? classes.animation : null
          }`}
        >
          Learn More
          <span className={classes.icon}>
            <FiChevronRight />
          </span>
        </Link>
      </div>
    </header>
  );
}
// FiChevronRight
