import { useSelector, useDispatch } from "react-redux";
import classes from "../modal/GalleryImagePreview.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import GalleryImagePreviewButton from "./GalleryImagePreviewButton";
import { imagesArray } from "../../../assets/data/data";
import { imagesActions } from "../../../redux/images-slice";
import GallerySlider from "./GallerySlider";

export default function GalleryImagePreview() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { curIndex, curItem } = useSelector((state) => state.images);
  const item = imagesArray.find((item) => item.id === params.id);
  function raiseIndexHandler() {
    dispatch(
      imagesActions.indexPlusOne({
        img: imagesArray[curIndex + 1].img,
        description: imagesArray[curIndex + 1].description,
        id: imagesArray[curIndex + 1].id,
      })
    );
    navigate(`/gallery/${imagesArray[curIndex + 1].id}`);
  }

  function lowerIndexHandler() {
    if (curIndex === 0) return;

    dispatch(
      imagesActions.indexMinusOne({
        img: imagesArray[curIndex - 1].img,
        description: imagesArray[curIndex - 1].description,
        id: imagesArray[curIndex - 1].id,
      })
    );
    navigate(`/gallery/${imagesArray[curIndex - 1].id}`);
  }

  function closeModalHandler() {
    navigate("/gallery");
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeModalHandler}></div>
      <div className={classes.modal}>
        <img
          src={curItem.img ? curItem.img : item.img}
          alt={curItem.description}
          className={classes.img}
        />
        <p className={classes.description}>{curItem.description}</p>
        <button className={classes.button} onClick={closeModalHandler}>
          <MdOutlineCancel className={classes.buttonIcon} />
        </button>
      </div>
      <GalleryImagePreviewButton
        className={classes.right}
        onClick={raiseIndexHandler}
      >
        <FiChevronRight className={classes.buttonIconRight} />
      </GalleryImagePreviewButton>
      <GalleryImagePreviewButton
        className={classes.left}
        onClick={lowerIndexHandler}
      >
        <FiChevronLeft className={classes.buttonIconLeft} />
      </GalleryImagePreviewButton>
      <GallerySlider />
    </>
  );
}
