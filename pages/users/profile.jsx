import React from 'react'
import Header from './../../components/profile/Header';
import NoSSRCompParent from '../../components/NoSSRCompParent';

// info area
// user act
// 


function profile() {
  return (
  <div className="pt-20 pb-40 max-w-[1400px] h-full flex mx-auto justify-center ">
    
 <div className="w-full h-full">
  <NoSSRCompParent>
    
 <Header/>
 </NoSSRCompParent>
 </div>
  </div>
    )
}

export default profile