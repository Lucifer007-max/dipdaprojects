import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Facebook, Instagram, Link as L, MessageCircle, Phone } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const navLinks = [
  { title: "HOME", path: "" },
  { title: "ABOUT US", path: "about-us" },
  {
    title: "SERVICE",
    path: "service",
    children: [
      { title: "PGNAA Service", path: "/service/pgnaa-service" },
      { title: "X-Ray Service", path: "/service/xray-service" },
    ],
  },
  // { title: "PRODUCT", path: "product" },
  {
    title: "PRODUCT",
    path: "product",
    children: [
      { title: "Product A", path: "/product/product-a" },
      { title: "Product B", path: "/product/product-b" },
      { title: "Product C", path: "/product/product-c" },
    ],
  },
  { title: "TRAINING", path: "training" },
  { title: "EXPERTISE", path: "expertise" },
  { title: "OUR NETWORK", path: "our-network" },
  { title: "CONTACT US", path: "contact-us" },
];



export default function WillstarNavbar() {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("main");

  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigteByURL = (sectionId) => {
    console.log(sectionId)
    navigate(`/${sectionId}`);
    setIsOpen(false);
  }

  const menuVariants = {
    closed: { opacity: 0, y: '-100%' },
    open: { opacity: 1, y: 0 }
  }

  const linkVariants = {
    closed: { opacity: 0, x: -50 },
    open: i => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 }
    })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
        className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-sm' : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="relative z-50">
            <motion.div
              className="text-2xl font-bold text-white italic tracking-wider"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src='https://www.geospectratech.com/images/logo.png' width={110} alt='logo' />
            </motion.div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <div key={index} className="relative">
                {/* Parent Link */}
                <motion.a
                  onClick={() => {
                    if (link.children) {
                      // Toggle the dropdown for SERVICE and PRODUCT links
                      setOpenDropdown(openDropdown === link.title ? null : link.title);
                    } else {
                      // Regular link navigation
                      navigteByURL(link.path);
                    }
                  }}
                  className="text-custom hover:text-dark text-sm tracking-wider transition-colors cursor-pointer flex items-center"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {link.title}
                </motion.a>

                {/* Dropdown Menu */}
                {link.children && openDropdown === link.title && (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden"
                    >
                      {link.children.map((child, childIndex) => (
                        <a
                          key={childIndex}
                          href={child.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                        >
                          {child.title}
                        </a>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            ))}

            {/* Social Icons */}
            <div className="flex items-center space-x-4 ml-8">
              <SocialIcon Icon={Instagram} />
              <SocialIcon Icon={Facebook} />
            </div>
          </div>

          {/* Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 lg:hidden"
          >
            <motion.div
              className="grid grid-cols-2 gap-1"
              whileHover={{ rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-custom rounded-full"
                  initial={false}
                  animate={isOpen ? { scale: [1, 1.5, 1] } : { scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                />
              ))}
            </motion.div>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-white z-40 lg:hidden"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-6 py-24 h-full flex flex-col">
            {/* Main Menu */}
            <AnimatePresence>
              {activeMenu === "main" && (
                <motion.div
                  key="main-menu"
                  initial={{ x: 0, opacity: 1 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "-100%", opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col space-y-6"
                >
                  {navLinks.map((link) => (
                    <motion.div key={link.title}>
                      {link.children ? (
                        <motion.button
                          onClick={() => setActiveMenu(link.title.toLowerCase())}
                          className="text-1xl text-dark/90 hover:text-black transition-colors cursor-pointer w-full text-left"
                        >
                          {link.title} →
                        </motion.button>
                      ) : (
                        <Link
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                          className="text-1xl text-dark/90 hover:text-black transition-colors cursor-pointer"
                        >
                          {link.title}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submenus for Products and Services */}
            {["PRODUCT", "SERVICE"].map((menu) => (
              <AnimatePresence key={menu}>
                {activeMenu === menu.toLowerCase() && (
                  <motion.div
                    key={`${menu}-menu`}
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "100%", opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col space-y-6"
                  >
                    {/* Back Button */}
                    <motion.button
                      onClick={() => setActiveMenu("main")}
                      className="text-xl font-bold text-dark flex items-center space-x-2 mb-4"
                    >
                      ← Back
                    </motion.button>

                    {navLinks
                      .find((link) => link.title === menu)
                      ?.children.map((child, index) => (
                        <motion.a
                          key={index}
                          href={child.path}
                          className="text-2xl text-dark/90 hover:text-black transition-colors cursor-pointer"
                        >
                          {child.title}
                        </motion.a>
                      ))}
                  </motion.div>
                )}
              </AnimatePresence>
            ))}

            {/* Social Icons */}
            <div className="mt-auto flex space-x-6">
              <SocialIcon Icon={Instagram} size={24} />
              <SocialIcon Icon={Facebook} size={24} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  )
}

function SocialIcon({ Icon, size = 20 }) {
  return (
    <motion.a
      href="#"
      className="text-white/80 hover:text-white transition-colors"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon size={size} />
    </motion.a>
  )
}