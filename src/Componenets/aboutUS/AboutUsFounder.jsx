import classses from "../aboutUS/AboutUsFounder.module.scss";
import AboutUsFounderItem from "./AboutUsFounderItem";
import AboutUsText from "./AboutUsText";
export default function AboutUsFounder() {
  return (
    <div className={`${classses.container} `}>
      <AboutUsText />

      <h3 className={classses.heading}>Our Founder</h3>
      <AboutUsFounderItem>
        <div className={classses["imgBox--1"]}>
          <img
            className={classses.img}
            src={"src/assets/imgs/Josef3.png"}
            alt="AboutUs"
          />
        </div>
        <div className={`${classses.text} ${classses["text--1"]}`}>
          <h2>Josef Zamboki</h2>
          <span>Founder</span>
        </div>
        <p className={`${classses["paragraph--1"]} ${classses.paragraph}`}>
          Josef Zamboki was born on February 22, 1932, in Belgrade. His entire
          family (42 people), except him and his sister, perished in the
          Holocaust in the Topovske šupe and Staro Sajmište camps. As a
          ten-year-old boy, he and his sister were taken out of the camp and
          saved by Hungarian Pal Žamboki, who at that time worked in the Gestapo
          as a translator of Serbian and German, and whose surname he bears
          today as a sign of gratitude. In 1966, he completed studies in
          industrial design at the Faculty of Forestry in Zagreb, and later
          worked in Serbia (Kanjiža and Subotica) as a technical and commercial
          manager. In 1969, he moved to Israel with his wife Margit and soon got
          a job as a chief designer in the &quot;RIM&quot; furniture industry.
          Over the years, he became a well-known businessman in the countries of
          ex-YU, Israel and the area of the Palestinian communities in the West
          Bank and Gaza. He met leading Israeli politicians, and with their help
          he successfully participated in the restoration of diplomatic
          relations between Israel and ex-Yugoslavia. For several years, he was
          the president of the Association of Immigrants from the ex-YU
          countries. Throughout his stay in Israel, he was a donor in the field
          of culture and a great fan of opera art, so he organized many concerts
          in Israel and Serbia with eminent opera artists. In 2019, he published
          the book &quot;Life and music will win&quot;.
        </p>
      </AboutUsFounderItem>
    </div>
  );
}
