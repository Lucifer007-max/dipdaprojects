import { motion } from 'framer-motion';
import { quantum } from 'ldrs';
// import { motion } from "framer-motion";
import { useState, useEffect } from "react";


quantum.register();

const Loading = () => {
  const letters = "SPECTRA".split(""); // Split word into letters
  const [showFullWord, setShowFullWord] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFullWord(true);
      setTimeout(() => setShowFullWord(false), 2000); // Hide full word after 2s
    }, letters.length * 300 + 3000); // Restart animation loop

    return () => clearInterval(interval);
  }, []);
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
      <div className="w-full h-screen flex justify-center items-center bg-gray-400">
        {/* Animated Letters */}
        {!showFullWord && (
          <motion.div className="flex space-x-2 text-6xl font-bold text-red-500">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.3,
                  duration: 0.6,
                  ease: "easeInOut",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        )}

        {/* Full "SPECTRA" Effect - Appears after all letters are shown */}
        {showFullWord && (
          <motion.h1
            className="absolute text-8xl font-bold text-white"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            SPECTRA
          </motion.h1>
        )}
      </div>
    </motion.div>


  );
};

export default Loading; 