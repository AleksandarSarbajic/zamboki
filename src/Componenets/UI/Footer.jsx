import { Link } from "react-router-dom";
import classes from "../UI/Footer.module.scss";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <Link to={"/gallery"} className={`${classes.browse} `}>
          Gallery
        </Link>
        <Link to={"/certifitaces"} className={`${classes.browse} `}>
          Certificates
        </Link>
        <Link to={`/contact`} className={`${classes.browse}`}>
          Contact
        </Link>
        <Link to={"/aboutUs"} className={classes.browse}>
          About us
        </Link>
        {/* <Link to={"/news"} className={classes.browse}>
          News
        </Link> */}
      </div>
      <div className={classes.containerBottom}>
        <div>
          <img
            src={"src/assets/imgs/Logo.png"}
            alt="Image of logo"
            className={classes.img}
          />
          <h3 className={classes.heading}>Zamboki Holocaust</h3>
          <span className={classes.text}>
            If The Holocaust Is Forgotten, Dead Will Be Killed A Second Time
          </span>
          <div className={classes.icons}>
            <Link
              to={"https://www.facebook.com/"}
              className={classes.icon}
              target="blank"
            >
              <BsFacebook className={classes.icon} />
            </Link>
            <Link
              to={"https://twitter.com/home"}
              className={classes.icon}
              target="blank"
            >
              <BsTwitter className={classes.icon} />
            </Link>
            <Link
              to={"https://www.instagram.com/?hl=sr"}
              className={classes.icon}
              target="blank"
            >
              <BsInstagram className={classes.icon} />
            </Link>
            <Link
              to={"https://www.youtube.com/"}
              className={classes.icon}
              target="blank"
            >
              <BsYoutube className={classes.icon} />
            </Link>
          </div>
          <span className={classes.nonProfit}>
            Zamboki holocaust is a non-profit organization
          </span>
        </div>
        <div>
          <div className={classes.links}>
            <Link to="/" className={classes.link}>
              Terms of Use
            </Link>
            <Link to="/" className={classes.link}>
              Site Map
            </Link>
            <Link to="/" className={classes.link}>
              Privacy Policy
            </Link>
            <Link to="/" className={classes.link}>
              Contact
            </Link>
            <Link to="/" className={classes.link}>
              Licenses
            </Link>
          </div>
          <Link to={"/"} className={classes.link}>
            Cookies
          </Link>
        </div>
      </div>
      <div className={classes.copy}>
        <Link to={"https://github.com/AleksandarSarbajic"} target="blank">
          &copy; 2023 Aleksandar Sarbajic All rights reserved.
        </Link>
      </div>
    </footer>
  );
}
