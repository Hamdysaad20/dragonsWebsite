import React from 'react'
import Image from "next/image"
import styles from "../../../styles/founders.module.css";


function foundersCard(props) {
  return (
           <div className='flex justify-center mx-auto flex-col'>
              <div className="h-[280px] w-[250px] rounded-full relative ">
                <Image src="/images/dragskin.jpg" className={`${"  duration-1000 rounded-full "}${styles.animate_spin_cus}`} alt ="" layout='fill'/>
                <Image src="/images/dragskin.jpg" className={`${"  duration-1000 rounded-full "}${styles.animate_spin_cus2}`} alt ="" layout='fill'/>
                    <div className={`${'border-4  border-x-black border-gray-200  overflow-hidden grid place-items-center relative rounded-full h-[250px] w-[250px] '}`}>
                    <Image src={props.image} alt ="" layout='fill'/>
                    </div>
              </div>
                 <div className="grid place-items-center">
                     <h3 className='text-2xl font-bold pl-2 p-1'>{props.name}</h3>
                     <p className=' text-sm text-blue-600 font-bold pl-2 p-1 pt-0'>{props.Pos}</p>
                 </div>
           </div>
  )
}

export default foundersCard

