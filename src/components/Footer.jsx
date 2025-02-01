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
    <footer className="bg-footer border-t border-light-800">
      <div className="container mx-auto px-4 py-20">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 place-items-center">
          {/* Logo & Info */}
          <div className="relative mb-10">
            {/* Background with moving particles */}
            {/* <div className="absolute inset-0 z-0">
                <svg className="absolute inset-0 w-full h-full">
                  <g>
                    {particles.map((particle1, index1) => {
                      return particles.map((particle2, index2) => {
                        if (index1 !== index2) {
                          return (
                            <motion.path
                              key={`${index1}-${index2}`}
                              d={getLineCoordinates(particle1, particle2)}
                              stroke="#000"
                              strokeWidth="1"
                              fill="none"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 100 + Math.random() * 2,
                                ease: "easeInOut",
                              }}
                            />
                          );
                        }
                        return null;
                      });
                    })}
                  </g>
                </svg>
              </div> */}

            {/* Logo & Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6 relative z-10"
            >
              <img
                src="https://www.geospectratech.com/images/logo.png"
                width={300}
                alt="Logo"
              />
              <p className="font-outfit text-light-400 leading-relaxed">
                Creating exceptional digital experiences through innovative design and technology.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6 mt-5 text-center"
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

          {/* Quick Links */}




          {/* Newsletter */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="font-space-grotesk text-xl font-bold">Newsletter</h4>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-light border border-gray-800 rounded-lg px-4 py-3 focus:border-primary transition-colors outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-primary"
              >
                →
              </motion.button>
            </div>
          </motion.div> */}
        </div>
        <div className="grid md:grid-cols-2 gap-12 mb-16 place-items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="font-space-grotesk text-xl font-bold text-center">Quick Links</h4>
            <ul className="space-y-4 flex">
              {['', 'Services', 'Projects', 'Contact'].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="text-light mx-4  mt-0 hover:text-black transition-colors"
                >
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 mt-5 text-center"
          >
            <h4 className="font-space-grotesk text-xl font-bold">Location</h4>
            <div className="flex space-x-6 justify-center">
              <p>GEOSPECTRA TECHNICAL SERVICES LLC <br /> PO Box 214634, Dubai, United Arab Emirates.</p>
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