import "./listItem.scss";
import Typography from "../Typography/Typography";
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import ListItemChild from "./ListItemChild";
import { useRef } from "react";
import useClickOutside from "../../../UseClickOutside";

export default function ListItem({ label, content, color, childColor, width, onClick }) {


  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1023px)" });
  const desktop = !isMobile && !isTablet;

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  let exceptions = ".nav-tray";
  const ref = useRef(null);
  useClickOutside(ref, exceptions, () => setOpen(false));

  return (
    <div
      className={classNames({
        "list-item": true,
        [`list-item-width-${width}`]: width,
      })}
      onClick={handleClick}
      ref={ref}
    >
      <div className="list-item-title">
        <Typography variant="body2" color={color ? color : "secondary"}>
          {label}
        </Typography>
        <Typography variant={"icon"} color={color ? color : "secondary"}>
          keyboard_arrow_down
        </Typography>
      </div>

       <ListItemChild
         open={open}
         desktop={desktop}
         childColor={childColor}
         onClick={onClick}
         children={content}
       />
       

    </div>
  );
}
