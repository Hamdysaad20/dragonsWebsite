import Image from "next/image";
import React from "react";
import Highlights from "./Highlights";
import fullScreen from "./fullScreen";
import { useRouter } from 'next/router';
import user from "../JSON/profile/user"

import UserStatus from "./status/UserStatus";
import ImagesForOverView from "./ImagesForOverView";

function Userinfo() {
  const routerasString = useRouter().pathname;
  const Routercontroler= useRouter();
  return (
    <div className='w-full mt-12 relative rounded-t-2xl    bg-gray-800/40 backdrop-blur-lg border-2 border-b-0 border-white'>
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
          <div className=' h-full mt-3  '>
            <div className="flex justify-center">
              <h1 style={{ fontFamily: "dragons"}} className=" text-7xl">Highlight</h1>
            </div>
            <Highlights />
            <ImagesForOverView Routercontroler={Routercontroler} routerasString={routerasString} user={user}/>
        
        
         <div className=" w-full   flex justify-center">
         <div className="flex flex-wrap-reverse xl:justify-between justify-center mx-auto  w-[830px] ">
          <div>
          <div className="flex  gap-1 pt-3">
                 <svg 
                 className="pt-[3px]"
        width='20px'
        height='20px'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <g id='SVGRepo_bgCarrier' strokeWidth={0} />
        <g
          id='SVGRepo_tracerCarrier'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <g id='SVGRepo_iconCarrier'>
          {" "}
          <rect
            width={18}
            height={18}
            transform='matrix(4.37114e-08 -1 -1 -4.37114e-08 24 24)'
            fill=''
          />{" "}
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM10.5066 6.65264C11.0199 5.26682 12.98 5.26683 13.4933 6.65264L14.1209 8.34727C14.2662 8.73956 14.6403 8.99995 15.0586 8.99995L16.5269 8.99995C17.9614 8.99995 18.6798 10.7343 17.6655 11.7487L16.1306 13.2835C15.8942 13.52 15.7915 13.8589 15.8571 14.1868L16.2262 16.0319C16.4943 17.3727 15.0333 18.3872 13.8707 17.6675L12.5263 16.8352C12.2038 16.6356 11.7961 16.6356 11.4736 16.8352L10.1292 17.6675C8.96662 18.3872 7.5056 17.3727 7.77375 16.0319L8.14279 14.1868C8.20836 13.8589 8.10574 13.52 7.86931 13.2835L6.29284 11.7071C5.29385 10.7081 6.00138 8.99995 7.41416 8.99995L8.94126 8.99995C9.35959 8.99995 9.73371 8.73956 9.87901 8.34727L10.5066 6.65264Z'
            fill='rgb(156 163 175)'
          />{" "}
        </g>
      </svg>
      <h1 className="text-left  text-gray-400">
             
              latest activites</h1>
              </div>
            <div className="h-12 bg-red-300 w-40">sds</div>
          </div>

          <UserStatus/>
          </div>

         </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Userinfo;
