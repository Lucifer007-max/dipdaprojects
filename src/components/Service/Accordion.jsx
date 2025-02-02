import React, { useState } from 'react'
import { accordionData } from '../../utils/data';
import { motion } from 'framer-motion';
export default function Accordion() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='container mx-auto px-6'>
            <div className=' py-10'>
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
                            FREQUENTLY ASK
                        </motion.span>
                        <motion.span
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="inline-block ml-2 md:ml-4"
                            style={{ WebkitTextStroke: '1px black', color: 'transparent' }}
                        >
                            QUESTION
                        </motion.span>
                    </motion.h2>
                </div>
            </div>
            <div className="w-full max-w-5xl mx-auto space-y-6">


                {accordionData.map((item, index) => (
                    <motion.div
                        key={index}
                        className="border border-gray-300 rounded-lg overflow-hidden shadow-lg"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        {/* Accordion Header */}
                        <motion.div
                            onClick={() => toggleAccordion(index)}
                            className="flex justify-between items-center bg-customOrange/90 px-5 py-3 cursor-pointer hover:shadow-md transition duration-300"
                        >
                            <h2 className="text-lg text-light font-semibold">{item.title}</h2>
                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-light"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </motion.div>
                        </motion.div>

                        {/* Accordion Content */}
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                                height: openIndex === index ? "auto" : 0,
                                opacity: openIndex === index ? 1 : 0,
                            }}
                            transition={{ duration: 0.5 }}
                            className="overflow-hidden px-5 bg-white"
                        >
                            <p className="py-3 text-gray-700">{item.content}</p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );

}