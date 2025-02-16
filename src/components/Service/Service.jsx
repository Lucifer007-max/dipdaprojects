'use client'

import { motion, useScroll, useTransform, useAnimation } from 'framer-motion'
import { Music, Video, Users, Share2, CalendarDays, TrendingUp, Code } from 'lucide-react'
import { useRef, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { servicesList } from '../../utils/data'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import { useMediaQuery } from 'react-responsive'
import support from '../../assets/images/service/supportService.jpg'
import Accordion from './Accordion'
export default function Service({ title, content, pageTitle, TagLine }) {
  const containerRef = useRef(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })

  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])



  const isSmallScreen = useMediaQuery({ query: '(max-width: 600px)' });

  return (
    <section id="production" className="relative min-h-screen  bg-white text-white overflow-hidden">
      <div className='container mx-auto'>
        <Breadcrumb title={title} />

      </div>
      <div className="bg-gray-100 text-gray-900">

        {/* Hero Section */}
        <section
          ref={sectionRef}
          id="about-us"
          className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url(" + support + ")"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70" />
          {/* <img
            src={support}
            alt="Gamma-ray On-line Analyzers"
            className="absolute inset-0 w-full h-full object-cover brightness-50"
          /> */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 px-3"
          >
            <h1 className="text-4xl text-light font-bold">{pageTitle}</h1>
            <p className="mt-4 text-light text-lg">{TagLine}</p>
          </motion.div>
        </section>

        {/* Service Cards */}
        <div className="container mx-auto px-6 py-16">
          <div className='pb-20'>
            <div className="border-l-4 border-red-500  pl-3">
              <motion.h2
                className="text-4xl md:text-6xl sm:text-4xl  lg:text-5xl  font-bold tracking-tighter leading-none "
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
                  EXPERTISE
                </motion.span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }} className="text-gray-600 leading-relaxed mt-4">
              {content}


            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {servicesList.map((service, index) => (
              <motion.div
                key={index}
                className="relative bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-customOrange to-transparent opacity-0"
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.3 }}
                  whileInView={isSmallScreen ? { opacity: 0.6 } : undefined}  // Apply whileInView only for small screens
                  animate={{ opacity: inView ? 1 : 0 }}       // Scroll-based fade in/out


                />
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-gray-700 mt-2">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
        <div className='py-10'>
          <Accordion />

        </div>
      </div>
    </section>
  )
}