import styles from "../styles/Home.module.css";
import SectionOneAnnounce from "../components/SectionOneAnnounce";
import Sec2Summary from "../components/WhatWeDo";
import CardTeam from "../components/CardTeam";
import Styles from "../styles/Team.module.css";

import Image from "next/image";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function Home() {
  
  const { scrollYProgress } = useViewportScroll();
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
            MainPTexe='Be there to see Talented developers, that can help you to start your own path, and clear all the mysteries around your roadmap😍

            '
            MainText={[
              "Know Your ",
              <span key='coloredText' className=' header text-red-400'>
                Path
              </span>,
              " As A Developer",
            ]}
            ActionButton='See The Event'
            action='/Event'
            ActionButton2='Facebook Page👍'
            action2='https://www.facebook.com/profile.php?id=100086806926973'
            S1='/images/1.png'
            speaker='/Speaker'
            MainPTexe2="Thursday, NOVEMBER 17 @ 1:00 PM  UTC+02:00 (Cairo Time)"
          />
        </div>{" "}
      </motion.div>
<div className="relative">
<motion.div className=" overflow-hidden"
      style={{ scale }}>
      <div className="flex  justify-center mx-auto">
      <Image
                  className='relative z-20  bounce-2 box2  '
                  src={"/images/logo.png"}
                  alt='Header Image'
                  height='240'
                  width='240'
                  placeholder='blur'
                  blurDataURL={`/_next/image?url=/ico/S1.png&w=16&q=1`}
                  priority
                />
      </div>
     
      <div className=" mb-96">
      <div className="flex justify-center pt-1  mx-auto">
      <Image
                  className='relative z-20  bounce-2 box2  '
                  src={"/images/logotext.png"}
                  alt='Header Image'
                  height='60'
                  width='240'
                  placeholder='blur'
                  blurDataURL={`/_next/image?url=/ico/S1.png&w=16&q=1`}
                  priority
                />
      </div>
      
      </div>

      </motion.div>
      <div className="absolute left-0 right-0 bottom-0">
      <div className="mx-auto flex rotate-90  justify-center">
      <Image
                  className='relative z-20  bounce-2 box2  '
                  src={"/images/line.png"}
                  alt='Header Image'
                  height='440'
                  width='240'
                  placeholder='blur'
                  blurDataURL={`/_next/image?url=/ico/S1.png&w=16&q=1`}
                  priority
                />
      </div>
      
      </div>  
  </div>    
      <div className='-pt-20  relative flex justify-center mx-auto flex-col max-w-[1400px]'>
      <div class='grid mt-12 place-items-center text-xl font-bold md:text-3xl lg:text-7xl'>
<p class={`${"z-20"}${Styles.pHeaderTeam}`}>
          <span class={Styles.SpanHeaderTeam}>Our Team </span>
        </p></div></div>
<div className='w-full flex-wrap gap-2 mb-20 mt-12 max-w-[1400px] flex mx-auto justify-center '>

          <CardTeam
            herfFacebook='https://www.facebook.com/hamdysaad266/'
            herfLinkedIn='https://www.linkedin.com/in/hamdysaad/'
            herfGithub='https://github.com/Hamdysaad20'
            name='Hamdy Saad'
            work='Sr.Frontend Engineer'
            image='/images/1.jpg'
            Pos='co-founder/CTO'
          />
          <CardTeam
            herfFacebook='https://www.facebook.com/profile.php?id=100010052953257'
            herfLinkedIn='https://www.linkedin.com/in/hatem-ali-hassan-042798225/'
            herfGithub='https://github.com/Hatem2002'
            name='Hatem Ali'
            work='Frontend Engineer'
            image='/images/2.png'
            Pos='co-founder/CEO'
          />
          <CardTeam
            herfFacebook='https://www.facebook.com/profile.php?id=100012624398938'
            herfLinkedIn='https://www.linkedin.com/in/salaheldin-mohamed/'
            herfGithub='https://github.com/salah-mo'
            name='Salah Mohamed'
            work='Backend Engineer'
            image='/images/3.png'
            Pos='co-founder/Head Java'
          />
          <CardTeam
            herfFacebook='https://www.facebook.com/eslam.mohamedelabd.1'
            herfLinkedIn='https://www.linkedin.com/in/eslam-mohamed-moawed/'
            herfGithub='https://github.com/Crypt00o'
            name='Eslam Mohammed'
            work='Backend Engineer'
            image='/images/4.jpg'
            Pos='Head of Backend'
          />
           <div> <div className='mt-6  mx-12 sm:mx-0  sm:mt-10 sm:flex  justify-left sm:space-x-6 text-sm'>
          <a
              className='select-none font-bold max-w-sm  bg-white mt-4 sm:mt-0 shadow-md  hover:shadow-red-500/50  ring-2  ring-slate-900 hover:bg-gray-300 focus:outline-none focus:ring-2 opacity-90  focus:ring-offset-2 active:scale-95 duration-100 0  text-gray-900  h-12 px-3  sm:px-16 rounded-lg w-full flex items-center justify-center sm:w-auto highlight-white/20 '
              href={"/Team"}
            passHref>
            See All 
          </a>
        </div></div>

        </div>{" "}
       
<div className="relative">
<div className="absolute right-2 -top-[130px] sepia-0 backdrop-opacity-95 ">
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
