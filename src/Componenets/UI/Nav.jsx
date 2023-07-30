import { Link, useLocation } from "react-router-dom";
import classes from "../UI/Nav.module.scss";
import { useState, useEffect, useCallback } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
export default function Nav() {
  const { pathname } = useLocation();
  const [navClass, setNavClass] = useState("");
  const [showSideBar, setShowSideBar] = useState("");
  const [scrollY, setScrollY] = useState(0);
  const linkStyle =
    pathname === "/" &&
    showSideBar !== classes.translate &&
    navClass !== classes.bg
      ? "#fff"
      : "";

  const onScroll = useCallback(() => {
    const { pageYOffset } = window;

    setScrollY(pageYOffset);

    if (pageYOffset >= 150 && pageYOffset <= 300) {
      setNavClass(classes.bg);
    } else if (pageYOffset <= 150) {
      setNavClass(classes.relative);
    }
  }, [showSideBar]);

  useEffect(() => {
    if (showSideBar === classes.translate) {
      setShowSideBar("");
    }
  }, [pathname]);

  function showHiddenSideBar() {
    if (showSideBar === classes.translate) {
      setShowSideBar("");
      if (scrollY >= 300) {
        return;
      } else {
        setNavClass(classes.relative);
      }
    } else {
      setShowSideBar(classes.translate);
      setNavClass(classes.bg);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, [onScroll]);

  return (
    <>
      <div className={classes.main}>
        <nav
          className={`${classes.header} ${navClass} 
          ${showSideBar === classes.translate ? classes.bg : ""}
        `}
        >
          <div className={classes.logo}>
            <Link to={"/"} className={classes.name}>
              <img
                src={"src/assets/imgs/Logo.png"}
                alt="Logo"
                className={classes.img}
              />
              <p style={{ color: linkStyle }}>Zamboki</p>
            </Link>

            <div className={`${classes.links} ${showSideBar}`}>
              <Link
                to={"/gallery"}
                className={`${classes.browse} `}
                style={{ color: linkStyle }}
              >
                Gallery
              </Link>
              <Link
                to={"/certificates"}
                className={`${classes.browse} `}
                style={{ color: linkStyle }}
              >
                Certificates
              </Link>
              <Link
                to={`/contact`}
                className={`${classes.browse}`}
                style={{ color: linkStyle }}
              >
                Contact
              </Link>
              <Link
                to={"/aboutUs"}
                className={classes.browse}
                style={{ color: linkStyle }}
              >
                About us
              </Link>
              {/* <Link to={"/news"} className={classes.browse} style={{ color: linkStyle }}>
                News
              </Link> */}
              <Link
                to={"/contact"}
                type="button"
                className={classes.button}
                style={{ color: linkStyle }}
              >
                Donate <span> &#x279A;</span>
              </Link>
            </div>
          </div>
          <button
            className={`${classes.menu}  ${
              showSideBar === classes.translate ? classes.color : ""
            }`}
            onClick={showHiddenSideBar}
          >
            <RxHamburgerMenu style={{ color: linkStyle }} />
          </button>
        </nav>
      </div>
    </>
  );
}
