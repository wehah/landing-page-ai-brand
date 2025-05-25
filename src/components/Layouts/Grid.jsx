import "./layouts.scss";
import Card from "../Card/Card";
import Typography from "../Common/Typography/Typography";
import { ImageUrl } from "../Common/image/ImageUrl";
import { animate, motion, useMotionValue } from "framer-motion";

export default function Grid() {
  const imgs = [
    ImageUrl.image4,
    ImageUrl.image5,
    ImageUrl.image6,
    ImageUrl.image7,
    ImageUrl.image8,
    ImageUrl.image24,
    ImageUrl.image25,
    ImageUrl.image26,
    ImageUrl.image27,
    ImageUrl.image28,
  ];

  const title =
    "A Glimpse into the AI-Generated World of our models. Create similar artistic images today.";
  return (
    <div className="grid-wrapper">
      <Typography variant={"h3"} color={"primary"}>
        {title}
      </Typography>
      <div className="grid">
        {imgs.map((img, index) => (
          <motion.div key={index} className="grid-item">
            <Card key={index} item={{ image: img }} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
