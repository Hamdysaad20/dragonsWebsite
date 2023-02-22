import Image from "next/image";

import React from "react";
import Link from "next/link";

function cardTeam(props) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  let bgcardColor = [
    "bg-[#90BB94]",
    "bg-[#E2AD5E]",
    "bg-[#5347DE]",
    "bg-[#E2815E]",
  ];
  return (
    <div>
      <div className='relative h-[420px] w-[320px]'>
        <div
          className={`${
            bgcardColor[getRandomInt(4)]
          }${" h-[400px] w-[300px] "}`}>
          <div className='border-4 border-dashed hover:scale-105 absolute h-[400px] select-none hover:backdrop-blur-sm w-[300px] rotateonhover15 duration-500 border-gray-800 right-0 bottom-0'>
            <Image
              src={props.image}
              alt=''
              height='300'
              width='300'
              objectFit='cover'
              placeholder='blur'
              blurDataURL='data:...'
            />
          </div>
          <div className='bg-gray-200  text-gray-900 absolute rotateonhover15text  duration-500 w-full bottom-[20px] h-[150px]'>
            <div
              style={{ fontFamily: "tatris", width: "400" }}
              className='text-gray-900  relative text-left h-full'>
              <h1 className='text-2xl font-bold pl-2 p-1'>{props.name}</h1>
              <h1 className='text-lg font-bold pl-2 text-gray-700 p-1 pt-0'>
                {props?.work}
              </h1>
              <h1 className='text-md text-blue-600 font-bold pl-2 p-1 pt-0'>
                {props.Pos}
              </h1>

              <div className='flex gap-2 justify-center  right-4 pl-2 absolute bottom-4'>
                <div className='duration-500 active:scale-95 mt-[6px]  hover:text-gray-400'>
                  {" "}
                  {props.herfLinkedIn?<Link legacyBehavior href={props.herfLinkedIn} passHref>
                    <svg
                      width='23px'
                      height='23px'
                      viewBox='0 0 48 48'
                      fill='black'>
                      <path
                        fillRule='evenodd'
                        className='opacity-50 mt-1 hover:opacity-30 duration-300'
                        clipRule='evenodd'
                        d='M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM16.9605 19.8778H11.5216V36.2196H16.9605V19.8778ZM17.3188 14.8227C17.2835 13.2204 16.1377 12 14.277 12C12.4164 12 11.2 13.2204 11.2 14.8227C11.2 16.3918 12.3805 17.6473 14.2064 17.6473H14.2412C16.1377 17.6473 17.3188 16.3918 17.3188 14.8227ZM36.5754 26.8497C36.5754 21.8303 33.8922 19.4941 30.3131 19.4941C27.4254 19.4941 26.1326 21.0802 25.4107 22.1929V19.8783H19.9711C20.0428 21.4117 19.9711 36.22 19.9711 36.22H25.4107V27.0934C25.4107 26.605 25.446 26.1178 25.5898 25.7681C25.9829 24.7924 26.8779 23.7822 28.3805 23.7822C30.3494 23.7822 31.1365 25.2807 31.1365 27.4767V36.2196H36.5752L36.5754 26.8497Z'
                        fill='black'></path>
                    </svg>
                  </Link>:null}
                  
                </div>
                <div className='duration-500 active:scale-95 mt-[6px]  hover:text-gray-400'>
                  {" "}
                 {props.herfGithub? <Link legacyBehavior href={props?.herfGithub} passHref>
                    <svg
                      version='1.1'
                      id='Capa_1'
                      width='23px'
                      height='23px'
                      viewBox='0 0 438.549 438.549'>
                      <g>
                        <path
                          fill='black'
                          fillRule='evenodd'
                          className='opacity-50 mt-1 hover:opacity-30 duration-300'
                          clipRule='evenodd'
                          d='M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365
		c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63
		c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996
		c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136
		c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559
		c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559
		c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997
		c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851
		c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136
		c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41
		c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126
		c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817
		c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994
		c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849
		c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24
		c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979
		c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146
		c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995
		c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906
		C438.536,184.851,428.728,148.168,409.132,114.573z'
                        />
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </Link>:""}
                </div>
                <div className='duration-500 active:scale-95  hover:text-gray-400'>
                  {" "}
                {  props.herfFacebook? <Link legacyBehavior href={props.herfFacebook} passHref>
                    <svg
                      fill='black'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 50 50'
                      width='25px'
                      height='25px'
                      className='opacity-50 mt-1 hover:opacity-30 duration-300'>
                      {" "}
                      <path d='M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z' />
                    </svg>
                  </Link>:null}
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cardTeam;
