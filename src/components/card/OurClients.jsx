import { motion } from "framer-motion";

const acquisitions = [
  { name: "CAPCO", image: "https://www.emirates247.com/polopoly_fs/1.702535.1677238865!/image/image.jpg" },
  { name: "Edgile", image: "/edgile.png" },
  { name: "Rizing", image: "/rizing.png" },
  { name: "LeanSwift", image: "/leanswift.png" },
  { name: "CAS Group", image: "/cas-group.png" },
];

export default function AcquisitionsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-[#d52c2c] py-20 text-center"
    >
      <motion.h2
          className="text-4xl md:text-6xl sm:text-4xl  lg:text-7xl  py-20  font-bold tracking-tighter leading-none text-center"
        >
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block text-light"
          >
            OUR
          </motion.span>
          <motion.span
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block ml-2 md:ml-4"
            style={{ WebkitTextStroke: '1px white', color: 'transparent' }}
          >
            CLIENTS
          </motion.span>
        </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6">
        {acquisitions.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="mx-auto"
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
