import { Eye, FlagTriangleLeft, Workflow } from "lucide-react";
import time from '../assets/images/product/247.jpg'
import ENG from "../assets/images/product/dedicated.jpg"
import Traning from "../assets/images/product/training.jpg"
import aggrement from '../assets/images/product/aggrement.jpg'
import validation from '../assets/images/product/Validation.jpg'
import Radioactive from '../assets/images/product/Radioactive.jpg'
export const services = [

  {
    title: "Mission",
    description: "GeoSpectra Technical Services LLC, having its registered office in Dubai, United Arab Emirates, focuses on providing high-end, cost-effective technical & application support to a range of Analytical Instruments (such as XRF/XRD/OES Analyzers) in “Mission Critical” environments. We also provide products and services in the field of Radiation Technology (Radio Isotopes supply and radioactive waste management) and in the field of Environmental & Geological Engineering.",
    icon: <FlagTriangleLeft className="w-8 h-8" />,
    gridClass: "md:col-span-1 row-span-1",
    bgClass: "bg-gradient-to-br from-red-600/30 to-red-900/30",
  },
  {
    title: "Vision",
    description: "To be a globally recognized leader in delivering innovative and reliable technical solutions for analytical instruments, radiation technology, and environmental and geological engineering. We aim to set the benchmark for excellence in mission-critical environments by ensuring sustainability, safety, and efficiency in every project we undertake.",
    icon: <Eye className="w-8 h-8" />,
    gridClass: "md:col-span-1 row-span-1",
    bgClass: "bg-gradient-to-br from-red-600/30 to-red-900/30",
  },

]



export const jsonData = {
  "type": "FeatureCollection",
  "crs": {
    "type": "name",
    "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" }
  },
  "features": [
    { "type": "Feature", "properties": { "id": "DZ", "name": "Algeria" }, "geometry": { "type": "Point", "coordinates": [3.0588, 36.7538] } },
    { "type": "Feature", "properties": { "id": "EG", "name": "Egypt" }, "geometry": { "type": "Point", "coordinates": [31.2357, 30.0444] } },
    { "type": "Feature", "properties": { "id": "JO", "name": "Jordan" }, "geometry": { "type": "Point", "coordinates": [35.9304, 31.9634] } },
    { "type": "Feature", "properties": { "id": "NG", "name": "Nigeria" }, "geometry": { "type": "Point", "coordinates": [9.0575, 7.4951] } },
    { "type": "Feature", "properties": { "id": "LB", "name": "Lebanon" }, "geometry": { "type": "Point", "coordinates": [35.8497, 33.8869] } },
    { "type": "Feature", "properties": { "id": "ET", "name": "Ethiopia" }, "geometry": { "type": "Point", "coordinates": [38.7369, 9.145] } },
    { "type": "Feature", "properties": { "id": "MA", "name": "Morocco" }, "geometry": { "type": "Point", "coordinates": [-7.0926, 31.7917] } },
    { "type": "Feature", "properties": { "id": "YE", "name": "Yemen" }, "geometry": { "type": "Point", "coordinates": [48.5164, 15.5521] } },
    { "type": "Feature", "properties": { "id": "OM", "name": "Oman" }, "geometry": { "type": "Point", "coordinates": [55.3137, 23.5854] } },
    { "type": "Feature", "properties": { "id": "LY", "name": "Libya" }, "geometry": { "type": "Point", "coordinates": [13.1924, 32.8797] } },
    { "type": "Feature", "properties": { "id": "PK", "name": "Pakistan" }, "geometry": { "type": "Point", "coordinates": [74.3587, 31.5204] } },
    { "type": "Feature", "properties": { "id": "SA", "name": "Saudi Arabia" }, "geometry": { "type": "Point", "coordinates": [46.6753, 24.7136] } },
    { "type": "Feature", "properties": { "id": "SN", "name": "Senegal" }, "geometry": { "type": "Point", "coordinates": [-14.6928, 14.6928] } },
    { "type": "Feature", "properties": { "id": "QA", "name": "Qatar" }, "geometry": { "type": "Point", "coordinates": [51.1839, 25.276987] } },
    { "type": "Feature", "properties": { "id": "TZ", "name": "Tanzania" }, "geometry": { "type": "Point", "coordinates": [39.2026, -6.1659] } },
    { "type": "Feature", "properties": { "id": "TN", "name": "Tunisia" }, "geometry": { "type": "Point", "coordinates": [9.5375, 33.8869] } },
    { "type": "Feature", "properties": { "id": "TR", "name": "Turkey" }, "geometry": { "type": "Point", "coordinates": [35.2433, 39.9334] } },
    { "type": "Feature", "properties": { "id": "ZA", "name": "South Africa" }, "geometry": { "type": "Point", "coordinates": [24.7135, -29.0189] } },
    { "type": "Feature", "properties": { "id": "AE", "name": "UAE" }, "geometry": { "type": "Point", "coordinates": [55.2983, 23.4241] } },
    { "type": "Feature", "properties": { "id": "IN", "name": "India" }, "geometry": { "type": "Point", "coordinates": [78.9629, 20.5937] } },
    { "type": "Feature", "properties": { "id": "ZM", "name": "Zambia" }, "geometry": { "type": "Point", "coordinates": [27.8493, -13.1339] } },
    { "type": "Feature", "properties": { "id": "TM", "name": "Turkmenistan" }, "geometry": { "type": "Point", "coordinates": [59.5880, 38.9697] } }
  ]
}


export const Gammaexperties = [
  "Comprehensive Product and Maintenance Support.",
  "Performance Evaluation and Optimization Support.",
  "Static & Dynamic Calibration Support.",
  "Process control & Integration Solution using PGNAA system to plant network.",
  "Radioactive Source Replenishment & Support.",
  "Consumable & Spares Support.",
  "Data Integration with other Lab systems & database management.",
  "Endless support to your old or new system.",
  "Expert advice and consulting on new and existing systems."
];

export const Experties = [
  "We conduct dedicated ON-SITE user training programs at plant site ON CUSTOMER SYSTEMS and provide advance Operation, maintenance and troubleshooting training specific to your PGNAA and/or X-ray analyzers.",
  "Periodically, we also conduct OFF-SITE training programs on PGNAA and X-ray analyzer systems maintenance and troubleshooting at various locations. An enquiry can be sent to us directly or thru our website.",
  "Eventually with our training programs, most customers are able to bypass expensive maintenance agreement of OEMs and can easily operate & troubleshoot the analyzer systems at much less cost and better capabilities."

]

export const Xraysexperties = [
  "Comprehensive Product and Maintenance Support.",
  "Performance Evaluation and Optimization Support.",
  "Complete Calibration Support.",
  "Process control & Integration Solution using X-ray and PGNAA system integration.",
  "Consumable & Spares Support.",
  "Data Integration with other Lab systems & database management."
];



export const dataList = [
  { "countryName": "Algeria", "locationLatitude": 36.7538, "locationLongitude": 3.0588 },
  { "countryName": "Egypt", "locationLatitude": 30.0444, "locationLongitude": 31.2357 },
  { "countryName": "Jordan", "locationLatitude": 31.9634, "locationLongitude": 35.9304 },
  { "countryName": "Nigeria", "locationLatitude": 7.4951, "locationLongitude": 9.0575 },
  { "countryName": "Lebanon", "locationLatitude": 33.8869, "locationLongitude": 35.8497 },
  { "countryName": "Ethiopia", "locationLatitude": 9.145, "locationLongitude": 38.7369 },
  { "countryName": "Morocco", "locationLatitude": 31.7917, "locationLongitude": -7.0926 },
  { "countryName": "Yemen", "locationLatitude": 15.5521, "locationLongitude": 48.5164 },
  { "countryName": "Oman", "locationLatitude": 23.5854, "locationLongitude": 55.3137 },
  { "countryName": "Libya", "locationLatitude": 32.8797, "locationLongitude": 13.1924 },
  { "countryName": "Pakistan", "locationLatitude": 31.5204, "locationLongitude": 74.3587 },
  { "countryName": "Saudi Arabia", "locationLatitude": 24.7136, "locationLongitude": 46.6753 },
  { "countryName": "Senegal", "locationLatitude": 14.6928, "locationLongitude": -14.6928 },
  { "countryName": "Qatar", "locationLatitude": 25.276987, "locationLongitude": 51.1839 },
  { "countryName": "Tanzania", "locationLatitude": -6.1659, "locationLongitude": 39.2026 },
  { "countryName": "Tunisia", "locationLatitude": 33.8869, "locationLongitude": 9.5375 },
  { "countryName": "Turkey", "locationLatitude": 39.9334, "locationLongitude": 35.2433 },
  { "countryName": "South Africa", "locationLatitude": -29.0189, "locationLongitude": 24.7135 },
  { "countryName": "UAE", "locationLatitude": 23.4241, "locationLongitude": 55.2983 },
  { "countryName": "India", "locationLatitude": 20.5937, "locationLongitude": 78.9629 },
  { "countryName": "Zambia", "locationLatitude": -13.1339, "locationLongitude": 27.8493 },
  { "countryName": "Turkmenistan", "locationLatitude": 38.9697, "locationLongitude": 59.5880 }
]


export const servicesList = [
  {
    title: "Dedicated Support Engineer",
    description:
      "We assign a dedicated engineer to each site & system to ensure round-the-clock support availability.",
    img: ENG,
  },
  {
    title: "24x7 Remote Support",
    description:
      "We provide 24x7 remote assistance to your team through phone, email, and website.",
    img: time,
  },
  {
    title: "On-Job Training",
    description:
      "Your team will become self-sufficient and capable enough to handle emergency repairs and routine maintenance.",
    img: Traning,
  },
  {
    title: "Maintenance & Support Agreement",
    description:
      "We provide cost-effective Maintenance Agreement packages with various multi-layered support options.",
    img: aggrement,
  },
  {
    title: "Periodic System Validation",
    description:
      "We conduct complete system validation at a competitive price to ensure optimal performance.",
    img: validation,
  },
  {
    title: "Radioactive Source Supply",
    description:
      "We support and operate existing PGNAA systems, including radioactive source replenishment.",
    img: Radioactive
  },
];


export const accordionData = [
  {
    title: "BREAKDOWN MAINTENANCE",
    content:
      "GeoSpectra provides various levels of breakdown response, from urgent instant response to cost-effective mutually-agreeable-time response. The fastest response is available to customers with a maintenance agreement.",
  },
  {
    title: "SPARE PARTS SUPPLY",
    content:
      "GeoSpectra sources original spare parts for a wide range of equipment. We maintain strategic stock levels, ensuring engineers are well-equipped with spare parts even in rapid response breakdown situations.",
  },
  {
    title: "REFERENCE MATERIALS & CONSUMABLES SUPPLY",
    content:
      "We supply Certified Reference Material (CRM), Reference Material (RM), and Calibration Standards. Additionally, we provide consumables like sample cups, X-ray film, binder, and flux.",
  },
  {
    title: "TRAINING SERVICES",
    content:
      "GeoSpectra offers on-site training for personnel and scheduled training courses at various locations. Our training ensures optimal operation and maintenance of your equipment.",
  },
  {
    title: "INSTRUMENT CALIBRATION",
    content:
      "We provide complete calibration services, ensuring traceability to international standards. Our expertise includes XRF, XRD, and SICK continuous emission monitoring systems.",
  },
  {
    title: "CALIBRATION MAINTENANCE",
    content:
      "GeoSpectra monitors your equipment calibration on-site or remotely, making necessary adjustments to maintain accuracy and compliance.",
  },
];


export const globeData = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Algeria",
        "adm0name": "Algeria",
        "latitude": 28.0339,
        "longitude": 1.6596,
        "pop_max": 43851044
      },
      "geometry": {
        "type": "Point",
        "coordinates": [1.6596, 28.0339]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Egypt",
        "adm0name": "Egypt",
        "latitude": 26.8206,
        "longitude": 30.8025,
        "pop_max": 102334404
      },
      "geometry": {
        "type": "Point",
        "coordinates": [30.8025, 26.8206]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Jordan",
        "adm0name": "Jordan",
        "latitude": 30.5852,
        "longitude": 36.2384,
        "pop_max": 10203134
      },
      "geometry": {
        "type": "Point",
        "coordinates": [36.2384, 30.5852]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Nigeria",
        "adm0name": "Nigeria",
        "latitude": 9.082,
        "longitude": 8.6753,
        "pop_max": 206139589
      },
      "geometry": {
        "type": "Point",
        "coordinates": [8.6753, 9.082]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Lebanon",
        "adm0name": "Lebanon",
        "latitude": 33.8547,
        "longitude": 35.8623,
        "pop_max": 6825442
      },
      "geometry": {
        "type": "Point",
        "coordinates": [35.8623, 33.8547]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Ethiopia",
        "adm0name": "Ethiopia",
        "latitude": 9.145,
        "longitude": 40.4897,
        "pop_max": 114963588
      },
      "geometry": {
        "type": "Point",
        "coordinates": [40.4897, 9.145]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Morocco",
        "adm0name": "Morocco",
        "latitude": 31.7917,
        "longitude": -7.0926,
        "pop_max": 36910560
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-7.0926, 31.7917]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Yemen",
        "adm0name": "Yemen",
        "latitude": 15.5527,
        "longitude": 48.5164,
        "pop_max": 29825964
      },
      "geometry": {
        "type": "Point",
        "coordinates": [48.5164, 15.5527]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Oman",
        "adm0name": "Oman",
        "latitude": 21.4735,
        "longitude": 55.9754,
        "pop_max": 5106626
      },
      "geometry": {
        "type": "Point",
        "coordinates": [55.9754, 21.4735]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Libya",
        "adm0name": "Libya",
        "latitude": 26.3351,
        "longitude": 17.2283,
        "pop_max": 6871292
      },
      "geometry": {
        "type": "Point",
        "coordinates": [17.2283, 26.3351]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Pakistan",
        "adm0name": "Pakistan",
        "latitude": 30.3753,
        "longitude": 69.3451,
        "pop_max": 220892340
      },
      "geometry": {
        "type": "Point",
        "coordinates": [69.3451, 30.3753]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Saudi Arabia",
        "adm0name": "Saudi Arabia",
        "latitude": 23.8859,
        "longitude": 45.0792,
        "pop_max": 34813871
      },
      "geometry": {
        "type": "Point",
        "coordinates": [45.0792, 23.8859]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "India",
        "adm0name": "India",
        "latitude": 20.5937,
        "longitude": 78.9629,
        "pop_max": 1393409038
      },
      "geometry": {
        "type": "Point",
        "coordinates": [78.9629, 20.5937]
      }
    }
  ]
}


export const expertiesCards = [

  {
    title: "Our purpose",
    description: "ABB’s purpose is to enable a more sustainable and resource-efficient future with our technology leadership in electrification and automation. Our purpose is why we are in business. It expresses both what we stand for as a company and what we aspire to be in the future. Make our purpose part of your story.",
    gridClass: "md:col-span-1 row-span-1",
    // icon: < className="w-8 h-8" />,
    bgClass: "bg-gradient-to-br from-red-600/30 to-red-900/30",
  },
  // {
  //   title: "PGNAA Analyzer",
  //   description: "A Team with over 100 man-years of experience in PGNAA, who have in the past, have worked with various original equipment manufacturers at senior positions. Our team brings over 100 man-years of experience in PGNAA, having worked in senior positions with various original equipment manufacturers. As Sales & Service Managers at Thermo Fisher Scientific PGNAA systems, we have sold and supported over 150 systems across the Middle East, Africa, and worldwide. As Senior Service Engineers at Thermo Fisher Scientific, we have provided expert support for more than 150 systems, including BMA, CBA, CBGN, CBX, OMNI, FSA, and EBA. Our experience extends further as Senior Field Engineers specializing in PGNAA, having worked with Thermo Fisher, Scantech, and other leading manufacturers. In addition, as Field Service Engineers, the seamless operation of PGNAA solutions.",
  //   // icon: <Eye className="w-8 h-8" />,
  //   gridClass: "md:col-span-1 row-span-1",
  //   bgClass: "bg-gradient-to-br from-red-600/30 to-red-900/30",
  // },

]