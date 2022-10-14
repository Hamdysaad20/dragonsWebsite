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
              <h1 className='text-3xl font-bold pl-2 p-1'>{props.name}</h1>
              <h1 className='text-lg font-bold pl-2 p-1 pt-0'>{props.work}</h1>
              <h1 className='text-md text-blue-600 font-bold pl-2 p-1 pt-0'>
                {props.Pos}
              </h1>

              <div className='flex gap-2 justify-center  pl-2 absolute bottom-4'>
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
