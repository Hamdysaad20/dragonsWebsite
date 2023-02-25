import Lottie from "lottie-react";
import React, { useRef } from 'react'
import Highlights from './Highlights';
function Stars(props) {

    const lottieRef = useRef();
 
    async function clicks(){
     lottieRef.current.goToAndPlay()
    }
  return (
    <div >
          <div className='flex  min-h-[80px] relative  select-none '>
        <div className="h-28 w-28 absolute top-0 left-0 z-10 ">
<Lottie className='z-10 md:m-5 '
 animationData={props.celeb}               
 lottieRef={lottieRef}

 onClick={clicks}


/>

</div>
<div className="bg-gray-700/40 z-30 hover:bg-gray-600/40 duration-500 min-h-[70px] rounded-lg   pr-3 pt-2   m-5  md:m-9">

<div className='min-h-[30px] p-2 flex '>
<div className='h-12 w-12 md:w-20 md:h-20 absolute top-0 left-0 '>
    <Lottie animationData={props.animatedlogo} />
<div className="grid place-items-center">    {props.teamico}
</div>
    </div>
    <h1 style={{ fontFamily: "Poppins-Bold"}}  className='md:text-xl text-lg pl-3 font-bold'><span className="md:text-3xl text-2xl text-yellow-300">{props.HighlightsNum}</span> {props.HighlightsText}</h1>

</div>


</div>


        </div>
    </div>
  )
}

export default Stars