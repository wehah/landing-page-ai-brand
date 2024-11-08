import "./card.scss";
import Image from "../Common/image/Image";
import Video from "../Common/image/Video";
import classNames from "classnames";
import Typography from "../Common/Typography/Typography";
import Button from "../Common/Buttons/Buttons";

export default function Card({
  cardLabel,
  contentStyle,
  item,
  content,
  thumbnail,
}) {
  return (
    <div
      className={classNames({
        ["card"]: true,
        [`card-${cardLabel}`]: cardLabel,
      })}
    >
      {item && item.image && (
        <div className="card-image">
          <Image src={item.image} alt="image" />
        </div>
      )}
      {item && item.video && (
        <Video src={item.video} alt="video" />
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
    </div>
  );
}
