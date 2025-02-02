import React from 'react'
import Breadcrumb from './Breadcrumb/Breadcrumb'
import { motion } from 'framer-motion'
import { Gammaexperties, Xraysexperties } from '../utils/data'
import rays from '../assets/images/product/rays.webp'
import Xrays from '../assets/images/product/xrayexperties.jpg'
const Expertise = () => {
    return (
        <>
            <section className="relative container mx-auto px-4 pt-20">

                <Breadcrumb title={'Our Expertise'} />
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
                                EXPERTISE
                            </motion.span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }} className="text-gray-600 leading-relaxed">
                        At Spectra, we take pride in our extensive geographical presence, delivering top-tier services across multiple regions. Our expertise spans North Africa, the Middle East, and South Asia, ensuring our clients receive tailored solutions backed by industry-leading experience.

                        We are actively engaged in Algeria, Egypt, Jordan, Nigeria, Lebanon, Ethiopia, Morocco, Yemen, Oman, Libya, Pakistan, Saudi Arabia, Senegal, Qatar, Tanzania, Tunisia, Turkey, South Africa, UAE, India, Zambia, and Turkmenistan. Through our robust network and strategic partnerships, we bring cutting-edge solutions to these regions, addressing diverse market needs and industry challenges.


                    </motion.p>
                </motion.section>
            </section>
            <sction className="bg-[#FCEEE8]">
                <div className='relative container mx-auto px-4 "'>
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 py-20 gap-6">
                        <section className="py-20">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="space-y-4"
                                >
                                    <motion.h1
                                        className="text-3xl md:text-4xl sm:text-3xl  lg:text-4xl  font-bold mb-10 tracking-wider text-custom"
                                        style={{
                                            WebkitTextStroke: '1px #b84e4a',
                                            WebkitTextFillColor: 'transparent'
                                        }}
                                    >
                                        Gamma Ray (PGNAA)
                                    </motion.h1>
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
                                            {Gammaexperties.map((service, index) => (
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
                            <div className="grid md:grid-cols-2 gap-12 items-center py-20">

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
                                            src={Xrays}
                                            alt="X ray"
                                            className="w-full h-full object-cover"
                                        />
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-t from-customOrange to-transparent opacity-1"
                                            whileHover={{ opacity: 0.6 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="space-y-4"
                                >
                                    <motion.h1
                                        className="text-3xl md:text-4xl sm:text-3xl  lg:text-4xl  font-bold mb-10 tracking-wider text-custom"
                                        style={{
                                            WebkitTextStroke: '1px #b84e4a',
                                            WebkitTextFillColor: 'transparent'
                                        }}
                                    >
                                        X-ray Systems
                                    </motion.h1>
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
                                            {Xraysexperties.map((service, index) => (
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
                            </div>
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="space-y-4"
                                >
                                    <motion.h1
                                        className="text-3xl md:text-4xl sm:text-3xl  lg:text-4xl  font-bold mb-10 tracking-wider text-center text-custom"
                                        style={{
                                            WebkitTextStroke: '1px #b84e4a',
                                            WebkitTextFillColor: 'transparent'
                                        }}
                                    >
                                        Other Expertise
                                    </motion.h1>
                                    <motion.div
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5 }}
                                        viewport={{ once: false }}
                                    >
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ staggerChildren: 0.1 }}
                                            viewport={{ once: false }}
                                            className="list-decimal list-inside space-y-4"
                                        >
                                                <motion.p
                                                    initial={{ opacity: 0, x: -50 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5, delay: 1 * 0.1 }}
                                                    viewport={{ once: false }}
                                                    className="text-md text-gray-700 font-medium"
                                                >
                                                   We provide <i className='text-custom'>Radiation Support</i> and Services, advanced  <i className='text-custom'>Quarry Planning</i> and <i className='text-custom'>Mine Planning*</i> using <i className='text-custom'>3D & 2D modeling</i>, comprehensive <i className='text-custom'>Laboratory Information System design</i> integrated with <i className='text-custom'>PGNAA, X-ray, and Quarry Data</i>, as well as specialized <i className='text-custom'>Environmental services and equipment supply</i> to enhance operational efficiency and compliance.
                                                </motion.p>
                                        </motion.div>
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

export default Expertise
