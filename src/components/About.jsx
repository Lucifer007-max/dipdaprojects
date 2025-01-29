import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView, useAnimation } from 'framer-motion'
import { Rocket, Users, Zap, CircleDot, CheckCircle, MoveRight, Share2, CalendarDays, FlagTriangleLeft, Eye } from 'lucide-react'
import mission from '../assets/images/backgrounds/mission.jpg';
import ReactPlayer from 'react-player';
import QualityVideo from '../assets/videos/quality_control.mp4'
import radtion from '../assets/videos/radtion.mp4'
const GlowingCard = ({ children, className, glowColor = "bg-white/20" }) => {
  return (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <motion.div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 ${glowColor}`}
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 1.2 }}
      />
      <div className={`relative ${className}`}>
        {children}
      </div>
    </motion.div>
  )
}

export default function AboutUs() {
  const sectionRef = useRef(null)
  const aboutUsRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const controls = useAnimation()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  const scaleSpring = useSpring(1, { stiffness: 100, damping: 30 })

  useEffect(() => {
    if (isInView) {
      scaleSpring.set(1.1)
      controls.start("visible")
    } else {
      scaleSpring.set(1)
      controls.start("hidden")
    }
  }, [isInView, scaleSpring, controls])

  const advantages = [
    { icon: Rocket, title: 'Easy start', subtitle: 'newcomers to the media field' },
    { icon: Users, title: 'high', subtitle: 'Media Rating' },
    { icon: Zap, title: 'Bys Troe', subtitle: 'Promotion and development' },
    { icon: CircleDot, title: 'Powerful', subtitle: 'PR campaign' },
    { icon: CheckCircle, title: 'Found', subtitle: 'content creation resources' },
    { icon: MoveRight, title: 'You move', subtitle: 'on large advertisers' }
  ]


  const services = [

    {
      title: "Mission",
      description: "GeoSpectra Technical Services LLC, having its registered office in Dubai, United Arab Emirates, focuses on providing high-end, cost-effective technical & application support to a range of Analytical Instruments (such as XRF/XRD/OES Analyzers) in “Mission Critical” environments. We also provide products and services in the field of Radiation Technology (Radio Isotopes supply and radioactive waste management) and in the field of Environmental & Geological Engineering.",
      icon: <FlagTriangleLeft className="w-8 h-8" />,
      gridClass: "md:col-span-1 row-span-1",
      bgClass: "bg-gradient-to-br from-green-600/30 to-green-900/30",
    },
    {
      title: "Vision",
      description: "To be a globally recognized leader in delivering innovative and reliable technical solutions for analytical instruments, radiation technology, and environmental and geological engineering. We aim to set the benchmark for excellence in mission-critical environments by ensuring sustainability, safety, and efficiency in every project we undertake.",
      icon: <Eye className="w-8 h-8" />,
      gridClass: "md:col-span-1 row-span-1",
      bgClass: "bg-gradient-to-br from-yellow-600/30 to-yellow-900/30",
    },

  ]

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  }
  const letters = " ".split("")

  return (
    <div className="relative">
      {/* Font Import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
        `}
      </style>

      {/* Rainbow Effect */}
      {/* <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 z-50" /> */}
      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-lg leading-relaxed mb-20 text-dark"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-center mb-10 tracking-wider text-custom"
              style={{
                WebkitTextStroke: '1px #b84e4a',
                WebkitTextFillColor: 'transparent'
              }}
            // className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r text-custom"
            // style={{ scale: scaleSpring }}
            >
              Who We Are
            </motion.h1>
            <p>
              Spectra Line Industrial LLC and GeoSpectra Technical Services LLC, with offices in Dubai, UAE, specialize in providing high-end, cost-effective technical solutions and services across a range of industries, including Cement & Coal, Iron & Steel, Oil & Gas, and Minerals. They offer dedicated technical support for analytical instruments such as XRF, XRD, and OES analyzers, as well as Gamma-ray on-line analyzers like PGNAA systems (e.g., Gamma-Metrics, Geoscan). Their services also extend to radiation technology, including the supply of radioactive isotopes, radiation services, and radioactive waste management, along with expert training and application support in mission-critical environments.
            </p>
          </motion.div>

          {/* <div className="flex justify-between items-center flex-wrap gap-8">
            {['................', '.....', '............', '............'].map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0, color: '#b84e4a', fontStyle: 'italic' }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, color: '#b84e4a' }}
                className="text-2xl font-bold tracking-wider text-white cursor-pointer relative group"
              >
                <span style={{visibility:'hidden'}}>{service}</span>
                <motion.div
                style={{height:'10px'}}
                  className="absolute -inset-0.5 bg-purple-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  layoutId="serviceBg"
                />
              </motion.div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Combined Hero and Advantages Section with Background */}
      <section
        ref={sectionRef}
        id="about-us"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url(" + mission + ")"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70" />

        {/* Vertical "ABOUT US" Text */}
        <motion.div
          ref={aboutUsRef}
          className="fixed left-8 top-1/2 -translate-y-1/2 rotate-90 origin-left text-8xl font-bold tracking-widest text-white pointer-events-none"
          style={{ opacity: isInView ? opacity : 0 }}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="inline-block hover:text-purple-400 transition-colors duration-300 cursor-default"
              style={{ fontFamily: 'Roboto, sans-serif', fontStyle: 'normal' }} // Using Roboto font
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Hero Content */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white my-20"
        > */}
        {/* <motion.h1
            className="text-4xl md:text-6xl font-bold text-center mb-20 tracking-wider text-custom"
            style={{
              WebkitTextStroke: '1px #b84e4a',
              WebkitTextFillColor: 'transparent'
            }}
          // className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r text-custom"
          // style={{ scale: scaleSpring }}
          >
            Who We Are
          </motion.h1> */}
        {/* <motion.p
            className="text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Spectra Line Industrial LLC and GeoSpectra Technical Services LLC, with offices in Dubai, UAE, specialize in providing high-end, cost-effective technical solutions and services across a range of industries, including Cement & Coal, Iron & Steel, Oil & Gas, and Minerals. They offer dedicated technical support for analytical instruments such as XRF, XRD, and OES analyzers, as well as Gamma-ray on-line analyzers like PGNAA systems (e.g., Gamma-Metrics, Geoscan). Their services also extend to radiation technology, including the supply of radioactive isotopes, radiation services, and radioactive waste management, along with expert training and application support in mission-critical environments.


          </motion.p> */}
        {/* </motion.div> */}

        {/* Advantages Content */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {}
          }}
          className="relative z-10 w-full"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-12">
              {/* {advantages.map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 20 }
                  }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center text-center group"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-16 h-16 text-purple-400 mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.subtitle}</p>
                </motion.div>
              ))} */}

              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className={`${service.gridClass}`}
                  variants={itemAnimation}
                >
                  <GlowingCard
                    className={`${service.bgClass} h-full rounded-lg backdrop-blur-sm 
                border border-white/10 hover:border-white/20 transition-all duration-500
                group cursor-pointer overflow-hidden`}
                  >
                    <div className="relative h-full p-6 flex flex-col">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="text-white relative inline-block mb-4"
                      >
                        {service.icon}
                      </motion.div>
                      <motion.h3
                        className="text-2xl font-bold mb-3"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1, x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {service.title}
                      </motion.h3>
                      <motion.p
                        className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors duration-300 flex-grow"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        {service.description}
                      </motion.p>
                      {/* <motion.button
                        className="mt-4 text-sm font-semibold flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        order
                        <motion.span
                          className="ml-2 group-hover:ml-3 transition-all duration-300"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          →
                        </motion.span>
                      </motion.button> */}
                    </div>
                  </GlowingCard>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>



      {/* Bottom Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-dark">
                ANALYTICAL PROCESS & QUALITY CONTROL
              </h3>
              <p className="text-dark">
                Analytical processes and quality control play a vital role in ensuring precision and reliability across various industries. Leveraging advanced technologies such as X-ray Fluorescence (XRF) Analyzers, organizations can perform non-destructive elemental analysis with high accuracy.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                className="relative h-[400px] overflow-hidden rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* <img
                  src="https://willstar.ru/wp-content/themes/willstar/assets/images/aboutus-section/color-madness.webp"
                  alt="Artistic visual"
                  className="w-full h-full object-cover"
                /> */}
                <ReactPlayer
                  url={QualityVideo}
                  playing
                  loop
                  muted
                  width="100%"
                  height="100%"
                  // style={{ objectFit: 'cover', background: "rgb(15 17 19)" }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-customOrange to-transparent opacity-0"
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0 }}
              className="relative"
            >
              <motion.div
                className="relative h-[400px] overflow-hidden rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              >
                {/* <img
                  src="https://willstar.ru/wp-content/themes/willstar/assets/images/aboutus-section/color-madness.webp"
                  alt="Artistic visual"
                  className="w-full h-full object-cover"
                /> */}
                <ReactPlayer
                  url={radtion}
                  playing
                  loop
                  muted
                  width="100%"
                  height="100%"
                  // style={{ objectFit: 'cover', background: "rgb(15 17 19)" }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-customOrange to-transparent opacity-0"
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-dark">
                RADIATION SERVICES & PRODUCTS SUPPORT
              </h3>
              <p className="text-dark">
                Our company offers comprehensive Radiation Services & Products Support to meet the needs of industries working with radioactive materials. Our Professional Consultancy services provide expert guidance to ensure compliance with regulatory standards and the safe use of radiation technologies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}