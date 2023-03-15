import React from "react";
import NoSSRCompParent from "../../components/NoSSRCompParent";
import TapsH from "../../components/profile/TapsH";
import Userinfo from "../../components/profile/Userinfo";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import user from "../../components/JSON/profile/user";
import Lottie from "lottie-react";
import loadingJSON from "../../public/JSON/load.json";
function Meetings() {
  const ComponentOverView = dynamic(
    () => import("../../components/profile/[profileNav]/Meeting.jsx"),
    {
      loading: () => <Lottie animationData={loadingJSON} />,
    }
  );

  const routerasString = useRouter().pathname;
  const Routercontroler = useRouter();

  let demoData = [
    ["1", "2", "3"],
    ["4", "5"],
  ];

  let OverviewC = (
    <ComponentOverView
      user={user}
      Routercontroler={Routercontroler}
      routerasString={routerasString}
      latest={demoData}
    />
  );

  return (
    <div className='pt-20 pb-40 max-w-[1400px] h-full overflow-hidden flex mx-auto justify-center '>
      <div className='w-full h-full'>
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
        <hr />
      </div>
    </div>
  );
}

export default Meetings;
