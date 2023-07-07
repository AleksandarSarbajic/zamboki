/* eslint-disable react/prop-types */
import classses from "../aboutUS/AboutUsFounder.module.scss";
export default function AboutUsFounderItem(props) {
  return (
    <div className={`${props.className} ${classses.item}`}>
      {props.children}
    </div>
  );
}
