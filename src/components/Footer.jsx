import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, url: "#" },
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaLinkedin />, url: "#" },
    { icon: <FaInstagram />, url: "#" }
  ];

  const [particles, setParticles] = useState([]);
  const letters = "SPECTRA".split(""); // Split word into letters
  const [showFullWord, setShowFullWord] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFullWord(true);
      setTimeout(() => setShowFullWord(false), 2000); // Hide full word after 2s
    }, letters.length * 300 + 3000); // Restart animation loop

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    // Create initial particles with random positions
    const newParticles = Array.from({ length: 10 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setParticles(newParticles);
  }, []);

  const particleSize = 6;

  const getLineCoordinates = (p1, p2) => {
    return `M${p1.x},${p1.y} L${p2.x},${p2.y}`;
  };

  return (
    <>
      <footer className="bg-footer2 border-t border-light-800">
        <div className="container mx-auto px-4 py-12">
          {/* Top Section */}
          <div className="grid md:grid-cols-3 gap-12 mb-16 place-items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="w-full text-left"
            >
              <h4 className="font-space-grotesk text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 px-3">
                {['Home', 'Services', 'Projects', 'Contact'].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    className="text-light hover:text-black transition-colors  before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-300 hover:before:w-full"
                  >
                    <a href={`#${item.toLowerCase()}`}>{item}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-left"
            >
              <h4 className="font-space-grotesk text-xl font-bold">Location</h4>
              <p className="">
                211 KML Business Center, Al meydan Street <br /> Dubai, United Arab Emirates
              </p>
              <p className="">
                Spectraline Inustrial Equipment Trading LLC PO 11675   Dubai, United Arab Emirates
              </p>
              <p className="">
                GeoSpectra Technical Services LLC PO 214634 <br /> Dubai United Arab Emirates
              </p>
            </motion.div>

            {/* Follow Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-center"
            >
              <h4 className="font-space-grotesk text-xl font-bold">Follow us</h4>
              <div className="flex space-x-6 justify-center">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ scale: 1.2, color: '#fff' }}
                    className="text-xl text-light hover:text-primary transition-colors flex"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </footer>
      <div className="border-t bg-gray-700 border-gray-800 py-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
        <p className="font-outfit text-light">
          © {currentYear} SPECTRA. All rights reserved.
        </p>

        {/* <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                whileHover={{ scale: 1.2, color: '#fff' }}
                className="text-xl text-gray-400 hover:text-primary transition-colors flex"
              >
                {social.icon}
              </motion.a>
            ))}
          </div> */}
      </div>
    </>
  );
};

export default Footer; 