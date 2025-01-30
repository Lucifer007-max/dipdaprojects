import React from 'react'
import { motion } from 'framer-motion'
import Breadcrumb from './Breadcrumb/Breadcrumb';
import { jsonData } from '../utils/data';
const NetWork = () => {
    const features = [
        {
            title: "Creative and thoughtful approach",
            description: "We analyze each blogger and their audience, determine the percentage of overlap with your target audience for the required number of touches to make the ad as effective as possible.",
            color: "#FF6B6B"
        },
        {
            title: "Convenient reporting format",
            description: "Convenient reporting format for both intermediate and final results of an advertising campaign.",
            color: "#4ECDC4"
        },
        {
            title: "Thoughtful audience engagement",
            description: "Thoughtful and effective warming up of the blogger's audience for maximum engagement in advertising with your brand and product.",
            color: "#45B7D1"
        },
        {
            title: "Continuous contact",
            description: "We will ensure interaction with your target audience using all formats and tools that we will determine and agree with you: these are bloggers, digital placement, targeting by our target audience, and retargeting by look-alike audience.",
            color: "#96CEB4"
        },
        {
            title: "Strategic customer acquisition",
            description: "Providing contact with potential customers within 8-12 touches to form strong positive associations with the brand in the consumer and maximize the effectiveness of the advertising campaign.",
            color: "#4EA5D9"
        },
        {
            title: "Performance marketing",
            description: "Continuous performance marketing: control of all running processes, tracking of ongoing activities and a coordinated plan.",
            color: "#2D82B7"
        }
    ];
    return (
        <>
            <section className="relative container mx-auto px-4 pt-20">

                <Breadcrumb title={'Our Network'} />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 py-20 gap-6">
                    {jsonData.features.map((feature, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white/10 relative backdrop-blur-sm rounded-lg p-2 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"

                        >
                            {/* Card Content */}
                            <motion.div
                                className="text-xl md:text-2xl font-bold mb-3"
                                whileHover={{ y: -10 }}
                                style={{ color: feature.color }}
                            >
                                <img width="100%"
                                    src={`/flags/${feature.properties.id.toLowerCase()}.svg`}
                                    alt={`${feature.properties.name.countryCode} Flag`}
                                    style={{ height: '150px', objectFit: 'cover' }} />
                                {/* {feature.title} */}
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileHover={{ opacity: 1, y: 0 }} // Desktop hover effect
                                    // whileInView={{ opacity: 1, y: 0 }} // Mobile auto-reveal
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0 bg-gradient-to-t from-customOrange/60  p-6 flex flex-col justify-center"
                                >
                                    <motion.h3
                                        whileHover={{ scale: 1.1 }}
                                        className="text-white text-lg sm:text-xl font-bold text-center"
                                    >
                                        {feature.properties.name}
                                    </motion.h3>
                                </motion.div>
                            </motion.div>

                            {/* Divider with Hover Effect */}
                            <motion.div
                                className="h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

        </>
    )
}

export default NetWork