import classes from "./VideoPlayer.module.scss";

function VideoPlayer({ text, heading, src }) {
  return (
    <div className={classes.container}>
      <h3 className={classes.heading}>{heading}</h3>

      <iframe
        className={classes.frame}
        src={src}
        title={heading}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen="true"
      ></iframe>
      {text && <p className={classes.text}>{text}</p>}
    </div>
  );
}

export default VideoPlayer;
