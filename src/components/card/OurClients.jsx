
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import client1 from '../../assets/images/clients/1.jpg'
import client2 from '../../assets/images/clients/2.jpg'
import client3 from '../../assets/images/clients/3.jpg'
import client4 from '../../assets/images/clients/4.png'
import client5 from '../../assets/images/clients/5.png'
import client6 from '../../assets/images/clients/6.jpg'
import client7 from '../../assets/images/clients/7.jpg'
import client8 from '../../assets/images/clients/8.png'
import client9 from '../../assets/images/clients/9.jpg'
import client10 from '../../assets/images/clients/10.png'
import client11 from '../../assets/images/clients/11.jpg'
import client12 from '../../assets/images/clients/12.png'
import client13 from '../../assets/images/clients/13.png'
import client14 from '../../assets/images/clients/14.jpg'
import client15 from '../../assets/images/clients/15.png'
import client16 from '../../assets/images/clients/16.png'
import client17 from '../../assets/images/clients/17.jpg'
import client18 from '../../assets/images/clients/18.png'
import client19 from '../../assets/images/clients/19.png'
import client20 from '../../assets/images/clients/20.jpg'


import client21 from '../../assets/images/clients/21.jpg'
import client22 from '../../assets/images/clients/22.png'
import client23 from '../../assets/images/clients/23.png'
import client24 from '../../assets/images/clients/24.png'
import client25 from '../../assets/images/clients/25.png'
import client26 from '../../assets/images/clients/26.jpg'
import client27 from '../../assets/images/clients/27.jpg'
import client28 from '../../assets/images/clients/28.png'
import client29 from '../../assets/images/clients/29.jpg'
import client30 from '../../assets/images/clients/30.jpg'

const acquisitions = [
  { name: "CAPCO", image: client1 },
  { name: "CAPCO", image: client2 },
  { name: "CAPCO", image: client3 },
  { name: "CAPCO", image: client4 },
  { name: "CAPCO", image: client5 },
  { name: "CAPCO", image: client6 },
  { name: "CAPCO", image: client7 },
  { name: "CAPCO", image: client8 },
  { name: "CAPCO", image: client9 },
  { name: "CAPCO", image: client10 },
];

const acquisition2s = [
  { name: "CAPCO", image: client11 },
  { name: "CAPCO", image: client12 },
  { name: "CAPCO", image: client13 },
  { name: "CAPCO", image: client14 },
  { name: "CAPCO", image: client15 },
  { name: "CAPCO", image: client16 },
  { name: "CAPCO", image: client17 },
  { name: "CAPCO", image: client18 },
  { name: "CAPCO", image: client19 },
  { name: "CAPCO", image: client20 },
];


const acquisition3s = [
  { name: "CAPCO", image: client21 },
  { name: "CAPCO", image: client22 },
  { name: "CAPCO", image: client23 },
  { name: "CAPCO", image: client24 },
  { name: "CAPCO", image: client25 },
  { name: "CAPCO", image: client26 },
  { name: "CAPCO", image: client27 },
  { name: "CAPCO", image: client28 },
  { name: "CAPCO", image: client29 },
  { name: "CAPCO", image: client30 },
];

export default function AcquisitionsSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

  const xLeftToRight = useTransform(scrollYProgress, [0, 1], ["-100%", "50%"]);
  const xRightToLeft = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);
  const xLeftToRight2 = useTransform(scrollYProgress, [0, 1], ["-150%", "50%"]);

  return (
    <div ref={sectionRef}>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className=" py-20 text-center"
      >
        <motion.h2
          className="text-4xl md:text-6xl sm:text-4xl  lg:text-7xl  py-20  font-bold tracking-tighter leading-none text-center"
        >
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block text-dark"
          >
            OUR
          </motion.span>
          <motion.span
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block ml-2 md:ml-4"
            style={{ WebkitTextStroke: '1px black', color: 'transparent' }}
          >
            CLIENTS
          </motion.span>
        </motion.h2>
        <div className="relative   flex flex-col items-center justify-center overflow-hidden space-y-10">
          {/* First Row - Left to Right */}
          <motion.div style={{ x: xLeftToRight }} className="flex space-x-10">
            {acquisitions.map((client, i) => (
              <img key={i} src={client.image} alt="Client" className="h-20 object-contain aspect_set" />
            ))}
          </motion.div>
          <div className="py-10"></div>
          {/* Second Row - Right to Left */}
          <motion.div style={{ x: xRightToLeft }} className="flex space-x-10">
            {acquisition2s.map((client, i) => (
              <img key={i} src={client.image} alt="Client" className="h-20 object-contain aspect_set" />
            ))}
          </motion.div>
          <div className="py-10"></div>
          <motion.div style={{ x: xLeftToRight2 }} className="flex space-x-10">
            {acquisition3s.map((client, i) => (
              <img key={i} src={client.image} alt="Client" className="h-20 object-contain aspect_set" />
            ))}
          </motion.div>
        </div>

      </motion.section>
    </div>

  );
} 