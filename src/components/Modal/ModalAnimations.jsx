import { delay } from "motion";

export const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export const modalVariants = {
  hidden: { x: "-50%", y: "-100%", opacity: 0, scale: 1 },
  visible: {
    x: "-50%",
    y: "-50%",
    opacity: 1,
    scale: [1, 1, 1.1, 1],
    transition: {
      delay: 0.15,
      scale: { delay: 0.55, duration:0.30},
      duration: 0.40,
      ease: "easeInOut",
      
    },
   
    
  },
  exit: {
    x: "-50%",
    y: "100%",
    opacity: 0,
    transition: { duration: 0.25, ease: "easeInOut" },
  },
};
