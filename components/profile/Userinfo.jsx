import Image from "next/image";
import React ,{useRef} from "react";
import Highlights from "./Highlights";
import user from "../JSON/profile/user";

import UserStatus from "./status/UserStatus";
import ImagesForOverView from "./ImagesForOverView";
import ActiviteyComp from "../ActiviteyComp";
import verified from "../../public//JSON/user/128121-verified.json"
import badge from "../../public//JSON/user/BestMember-star-badge.json"

import Lottie from "lottie-react";

function Userinfo(props) {
  const lottieRef = useRef();

  async function play(){
    lottieRef.current.speed(3);
  }
  return (
    <div className='w-full mt-12 relative rounded-t-2xl  bg-gray-800/40 backdrop-blur-lg border-2 border-b-0 border-white'>
      <div className='p-3 flex flex-wrap gap-3  justify-center lg:flex-nowrap lg:flex-cols  '>
        <div className=''>
<div className="ml-0 relative  flex gap-3 lg:flex-col">
  
<div className='rounded-3xl -mt-[50px] relative select-none  md:h-64 h-32 w-32 md:w-64'>
            <div className='rounded-[50px]  relative bg-gray-700/40  backdrop-blur-lg md:h-60 h-32 w-32 md:w-60'>
              <div className='w-full  hover:scale-105 duration-1000 flex overflow-hidden rounded-3xl  h-full'>
                <Image
                  src='/images/HamdySaad.jpg'
                  className='w-full rounded-3xl  md:rounded-[50px] h-full select-none'
                  layout='fill'
                  alt='Core Team'
                  priority
                  placeholder='blur'
                  blurDataURL='/images/HamdySaad.jpg'
                />
              </div>
            </div>
            <div className='h-10 w-10 absolute md:bottom-3 md:right-3  bottom-0 right-0 rounded-full bg-gray-700/40 backdrop-blur-lg'>
               <Lottie  lottieRef={lottieRef}
                hover={true}
                

 animationData={verified}  />

            </div>
          </div>

          <div style={{ fontFamily: "Poppins-Bold" }} className=' relative'>
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
              <div className="">
              <div className='flex  gap-1 pt-3'>
              <svg fill="rgb(156 163 175)"
                   
                   className='pt-[3px]'
                   width='25px'
                   height='25px'

              version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 395.71 395.71" xmlSpace="preserve">
        <g>
          <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
		c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
		C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
		c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z" />
        </g>
      </svg>
   
        
                    <h1 className='text-left font-   text-gray-400'>
                     Egypt
                    </h1>
                  </div>
                

                  <div className='flex  gap-1 pt-3'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"                  className='pt-[3px]'
                   width='25px'
                   height='25px' fillRule="evenodd" clipRule="evenodd" baseProfile="basic"><path fill="rgb(156 163 175)"  fillRule="evenodd" d="M43.25,26.909C50.519,26.909,56,32.107,56,39v18	c0,1.104-0.896,2-2,2H34c-1.104,0-2-0.896-2-2v-7H22c-1.104,0-2-0.896-2-2v-3h-9c-1.104,0-2-0.896-2-2V30.864	C9,26.528,12.527,23,16.863,23c2.54,0,4.831,1.2,6.275,3.103c1.646-1.363,3.718-2.125,5.94-2.125c3.364,0,6.367,1.761,8.016,4.506	C38.944,27.458,41.059,26.909,43.25,26.909z" clipRule="evenodd" /><path fill="rgb(156 163 175)" fillRule="evenodd" d="M44.5,25c-4.687,0-8.5-3.813-8.5-8.5S39.813,8,44.5,8	s8.5,3.813,8.5,8.5S49.187,25,44.5,25z" clipRule="evenodd" /><path fill="rgb(156 163 175)"fillRule="evenodd" d="M29,22.5c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6	S32.309,22.5,29,22.5z" clipRule="evenodd" /><path fill="rgb(156 163 175)" fillRule="evenodd" d="M16.5,22c-3.032,0-5.5-2.467-5.5-5.5s2.468-5.5,5.5-5.5	s5.5,2.467,5.5,5.5S19.532,22,16.5,22z" clipRule="evenodd" /></svg>
<h1 className='text-left font-   text-gray-400'>
                     Joined May 2020
                    </h1>
</div>






              </div>

<hr className="my-5 " />
<div className="flex gap-2 bg-gray-700/40 backdrop-blur-lg justify-center select-none cursor-pointer active:scale-95 p-2 rounded-lg ">
<div className="h-8  w-8 ">
<Lottie 
 animationData={badge}  />
 </div><h1 className="text-2xl font-bold">Top Member</h1>

     </div>   </div>

        <div className='mr-0 w-full      '>
          <div className=' h-full mt-3  '>
            <div className='flex justify-center'>
              <h1 style={{ fontFamily: "dragons" }} className=' text-7xl'>
                Highlight
              </h1>
            </div>
            <Highlights />
            <ImagesForOverView
              Routercontroler={props.Routercontroler}
              routerasString={props.routerasString}
              user={user}
            />

            <div className=' w-full   flex justify-center'>
              <div className='flex flex-wrap-reverse xl:justify-between justify-center mx-auto  w-[830px] '>
<div className="flex flex-col">
<div>
                  <div className='flex  gap-1 pt-3'>
                    <svg
                      className='pt-[3px]'
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
                    <h1 className='text-left  text-gray-400'>
                      latest activites
                    </h1>
                  </div>
                  {props.latest[0].map((item,index)=>(
 <ActiviteyComp key={index}
 ActivitesString={item}
 routerasString={props.routerasString}
 Routercontroler={props.Routercontroler}
/>


                 ))}
                
                </div>

                <div>
                  <div className='flex  gap-1 pt-3'>
                  <svg
                      className='pt-[3px]'
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
          <rect width={24} height={24}/>{" "}
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M22 11.9342C22 11.956 22 11.978 22 12L22 16.0658C22 16.9523 22.0001 17.7161 21.9179 18.3278C21.8297 18.9833 21.631 19.6117 21.1213 20.1213C20.6117 20.631 19.9833 20.8297 19.3278 20.9179C18.7161 21.0001 17.9523 21.0001 17.0658 21L6.93416 21C6.04768 21.0001 5.28386 21.0001 4.6722 20.9179C4.01669 20.8297 3.38834 20.631 2.87867 20.1213C2.36901 19.6117 2.17027 18.9833 2.08213 18.3278C1.9999 17.7161 1.99994 16.9523 1.99999 16.0658L1.99999 11.9342C1.99994 11.0477 1.9999 10.2839 2.08213 9.67221C2.17027 9.0167 2.36901 8.38835 2.87867 7.87868C3.38834 7.36902 4.01669 7.17028 4.6722 7.08215C5.28386 6.99991 6.04768 6.99995 6.93417 7L17 7C17.022 7 17.044 7 17.0658 7C17.9523 6.99995 18.7161 6.99991 19.3278 7.08215C19.9833 7.17028 20.6117 7.36902 21.1213 7.87868C21.631 8.38835 21.8297 9.0167 21.9179 9.67221C22.0001 10.2839 22 11.0477 22 11.9342Z'
            fill='rgb(156 163 175)'
            />{" "}
          <path
            d='M19 6.04361V5.71429C19 4.21523 17.7848 3 16.2857 3H7.71429C6.21523 3 5 4.21523 5 5.71429V6.0436C5.57491 5.99987 6.22076 5.99994 6.88123 6.00001L17.1187 6.00001C17.7792 5.99994 18.4251 5.99987 19 6.04361Z'
            fill='rgb(156 163 175)'
            />{" "}
        </g>
      </svg>
                    <h1 className='text-left  text-gray-400'>
                      latest Tasks
                    </h1>
                  </div>
                 {props.latest[1].map((item,index)=>(
 <ActiviteyComp key={index}
 ActivitesString={item}
 routerasString={props.routerasString}
 Routercontroler={props.Routercontroler}
/>


                 ))}
                 </div>


</div>
                <UserStatus />
              </div>
         
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
}

export default Userinfo;
