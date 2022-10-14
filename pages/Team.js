import React from "react";
import CardTeam from "../components/CardTeam";
import { motion } from "framer-motion";

function Team() {
  return (
    <div className='pt-20 h-[3000px]'>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={{
          hidden: {
            scale: 1,
            opacity: 0.0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.1,
            },
          },
        }}>
        <div className='w-full flex-wrap gap-2 max-w-[1400px] flex mx-auto justify-center '>
          <CardTeam
            herfFacebook='https://www.facebook.com/hamdysaad266/'
            herfTwitter='https://www.facebook.com/profile.php?id=100086806926973'
            name='Hamdy Saad'
            work='Sr.Frontend Engineer'
            image='/images/1.jpg'
            Pos="Head of Frontend"
          />
          <CardTeam
            herfFacebook='https://www.facebook.com/profile.php?id=100010052953257'
            herfTwitter='https://www.facebook.com/profile.php?id=100086806926973'
            name='Hatem Ali'
            work='Frontend Engineer'
            image='/images/2.png'
            Pos="CTO"
          />
          <CardTeam
            herfFacebook='https://www.facebook.com/profile.php?id=100012624398938'
            herfTwitter='https://www.facebook.com/profile.php?id=100086806926973'
            name='Salah Mohamed'
            work='Backend Engineer'
            image='/images/3.png'
            Pos="Head of Java"
          />
        </div>{" "}
      </motion.div>
    </div>
  );
}

export default Team;
