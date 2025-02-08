import { motion } from "framer-motion";

const cards = [
  { title: "Thermo Fisher", bg: "bg-blue-500", img: "https://dlg7f0e93aole.cloudfront.net/wp-content/uploads/Nicolet-iS10-FTIR-Spectrometer.jpg" },
  { title: "FANR Affiliated", bg: "bg-green-500", img: "https://www.emirates247.com/polopoly_fs/1.702535.1677238865!/image/image.jpg" },
  { title: "OEM is Bruker", bg: "bg-purple-500", img: "https://th.bing.com/th/id/OIP._cVjP9pru83HwcnDgYTxjAHaEk?rs=1&pid=ImgDetMain" },
  { title: "Frontier TECHNOLOGIES", bg: "bg-red-500", img: "https://th.bing.com/th/id/OIP.AaW3zYtI6TD5Y5jKm3WIRQHaE8?rs=1&pid=ImgDetMain" },
];

const CardGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full">
    {cards.map((card, index) => (
      <motion.div
        key={index}
        className="relative overflow-hidden"
        // whileHover={ { scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${card.img})` }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Hidden Text (Appears on Hover) */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-white text-center opacity-0"
          whileHover={{ opacity: 1, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl font-bold">{card.title}</h2>
          <p className="mt-2 text-lg">Innovating for a better future.</p>
        </motion.div>

        {/* Fixed Height */}
        <div className="h-80"></div>
      </motion.div>
    ))}
  </div>
  );
};

export default CardGrid;
