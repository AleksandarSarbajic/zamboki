import classses from "../aboutUS/AboutUsFounder.module.scss";
import AboutUsFounderItem from "./AboutUsFounderItem";
import AboutUsText from "./AboutUsText";
export default function AboutUsFounder() {
  return (
    <div className={`${classses.container} `}>
      <AboutUsText />
      <h3 className={classses.heading}>Our Founders</h3>
      <AboutUsFounderItem>
        <div className={classses["imgBox--1"]}>
          <img
            className={classses.img}
            src={"src/assets/imgs/Josef.png"}
            alt="AboutUs"
          />
        </div>
        <div className={`${classses.text} ${classses["text--1"]}`}>
          <h2>Josef Zamboki</h2>
          <span>Co Founder</span>
        </div>
        <p className={`${classses["paragraph--1"]} ${classses.paragraph}`}>
          Josef is a software engineer based in London, UK who specializes in
          building (and occasionally designing) exceptional digital experiences.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem eaque quaerat repellendus ducimus obcaecati natus
          corrupti odit magnam provident expedita suscipit consequatur pariatur
          itaque amet, distinctio doloribus fuga. Quisquam, fugiat.
        </p>
      </AboutUsFounderItem>
      <AboutUsFounderItem className={classses.margin}>
        <div
          className={`${classses.align} ${classses.text} ${classses["text--2"]}`}
        >
          <h2>Josef Zamboki</h2>
          <span>Co Founder</span>
        </div>
        <p className={`${classses["paragraph--2"]} ${classses.paragraph}`}>
          Josef is a software engineer based in London, UK who specializes in
          building (and occasionally designing) exceptional digital experiences.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem eaque quaerat repellendus ducimus obcaecati natus
          corrupti odit magnam provident expedita suscipit consequatur pariatur
          itaque amet, distinctio doloribus fuga. Quisquam, fugiat.
        </p>
        <div className={classses["imgBox--2"]}>
          <img
            className={classses.img}
            src={"src/assets/imgs/Josef.png"}
            alt="AboutUs"
          />
        </div>
      </AboutUsFounderItem>
      <AboutUsFounderItem>
        <div className={classses["imgBox--1"]}>
          <img
            className={classses.img}
            src={"src/assets/imgs/Josef.png"}
            alt="AboutUs"
          />
        </div>
        <div className={`${classses.text} ${classses["text--1"]}`}>
          <h2>Josef Zamboki</h2>
          <span>Co Founder</span>
        </div>
        <p className={`${classses["paragraph--1"]} ${classses.paragraph}`}>
          Josef is a software engineer based in London, UK who specializes in
          building (and occasionally designing) exceptional digital experiences.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem eaque quaerat repellendus ducimus obcaecati natus
          corrupti odit magnam provident expedita suscipit consequatur pariatur
          itaque amet, distinctio doloribus fuga. Quisquam, fugiat.
        </p>
      </AboutUsFounderItem>
    </div>
  );
}
