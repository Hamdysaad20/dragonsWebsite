import React from 'react'
import NoSSRCompParent from '../../components/NoSSRCompParent';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic'
import user from '../../components/JSON/profile/user'; 
import TapsH from '../../components/profile/TapsH';
const ComponentOverView = dynamic(() => import('../../components/profile/[profileNav]/Overview.jsx'))
import Userinfo from '../../components/profile/Userinfo';

function Profile() {
  let demoData =[["1","2","3"],["4","5"]]

  const routerasString = useRouter().pathname;
  const Routercontroler= useRouter();
  const {index}=Routercontroler.query;
  let OverviewC =(<ComponentOverView
    user={user}
    Routercontroler={Routercontroler}
    routerasString={routerasString}
    latest={demoData}
    />)

  return (
    <div className="pt-20 pb-40 max-w-[1400px] h-full overflow-hidden flex mx-auto justify-center ">
    
    <div className="w-full h-full">
     <NoSSRCompParent>
       
     <div className='w-full h-full'>
      <TapsH />

      <Userinfo
        routerasString={routerasString}
        Routercontroler={Routercontroler}
        profileNav={OverviewC}
        latest={demoData}

        ActivitesString='ActivitesStringActivitesStringActivitesString'
      />
    </div>
    </NoSSRCompParent>
    <hr/>
    </div>
    
     </div>

    )
}

export default Profile