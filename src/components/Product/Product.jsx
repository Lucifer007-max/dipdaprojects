'use client'

import { motion, useAnimation } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Accordion from '../Service/Accordion'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
export default function Product({ title, content, pageTitle, TagLine, produtParagraph, img }) {
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




    return (
        <section id="production" className="relative min-h-screen  bg-white ">
            <div className='container mx-auto'>
                <Breadcrumb title={title} />
            </div>
            <sction>
                {/* Hero Section */}
                <section
                    ref={sectionRef}
                    id="about-us"
                    className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-fixed"
                    style={{
                        backgroundImage: "url(" + img + ")"
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-70" />
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

                <div className='relative container mx-auto px-4 "'>
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 py-20 gap-6">
                        {produtParagraph}
                        <section className="py-20">
                            <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
                                {/* Image Section (First in Mobile, Second in Desktop) */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                    className="relative w-full"
                                >
                                    <motion.div
                                        className="sticky top-0 h-[400px] overflow-hidden rounded-lg"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <img
                                            src="https://media.istockphoto.com/id/1498630926/photo/atom-model.jpg?s=612x612&w=0&k=20&c=4hSsoxX-yg5UbFxBle0kvT7sS4BHIvkpc-sNw7rKbAE="
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

                                {/* Content Section */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="space-y-4 w-full"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5 }}
                                        viewport={{ once: false }}
                                    >
                                        {content}
                                    </motion.div>
                                </motion.div>
                            </div>

                            <Accordion />
                        </section>
                    </div>
                </div>
            </sction>
        </section>
    )
}