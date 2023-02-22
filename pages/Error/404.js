import React, { useRef } from "react";
import Lottie from "lottie-react";

import celebrate from "../../public/JSON/404.json";
function Custom404() {
  const lottieRef = useRef();
  async function hoverevent() {
    lottieRef.current.setSpeed(0.3);
  }
  async function hovereventends() {
    lottieRef.current.setSpeed(1);
  }
  return (
    <div className='px-2'>
      <div className=' flex justify-center mx-auto'>
        {" "}
        <div className='z-10 h-[700px] w-[700px] grid place-content-center relative place-items-center'>
          {" "}
          <Lottie
            onMouseOver={hoverevent}
            onMouseLeave={hovereventends}
            lottieRef={lottieRef}
            animationData={celebrate}
          />{" "}
          <h1
            style={{ fontFamily: "Poppins-Bold", width: "400" }}
            className='font-medium text-2xl text-center absolute  bottom-[20%] max-w-[400px] '>
            <span className='text-purple-600'> OOPS! PAGE NOT FOUND. </span> You
                   must have picked the wrong door 😲
          </h1>
        </div>
        <div className='absolute z-50 bottom-12 lg:bottom-44'>
          <a
            aria-label='Home'
            className='select-none font-bold max-w-sm  bg-white mt-4 sm:mt-0 shadow-md  hover:shadow-red-500/50  ring-2  ring-slate-900 hover:bg-gray-300 focus:outline-none focus:ring-2 opacity-90  focus:ring-offset-2 active:scale-95 duration-100 0  text-gray-900  h-12   px-16 rounded-lg w-full flex items-center justify-center sm:w-auto highlight-white/20 '
            href={"/"}>
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default Custom404;
