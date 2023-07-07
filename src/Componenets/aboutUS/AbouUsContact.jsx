import { Link } from "react-router-dom";
import classes from "../aboutUS/AboutUsContact.module.scss";
import { FiChevronRight } from "react-icons/fi";

export default function AboutUsContact() {
  return (
    <div className={`page ${classes.container}`}>
      <h3>Contact us about some informations</h3>
      <p>
        If you are interested about donating to us or to get some more
        informations pls feel free to message us
      </p>
      <Link to={"/contact"} className={`${classes.button} `}>
        Contact us
        <span className={classes.icon}>
          <FiChevronRight />
        </span>
      </Link>
    </div>
  );
}
