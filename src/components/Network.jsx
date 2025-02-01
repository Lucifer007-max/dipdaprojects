import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Breadcrumb from './Breadcrumb/Breadcrumb';
import { dataList, jsonData } from '../utils/data';
import { MapContainer, Popup, TileLayer } from "react-leaflet";
import { Marker } from "react-leaflet/Marker";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
const NetWork = () => {
    const sourceId = "places";
    const symbolLayerId = "symbols";
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
    const zoom = 3;
    const [map, setMap] = useState(null);



    const borderAnimation = {
        initial: { borderColor: "rgba(255, 255, 255, 0)" },
        animate: {
            borderColor: "rgba(255, 255, 255, 1)",
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
            },
        },
    };

    return (
        <>

            <section className="relative container mx-auto px-4 pt-20">

                <Breadcrumb title={'Our Network'} />
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
                                NETWORK
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
            <div className=" bg-custom ">
                <div className='relative container flex-1 grid grid-cols-1 px-3 sm:grid-cols-3 lg:grid-cols-5 gap-2 py-20 relative mx-auto'>
                    {dataList.map((region, index) => (
                        <div
                            key={index}
                            className="relative flex items-center justify-center text-white text-xl font-bold p-6 border border-white overflow-hidden transition-all duration-300 hover:bg-white hover:text-black"
                            style={{ height: '200px' }}
                        >
                            {region.countryName}
                            {/* Animated Border Line */}
                            <motion.div
                                className="absolute inset-0 border border-white"
                                initial={{ clipPath: "inset(0% 100% 100% 0%)" }}
                                animate={{
                                    clipPath: [
                                        "inset(0% 100% 100% 0%)",
                                        "inset(0% 0% 100% 0%)",
                                        "inset(0% 0% 0% 0%)",
                                        "inset(100% 0% 0% 0%)",
                                        "inset(100% 100% 0% 0%)",
                                        "inset(0% 100% 0% 0%)",
                                        "inset(0% 100% 100% 0%)",
                                    ],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className='py-20'>

                <MapContainer
                    center={{ lat: 9.145, lng: 38.7369 }}
                    zoom={zoom}
                    scrollWheelZoom={true}
                    ref={setMap}
                    style={{ width: "500", height: "400px", zIndex: 9 }}
                >
                    <TileLayer
                        attribution='&copy; <a href="#">SPECTRA</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {/* {loading ? (
                        <div className="map_div">
                            <Spinner
                                style={{
                                    position: "absolute",
                                    right: "0",
                                    top: "50%",
                                    left: "50%",
                                }}
                                color="primary"
                            >
                                {" "}
                            </Spinner>
                        </div>
                    ) : ( */}
                    <>
                        {dataList?.map((res, index) => {
                            const {
                                locationLatitude,
                                locationLongitude,
                                countryName,
                            } = res;
                            if (locationLatitude !== null || locationLongitude !== null) {
                                const icon = L.icon({
                                    iconUrl:
                                        "https://static.vecteezy.com/system/resources/previews/023/652/060/non_2x/green-map-pointer-icon-on-a-transparent-background-free-png.png",
                                    iconSize: [32, 32],
                                    iconAnchor: [16, 32],
                                    popupAnchor: [0, -32],
                                });
                                return (
                                    <Marker
                                        position={[locationLatitude, locationLongitude]}
                                        icon={icon}
                                        key={index}
                                    >
                                        <Popup>
                                            <h5>{countryName}</h5>
                                            {/* <h5>
                                                    {" "}
                                                    {name === undefined ? firstName : name} <br />{" "}
                                                    <h6>
                                                        ({country?.name} {city?.name})
                                                    </h6>
                                                </h5>
                                                <h6>
                                                    <span className="text-muted">Address</span> <br />{" "}
                                                    {address && address}
                                                </h6>
                                                <h6>
                                                    <span className="text-muted">Phone</span> <br />{" "}
                                                    <b>
                                                        ({countryCode}) - {phone}
                                                    </b>
                                             </h6>
                                                <h6>
                                                    <span className="text-muted">Email</span> <br />{" "}
                                                    <b>
                                                        <a
                                                            href={`mailto:${email}`}
                                                            style={{ color: "#CC9752" }}
                                                        >
                                                            {email}
                                                        </a>
                                                    </b>
                                                </h6> */}
                                        </Popup>
                                    </Marker>
                                );
                            }
                        })}
                    </>
                    {/* )} */}
                </MapContainer>
            </div>
        </>
    )
}

export default NetWork