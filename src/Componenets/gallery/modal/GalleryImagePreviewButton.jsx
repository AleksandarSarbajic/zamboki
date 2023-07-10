/* eslint-disable react/prop-types */
import classes from "../modal/GalleryImagePreviewButton.module.scss";
import { useEffect, useState } from "react";

export default function GalleryImagePreviewButton(props) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 800);
    return () => clearTimeout(timer);
  });
  return (
    <>
      <button
        className={`${props.className} ${classes.btn} ${
          visible ? classes.visible : ""
        }`}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </>
  );
}
