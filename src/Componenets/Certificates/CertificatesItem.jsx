/* eslint-disable react/prop-types */
import classes from "../Certificates/CertificatesItems.module.scss";

export default function CertificatesItem({ data, Pdf }) {
  return (
    <li className={classes.item}>
      <a
        href={"/src/assets/data/ZAMBOKI_2.pdf"}
        target="blank"
        className={classes.link}
      >
        <span className={classes.name}>Name of the file</span>
        <span className={classes.date}>-{new Date().toLocaleDateString()}</span>
      </a>
    </li>
  );
}
