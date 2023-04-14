import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className=' z-[60]  bottom-0 w-full bg-gray-900 font-sans font-semibold duration-500 hover:text-red-500 justify-center text-center h-12 pt-2 text-gray-300'>
      <Link
        style={{ fontFamily: "Poppins-Bold", width: "400" }}
        href='/'
        passHref
        className='text-xs sm:text-md text-white duration-500 hover:text-red-500'>
        Dragons © - 2022 All Rights Reserved
      </Link>
    </footer>
  );
}

export default Footer;
