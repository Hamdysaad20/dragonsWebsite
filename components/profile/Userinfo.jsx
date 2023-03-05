import Image from "next/image";
import React from "react";
import Highlights from "./Highlights";
import fullScreen from "./fullScreen";
import { useRouter } from 'next/router';

import user from "../JSON/profile/user"

function Userinfo() {
  const routerasString = useRouter().pathname;
  const Routercontroler= useRouter();
  return (
    <div className='w-full mt-12 relative rounded-t-2xl  bg-gray-800/40 backdrop-blur-lg border-2 border-b-0 border-white'>
      <div className='p-3 flex flex-wrap md:flex-nowrap md:flex-cols  '>
        <div className='ml-0 relative flex gap-3 md:flex-col'>
          <div className='rounded-3xl -mt-[50px] relative select-none  md:h-64 h-32 w-32 md:w-64'>
            <div className='rounded-[50px]  relative bg-gray-700/40  backdrop-blur-lg md:h-60 h-32 w-32 md:w-60'>
              <div className='w-full  hover:scale-105 duration-1000 flex overflow-hidden rounded-3xl  h-full'>
                <Image  
                  src='/images/HamdySaad.jpg'
                  className='w-full rounded-3xl  md:rounded-[50px] h-full select-none'
                  layout='fill'
                  alt='Core Team'
                  priority
                  placeholder="blur"
                  blurDataURL='/images/HamdySaad.jpg'

        
                />
              </div>
            </div>
            <div className='md:h-10 md:w-10 h-5 w-5 absolute  md:bottom-3 md:right-3  bottom-4 right-4 rounded-full bg-gray-700/40 backdrop-blur-lg'>
              <Image
                src='/images/dragonsEG.png'
                blurDataURL='/images/dragonsEG.png'
                placeholder='blur'
                className='w-full h-full select-none'
                width='100'
                height='100'
                alt='Core Team'
                priority
              />
            </div>
          </div>

          <div
            style={{ fontFamily: "Poppins-Bold" }}
            className=' relative'>
            <h1 className='text-2xl md:text-4xl pl-2 select-none text-[#97ba7b]'>
              User Name
            </h1>
            <div className='relative'>
              <div className='relative'>
                <div className='flex min-w-20 justify-center mx-auto    md:justify-start  '>
                  <div className='md:rounded-md flex gap-2  rounded-3xl p-2 px-2  bg-gray-900/40 duration-300  hover:bg-gray-700/40 backdrop-blur-sm'>
                    {" "}
                    <h1 className='text-xl'>@username</h1>
                    <Image
                      src='/images/discord.png'
                      className='select-none'
                      width={40}
                      height={10}
                      alt='discord'
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mr-0 w-full      '>
          <div className=' h-full mt-3'>
            <div className="flex justify-center">
              <h1 style={{ fontFamily: "dragons"}} className=" text-7xl">Highlight</h1>
            </div>
            <Highlights />
            <div className="flex gap-2 relative pb-12  justify-center flex-wrap">
         {user.slice(0,5).map((item,index)=>(
           <div key={item} className="bg-red-900 relative h-44 rounded-lg w-44">
            <Image  
                src={item.image}
                className='w-full rounded-lg  h-full select-none'
                layout='fill'
                alt='Core Team'
                priority
                placeholder="blur"
                blurDataURL='/images/HamdySaad.jpg'

      
              />
          </div>

         ))}

<div onClick={() => Routercontroler.push(routerasString+"/photos")} className="absolute bottom-0 bg-green-400/40  hover:bg-green-400/20 duration-500 rounded-[10px] font-bold select-none cursor-pointer p-2">See More</div>
<div className="xl:flex flex-col hidden  justify-between">


{user.slice(5,7).map((item)=>(

          <div key={item} className="bg-red-900 h-20 relative rounded-lg w-20">
            <Image  
                src={item.image}
                className='w-full rounded-lg   h-full select-none'
                layout='fill'
                alt='Core Team'
                priority
                placeholder="blur"
                blurDataURL='/images/HamdySaad.jpg'

      
              />
          </div>

         ))}




</div>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Userinfo;
