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
    <footer className="bg-footer2 border-t border-light-800">
      <div className="container mx-auto px-4 py-20">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12 mb-16 place-items-center">
          {/* Logo & Info */}
          <div className="relative mb-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6 relative z-10"
            >
            <img
  src="https://www.geospectratech.com/images/logo.png"
  alt="GeoSpectra Logo"
  className="mx-auto  drop-shadow-lg filter brightness-200"
  style={{ filter: "drop-shadow(rgb(255, 255, 255,0.9) 2px 0px 0px)" }}
/>

              <p className="font-outfit text-light-400 leading-relaxed">
                Creating exceptional digital experiences through innovative design and technology.
              </p>
            </motion.div>
          </div>
          

          {/* Quick Links */}
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
              GEOSPECTRA TECHNICAL SERVICES LLC PO Box 214634, <br /> Dubai, United Arab Emirates.
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

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
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
      </div>
    </footer>
  );
};

export default Footer; 