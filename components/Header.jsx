import { React, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function Header(props) {
  const [navbarVisibility, setNavbarVisibility] = useState("");
  const [burgerMenu, setBurgerMenu] = useState(false);

  const changenavbg = () => {
    setNavbarVisibility(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", changenavbg);
    return () => window.removeEventListener("scroll", changenavbg);
  });

  const toggler = () => {
    setBurgerMenu(!burgerMenu);
    var x = document.getElementById("togglerDiv");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none ";
    }
  };
  return (
    <div
      className={
        navbarVisibility
          ? "   active z-50  justify-center bglolh fixed backdrop-blur-xl bg-gray-900/60 drop-shadow-lg shadow-gray-900	  w-full "
          : "   z-50  justify-center bglolh fixed backdrop-blur-xl   w-full "
      }>
      <div className='px-4  grid grid-cols-3 py-3 max-w-[1400px] mx-auto  w-full    h-[70px]'>
        <Link href={props.herflogoLink} passHref>
          <div className='mt-2  select-none cursor-pointer '>
            <Image
              className='hover:opacity-50   duration-700'
              src={props.herflogo}
              alt='Dragons'
              height='36'
              width='110'
              loading='eager'
              quality={100}
            />
          </div>
        </Link>
        <div className='lg:flex pt-3 hidden text-stone-100 select-none cursor-pointer  gap-4 justify-center mx-8'>
          <Link href={props.HerfService} passHref>
            <h5 className='duration-500 hover:text-gray-500'>Our Team</h5>
          </Link>

          <Link href={props.HerfContact} passHref>
            <h5 className='duration-500 hover:text-gray-500'>Contact</h5>
          </Link>
        </div>
        <div className='flex pt-2  text-gray-200   gap-4 justify-end mx-8'>
          <div
            onClick={toggler}
            className='block active:bg-slate-600/30 duration-300 rounded-full p-2 lg:hidden absolute  right-7'>
            {" "}
            {burgerMenu ? (
              <svg
                version='1.1'
                id='Capa_1'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                x='0px'
                y='0px'
                width='22px'
                height='22px'
                viewBox='0 0 460.775 460.775'
                style={{ enableBackground: "new 0 0 460.775 460.775" }}
                xmlSpace='preserve'>
                <path
                  style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "rgb(100%,100%,100%)",
                    fillOpacity: 1,
                  }}
                  d='M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
	c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
	c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
	c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
	l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
	c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z'
                />
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
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                viewBox='0 0 24 24'
                width='24px'
                height='24px'>
                <g id='surface38562724'>
                  <path
                    style={{
                      stroke: "none",
                      fillRule: "nonzero",
                      fill: "rgb(100%,100%,100%)",
                      fillOpacity: 1,
                    }}
                    d='M 1.5 3 L 1.5 4.5 L 21 4.5 L 21 3 Z M 1.5 10.5 L 1.5 12 L 21 12 L 21 10.5 Z M 1.5 18 L 1.5 19.5 L 21 19.5 L 21 18 Z M 1.5 18 '
                  />
                </g>
              </svg>
            )}
          </div>
          <div className='relative'>
            <div className=' '>
              <div className='lg:flex  gap-3 hidden '>
                <div className='duration-500 active:scale-95  hover:text-gray-400'>
                  {" "}
                  <Link href={props.herfFacebook} passHref>
                    <svg
                      fill='white'
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

                <button className=' hover:text-white box-decoration-slice shadow-md hover:shadow-red-500/40    focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 duration-300 focus:ring-offset-slate-800  font-bold h-9 px-6 rounded-lg w-full flex items-center text-gray-900 justify-center sm:w-auto bg-gray-200  hover:bg-red-400'>
                  <Link href={props.HerfDash} passHref>
                    <h4 className='m-auto font-bold text-gray-900 hover:text-gray-900'>
                      Join Us
                    </h4>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id='togglerDiv'
        className=' absolute TogglerDisplay lg:hidden uppercase h-screen lg:h-0 right-0 rounded-b-xl  max-w-[600px]  bg-gray-900  w-full'>
        <div className=' select-none mx-12  cursor-pointer  m-3 text-center lg:hidden'>
          <Link className='text-gray-300' href={props.HerfService} passHref>
            <div className='  hover:bg-gray-800/40 duration-300 py-2 text-xl font-semibold text-gray-300 rounded-xl'>
              Our Team
            </div>
          </Link>
        </div>

        <div className=' select-none mx-12 cursor-pointer  m-3 mb-5 text-center lg:hidden'>
          <Link className='text-gray-300' href={props.HerfContact} passHref>
            <div className='  hover:bg-gray-800/40 duration-300  py-2  text-xl font-semibold text-gray-300 rounded-xl'>
              Contact
            </div>
          </Link>
        </div>
        <div className=' select-none mx-12 cursor-pointer  m-3 text-center lg:hidden'>
          <Link className='text-gray-300' href={props.HerfDash} passHref>
            <div className='bg-gray-300 justify-center flex  hover:bg-red-400 duration-300 pt-2 text-xl font-semibold text-gray-900 rounded-xl'>
              <span>Join Us</span>
            </div>
          </Link>
        </div>
        <div className=' select-none justify-content justify-center   grid grid-cols-2 gap-2 mx-12 cursor-pointer  m-3 text-center lg:hidden'></div>
      </div>
    </div>
  );
}

export default Header;
