import React, { useRef } from 'react'
import Breadcrumb from './Breadcrumb/Breadcrumb'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Experties, Gammaexperties, Xraysexperties } from '../utils/data'
import rays from '../assets/images/traning/train.jpg'


import Map from '../assets/images/about/map.png'
import Systemm from "../assets/images/traning/system.jpg";
import Calibration from "../assets/images/traning/calibration.jpg";
import Trobule from "../assets/images/traning/troubleshoot.jpg";
import saftey from "../assets/images/traning/saftey.jpg";
import Software from "../assets/images/traning/software.jpg";

const Training = () => {
    const containerRef = useRef(null);

    const images = [
        { src: Systemm, alt: "System Operation", title: 'System Operation' },
        { src: Calibration, alt: "Calibration Training", title: 'Calibration Training' },
        { src: Trobule, alt: "Advance Maintenance & Troubleshooting Training", title: 'Advance Maintenance & Troubleshooting Training' },
        { src: saftey, alt: "Radiation Safety Training Pertaining to your analyzer system", title: 'Radiation Safety Training Pertaining to your analyzer system' },
        { src: Software, alt: "Advanced Software Training", title: 'Advanced Software Training' },
    ];

    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["end start", "start end"], });

    const yValues = [
        useTransform(scrollYProgress, [0, 1], ["0px", "50px"]),
        useTransform(scrollYProgress, [0, 1], ["0px", "-50px"]),
        useTransform(scrollYProgress, [0, 1], ["0px", "50px"]),
        useTransform(scrollYProgress, [0, 1], ["0px", "-50px"]),
        useTransform(scrollYProgress, [0, 1], ["0px", "50px"]),
    ];
    return (
        <>
            <section className="relative container mx-auto px-4">

                <Breadcrumb title={'Our Training'} />
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="space-y-6 py-20">
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
                                OUR
                            </motion.span>
                            <motion.span
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="inline-block ml-2 md:ml-4"
                                style={{ WebkitTextStroke: '1px black', color: 'transparent' }}
                            >
                                TRAINING
                            </motion.span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }} className="text-gray-600 leading-relaxed">
                        We offer dedicated ON-SITE user training at plant sites on customer systems, providing advanced operation, maintenance, and troubleshooting training for PGNAA and X-ray analyzers. Additionally, we conduct OFF-SITE training programs at various locations for system maintenance and troubleshooting, with inquiries accepted directly or through our website. Our training enables customers to bypass expensive OEM maintenance agreements, allowing them to operate and troubleshoot analyzer systems more efficiently and cost-effectively.


                    </motion.p>
                </motion.section>
            </section>
            <section ref={containerRef} className="relative  overflow-hidden bg-[#fef7f3]">
                <div className='py-10'></div>
                <div className='container mx-auto '>
                    {/* <motion.h2
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
                    </motion.h2> */}
                    <div className="py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 sm:px-8">
                        {images.map((item, index) => {

                            return (
                                <motion.div
                                    key={index}
                                    style={{ y: yValues[index] }}
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
            <sction className="bg-light">
                <div className='relative container mx-auto px-4 "'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1  gap-6">
                        <section className="py-20">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="space-y-4"
                                >
                                    {/* <motion.h1
                                        className="text-3xl md:text-4xl sm:text-3xl  lg:text-4xl  font-bold mb-10 tracking-wider text-custom"
                                        style={{
                                            WebkitTextStroke: '1px #b84e4a',
                                            WebkitTextFillColor: 'transparent'
                                        }}
                                    >
                                        Gamma Ray (PGNAA)
                                    </motion.h1> */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5 }}
                                        viewport={{ once: false }}
                                    >
                                        <motion.ol
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ staggerChildren: 0.1 }}
                                            viewport={{ once: false }}
                                            className="list-decimal list-inside space-y-4"
                                        >
                                            {Experties.map((service, index) => (
                                                <motion.li
                                                    key={index}
                                                    initial={{ opacity: 0, x: -50 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                                    viewport={{ once: false }}
                                                    className="text-md text-gray-700 font-medium"
                                                >
                                                    {service}
                                                </motion.li>
                                            ))}
                                        </motion.ol>
                                    </motion.div>


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
                                        <img
                                            src={rays}
                                            alt="Artistic visual"
                                            className="w-full h-full object-cover"
                                        />
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-t from-customOrange to-transparent opacity-1"
                                            whileHover={{ opacity: 0.6 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.div>
                                </motion.div>
                            </div>



                        </section>
                    </div>
                </div>
            </sction>

        </>
    )
}

export default Training