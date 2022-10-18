import React from "react";
import Lottie from "lottie-react";
import hand from "../public/JSON/68978-3d-hand.json";

function FormSideSection() {
  return (
    <div className='lg:w-[500px] relative  h-full flex justify-center mx-auto min-w-[300px]'>
      <div className='w-[200px] hover:scale-90 duration-1000 lg:mb-[100px] lg:w-[500px]'>
        <div className='w-full flex justify-center mx-auto text-xl font-bold  text-green-400 bg-green-100 py-3 rounded-xl'>
          (HR) is Done{"😄"}
        </div>
        <Lottie animationData={hand} />{" "}
        <div>
          <h1
            className='text-2xl font-bold  text-center w-full hidden lg:block'
            style={{ fontFamily: "Poppins-Bold", width: "400" }}>
            Be one of us and let&apos;s change people&apos;s lives ✨{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default FormSideSection;
