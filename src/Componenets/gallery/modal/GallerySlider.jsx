import classes from "../modal/GallerySlider.module.scss";
import { imagesArray } from "../../../assets/data/data";

import GallerySliderItem from "./GallerySliderItem";
import { useEffect, useState } from "react";
export default function GallerySlider() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  });
  return (
    <div
      className={`${classes.GallerySlider} ${visible ? classes.visible : ""}`}
    >
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
