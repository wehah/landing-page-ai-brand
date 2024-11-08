import Typography from "../Typography/Typography";
import classNames from "classnames";
import "./buttons.scss";
import { useState } from "react";

const variantMapping = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  textLink: "btn-text-link",
  rounded: "btn-rounded",
  dotButton: "btn-dot"
};

export default function Button({
  onClick,
  variant,
  shape,
  label,
  isDisabled = false,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [disabled] = useState(isDisabled);

  const btnPrimaryClass = {
    [`variant-${variantMapping[variant]}`]: variant,
    [`btn-${shape}`]: shape,
    ["btn-disabled"]: isDisabled,
    ["btn-hover"]:
      isHovered &&
      !isPressed &&
      (variant == "primary" || variant == "secondary"),
    ["text-link-hover"]: isHovered && !isPressed && variant == "textLink",
    ["btn-pressed"]: isPressed && variant != "textLink",
  };

  return (
    <button
      className={classNames(btnPrimaryClass)}
      onClick={onClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Typography
        variant={
          shape === "rounded" || shape === "dot" ? "icon" : "body2"
        }
      >
        {label}
      </Typography>
    </button>
  );
}
