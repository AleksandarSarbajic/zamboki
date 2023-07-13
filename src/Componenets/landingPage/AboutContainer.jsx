import classes from "../landingPage/AboutContainer.module.scss";

import WhoWeAre from "./WhoWeAre";

export default function About() {
  return (
    <div className={`${classes.container} page`}>
      <WhoWeAre />
    </div>
  );
}
