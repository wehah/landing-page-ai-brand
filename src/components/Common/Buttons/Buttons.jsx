import Typography from "../Typography/Typography";
import classNames from "classnames";
import "./buttons.scss";
import { useState } from "react";
import { useAnimate } from "framer-motion";
import {
  animateClicks,
  animateMouseEnter,
  animateMouseLeave,
} from "./animateBtn";

const variantMapping = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  textLink: "btn-text-link",
  rounded: "btn-rounded",
  dotButton: "btn-dot",
};

export default function Button({ onClick, variant, shape, label, isDisabled }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [scope, animate] = useAnimate();
  const roundBtn =
    shape === "rounded" || shape === "dot" || variant === "text-link";

  const handleClicks = (event) => {
    onClick && onClick(event);
    animateClicks(animate, roundBtn);
  };

  const handleMouseEnter = () => {
    animateMouseEnter(animate, roundBtn);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    animateMouseLeave(animate, roundBtn);
    setIsHovered(false);
  };

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
    <div ref={scope} className="button-wrapper">
      <button
        className={classNames(btnPrimaryClass)}
        onClick={handleClicks}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {roundBtn && (
          <Typography
            variant={shape === "rounded" || shape === "dot" ? "icon" : "body2"}
          >
            {label}
          </Typography>
        )}
        {!roundBtn && (
          <>
            <Typography
              variant={
                shape === "rounded" || shape === "dot" ? "icon" : "body2"
              }
            >
              {label.split("").map((char, index) => (
                <span
                  data-char={char}
                  className="char"
                  key={`${char}-${index}`}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </Typography>
          </>
        )}
        {!(shape === "dot") && <div className="filler-container">
          <div className="filler"></div>
        </div>}
      </button>
    </div>
  );
}
