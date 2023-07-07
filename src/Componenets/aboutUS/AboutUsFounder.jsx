import classses from "../aboutUS/AboutUsFounder.module.scss";
import AboutUsFounderItem from "./AboutUsFounderItem";
import AboutUsText from "./AboutUsText";
export default function AboutUsFounder() {
  return (
    <div className={`${classses.container} `}>
      <AboutUsText />
      <h3 className={classses.heading}>Our Founders</h3>
      <AboutUsFounderItem>
        <div>
          <img
            className={classses.img}
            src={"src/assets/imgs/Josef.png"}
            alt="AboutUs"
          />
        </div>
        <div className={classses.text}>
          <h2>Josef Zamboki</h2>
          <span>Co Founder</span>
          <p>
            Josef is a software engineer based in London, UK who specializes in
            building (and occasionally designing) exceptional digital
            experiences. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Exercitationem eaque quaerat repellendus ducimus obcaecati
            natus corrupti odit magnam provident expedita suscipit consequatur
            pariatur itaque amet, distinctio doloribus fuga. Quisquam, fugiat.
          </p>
        </div>
      </AboutUsFounderItem>
      <AboutUsFounderItem className={classses.margin}>
        <div className={`${classses.align} ${classses.text}`}>
          <h2>Josef Zamboki</h2>
          <span>Co Founder</span>
          <p>
            Josef is a software engineer based in London, UK who specializes in
            building (and occasionally designing) exceptional digital
            experiences. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Exercitationem eaque quaerat repellendus ducimus obcaecati
            natus corrupti odit magnam provident expedita suscipit consequatur
            pariatur itaque amet, distinctio doloribus fuga. Quisquam, fugiat.
          </p>
        </div>
        <div>
          <img
            className={classses.img}
            src={"src/assets/imgs/Josef.png"}
            alt="AboutUs"
          />
        </div>
      </AboutUsFounderItem>
      <AboutUsFounderItem>
        <div>
          <img
            className={classses.img}
            src={"src/assets/imgs/Josef.png"}
            alt="AboutUs"
          />
        </div>
        <div className={` ${classses.text}`}>
          <h2>Josef Zamboki</h2>
          <span>Co Founder</span>
          <p>
            Josef is a software engineer based in London, UK who specializes in
            building (and occasionally designing) exceptional digital
            experiences. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Exercitationem eaque quaerat repellendus ducimus obcaecati
            natus corrupti odit magnam provident expedita suscipit consequatur
            pariatur itaque amet, distinctio doloribus fuga. Quisquam, fugiat.
          </p>
        </div>
      </AboutUsFounderItem>
    </div>
  );
}
