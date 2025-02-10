import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Thermo Fisher",
    bg: "bg-blue-500",
    img: "https://dlg7f0e93aole.cloudfront.net/wp-content/uploads/Nicolet-iS10-FTIR-Spectrometer.jpg",
  },
  {
    title: "FANR Affiliated",
    bg: "bg-red-500",
    img: "https://www.emirates247.com/polopoly_fs/1.702535.1677238865!/image/image.jpg",
  },
  {
    title: "OEM is Bruker",
    bg: "bg-blue-500",
    img: "https://www.bruker.com/content/dam/global/logos/logo.svg",
  },
  {
    title: "Frontier TECHNOLOGIES",
    bg: "bg-red-500",
    img: "https://th.bing.com/th/id/OIP.AaW3zYtI6TD5Y5jKm3WIRQHaE8?rs=1&pid=ImgDetMain",
  },
];

export default function MultiProductSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full py-10 overflow-hidden"
    >
      <Slider {...settings}>
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-4"
          >
            <div
              className={`rounded-lg shadow-lg overflow-hidden ${card.bg} text-white`}
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full bg-light h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold">{card.title}</h2>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </motion.div>
  );
}
