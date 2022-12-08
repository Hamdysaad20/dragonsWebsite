import React from 'react'
import Styles from "../styles/Team.module.css";
import Image from "next/image"
import FoundersCard from './FoundersCard';
import foundersArr from "./JSON/founders"
function founders() {
  return (
    <div>
          <div class='grid mt-12 place-items-center text-xl font-bold md:text-3xl lg:text-7xl'>
          
<p class={`${"z-20"}${Styles.pHeaderTeam}`}>
          <span  style={{ fontFamily: "dragons"}} >Founders</span>
        </p>
        <div className='relative h-[300px] w-[300px] hover:scale-110 duration-700'>
          <Image src="/images/DragonsF.png" alt ="" layout='fill'/>
          </div>
         
          <div className="grid place-items-center grid-cols-3 gap-10 mt-12"> 
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