export const fadeIn = {
  initial: {
    color: "#ffffff",
    y: -30,
    opacity: 0,
  },
  animate: {
    color: "#0D0D2B",
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: 1.1 },
  },
};
export const fadeInDown = {
  initial: {
    y: -70,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: .5 },
  },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.8,
      // delayChildren: 0.8,
    },
  },
};


export const fadeInLeft = {
  initial: {
    x: 70,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 1.1 },
  },
};

export const buttonFadeInLeft = {
  initial: {
    x: -70,
    opacity: 0,
    rotate: 45,
  },
  animate: {
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: { type: "spring", duration: 1.1, bounce: 0.4 },
  },
};

export const buttonFadeInRight = {
  initial: {
    x: 70,
    opacity: 0,
    rotate: 45,
  },
  animate: {
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: { type: "spring", duration: 1.1, bounce: 0.4 },
  },
};
export const subscribeFadeInRight = {
  initial: {
    x: 50,
    opacity: 0,
    rotate: 20,
  },
  animate: {
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: { type: "spring", duration: 1.1, bounce: 0.4 },
  },
};

export const fadeInRight = {
  initial: {
    x: -70,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 1.1 },
  },
};

export const staggerTextContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      // delayChildren: 0.3,
    },
  },
};

export const fadeInUp = {
  initial: {
    y: 70,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: 1.1 },
  },
};



export const zoomOut = {
  initial: { scale: .8, opacity: 0 },
  animate: {
   scale: 1,
    opacity: 1,
    transition: { type: "spring", duration: 1.1 },
  },
};


