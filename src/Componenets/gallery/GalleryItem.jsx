import { Link } from "react-router-dom";
import classes from "../gallery/GalleryItem.module.scss";
import { useDispatch } from "react-redux";
import { imagesActions } from "../../redux/images-slice";
export default function GalleryItem(props) {
  const dispatch = useDispatch();

  function setItem() {
    dispatch(
      imagesActions.setItem({
        img: props.img,
        description: props.description,
        id: props.id,
        i: props.val,
      })
    );
  }
  return (
    <Link
      to={`/gallery/${props.id}`}
      className={`${classes[`gallery__item--${props.val + 1}`]} ${
        classes["gallery__item"]
      }`}
      onClick={setItem}
    >
      <img src={props.img} alt={props.alt} className={classes.img} />
    </Link>
  );
}
