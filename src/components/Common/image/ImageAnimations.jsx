
export const animateImage = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "linear",
      },
    }
  };
  
  export const animateBlurhash = {
    opacity: [1, 0.3, 1],

    transition: {
      duration: 0.9,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    },
  };