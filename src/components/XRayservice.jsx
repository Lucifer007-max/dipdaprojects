import React from 'react'
import Service from './Service/Service';

export default function XRayservice() {
    const data = `Our X-ray Analyzer Support & Services provide expert solutions for maintaining and optimizing X-ray Fluorescence (XRF) Analyzers, X-ray Diffraction (XRD) Analyzers, and Optical Emission Spectrometers (OES) across various industries. These advanced systems are essential for material characterization, elemental analysis, and quality control in sectors such as metallurgy, mining, pharmaceuticals, and environmental monitoring.

    With a team of highly experienced professionals and a combined expertise of over 100 man-years, we offer end-to-end support, including installation, calibration, routine maintenance, and troubleshooting for all major X-ray analyzer brands, including Thermo Fisher (ARL), PANalytical (Phillips), Bruker, and Shimadzu.
    Our global network of channel partners enables us to deliver timely, efficient, and cost-effective solutions, ensuring maximum system uptime and accuracy for your analytical needs.`;

    const pageTitle = `X-ray Analyzer Support & Services`;
    const TagLine = `Comprehensive Solutions for Precision Analysis`;
    return (
        <Service title={'PGNAA Service'} content={data} pageTitle={pageTitle} TagLine={TagLine} />
    )
}


