import classes from "../Certificates/CertificatesItems.module.scss";

export default function CertificatesItem({ link, name }) {
  return (
    <li className={classes.item}>
      <a href={link} target="blank" className={classes.link}>
        <span className={classes.name}>{name}</span>
      </a>
    </li>
  );
}
