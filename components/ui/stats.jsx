"use client";

import CountUp from "react-countup";
import { useState, useEffect } from "react";

const calculateTenure = (startDate) => {
  const start = new Date(startDate);
  const now = new Date(); 
  const diffTime = Math.abs(now - start);
  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30.44));

  let tenureValue;
  let tenureLabel;

  if (diffMonths >= 12) {
    const years = Math.floor(diffMonths / 12);
    const remainingMonths = diffMonths % 12;
    const decimalYears = (years + remainingMonths / 12).toFixed(1); 
    tenureValue = decimalYears;
    tenureLabel = "Years of experience";
  } else {
    tenureValue = `${diffMonths}`;
    tenureLabel = "Months of experience";
  }

  return { tenureValue, tenureLabel };
};

const Stats = () => {
  const [showPlus, setShowPlus] = useState(false);
  const [tenureData, setTenureData] = useState({ tenureValue: "", tenureLabel: "" });

  useEffect(() => {
    setTenureData(calculateTenure("2024-08"));
  }, []);

  const stats = [
    {
      num: tenureData.tenureValue, 
      text: tenureData.tenureLabel,
    },
    {
      num: 25,
      text: "Projects completed",
    },
    {
      num: 11,
      text: "Technologies mastered",
    },
    {
      num: 600, 
      text: "Code commits",
    },
  ];

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0 mb-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              key={index}
            >
              {/* For "Code commits", we handle animation differently */}
              {item.num === 600 ? (
                <div className="text-4xl xl:text-6xl font-extrabold flex items-center">
                  <CountUp
                    end={item.num}
                    duration={5}
                    delay={2}
                    onEnd={() => setShowPlus(true)}
                  />
                  {showPlus && <span>+</span>}
                </div>
              ) : (
                <div className="text-4xl xl:text-6xl font-extrabold flex items-center">
                  {typeof item.num === "number" ? (
                    <CountUp end={item.num} duration={5} delay={2} />
                  ) : (
                    <span>{item.num}</span>
                  )}
                </div>
              )}
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
