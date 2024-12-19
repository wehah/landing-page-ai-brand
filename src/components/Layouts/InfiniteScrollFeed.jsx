import { useEffect, useState } from "react";
import "./layouts.scss";
import { animate, motion, useMotionValue } from "framer-motion";
import Card from "../Card/Card";
import ImageUrls from "../Common/image/ImageUrls";
import useMeasure from "react-use-measure";

const scrollContent = [
  { image: ImageUrls.image14 },
  { image: ImageUrls.image15 },
  { image: ImageUrls.image16 },
  { image: ImageUrls.image17 },
  { image: ImageUrls.image18 },
  { image: ImageUrls.image19 },
  { image: ImageUrls.image20 },
  { image: ImageUrls.image21 },
];

export default function InfiniteScrollFeed() {
  const normalDuration = 25;
  const slowDuration = 75;

  const [duration, setDuration] = useState(normalDuration);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 5.2;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [xTranslation, width, duration, rerender]);

  return (
    <div className="scroll-container">
      <div className="padding-alignment">
        <motion.div
          className="scroll-track"
          ref={ref}
          style={{ x: xTranslation }}
          onHoverStart={() => {
            setDuration(slowDuration);
            setMustFinish(true);
          }}
          onHoverEnd={() => {
            setDuration(normalDuration);
            setMustFinish(true);
          }}
        >
          {[...scrollContent, ...scrollContent].map((item, index) => (
            <motion.div className="scroll-item" key={index}>
              <Card key={index} item={item} motionContent="explore" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
