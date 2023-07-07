// import { Link } from "react-router-dom";
import classes from "../News/NewsHeading.module.scss";
import { AiOutlineArrowDown } from "react-icons/ai";
export default function NewsHeading() {
  return (
    <header className={`${classes.header} `}>
      <h1>
        Stay updated with the most recent updates regarding our endeavors.
      </h1>
      <p>Stay Informed: Discover the Latest Updates on Our Activities</p>
      <a href={"#link"} className={classes.headerButton}>
        Go to news
      </a>
      <a href={"#link"}>
        <AiOutlineArrowDown className={classes.icon} />
      </a>
    </header>
  );
}
