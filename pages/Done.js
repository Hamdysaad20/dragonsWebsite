import React, { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import Router from "next/router";

import celebrate from "../public/JSON/celebrate.json";
function Done() {
  useEffect(() => {
    setTimeout(() => {
      const { pathname } = Router;
      Router.push("/");
    }, 5000);
  }, []);
  const lottieRef = useRef();
  async function hoverevent() {
    lottieRef.current.setSpeed(0.3);
  }
  async function hovereventends() {
    lottieRef.current.setSpeed(1);
  }
  return (
    <div>
      <div className=' flex justify-center mx-auto'>
        {" "}
        <div className='z-10 h-[700px] w-[700px] grid place-content-center relative place-items-center'>
          <h1
            style={{ fontFamily: "Poppins-Bold", width: "400" }}
            className='font-medium text-2xl text-center  max-w-[400px] '>
            Redirect in 5 seconds ...{" "}
          </h1>
          <Lottie
            onMouseOver={hoverevent}
            onMouseLeave={hovereventends}
            lottieRef={lottieRef}
            animationData={celebrate}
          />{" "}
          <h1
            style={{ fontFamily: "Poppins-Bold", width: "400" }}
            className='font-medium text-2xl text-center absolute top-[40%] max-w-[400px] '>
            <span className='text-purple-600'> Great ! </span> Thank you for
            your application , We will get in touch with you as soon as possible
            😊{" "}
          </h1>
        </div>
        <div className='absolute z-50 bottom-20 lg:bottom-44'>
          <a
            aria-label='Home'
            className='select-none font-bold max-w-sm  bg-white mt-4 sm:mt-0 shadow-md  hover:shadow-red-500/50  ring-2  ring-slate-900 hover:bg-gray-300 focus:outline-none focus:ring-2 opacity-90  focus:ring-offset-2 active:scale-95 duration-100 0  text-gray-900  h-12   px-16 rounded-lg w-full flex items-center justify-center sm:w-auto highlight-white/20 '
            href={"/"}>
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default Done;
