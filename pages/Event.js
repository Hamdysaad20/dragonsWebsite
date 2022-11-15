import React from "react";
import Styles from "../styles/Team.module.css";
import Lottie from "lottie-react";
import celebrate from "../public/JSON/user/60051-shapes-v1.json";
import celebrate2 from "../public/JSON/user/60061-shapes-gradient";
import Image from "next/image";

function Event() {
  return (
    <div className='pt-20 text-center  relative flex justify-center mx-auto flex-col max-w-[1400px]'>
      <div class='grid mt-12 place-items-center text-xl font-bold md:text-3xl lg:text-7xl'>


        <p class={`${"z-20"}${Styles.pHeaderTeam}`}>
          <span class={Styles.SpanHeaderTeam}>
         HOW To START YOUR CAREER AS A DEVELOPER
          </span>
        </p>
      </div>
      <div className='mt-12 text-xl max-w-5xl justify-center text-right flex mx-auto leading-loose mb-20 text-gray-300'>
      <div className='h-[530px] width-[630px]  '>
          <div className='flex flex-wrap	gap-2 duration-700 '>
            <div className='h-56 w-56 relative font-bold hover:scale-110  text-lg	duration-700 '>
              {" "}
              <div className=''>
                <Lottie animationData={celebrate} />{" "}
              </div>
              <div className='top-0  z-20    absolute'>
                <Image
                  className='relative z-20  bounce-2 box2  '
                  src={"/images/EVENT/1.png"}
                  alt='Header Image'
                  height='240'
                  width='240'
                  placeholder='blur'
                  blurDataURL={`/_next/image?url=/ico/S1.png&w=16&q=1`}
                  priority
                />
                <div className='absolute bg-black px-2  left-[5%] text-center mx-auto bottom-[5%] z-20'>
                  {" "}
                  <h1 className="">Eslam Khder</h1>
                </div>
              </div>
            </div>
            <div className='h-56 w-56 relative font-bold  text-lg hover:scale-110 	duration-700 '>
              {" "}
              <div className=''>
                <Lottie animationData={celebrate} />{" "}
              </div>
              <div className='top-0   absolute'>
                <Image
                  className='relative  bounce-2 box2  '
                  src={"/images/EVENT/2.png"}
                  alt='Header Image'
                  height='240'
                  width='240'
                  placeholder='blur'
                  blurDataURL={`/_next/image?url=/ico/S1.png&w=16&q=1`}
                  priority
                />
                <div className='absolute bg-black px-2  left-[5%] text-center mx-auto bottom-[5%] z-20'>
                  {" "}
                  <h1 className="">Dario Lencina</h1>
                </div>
              </div>
            </div>
            <div className='h-56 z-20 w-56 overflow-hidden relative  font-bold hover:scale-110  text-lg	duration-700 '>
              {" "}
              <div className=''>
                <Lottie animationData={celebrate} />{" "}
              </div>
              <div className='top-0    overflow-hidden absolute'>
                <Image
                  className='relative  bounce-2 box2  '
                  src={"/images/EVENT/3.png"}
                  alt='Header Image'
                  height='240'
                  width='240'
                  placeholder='blur'
                  blurDataURL={`/_next/image?url=/ico/S1.png&w=16&q=1`}
                  priority
                />
                                <div className='absolute bg-black px-2  left-[5%] text-center mx-auto bottom-[5%] z-20'>
                  {" "}
                  <h1 className="">Ayatoullah Ramzy</h1>
                </div>
              </div>
            </div>
        
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
