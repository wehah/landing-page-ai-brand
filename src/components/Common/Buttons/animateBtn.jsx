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
      ["button", { scale: 0.9 }, { duration: 0.25, ease: "linear", at: "<" }],
      ["button", { scale: 1.01 }, { duration: 0.1, ease: "linear" }],
    ]);
  } else if (roundBtn) {
    animate([
      [".filler", { scale: 40 }, { duration: 0.1, ease: "linear" }],
      [".filler", { scale: 45 }, { duration: 0.1, ease: "linear" }],
    ]);
  }
};
export const animateMouseEnter = (animate, roundBtn) => {
  if (!roundBtn) {
    animate([
      ["button", { scale: 1.01 }, { duration: 0.1 }],
      [".filler", { scale: 200, x: 70 }, { duration: 0.25, ease: "linear" }],
    ]);
  } else if (roundBtn) {
    animate([
      [
        ".filler-container",
        { width: "100%", height: "100%", opacity: 1, x:"-50%", y:"-50%" },
        { duration: 0.3, ease: "linear" },
      ],
      [
        ".filler",
        { scale: 45, opacity: 1, x:"-50%", y:"-50%" },
        { duration: 0.3, ease: "easeInOut", at: 0.15 },
      ],
    ]);
  }
};

export const animateMouseLeave = (animate, roundBtn) => {
  if (!roundBtn) {
    animate([
      ["button", { scale: 1 }, { duration: 0.1, ease: "linear" }],
      [".filler", { scale: 50, x: 200 }, { duration: 0.25, ease: "linear" }],
      [".filler", { scale: 1, x: 0, y: 0 }, { duration: 0.0001, at: ">" }],
    ]);
  } else if (roundBtn) {
    animate([
      [
        ".filler",
        { scale: 1, opacity: 0, x:"-50%", y:"-50%" },
        { duration: 0.3, ease: "easeInOut", opacity: { delay: 0.2 } },
      ],
      [
        ".filler-container",
        { width: "1%", height: "1%", opacity: 0 },
        { duration: 0.3, at: 0.2, ease: "linear" },
      ],
    ]);
  }
};
