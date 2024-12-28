import { delay, stagger } from "framer-motion";

export const animateClicks = (animate, roundBtn) => {
  if (!roundBtn) {
    animate([
      [
        ".char",
        { y: "-1.125rem" },
        { duration: 0.2, delay: stagger(0.05), ease: "linear" },
      ],
      [".char", { y: "0rem" }, { duration: 0.000001, at: "<" }],
      ["button", { scale: 1 }, { duration: 0.15, ease: "linear", at: 0 }],
      ["button", { scale: 1.01 }, { duration: 0.15, ease: "linear" }],
    ]);
  } else if (roundBtn) {
    animate([
      [
        ".filler-container",
        { width: "90%" },
        { duration: 0.15, ease: "linear" },
      ],
      [
        ".filler-container",
        { width: "100%" },
        { duration: 0.15, ease: "linear" },
      ],
    ]);
  }
};
export const animateMouseEnter = (animate, roundBtn) => {
  if (!roundBtn) {
    animate([
      ["button", { scale: 1.01 }, { duration: 0.25, ease: "linear" }],
      [
        ".filler-container",
        {
          x: "100%",
          y: "0%",
          translateY: "-50%",
          translateX: "-50%",
          width: "100%",
          opacity: 1,
        },
        { duration: 0.25, ease: "linear", at: 0 },
      ],
    ]);
  } else if (roundBtn) {
    animate([
      [
        ".filler-container",
        {
          width: "100%",
          opacity: 1,
        },
        { duration: 0.3, ease: "linear" },
      ],
      [
        ".filler",
        {
          width: "80%",
          opacity: 1,
        },
        { duration: 0.3, ease: "easeInOut", at: 0.15 },
      ],
    ]);
  }
};

export const animateMouseLeave = (animate, roundBtn) => {
  if (!roundBtn) {
    animate([
      ["button", { scale: 1 }, { duration: 0.25, ease: "linear" }],
      [
        ".filler-container",
        { x: "200%" },
        { duration: 0.25, ease: "linear", at: 0 },
      ],
      [
        ".filler-container",
        { x: "-50%", opacity: 0, width: "1%" },
        { duration: 0.0005, ease: "linear", at: ">" },
      ],
    ]);
  } else if (roundBtn) {
    animate([
      [
        ".filler",
        {
          width: "1%",
          opacity: 0,
        },
        { duration: 0.3, ease: "easeInOut", opacity: { delay: 0.2 } },
      ],
      [
        ".filler-container",
        {
          width: "1%",
          opacity: 0,
        },
        { duration: 0.3, at: 0.2, ease: "linear" },
      ],
    ]);
  }
};
