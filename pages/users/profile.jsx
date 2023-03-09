import React from 'react'
import Header from '../../components/profile/Header';
import NoSSRCompParent from '../../components/NoSSRCompParent';
import { useRouter } from 'next/router';

// info area
// user act
// 


function Profile() {

  const routerasString = useRouter().pathname;
  const Routercontroler= useRouter();

  return (
  <div className="pt-20 pb-40 max-w-[1400px] h-full overflow-hidden flex mx-auto justify-center ">
    
 <div className="w-full h-full">
  <NoSSRCompParent>
    
 <Header  routerasString={routerasString} Routercontroler={Routercontroler}/>
 </NoSSRCompParent>
 <hr/>
 </div>
 
  </div>
    )
}

export default Profile