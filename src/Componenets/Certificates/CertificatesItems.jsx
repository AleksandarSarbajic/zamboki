import classes from "../Certificates/CertificatesItems.module.scss";
import Pdf from "../../assets/data/ZAMBOKI_2.pdf";
import CertificatesItem from "./CertificatesItem";
const items = [
  {
    id: 1,
    name: "ZAMBOKI",
    description: "ZAMBOKI",

    link: "/src/assets/data/ZAMBOKI_2.pdf",
    linkText: "ZAMBOKI",
  },
];
export default function CertificatesItems() {
  return (
    <main className={classes.section}>
      <h2 className={classes.heading}>All of our documents</h2>
      <ul className={classes.link}>
        {Array.apply(null, { length: 10 }).map((item, index) => (
          <CertificatesItem key={index} Pdf={Pdf} data={Pdf} />
        ))}
      </ul>
    </main>
  );
}
