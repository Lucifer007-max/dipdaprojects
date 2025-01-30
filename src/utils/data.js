import { Eye, FlagTriangleLeft } from "lucide-react";

export const services = [

  {
    title: "Mission",
    description: "GeoSpectra Technical Services LLC, having its registered office in Dubai, United Arab Emirates, focuses on providing high-end, cost-effective technical & application support to a range of Analytical Instruments (such as XRF/XRD/OES Analyzers) in “Mission Critical” environments. We also provide products and services in the field of Radiation Technology (Radio Isotopes supply and radioactive waste management) and in the field of Environmental & Geological Engineering.",
    icon: <FlagTriangleLeft className="w-8 h-8" />,
    gridClass: "md:col-span-1 row-span-1",
    bgClass: "bg-gradient-to-br from-green-600/30 to-green-900/30",
  },
  {
    title: "Vision",
    description: "To be a globally recognized leader in delivering innovative and reliable technical solutions for analytical instruments, radiation technology, and environmental and geological engineering. We aim to set the benchmark for excellence in mission-critical environments by ensuring sustainability, safety, and efficiency in every project we undertake.",
    icon: <Eye className="w-8 h-8" />,
    gridClass: "md:col-span-1 row-span-1",
    bgClass: "bg-gradient-to-br from-yellow-600/30 to-yellow-900/30",
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