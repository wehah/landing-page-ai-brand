import "./card.scss";
import Image from "../Common/image/Image";
import Video from "../Common/image/Video";
import classNames from "classnames";
import Typography from "../Common/Typography/Typography";
import Button from "../Common/Buttons/Buttons";
import { useState } from "react";
import {AnimatePresence, motion} from "framer-motion"

export default function Card({
  cardLabel,
  contentStyle,
  item,
  content,
  thumbnail,
  motionContent
}) {




  const [showContent, setShowContent] = useState(false)
  return (
    <div
      className={classNames({
        ["card"]: true,
        [`card-${cardLabel}`]: cardLabel,
      })}
      onMouseEnter={() => setShowContent(true)}
      onMouseLeave={() => setShowContent(false)}
    >
      {item && item.image && (
        <div className="card-image">
          <Image src={item.image.src} blurhash={item.image.blurhash} alt={item.image.alt? item.image.alt:"image"} />
        </div>
      )}
      {item && item.video && (
        <Video src={item.video.src} blurhash={item.video.blurhash} fallback={item.video.fallback} alt={item.video.alt? item.video.alt:"video"} />
      )}
      {content && (
        <div
          className={classNames({
            [`card-content`]: true,
            [`content-${contentStyle}`]: contentStyle,
          })}
        >
          {content.heading && (
            <Typography {...content.heading}>{item.title}</Typography>
          )}
          {content.body && (
            <Typography {...content.body}> {item.description}</Typography>
          )}
          <span className="card-button"> 
          {thumbnail && (
            <span className="card-thumbnail">
              <Typography  {...thumbnail.content}>{thumbnail.text}</Typography>
              </span>
          )}
          {content.buttonContents && (
            <span>
              {" "}
              <Button {...content.buttonContents} />{" "}
            </span>
          )}
          </span>
        </div>
      )}
      <AnimatePresence>
       {motionContent && showContent && (
                <motion.div
                 className="item-content"
                 initial={{opacity:0}}
                 animate={{opacity:1}}
                 exit = {{opacity:0}}
                 >
                  <div className="overley" />
                  <motion.div 
                  className="content-body"
                  initial = {{y:15}}
                  animate = {{y:0}}
                  exit={{y:15}}
                  >
                    <Button label={motionContent} variant={"secondary"} />
                  </motion.div>
                </motion.div>
              )} 
              </AnimatePresence>
    </div>
  );
}
