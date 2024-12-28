import "./image.scss";
import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VideoLoader from "./VideoLoader";
import Image from "./Image";

export default function Video({ src, blurhash, fallback, ...props }) {
  const ref = useRef(null);
  const loading = VideoLoader({ src, ref });

  return (
    <div className="image-container" ref={ref}>
      <AnimatePresence>
        {loading ? (
          <Image src={fallback} blurhash={blurhash} />
        ) : (
          <motion.div className="image-container">
            <video
              src={src}
              className="image"
              preload="metadata"
              autoPlay
              muted
              loop
              playsInline
              {...props}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
