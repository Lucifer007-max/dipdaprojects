import { motion } from "framer-motion";
import PGNAA from '../../assets/images/hero/PGNAAAnalyzer.jpg'
import Xray from '../../assets/images/hero/Xray.jpg'
import Quaality from '../../assets/images/hero/AnalyticalProcess.jpg'
import Radtion from '../../assets/images/hero/Radtion.jpg'
import Environment from '../../assets/images/hero/Environment.jpg'
const features = [
  { title: "PGNAA Analyzer", subtitle:'Gamma-ray On-line analyzers support & services - Prompt Gamma Neutron Activation Analysis (PGNAA)', image:PGNAA, color: "bg-blue-600 h-common" },
  { title: "X-Ray Analyzer", subtitle:'X-ray analyzers Support & Services', image:Xray, color: "bg-blue-800 h-common" },
  { title: "Analytical Process & Quality Control", subtitle:"Radiation-based technologies play a critical role in a variety of industries",  image: Quaality, color: "bg-purple-700 h-common" },
  { title: "Radiation Services & Product Support", subtitle:"The activities such as supply of the industrial and reference radioactive sources; mounting, dismantling, calibration, services", image:Radtion, color: "bg-indigo-700 h-common" },
  { title: "Environment & Geological Engineering",subtitle:'Datamine Support-Computerized planning for mineral excavation', image:Environment, color: "bg-teal-600 h-50" },
];

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  bg-gray-100">
      {features.map((feature, index) => (
        <>
          {/* Image Block with Animation */}
          <motion.div
            key={`image-${index}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-full object-cover"
            //   height={"300"}
            />
          </motion.div>

           {/* Text Block with Animation */}
           <motion.div
            key={`text-${index}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            // style={{height:"320px"}}
            className={`relative ${feature.color} text-white p-6 flex flex-col items-start justify-center`}
          >
            <h2 className="text-2xl font-bold">{feature.title}</h2>
            <p>{feature.subtitle}</p>
          </motion.div>

        </>
      ))}
    </div>
  );
}
