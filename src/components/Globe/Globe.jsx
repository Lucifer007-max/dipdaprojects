import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";

const GlobeComponent = () => {
    const globeRef = useRef(null);
    const [arcsData, setArcsData] = useState([]);

    useEffect(() => {
        const N = 20;
        const generatedArcs = [...Array(N).keys()].map(() => ({
            startLat: (Math.random() - 0.5) * 180,
            startLng: (Math.random() - 0.5) * 360,
            endLat: (Math.random() - 0.5) * 180,
            endLng: (Math.random() - 0.5) * 360,
            color: [
                ["red", "red", "red", "red"][Math.round(Math.random() * 3)],
                ["red", "red", "red", "red"][Math.round(Math.random() * 3)],
            ],
        }));
        setArcsData(generatedArcs);
    }, []);

    return (
        <div className="w-full flex justify-center items-center">
            <Globe
                width={500}
                height={500}
                backgroundColor="#fff"
                style={{ width: "100%", height: "50vh", maxWidth: "400px", maxHeight: "400px" }}
                ref={globeRef}
                globeImageUrl="https://unpkg.com/three-globe@2.41.12/example/img/earth-day.jpg"
                arcsData={arcsData}
                arcColor={"color"}
                arcDashLength={() => Math.random()}
                arcDashGap={() => Math.random()}
                arcDashAnimateTime={() => Math.random() * 4000 + 500}
            />
        </div>
    );
};

export default GlobeComponent;
