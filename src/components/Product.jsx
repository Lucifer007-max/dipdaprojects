'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Award, Star, Trophy } from 'lucide-react'
import { useRef } from 'react'
import xray from '../assets/images/product/xray.jpg'
import Pgnaa from '../assets/images/product/Pgnaa.jpg'
import project3 from '../assets/images/projects/room-jpg-e1694747063529.webp'
import project4 from '../assets/images/projects/bantley-jpg-e1694747011442.webp'
import project5 from '../assets/images/projects/davidoff-jpg-e1694747097761.webp'
import project6 from '../assets/images/projects/beluga-jpg-e1694747132112.webp'
import { useMediaQuery } from 'react-responsive'


export default function Product() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const isSmallScreen = useMediaQuery({ query: '(max-width: 600px)' });

  // const { scrollYProgress } = useScroll();
  // const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const projects = [
    {
      title: "Analytical Process & Quality Control",
      description: "Over 100 man-years of combined experience in servicing",
      icon: <Award className="w-12 h-12" />,
      // stats: "10K+ Visitors",
      // client: "Mercedes-Benz",
      // year: "2023",
      image: xray
    },
    {
      title: "RADIATION SERVICES & PRODUCTS",
      description: "PGNAA (Prompt Gamma Neutron Activation Analysis) systems",
      icon: <Star className="w-12 h-12" />,
      // stats: "300% Engagement",
      // client: "Alfa Bank",
      // year: "2023",
      image: Pgnaa
    },
    // {
      // title: "Environmental & Geological Engineering",
      // description: "Premium vodka brand activation with artistic installations",
      // icon: <Trophy className="w-12 h-12" />,
      // // stats: "25+ Markets",
      // // client: "Beluga",
      // // year: "2023",
      // image: project6
    // },
    {
      title: "Environmental & Geological Engineering",
      description: "Premium vodka brand activation with artistic installations",
      icon: '',
      stats: "25+ Markets",
      client: "Bantley",
      year: "2023",
      image: project4
    },
    // {
    //   title: "Room",
    //   description: "Premium vodka brand activation with artistic installations",
    //   icon: <Trophy className="w-12 h-12" />,
    //   stats: "25+ Markets",
    //   client: "Room",
    //   year: "2022",
    //   image: project3
    // },
    // {
    //   title: "Davidoff",
    //   description: "Premium vodka brand activation with artistic installations",
    //   icon: <Trophy className="w-12 h-12" />,
    //   stats: "25+ Markets",
    //   client: "Davidoff",
    //   year: "2023",
    //   image: project3
    // }
  ]

  return (
    <section ref={containerRef} id="special-projects" className="relative min-h-screen py-20 bg-[#FCEEE8] text-black overflow-hidden">
      <div className="absolute inset-x-0 top-1/3 w-full h-1/3 bg-[#b84e4a] w-4/5"></div>

      <motion.div style={{ y }} className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative mb-12 md:mb-32"
        >
          <motion.h2
            className="text-2xl sm:text-7xl md:text-7xl  font-bold tracking-tighter leading-none text-center"
          >
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-block text-4xl md:text-6xl sm:text-4xl  lg:text-7xl "
            >
              OUR
            </motion.span>
            <motion.span
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block ml-2 md:ml-4 text-4xl md:text-6xl sm:text-4xl  lg:text-7xl "
              style={{ WebkitTextStroke: '1px black', color: 'transparent' }}
            >
              PRODUCT
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Card Layout */}
        {/* import { motion, useScroll, useTransform } from "framer-motion"; */}

        {/* Card Layout */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* Middle Background Layer */}
          {projects.map((project, index) => {
            // Adjust the range to control movement

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative group flex flex-col items-center "
              >
                <motion.div
                  className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-lg inset-0 bg-gradient-to-t from-customOrange to-transparent opacity-1"
                  whileHover={{ scale: 1, zIndex: 50 }} // Desktop hover effect
                  // onTap={{ scale: 1.05, zIndex: 50 }} // Mobile tap effect
                  whileInView={isSmallScreen ? { scale: 1, zIndex: 50 } : undefined}

                  transition={{ duration: 1 }}
                  style={{ y }} // Apply the scroll-based Y-axis transform here
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileHover={{ opacity: 1, y: 0 }} // Desktop hover effect
                    // onTap={{ opacity: 1, y: 0 }} // Mobile tap effect
                    whileInView={isSmallScreen ? { opacity: 1, y: 0 }: undefined}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-customOrange/90 p-6 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <motion.h3
                        whileHover={{ scale: 1.1 }} // Desktop hover effect
                        whileInView={isSmallScreen ? { scale: 1.1 } : undefined}
                        // onTap={{ scale: 1.1 }} // Mobile tap effect
                        className="text-dark text-3xl font-bold"
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-dark">{project.description}</p>
                    </div>

                    <div className="space-y-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }} // Desktop hover effect
                        whileInView={isSmallScreen ? { scale: 0.95 } : undefined}
                        className="w-full px-6 py-3 bg-custom text-white rounded-lg font-medium"
                      >
                        View Service
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

            );
          })}
        </div>


      </motion.div>
    </section>
  )
}