import "../App.css";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
const SelectBtn = (props) => {
  return (
    <motion.div
      key={props.key}
      whileHover={{
        x: 32,
        scale: 1.05,
        transition: {
          type: "spring",
          velocity: 2,
          duration: 0.1,
        },
      }}
      whileTap={{
        scale: 0.85,
        transition: {
          type: "spring",
          velocity: -50,
        },
      }}
      className="Button-Bg"
    >
      <Button bsPrefix="bg-Project-Button" onClick={props.onClick}>
        {props.projectName}
      </Button>
    </motion.div>
  );
};
export default SelectBtn;
