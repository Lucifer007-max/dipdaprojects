import { motion } from 'framer-motion';
import { quantum } from 'ldrs';

quantum.register();

const Loading = () => {
  return (
    <motion.div
      className="loader bg-light"
      initial={{ x: "100vw", opacity: 1 }}  // Start from right
      animate={{ x: 0, opacity: 1 }}  // Slide in to center
      exit={{ x: "-100vw", opacity: 0 }}  // Slide out to the left on exit
      transition={{
        duration: 1, // Smooth transition duration
        ease: "easeIn", // Easing for a natural effect
        delay: 0.3 // Small delay before animation starts
      }}
    >
    <img src="https://www.geospectratech.com/images/logo.png" width={300} />
      {/* <l-quantum
        size="300"
        speed="1.75"
        color="white"
      ></l-quantum> */}
    </motion.div>


  );
};

export default Loading; 