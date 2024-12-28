

////reference: https://motion.dev/docs/react-transitions

import { delay } from "motion";

export const desktopTray = {
    visible: {
      height: "20rem",
      opacity: 1,
      transition: { duration: 0.45, delayChildren: 0.25 },
    },
    hidden: { height: "0rem", opacity: 0},
    exit: {
      height: "0rem",
      opacity: 0,
      padding: 0,
      transition: {
         delay: 0.44,
   
        duration: 0.45,
        height: { delay: 0.44 },
        opacity: { delay: 0.44 },
        padding: { delay: 0.44 },
       
      },
    },
  };


export const  listItemParent = { 
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "100%",
    transition: {
      delayChildren:0.25,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      delay:0.30,
      ease: "easeInOut",
    },
  },
};

  export const listItem = { 
    hidden: { y: "20%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        staggerDirection: 1, 
         ease: "easeInOut",
         },
    },
    exit: { 
      y: "20%", 
      opacity: 0,
      transition: { 
        delay:0.35,
        delayChildren:0,
        staggerChildren: 0.1,
        staggerDirection: -1,
        ease: "easeInOut",
        
       },
    },
  };



  export const innerChildAnim = {
    hidden: { y: "30%", opacity: 0, scale:1.05, },
    visible: {
      y: "0%",
      opacity: 1,
      scale:1,
      transition: {ease: "linear",}
    },
    exit: { y: "30%", opacity:0,  },
  };
