import { motion, useAnimation } from "framer-motion";
import { Button } from "react-bootstrap";
import useAudio from "../Hooks/useAudio";
import cyberMusic from "../assets/EpicCyberpunk.mp3";
import PauseIcon from "../assets/pause-button.png";
import PlayIcon from "../assets/play-button.png";
const AudioBtn = (props) => {
  const [playing, setPlay] = useAudio(cyberMusic);
  const controls = useAnimation();
  const playingBtn = {
    playing: {
      scale: [0.95, 1.05, 0.93, 1.05, 0.9],
      transition: {
        duration: 2,
        times: [0, 0.1, 0.3, 0.8, 1],
        ease: "easeOut",
        repeat: Infinity,
        type: "spring",
      },
    },
  };

  return (
    <Button
      style={{
        width: "85px",
        height: "85px",
        margin: "50px",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
        border: "none",
      }}
      onClick={() => {
        if (!playing) {
          controls.start("playing");
        } else {
          controls.stop();
        }
        setPlay(!playing);
      }}
    >
      <motion.img
        animate={controls}
        variants={playingBtn}
        src={playing ? PauseIcon : PlayIcon}
        style={{
          width: "85px",
          height: "85px",
        }}
      />
    </Button>
  );
};
export default AudioBtn;
