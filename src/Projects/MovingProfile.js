import { motion } from "framer-motion";

const MovingProfile = (props) => {
  return (
    <motion.img
      animate={{
        transform: [
          "perspective(400px) rotateY(-12deg)",
          "perspective(400px) rotateY(12deg)",
        ],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        type: "easeInOut",
      }}
      className="Profile-Pic"
      src={require("../assets/" + props.imageUrl)}
    />
  );
};

export default MovingProfile;
