

//reference: https://motion.dev/docs/react-transitions
export const parentVariants   = {
    visible: {
      height: "20rem",
      opacity: 1,
      transition: { ease: "easeInOut", duration: 0.45, delayChildren: 0.25, staggerChildren: 0.20, },
    },
    hidden: { height: "0rem", opacity: 0,},
    exit: {
      height: "0rem",
      opacity: 0,
      padding: 0,
      transition: {
        ease: "easeInOut",
         delay: 0.44,
         staggerChildren: 0.20,
        staggerDirection: -1,
        duration: 0.45,
        height: { delay: 0.43 },
        opacity: { delay: 0.44 },
        padding: { delay: 0.44 },
       
      },
    },
  };

export const childVariants = {
  hidden: { y: "70%", opacity: 0, scale:1.01 },
  visible: {
    y: "0%",
    opacity: 1,
    scale:1,
    transition: {duration:0.35, ease: "easeInOut" },
  },
  exit: { y: "70%", opacity:0, scale:1.01, transition: {opacity: { ease: "easeInOut"}} },
};
