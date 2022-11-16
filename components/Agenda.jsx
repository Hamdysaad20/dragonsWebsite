import { React,useState } from "react";
import Image from "next/image";

import Lottie from "lottie-react";
import celebrate from "../public/JSON/user/60051-shapes-v1.json";
import celebrate2 from "../public/JSON/user/60061-shapes-gradient";
import Styles from "../styles/Team.module.css";
import { Loading } from "@nextui-org/react";

function SectionOneAnnounce(props) {
     const [select,setSelect] =useState(0)
    return (
    <div
      style={{ fontFamily: "Poppins, sans-serif" }}
      className={
        " max-w-[1400px] justify-center mt-20 mx-auto  text-gray-300 "
      }>
<div class="mx-auto relative flex justify-center ">
<div className="     md:mt-12  text-center text-xl font-bold md:text-3xl lg:text-7xl"> 
  
      
      
      
      
      
    

  </div>
      
</div>
    </div>
  );
}

export default SectionOneAnnounce;
