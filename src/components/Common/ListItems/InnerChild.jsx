import { innerChildAnim } from "./ItemAnimations";
import "./listItem.scss";
import Typography from "../Typography/Typography";
import { motion, AnimatePresence } from "framer-motion";

export default function InnerChild({ innerChildrenContent, open }) {
  return (
    <AnimatePresence>
      {open &&
        innerChildrenContent.map((item, index) => (
          <motion.div className="text-decoration" key={index + "deskt"} variants={innerChildAnim}>
            <Typography variant={"body2"} color={"primary-dim"}>
              {" "}
              {item}
            </Typography>
          </motion.div>
        ))}
    </AnimatePresence>
  );
}
