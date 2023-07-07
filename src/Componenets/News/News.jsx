import { FiChevronDown } from "react-icons/fi";
import classes from "../News/News.module.scss";
import NewsItem from "./NewsItem";
const newsArray = [
  {
    heading: "Will the wagner insurrection affect the ukraine war?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione corporis sequi repudiandae natus maxime explicabo quos soluta autem itaque iure, quam neque esse veniam, ut veritatis ducimus voluptatibus dolorum! Assumenda?",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione corporis sequi repudiandae natus maxime explicabo quos soluta autem itaque iur Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione corporis sequi repudiandae natus maxime explicabo quos soluta autem itaque iur",
    image:
      "https://cdn.theatlantic.com/thumbor/IOmg0q976sUqMqNcOWr5px5MnYA=/0x0:7497x4217/960x540/media/img/mt/2023/01/AP22234686725511/original.jpg",
    id: self.crypto.randomUUID().toString(),
    date: new Date().toISOString(),
    type: "news",
  },
  {
    heading: "Will the wagner insurrection affect the ukraine war",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione corporis sequi repudiandae natus maxime explicabo quos soluta autem itaque iure, quam neque esse veniam, ut veritatis ducimus voluptatibus dolorum! Assumenda?",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione corporis sequi repudiandae natus maxime explicabo quos soluta autem itaque iur Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione corporis sequi repudiandae natus maxime explicabo quos soluta autem itaque iur",
    image:
      "https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg",
    id: self.crypto.randomUUID().toString(),
    date: new Date().toISOString(),
    type: "news",
  },
  {
    heading: "Will the wagner insurrection affect the ukraine war",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione corporis sequi repudiandae natus maxime explicabo quos soluta autem itaque iure, quam neque esse veniam, ut veritatis ducimus voluptatibus dolorum! Assumenda?",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione corporis sequi repudiandae natus maxime explicabo quos soluta autem itaque iur Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione corporis sequi repudiandae natus maxime explicabo quos soluta autem itaque iur",
    image:
      "https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg",
    id: self.crypto.randomUUID().toString(),
    date: new Date().toISOString(),
    type: "news",
  },
];

export default function News() {
  return (
    <section className={` ${classes.container}`} id="link">
      <button className={classes.btn}>
        Today <FiChevronDown className={classes.btnIcon} />
      </button>

      {newsArray.map((item, index) => (
        <NewsItem key={index} item={item} />
      ))}
    </section>
  );
}
