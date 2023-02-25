import Image from "next/image";
import star from "../../../public/JSON/star/97585-star.json";
import hastage from "../../../public/JSON/user/9897-hashtag-animation.json";
const Highlights = [
    {
        id: 4,
        "data": "1",
        text: "",
        teamico : (
            <Image alt="dragons" src="/images/dragonsEG.png" width={50} height={50} />
        ),
    
    },
    {
    id: 1,
    data: "5",
    text: "Stars",
    animation: star,
  },
  {
    id: 2,
    data: "1",
    text: "Team Rank",
    animation: hastage,
  },
  {
    id: 3,
    data: "Cyber Dragons",
    text: "Team",
    teamico: (
        
      <svg width={50} height={50} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M15 1.25C14.5858 1.25 14.25 1.58579 14.25 2C14.25 2.41421 14.5858 2.75 15 2.75C16.7949 2.75 18.25 4.20507 18.25 6C18.25 7.79493 16.7949 9.25 15 9.25C14.5858 9.25 14.25 9.58579 14.25 10C14.25 10.4142 14.5858 10.75 15 10.75C17.6234 10.75 19.75 8.62335 19.75 6C19.75 3.37665 17.6234 1.25 15 1.25ZM17 13.25C16.5858 13.25 16.25 13.5858 16.25 14C16.25 14.4142 16.5858 14.75 17 14.75H18.2C20.4368 14.75 22.25 16.5632 22.25 18.8C22.25 20.1531 21.1531 21.25 19.8 21.25H17C16.5858 21.25 16.25 21.5858 16.25 22C16.25 22.4142 16.5858 22.75 17 22.75H19.8C21.9815 22.75 23.75 20.9815 23.75 18.8C23.75 15.7348 21.2652 13.25 18.2 13.25H17ZM3.25 6C3.25 3.37665 5.37665 1.25 8 1.25C10.6234 1.25 12.75 3.37665 12.75 6C12.75 8.62335 10.6234 10.75 8 10.75C5.37665 10.75 3.25 8.62335 3.25 6ZM5.8 13.25C2.73482 13.25 0.25 15.7348 0.25 18.8C0.25 20.9815 2.01848 22.75 4.2 22.75H11.8C13.9815 22.75 15.75 20.9815 15.75 18.8C15.75 15.7348 13.2652 13.25 10.2 13.25H5.8Z" fill="#E8EAED" />
    </svg>

    ),
  },
 
];
export default Highlights;
