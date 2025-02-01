import { motion, useAnimation, useInView, useScroll, useSpring, useTransform } from 'framer-motion';
import ReactPlayer from 'react-player';
import { FaArrowRight, FaPlay, FaRocket } from 'react-icons/fa';
import video from '../assets/videos/banner1.mp4';
import { services } from '../utils/data';
import { itemAnimation, letterAnimation } from '../utils/animation';
import { useEffect, useRef } from 'react';
import mission from '../assets/images/backgrounds/mission.jpg';
import QualityVideo from '../assets/videos/quality_control.mp4'
import radtion from '../assets/videos/radtion.mp4';
import Media from './media';
import { GlowingCard } from './card/GlowingCard';
import Product from './Product';
const Hero = () => {
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
  const letters = " ".split("")


  return (
    <>
      <section id="hero" className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <ReactPlayer
            url={video}
            playing
            loop
            muted
            width="100%"
            height="100%"
            style={{ objectFit: 'cover', background: "rgb(15 17 19)" }}
          />
          <div className="absolute inset-0 bg-dark/70" />
        </div>

        {/* Animated Shapes */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-64 h-64 border border-primary/20 rounded-full"
        />

        {/* Content */}
        <div className="relative z-10 h-full container mx-auto px-4 flex flex-col justify-center">
          <div className="overflow-hidden">
            <motion.h1
              initial="initial"
              animate="animate"
              className="font-orbitron text-6xl md:text-8xl font-bold text-light mb-8 flex flex-wrap"
            >
              {["S", "P", "E", "C", "T", "R", "A"].map((letter, index) => (
                <motion.span
                  key={index}
                  {...letterAnimation}
                  transition={{ delay: index * 0.1 }}
                  className="inline-block hover:text-customOrange transition-colors duration-300"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl text-light/80 font-rajdhani max-w-xl leading-relaxed"
          >
            Transforming ideas into extraordinary digital experiences through innovative design and cutting-edge technology
          </motion.p>

          <div className="flex gap-6 mt-12">
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 bg-custom text-light font-orbitron inline-flex items-center gap-3 group"
            >
              Know More
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </motion.span>
            </motion.button>

            {/* <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 border border-primary/50 text-light font-orbitron inline-flex items-center gap-3 group hover:bg-primary/10"
          >
            Watch Reel
            <FaPlay className="group-hover:scale-110 transition-transform" />
          </motion.button> */}
          </div>

          {/* Floating Icons */}
          <div className="absolute bottom-20 right-20">
            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-custom text-4xl"
            >
              {/* <FaRocket /> */}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-light/80"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-center"
          >
            <p className="font-rajdhani text-sm mb-2">Scroll Down</p>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1 h-12 bg-custom mx-auto rounded-full"
            />
          </motion.div>
        </motion.div>

      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-lg leading-relaxed mb-20 text-dark"
          >
            <motion.h1
              className="text-4xl md:text-6xl sm:text-4xl  lg:text-7xl  font-bold text-center mb-10 tracking-wider text-custom"
              style={{
                WebkitTextStroke: '1px #b84e4a',
                WebkitTextFillColor: 'transparent'
              }}
            // className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r text-custom"
            // style={{ scale: scaleSpring }}
            >
              WHO WE ARE
            </motion.h1>
            <p>
              Spectra Line Industrial LLC and GeoSpectra Technical Services LLC, with offices in Dubai, UAE, specialize in providing high-end, cost-effective technical solutions and services across a range of industries, including Cement & Coal, Iron & Steel, Oil & Gas, and Minerals. They offer dedicated technical support for analytical instruments such as XRF, XRD, and OES analyzers, as well as Gamma-ray on-line analyzers like PGNAA systems (e.g., Gamma-Metrics, Geoscan). Their services also extend to radiation technology, including the supply of radioactive isotopes, radiation services, and radioactive waste management, along with expert training and application support in mission-critical environments.
            </p>
           
          </motion.div>
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
            <div className="grid grid-cols-1  lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-x-8 gap-y-12">
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
                    </div>
                  </GlowingCard>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Bottom Section */}
      <section className="py-20 bg-[#FCEEE8] ">
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
            SERVICE
          </motion.span>
        </motion.h2>
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
                In the field of scientific analysis, ensuring the highest level of accuracy and consistency is paramount. The use of advanced analytical instruments plays a crucial role in maintaining quality control and enhancing the efficiency of processes. Technologies such as X-ray Fluorescence (XRF) Analyzers, X-ray Diffraction (XRD) Analyzers, Optical Emission Spectrometers (OES), and Lab Automation & Networking are pivotal in streamlining analytical processes across various industries, including materials science, mining, metallurgy, pharmaceuticals, and environmental monitoring.
              </p>
              <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 border border-customOrange/50 text-dark font-orbitron inline-flex items-center gap-3 group hover:bg-customOrange/10"
            >
              Know More
              <FaPlay className="group-hover:scale-110 transition-transform" />
            </motion.button>
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
      <section className="py-20 bg-[#FCEEE8] ">
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
              Radiation-based technologies play a critical role in a variety of industries, from healthcare and research to energy and manufacturing. However, with the use of radioactive materials comes the responsibility of ensuring safety, compliance with regulations, and proper handling. Our Radiation Services & Products Support offers a range of professional services to assist businesses and organizations in managing their radiation needs effectively and safely. These services include Professional Consultancy, Radioactive Waste Management, and Radioisotope Supply & Installation, all designed to support the safe and efficient use of radioactive materials.
              </p>
              <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 border border-customOrange/50 text-dark font-orbitron inline-flex items-center gap-3 group hover:bg-customOrange/10"
            >
              Know More
              <FaPlay className="group-hover:scale-110 transition-transform" />
            </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Testimonal */}
      <Media />
      <Product />
    </>

  );
};

export default Hero; 