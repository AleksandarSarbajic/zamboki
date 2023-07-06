// import { useSelector } from "react-redux";
import classes from "../gallery/Gallery.module.scss";
import GalleryItem from "./GalleryItem";
import { imagesArray } from "../../assets/data/data";
export default function GalleryComponent() {
  // const data = useSelector((state) => state.images.images);
  // console.log(imagesArray);
  return (
    <section className={`${classes.gallery} page`}>
      <h3>Gallery</h3>
      <div className={classes.grid}>
        {imagesArray.map((item, index) => (
          <GalleryItem
            val={index}
            img={item.img}
            key={item.id}
            id={item.id}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
