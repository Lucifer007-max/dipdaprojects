export const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
}

export const letterAnimation = {
    initial: { y: 400 },
    animate: { y: 0 },
    transition: {
      duration: 1,
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  };