import React from 'react';
import Product from './Product/Product';
import { motion } from 'framer-motion';

export default function RadiationProducts() {
    const para = <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className='text-gray-700 space-y-6'>
        We provide comprehensive solutions to end-users for industrial source supply, offering turn-key services. Our product range includes radioactive sources used in radiometric process control systems for level, density, thickness, and weight measurement. Additionally, we supply sealed neutron sources for applications such as cement analysis, oil and gas well logging, explosive detection, nuclear reactor start-ups, and industrial research.
    </motion.p>;
    const data = <>
        <div className="space-y-6 text-gray-700">


            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
            >
                <h3 className="text-lg font-semibold text-gray-800">Radioactive Sources for Level and Density Measurement</h3>
                <motion.ol
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1 }}
                    viewport={{ once: false }}
                    className="list-decimal list-inside space-y-2"
                >
                    <motion.li initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>Co-60</motion.li>
                    <motion.li initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>Cs-137</motion.li>
                </motion.ol>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
            >
                <h3 className="text-lg font-semibold text-gray-800">Radioactive Sources for Thickness and Weight Measurement</h3>
                <motion.ol
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1 }}
                    viewport={{ once: false }}
                    className="list-decimal list-inside space-y-2"
                >
                    <motion.li initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>Kr-85</motion.li>
                    <motion.li initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>Pm-147</motion.li>
                    <motion.li initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>Sr-90</motion.li>
                </motion.ol>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
            >
                <h3 className="text-lg font-semibold text-gray-800">Radioactive Sources for Oil and Natural Gas Logging Applications</h3>
                <motion.ol
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1 }}
                    viewport={{ once: false }}
                    className="list-decimal list-inside space-y-2"
                >
                    <motion.li initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>Am-241/Be</motion.li>
                    <motion.li initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>Cs-137</motion.li>
                </motion.ol>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
            >
                <h3 className="text-lg font-semibold text-gray-800">Other Sealed Radioactive Sources for Industrial, Training, and Research Purposes</h3>
                <motion.ol
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1 }}
                    viewport={{ once: false }}
                    className="list-decimal list-inside space-y-2"
                >
                    <motion.li initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>Ba-133</motion.li>
                    <motion.li initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>Ni-63</motion.li>
                    <motion.li initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>Am-241</motion.li>
                    <motion.li initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>Eu-152</motion.li>
                    <motion.li initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>Fe-55</motion.li>
                </motion.ol>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
            >
                <h3 className="text-lg font-semibold text-gray-800">Californium-252 (Cf-252) Radioactive Neutron Sources</h3>
                <p>
                    We supply sealed Cf-252 neutron sources used in PGNAA systems, including on-line and on-belt analyzers for element analysis, particularly in cement plants. The applications of Cf-252 include:
                </p>
                <motion.ol
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1 }}
                    viewport={{ once: false }}
                    className="list-decimal list-inside space-y-2"
                >
                    <motion.li initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>Cement, coal, and sinter material analysis – PGNAA systems</motion.li>
                    <motion.li initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>Oil and gas well logging</motion.li>
                    <motion.li initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>Explosive detection (PINS)</motion.li>
                    <motion.li initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>Nuclear reactor start-up</motion.li>
                    <motion.li initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>Industrial and academic research</motion.li>
                </motion.ol>
            </motion.div>

            <p>
                Contact us for more details regarding capsule geometry and activities suitable for your application.
            </p>
        </div>
    </>;

    const pageTitle = `Radioactive Nuclide`;
    const TagLine = `Comprehensive solutions for industrial radioactive sources, including supply, measurement, and neutron applications with turn-key services.`;

    return (
        <Product title={'Radioactive Nuclide'} content={data} pageTitle={pageTitle} TagLine={TagLine} produtParagraph={para} img={'https://614now.com/wp-content/uploads/2019/07/shutterstock_729061273.jpg'} />
    )
}