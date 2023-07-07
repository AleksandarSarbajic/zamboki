import { Link } from "react-router-dom";
import classes from "../UI/Nav.module.scss";
export default function Nav() {
  return (
    <>
      <div className={classes.main}>
        <nav className={`${classes.header}`}>
          <div className={classes.logo}>
            <Link to={"/"} className={classes.name}>
              <img
                src={"src/assets/imgs/Logo.png"}
                alt="Logo"
                className={classes.img}
              />
              <p>Zomboki</p>
            </Link>

            <div className={`${classes.links} `}>
              <Link to={"/gallery"} className={`${classes.browse} `}>
                Gallery
              </Link>
              <Link to={"/"} className={`${classes.browse} `}>
                Certificates
              </Link>
              <Link to={`/contact`} className={`${classes.browse}`}>
                Contact
              </Link>
              <Link to={"/aboutUs"} className={classes.browse}>
                About us
              </Link>
              <Link to={"/news"} className={classes.browse}>
                News
              </Link>
              <Link to={"/contact"} type="button" className={classes.button}>
                Donate <span> &#x279A;</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* <div className={classes.backdrop} /> */}
    </>
  );
}
