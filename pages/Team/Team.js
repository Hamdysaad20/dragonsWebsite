import React from "react";
import CardTeam from "./components/CardTeam";
import { motion } from "framer-motion";
import Styles from "../../styles/Team.module.css";
import Lottie from "lottie-react";
import dragchil from "../../public/JSON/dragchil.json";
import teamData from "../../components/JSON/teamData"
function Team() {

  return (
    <div className='pt-20  relative flex justify-center mx-auto flex-col max-w-[1400px]'>
      <div className='grid mt-12 place-items-center text-xl font-bold md:text-3xl lg:text-7xl'>
        <div className='h-[250px] z-30 rotate-90 hover:rotate-45  hidden md:block  hover:opacity-90 hover:scale-90 opacity-40 duration-500 absolute top-32 right-0 w-[250px]'>
          <Lottie animationData={dragchil} />{" "}
        </div>{" "}
        <div className='rotate-45 z-10 hover:rotate-90  hidden md:block h-[250px] opacity-60 hover:opacity-90 hover:scale-90 duration-500 absolute top-16 left-0 w-[250px]'>
          <Lottie animationData={dragchil} />{" "}
        </div>{" "}
        <p className={`${"z-20"}${Styles.pHeaderTeam}`}>
          <span className={Styles.SpanHeaderTeam}>Our Talented warriors </span>
        </p>
      </div>

      <motion.div
        initial='hidden'
        animate='visible'
        variants={{
          hidden: {
            scale: 1,
            opacity: 0.0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.1,
            },
          },
        }}>
        <div className='w-full flex-wrap gap-2 mb-20 mt-12 max-w-[1400px] flex mx-auto justify-center '>
         {teamData.map((index)=>(
              <CardTeam key={index}
              herfFacebook= {index.herfFacebook}
              herfLinkedIn={index.herfLinkedIn}
              herfGithub={index.herfGithub}
              name={index.name}
              work={index.work}
              image={index.image}
              Pos={index.Pos}
            />
         ))}
        </div>{" "}
        <div className='h-[250px] rotate-180 z-30 hidden md:block hover:opacity-20 opacity-40 hover:scale-90 duration-500 absolute bottom-1 left-0 w-[250px]'>
          <Lottie animationData={dragchil} />{" "}
        </div>{" "}
      </motion.div>
    </div>
  );
}

export default Team;
