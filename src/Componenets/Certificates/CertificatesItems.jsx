import { pdfArray } from "../../assets/data/data";
import classes from "../Certificates/CertificatesItems.module.scss";

import CertificatesItem from "./CertificatesItem";

export default function CertificatesItems() {
  return (
    <main className={classes.section}>
      <h2 className={classes.heading}>All of our documents</h2>
      <ul className={classes.link}>
        {pdfArray.map((item) => (
          <CertificatesItem key={item.id} name={item.name} link={item.src} />
        ))}
      </ul>
    </main>
  );
}
