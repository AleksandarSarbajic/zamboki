/* eslint-disable react/prop-types */
// import classes from "../gallery/GalleryImagePreviewButton.module.scss";

export default function GalleryImagePreviewButton(props) {
  // console.log(props);
  return (
    <>
      <button className={props.className} onClick={props.onClick}>
        {props.children}
      </button>
    </>
  );
}
