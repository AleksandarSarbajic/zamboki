/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import classes from "../modal/GallerySliderItem.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { imagesActions } from "../../../redux/images-slice";
export default function GallerySliderItem(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.images.curIndex);

  function onClickHandler() {
    dispatch(
      imagesActions.setItem({
        img: props.img,
        description: props.description,
        id: props.id,
        i: props.index,
      })
    );
  }

  return (
    <Link
      to={`/gallery/${props.id}`}
      className={classes.item}
      style={{
        transform: `translateX(${150 * (props.index + 2 - selector)}%)`,
      }}
      onClick={onClickHandler}
    >
      <img
        className={`${classes.img} ${props.id === id ? classes.hi : ""}`}
        src={props.img}
        alt={props.description}
      />
    </Link>
  );
}
