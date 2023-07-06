import classes from "../modal/GallerySlider.module.scss";
import { imagesArray } from "../../../assets/data/data";

import GallerySliderItem from "./GallerySliderItem";
export default function GallerySlider() {
  return (
    <div className={classes.GallerySlider}>
      {imagesArray.map((image, index) => (
        <GallerySliderItem
          key={image.id}
          id={image.id}
          img={image.img}
          index={index}
          description={image.description}
          className={classes.img}
        />
      ))}
    </div>
  );
}
