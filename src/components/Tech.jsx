import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { h1 } from "framer-motion/client";

const Tech = () => {
  return (
 
    <div className='flex flex-row flex-wrap justify-center gap-10 relative'>
       {/* <h1 className="text-purple-500 font-bold text-5xl uppercase text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Tech</h1> */}
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
