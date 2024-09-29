"use client";

import CountUp from "react-countup";
import { useState } from "react";

const stats = [
  {
    num: 3,
    text: "Years of experience",
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

const Stats = () => {
  const [showPlus, setShowPlus] = useState(false); // State to control when to show the "+" sign

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0 mb-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
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
                      onEnd={() => setShowPlus(true)} // Show "+" when the animation ends
                    />
                    {showPlus && <span>+</span>}
                  </div>
                ) : (
                  <div className="text-4xl xl:text-6xl font-extrabold flex items-center">
                    <CountUp
                      end={item.num}
                      duration={5}
                      delay={2}
                      className="inline"
                    />
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;


