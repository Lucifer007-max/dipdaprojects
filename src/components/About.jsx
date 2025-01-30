import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView, useAnimation } from 'framer-motion'
import { Rocket, Users, Zap, CircleDot, CheckCircle, MoveRight, Clock } from 'lucide-react'
import { GlowingCard } from './card/GlowingCard';
import mission from '../assets/images/backgrounds/experties.jpg';
import Breadcrumb from './Breadcrumb/Breadcrumb';
import CountUp from "react-countup";
import Map from '../assets/images/about/map.png'
import Cement from "../assets/images/service/cement.jpg";
import Power from "../assets/images/service/power.jpg";
import Mineral from "../assets/images/service/Mineral.jpg";
import Oil from "../assets/images/service/Oil&gas.jpg";
import Iron from "../assets/images/service/Iron.jpg";

const About = () => {
  const sectionRef = useRef(null)
  const aboutUsRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const controls = useAnimation()
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end start", "start end"], // Animation starts as section enters viewport
  });

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

  const counters = [
    { id: 1, value: 25, label: "Years of Experience", icon: Rocket },
    { id: 2, value: 500, label: "Total Clients", icon: Users },
    { id: 3, value: 15, label: "Years in Business", icon: Clock },
  ];

  const services = [

    {
      title: "X-ray System",
      description: "Our X-ray team has extensive experience supporting more than 100 systems worldwide, covering all makes, models, and versions of ED-XRF/XRD analyzers and Optical Emission Spectrometers from manufacturers such as Thermo Fisher (ARL), PANalytical (Phillips), Bruker, Shimadzu, and others. With a strong background in the industry, our team has previously worked with leading organizations, including serving as Senior Service Engineers at Thermo Fisher Scientific, where they supported over 100 systems globally. As Senior Field Engineers at PANalytical (Phillips), they have provided expertise for more than 50 systems worldwide. Additionally, our team has served as Field Service Engineers, offering primary support for Bruker and Shimadzu systems, while also acting as Technical Experts, providing secondary support to ensure the seamless operation of X-ray analytical solutions.",
      // icon: <FlagTriangleLeft className="w-8 h-8" />,
      gridClass: "md:col-span-1 row-span-1",
      bgClass: "bg-gradient-to-br from-red-600/30 to-red-900/30",
    },
    {
      title: "PGNAA Analyzer",
      description: "A Team with over 100 man-years of experience in PGNAA, who have in the past, have worked with various original equipment manufacturers at senior positions. Our team brings over 100 man-years of experience in PGNAA, having worked in senior positions with various original equipment manufacturers. As Sales & Service Managers at Thermo Fisher Scientific PGNAA systems, we have sold and supported over 150 systems across the Middle East, Africa, and worldwide. As Senior Service Engineers at Thermo Fisher Scientific, we have provided expert support for more than 150 systems, including BMA, CBA, CBGN, CBX, OMNI, FSA, and EBA. Our experience extends further as Senior Field Engineers specializing in PGNAA, having worked with Thermo Fisher, Scantech, and other leading manufacturers. In addition, as Field Service Engineers, the seamless operation of PGNAA solutions.",
      // icon: <Eye className="w-8 h-8" />,
      gridClass: "md:col-span-1 row-span-1",
      bgClass: "bg-gradient-to-br from-red-600/30 to-red-900/30",
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
  const [yValues, setYValues] = useState([]);

  const images = [
    { src: Cement, alt: "Cement", title: 'Cement' },
    { src: Power, alt: "Power", title: 'Power' },
    { src: Mineral, alt: "Mineral", title: 'Mineral' },
    { src: Oil, alt: "Oil & Gas", title: 'Oil & Gas' },
    { src: Iron, alt: "Iron & Steel", title: 'Iron & Steel' },
  ];
  // useEffect(() => {
    // Precompute the y values for each image
    const yTransforms = images.map((_, index) =>
      useTransform(
        scrollYProgress,
        [0, 1],
        index % 2 === 0 ? ["0px", "50px"] : ["0px", "-50px"]
      )
    );
    // setYValues(yTransforms);
  // }, [images, scrollYProgress]);

  return (
    <section ref={sectionRef}>
      <motion.div className="relative container mx-auto px-4 pt-20" ref={aboutUsRef}>
        {/* BREADCRUM */}
        <Breadcrumb title="About SPECTAR" />
        {/* ABOUT , SERVICE & CEO SECTION */}
        <section className="max-w-5xl mx-auto px-6 lg:px-12 py-12 space-y-16" >
          {/* About SPECTAR Section */}

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6">
            <div className="border-l-4 border-red-500 pl-3">
              <motion.h2
                className="text-4xl md:text-6xl sm:text-4xl  lg:text-5xl  font-bold tracking-tighter leading-none "
              >
                <motion.span
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="inline-block text-dark"
                >
                  ABOUT
                </motion.span>
                <motion.span
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-block ml-2 md:ml-4"
                  style={{ WebkitTextStroke: '1px black', color: 'transparent' }}
                >
                  SPECTAR
                </motion.span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }} className="text-gray-600 leading-relaxed">
              Spectar is a global leader in providing high-end, cost-effective technical solutions in quality & process control, environmental protection, radiation technology, and geological & mining engineering. We specialize in serving Cement & Coal, Iron & Steel, Oil & Gas, and other mineral industries worldwide, offering advanced analytical instrumentation and radiation solutions
            </motion.p>
          </motion.section>

          {/* CEO Quote Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            <img
              src="https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
              alt="CEO"
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full "
            />
            <div className="space-y-4">
              <p className="text-lg font-semibold text-gray-800">
                "With our talented people, empowered teams, and world-class technologies, we are creating superior value for our stakeholders and enabling a more sustainable and resource-efficient future."
              </p>
              <p className="text-gray-600 font-medium">- Lorem, SPECTAR CEO</p>
            </div>
          </motion.section>

          {/* Our Purpose Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-6"
          >
            <div className="border-l-4 border-red-500 pl-3">
              {/* <h2 className="text-2xl text-dark font-bold">Our SERVICES</h2> */}
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
                  SERVICE
                </motion.span>
              </motion.h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-5">
              With a strong presence in the Middle East and Africa, Spectar delivers mission-critical support for cutting-edge XRF, XRD, OES, and PGNAA analyzers (including brands like Gamma-Metrics, Geoscan, ARL, and PANalytical). Our expertise extends to radioisotope supply, radioactive waste management, and industrial radiation protection services.
            </p>
            <p className="text-gray-600 leading-relaxed  mb-5">

              Backed by a team of highly skilled professionals with over 150 man-years of experience, Spectar is committed to innovation, sustainability, and delivering world-class technical excellence.
            </p>
          </motion.section>
        </section>
      </motion.div>
      {/* SERVICE CARDS */}
      <section ref={containerRef} className="relative  overflow-hidden bg-[#fef7f3]">
        <div className='py-10'></div>
        <div className='container mx-auto '>
          <motion.h2
            className="text-4xl md:text-6xl sm:text-4xl  lg:text-7xl  pb-10  font-bold tracking-tighter leading-none text-center"
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
              FOCUS
            </motion.span>
          </motion.h2>
          <div className="py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 sm:px-8">
            {images.map((item, index) => {

              return (
                <motion.div
                  key={index}
                  style={{ y: yTransforms[index] }}
                  className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-lg shadow-lg"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay Effect */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileHover={{ opacity: 1, y: 0 }} // Desktop hover effect
                    whileInView={{ opacity: 1, y: 0 }} // Mobile auto-reveal
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 bg-gradient-to-t from-customOrange/60  p-6 flex flex-col justify-center"
                  >
                    <motion.h3
                      whileHover={{ scale: 1.1 }}
                      className="text-white text-lg sm:text-xl font-bold text-center"
                    >
                      {item.title}
                    </motion.h3>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className='py-10'></div>
      </section>
      {/* NUMBER COUNTER */}
      <section className='conatiner max-w-5xl mx-auto px-6 lg:px-12 py-12 space-y-16'>
        <div className="relative pb-16 md:pb-24 lg:pb-32  text-custom overflow-hidden">
          {/* Background Map Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{
              backgroundImage:
                "url(" + Map + ")",
            }}
          ></div>
          <motion.h2
            className="text-4xl md:text-6xl sm:text-4xl  lg:text-5xl  font-bold tracking-tighter leading-none text-center pt-10 md:py-20 lg:pt-20 "
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
              ACHIEVEMENTS
            </motion.span>
          </motion.h2>

          {/* Dark Overlay */}
          {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

          {/* Counter Content */}
          <div className="relative z-10 container mx-auto px-4">
            {/* <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">Our Achievements</h2> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
              {counters.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="relative flex flex-col items-center text-center bg-white bg-opacity-10 backdrop-blur-md shadow-lg p-6 rounded-lg w-64 max-w-xs"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >

                  {/* Icon Behind Number */}
                  <motion.div
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-20"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-20 h-20 text-custom" />
                  </motion.div>

                  {/* Number Counter */}
                  <h2 className="text-5xl md:text-7xl sm:text-5xl  lg:text-8xl font-bold  text-custom relative z-10 counter-number">
                    <CountUp start={0} end={item.value} duration={2.5} separator="," />
                    +
                  </h2>

                  {/* Label */}
                  <p className="text-dark text-lg mt-2">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* XRAY & PGNAA DATA */}
      <section ref={sectionRef}
        id="about-us"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url(" + mission + ")"
        }} >
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
          <div className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
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
                        {/* {service.icon} */}
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

    </section>
  )
}

export default About