import Image from 'next/image'
import React from 'react'

function Userinfo() {
  return (
    <div className='w-full relative rounded-t-2xl h-full bg-gray-800/40 backdrop-blur-lg border-8 border-b-0 border-white'>

        <div className='p-3 flex flex-wrap md:flex-nowrap md:flex-cols  '>


<div className='ml-0 relative flex gap-3 md:flex-col'>

<div className='rounded-3xl bg-blue-600 md:h-64 h-32 w-32 md:w-64'>

</div>


<div  style={{ fontFamily: "Poppins-Bold"}} className='pt-7 md:pt-3 relative'>
    <h1 className='text-2xl md:text-4xl pl-2 select-none text-[#97ba7b]'>User Name</h1>
   <div className='relative'>
   <div className='relative' >
    
    <div className='flex min-w-20 justify-center mx-auto  bg-gray-900/40  md:justify-start  '>
<div className='md:rounded-md flex gap-2  rounded-3xl p-2 px-2  bg-gray-900/40 duration-300  hover:bg-gray-700/40 backdrop-blur-sm'>    <h1 className='text-xl'>@username</h1>
    <Image src='/images/discord.png' className='select-none' width={40} height={10} alt='verified'/></div>
    </div>
   </div>
    </div>

</div>
</div>

<div className='mr-0 w-full mt-5 md:mt-0 md:pt-0 p-3   bg-red-500'>
 <div className="bg-blue-400 h-full mt-3">
  s
 </div>
</div>


        </div>
    </div>
  )
}

export default Userinfo