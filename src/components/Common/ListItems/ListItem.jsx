import "./listItem.scss";
import Typography from "../Typography/Typography";
import classNames from "classnames";

export default function ListItem({ label, color, width, onClick }) {
  return (
    <div
      className={classNames({
        "list-item": true,
        [`list-item-width-${width}`]: width,
       })}
       onClick={onClick}
    >
      <Typography variant="body2" color={color ? color : "secondary"}>
        {label}
      </Typography>
      <Typography variant={"icon"} color={color ? color : "secondary"}>
        keyboard_arrow_down
      </Typography>
    </div>
  );
}
