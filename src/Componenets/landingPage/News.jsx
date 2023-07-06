import { Link } from "react-router-dom";
import classes from "../landingPage/News.module.scss";
import NewsItem from "./NewsItem";
import { FiChevronRight } from "react-icons/fi";

const NewsArray = [
  {
    img: "https://imageproxy.wolt.com/menu/menu-images/64229154ad35819c0a5f88b8/d9780cbc-cd3c-11ed-b868-e689808affde_pizza_pollo_feta.jpeg?w=300",
    heading: "Global Renewable Energy Investment Hits Record High in 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid",
    link: "/news",
    id: self.crypto.randomUUID().toString(),
  },
  {
    img: "https://imageproxy.wolt.com/menu/menu-images/64229154ad35819c0a5f88b8/d9780cbc-cd3c-11ed-b868-e689808affde_pizza_pollo_feta.jpeg?w=300",
    heading:
      "World's Largest Indoor Vertical Farm Opens, Revolutionizing Urban Agriculture",
    description:
      "Lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid",
    link: "/news",
    id: self.crypto.randomUUID().toString(),
  },
  {
    img: "https://imageproxy.wolt.com/menu/menu-images/64229154ad35819c0a5f88b8/d9780cbc-cd3c-11ed-b868-e689808affde_pizza_pollo_feta.jpeg?w=300",
    heading:
      "Major Breakthrough in Cancer Research: Novel Treatment Shows Promise in Early Trials",
    description:
      "Lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid",
    link: "/news",
    id: self.crypto.randomUUID().toString(),
  },
];

export default function News() {
  return (
    <div className={`${classes.news} page`}>
      <div className={classes.newsContainer}>
        <h2> News and Events </h2>
        <Link to={"/"} className={classes.newsLink}>
          All events <FiChevronRight className={classes.newsIcon} />
        </Link>
      </div>
      <div className={classes.items}>
        {NewsArray.map((item) => {
          return (
            <NewsItem
              key={item.id}
              img={item.img}
              title={item.heading}
              description={item.description}
              link={item.link}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}
