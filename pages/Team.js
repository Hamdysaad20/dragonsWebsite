import React from "react";
import CardTeam from "../components/CardTeam";
function Team() {
  return (
    <div className='pt-20'>
      <div className='w-full flex-wrap gap-2 max-w-[1400px] flex mx-auto justify-center '>
        <CardTeam
          herfFacebook='https://www.facebook.com/profile.php?id=100086806926973'
          herfTwitter='https://www.facebook.com/profile.php?id=100086806926973'
          name='Hamdy Saad'
          work='Sr.Frontend Engineer'
          image='/images/1.jpg'
        />
      </div>
    </div>
  );
}

export default Team;
