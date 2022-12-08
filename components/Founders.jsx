import React from 'react'
import Styles from "../styles/Team.module.css";
import Styless from "../styles/founders.module.css";
import Lottie from "lottie-react";
import fire from "../public/JSON/fire.json";

import Image from "next/image"
import FoundersCard from './FoundersCard';
import foundersArr from "./JSON/founders"
function founders() {
  return (
    <div className={Styless.gg}>
          <div class='grid mt-12 place-items-center text-xl font-bold md:text-3xl lg:text-7xl'>
          
<p class={`${"z-20"}${Styles.pHeaderTeam}`}>
          <span  style={{ fontFamily: "dragons"}} >Founders</span>
        </p>
        <div className='relative h-[300px] w-[300px] hover:scale-110 duration-700'>
          <Image className='z-20' src="/images/DragonsF.png" alt ="" layout='fill'/>
          <Lottie animationData={fire} />

          </div>
         
          <div className="flex flex-wrap gap-10 mb-20 mt-12"> 
          {foundersArr.map((index)=>(
  <FoundersCard key={index}
  name={index.name}
  image={index.image}
  Pos={index.Pos}
/>

         ))}
          </div>
         
        </div></div>

    
  )
}

export default founders