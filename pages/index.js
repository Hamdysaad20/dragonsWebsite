import styles from "../styles/Home.module.css";
import Sec2Summary from "../components/WhatWeDo";
import Styles from "../styles/Team.module.css";
import teamData from "../components/JSON/teamData"
import CardTeam from "./Team/components/CardTeam";
import {React,useState,useEffect }from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionOneAnnounce from "./Home/components/SectionOneAnnounce";
import Founders from './Home/components/Founders';
import  Link  from 'next/link';

export default function Home() {
  const [EmpState,setEmpState]= useState(teamData)
  
  function randomArrayShuffle(teamData) {
    let currentIndex = teamData.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = teamData[currentIndex];
      teamData[currentIndex] = teamData[randomIndex];
      teamData[randomIndex] = temporaryValue;
    }
    return teamData;
  }
  useEffect(()=>(
    setEmpState( randomArrayShuffle(teamData).slice(0,4))

  ),[])
  
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
         <div className={`${"overflow-x-hidden"}${styles.container}`}>
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
                      <div className='grid pt-20 place-items-center mb-20 lg:grid-flow-col grid-flow-row'>
                            <SectionOneAnnounce
                            MainText="Join more than 1000+ people that interested in tech"
                            partner="/Partner"
                            action="/Join/Join"
                            ActionButton="Join Us"
                            action2="https://chat.whatsapp.com/EBstbSoXHg63rZ5HiomOT0"
                            ActionButton2="Whatsapp Group 👨🏻‍🚀"
                            />
                      </div>{" "}
                  </motion.div>
                <div className="relative">
                    <motion.div className=" overflow-hidden"
                          style={{ scale }}>
                          <div className="flex  justify-center mx-auto">
                          <Image
                                      className='relative z-20  bounce-2 box2  '
                                      src={"/images/dragonsEG2023.png"}
                                      alt='Header Image'
                                      height='240'
                                      width='240'
                                      placeholder='blur'
                                      blurDataURL={`/_next/image?url=/ico/S1.png&w=16&q=1`}
                                      priority
                                    />
                          </div>
                          <div className=" mb-96">
                          </div>

                    </motion.div>
                      <div className="absolute left-0 right-0 lg:hidden bottom-0">
                          <div className="mx-auto flex rotate-90 h-80 w-40  overflow-hidden justify-center">
                                <Image
                                  className='relative z-20  bounce-2 box2  '
                                  src={"/images/line.png"}
                                  alt='Header Image'
                                   layout="fill"
                                  placeholder='blur'
                                  blurDataURL={`/_next/image?url=/ico/S1.png&w=16&q=1`}
                                  priority
                                />
                         </div>
                      </div>
                  </div>
              <div className='-pt-20  relative flex justify-center mx-auto flex-col max-w-[1400px]'>
                <Founders/>
                  <div className='grid mt-12 place-items-center text-xl font-bold md:text-3xl lg:text-7xl'>
                     <p className={`${"z-20"}${Styles.pHeaderTeam}`}>
                          <span style={{ fontFamily: "dragons"}} class={Styles.SpanHeaderTeam}>Our Team </span>
                     </p>
                  </div>
              </div>
                 <div className='w-full flex-wrap gap-2 mb-20 mt-12 max-w-[1400px]  flex mx-auto justify-center '>
                        {EmpState.map((index)=>(
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

                           <div> <div className='mt-6  mx-12 sm:mx-0  sm:mt-10 sm:flex  justify-left sm:space-x-6 text-sm'>
                          <Link legacyBehavior style={{ fontFamily: "dragons"}}
                              href={"/Team/Team"}
                            passHref>
                              <div className='select-none font-bold max-w-sm  bg-white mt-4 sm:mt-0 shadow-md  hover:shadow-red-500/50  ring-2  ring-slate-900 hover:bg-gray-300 focus:outline-none focus:ring-2 opacity-90  focus:ring-offset-2 active:scale-95 duration-100 0  text-gray-900  h-12 px-3  sm:px-16 rounded-lg w-full flex items-center justify-center sm:w-auto highlight-white/20 '>
                                See All
                              </div>
                          </Link>
                        </div></div>
                 </div>{" "}

                   <div className="relative pt-20 ">
                        <div className="absolute right-2 -top-[50px]  sepia-0 backdrop-opacity-95 ">
                                <Image
                                  className='relative z-20   bounce-2 box2  '
                                  src={"/images/dragon2.png"}
                                  alt='Header Image'
                                  height='160'
                                  width='240'
                                  placeholder='blur'
                                  blurDataURL={`/_next/image?url=/ico/S1.png&w=16&q=1`}
                                  priority
                                />
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
                                  <div
                                    style={{
                                      backgroundColor: "#090e1a",
                                      boxSizing: "border-box",
                                      filter: "drop-shadow(0px 0px 10px #121245)",
                                    }}>
                                <Sec2Summary
                                  MainPTexe='Dragons is a Bootcamp and activity program, that helps people to take their first step toward their career,
                                  Listen from people of the same age, speakers working in top companies and people can help you grow as a person.'
                                  MainText={[
                                    "Give People ",
                                    <span key='coloredText' className=' header text-red-400'>
                                      Hope and Trust
                                    </span>,
                                    "  ,and See What Happens🚀",
                                  ]}
                                  ActionButton='Join Us Now'
                                  action='/Join'
                                />
                              </div>
                            </motion.div>
                   </div>
         </div>
  );
}
