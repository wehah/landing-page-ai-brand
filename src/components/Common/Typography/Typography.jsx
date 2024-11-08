import classNames from "classnames";
import "./Typography.scss";

const variantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  icon: "span",
  body2: "p",
  body1: "p",
  p: "p",
};

export default function Typography({ variant, color, children }) {
  const Component = variantMapping[variant] || "p";
  return (
    <Component
      className={classNames({
        [`variant-${variant}`]: variant,
        [`color-${color}`]: color,
      })}
    >
      {children}
    </Component>
  );
}
