import React from 'react'
import  navProfile  from '../JSON/profile/navigators';
import { useRouter } from 'next/router';


function Taps() {
  const routerasString = useRouter().pathname;
  const Routercontroler= useRouter();





  return (
    <div  className='flex w-full h-24  overflow-x-auto scrollbar-hide overflow-hidden  select-none relative'>

<div className=' lg:justify-center scrollbar-hide  h-12  mx-auto w-full flex gap-2 mb-1  bottom-0 absolute '>
{navProfile.map((item,index) => (

<div key={index} className={`${routerasString == item.link? " border-red-600 border-b-4 ":" "}${' p-[5px] cursor-pointer '}`} >
  <div   onClick={() => Routercontroler.push(routerasString+item.link)}
  >
<div className='  bg-gray-900/40 duration-300  hover:bg-gray-700/40 backdrop-blur-sm min-w-24 px-2 h-full rounded-lg    grid place-items-center'>
           <div className='flex gap-1'>
           <div>{item.iconSvg}</div>
           <h1 className='md:text-xl text-right md:pt-0 pt-[2px]'>{item.name}</h1>

           </div>
        </div>
        </div>
</div>

))}




</div>
    </div>
  )
}

export default Taps