import classes from "../aboutUS/AboutUs.module.scss";

export default function AboutUs() {
  return (
    <header className={classes.container}>
      <h1>About Us </h1>
      <p>
        We are an organization devoted to discovering, finding the names of
        Jewish victims of the Holocaust who died in camps and killing fields in
        Serbia with reliable documentation, and creating a database as a
        testimony of the crimes against the Jewish people in Serbia during WW2.
      </p>
    </header>
  );
}
