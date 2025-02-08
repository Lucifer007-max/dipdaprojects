import React from "react";
import Slider from "react-slick";

const cards = [
  {
    title: "Thermo Fisher",
    bg: "bg-blue-500",
    img: "https://dlg7f0e93aole.cloudfront.net/wp-content/uploads/Nicolet-iS10-FTIR-Spectrometer.jpg",
  },
  {
    title: "FANR Affiliated",
    bg: "bg-green-500",
    img: "https://www.emirates247.com/polopoly_fs/1.702535.1677238865!/image/image.jpg",
  },
  {
    title: "OEM is Bruker",
    bg: "bg-purple-500",
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
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // Mobile view
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-10">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="p-4">
            <div
              className={`rounded-lg shadow-lg overflow-hidden ${card.bg} text-white`}
            >
              <img src={card.img} alt={card.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-bold">{card.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
