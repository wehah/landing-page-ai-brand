import "./image.scss";
import { Blurhash } from "react-blurhash";
import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageLoader from "./ImageLoader";
import { animateBlurhash, animateImage } from "./ImageAnimations";

export default function Image({src, blurhash}) {

  const ref = useRef(null);
  const loading = ImageLoader({ src, ref,  });

  return (
    <div className="image-container" 
    ref={ref}
    >
      <AnimatePresence>
        {loading ? (
          <motion.div animate={animateBlurhash}>
            <Blurhash hash={blurhash} width={"100%"} height={"100%"} />
          </motion.div>
        ) : (
          <motion.div
            className="image-container"
            animate="visible"
            variants={animateImage}
          >
            <img src={src} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}