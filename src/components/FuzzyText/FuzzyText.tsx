import { useState, useEffect } from "react";

export default function FuzzyText({
  text = "about",
  width = 500,
  height = 200,
  fontSize = 32,
}) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => (prev + 0.4) % 100);
    }, 1);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 bg-slate-100 rounded-lg">
      <div className="w-full border border-slate-300 bg-white rounded-md overflow-hidden">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full">
          <defs>
            <filter id="subtleDisplacement">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.02"
                numOctaves="2"
                seed={time * 0.2}
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="4"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
          <text
            x="50%"
            y="50%"
            fontSize={fontSize}
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
            filter="url(#subtleDisplacement)"
            className="fill-black"
          >
            {text}
          </text>
        </svg>
      </div>
    </div>
  );
}
