import classes from "../modal/GallerySlider.module.scss";
import { imagesArray } from "../../../assets/data/data";

import GallerySliderItem from "./GallerySliderItem";
import { useEffect, useState } from "react";
export default function GallerySlider() {
  const [visible, setVisible] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  });
  console.log(screenWidth);
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
          i={screenWidth <= 700 ? 1 : 2}
          transform={screenWidth <= 400 ? 135 : 150}
        />
      ))}
    </div>
  );
}
