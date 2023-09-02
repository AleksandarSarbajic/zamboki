import "vidstack/styles/defaults.css";
import "vidstack/styles/community-skin/video.css";

import {
  MediaCommunitySkin,
  MediaOutlet,
  MediaPlayer,
  MediaPoster,
} from "@vidstack/react";

function VideoPlayer() {
  return (
    <>
      <p>dsds</p>
      <MediaPlayer
        title="Zamboki"
        src="src/assets/imgs/Jambuki.mp4"
        aspectRatio={16 / 9}
        load="idle"
      >
        <MediaOutlet>
          <MediaPoster alt="Girl walks into sprite gnomes around her friend on a campfire in danger!" />
        </MediaOutlet>
        <MediaCommunitySkin />
      </MediaPlayer>
    </>
  );
}

export default VideoPlayer;
