import Image from 'next/image'
import React from 'react'

function Userinfo() {
  return (
    <div className='w-full relative rounded-t-2xl h-full bg-gray-800/40 backdrop-blur-lg border-8 border-b-0 border-white'>

        <div className='p-3 flex flex-wrap md:flex-nowrap md:flex-cols  '>


<div className='ml-0 relative'>

<div className='rounded-3xl bg-blue-600 h-64 w-64'>

</div>


<div  style={{ fontFamily: "Poppins-Bold"}} className='pt-2 relative'>
    <h1 className='text-2xl md:text-4xl pl-2 text-[#97ba7b]'>User Name</h1>
   <div className='relative'>
   <div className='relative' >
    <div className='flex gap-2 min-w-20 justify-center mx-auto  rounded-3xl p-2 px-0 bg-gray-900/40 duration-300  hover:bg-gray-700/40 backdrop-blur-sm'>
    <h1 className='text-xl'>@username</h1>
    <Image src='/images/discord.png' width={40} height={10} alt='verified'/>
    </div>
   </div>
    </div>

</div>
</div>

<div className='mr-0 w-full pt-0 md:pt-20  bg-red-500'>
 2   
</div>


        </div>
    </div>
  )
}

export default Userinfo