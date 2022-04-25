export const APP_TRANSITION_PAGE = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
  transition: { duration: 0.3 },
};

export const SHOW_SPINNER = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
  transition: { delay: 0.5 },
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const animationFromLeftToRight = (delay: number) => {
  return {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { delay },
  };
};
