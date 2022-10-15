import Link from "next/link";
import Image from "next/image";

import React from "react";

function cardTeam(props) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  function randomArrayShuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
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
          <div className='border-4 border-dashed absolute h-[400px] select-none hover:backdrop-blur-sm w-[300px] rotateonhover15 duration-500 border-gray-800 right-0 bottom-0'>
            <Image
              src={props.image}
              alt=''
              height='300'
              width='300'
              objectFit='cover'
            />
          </div>
          <div className='bg-gray-200  text-gray-900 absolute rotateonhover15text  duration-500 w-full bottom-[20px] h-[150px]'>
            <div
              style={{ fontFamily: "tatris", width: "400" }}
              className='text-gray-900  relative text-left h-full'>
              <h1 className='text-2xl font-bold pl-2 p-1'>{props.name}</h1>
              <h1 className='text-lg font-bold pl-2 text-gray-700 p-1 pt-0'>
                {props.work}
              </h1>
              <h1 className='text-md text-blue-600 font-bold pl-2 p-1 pt-0'>
                {props.Pos}
              </h1>

              <div className='flex gap-2 justify-center  right-4 pl-2 absolute bottom-4'>
                <div className='duration-500 mt-1 active:scale-95  hover:text-gray-400'>
                  <Link href={props.herfTwitter} passHref>
                    <svg width='27' height='27' viewBox='0 0 24 24'>
                      <path
                        className='opacity-50 hover:opacity-30 duration-300'
                        fill='black'
                        d='M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z'></path>
                    </svg>
                  </Link>
                </div>

                <div className='duration-500 active:scale-95 mt-[6px]  hover:text-gray-400'>
                  {" "}
                  <Link href={props.herfLinkedIn} passHref>
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
                  </Link>
                </div>
                <div className='duration-500 active:scale-95  hover:text-gray-400'>
                  {" "}
                  <Link href={props.herfFacebook} passHref>
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
                  </Link>
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
