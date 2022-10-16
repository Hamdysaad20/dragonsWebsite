import React from "react";
import Styles from "../styles/Team.module.css";
import Lottie from "lottie-react";
import hand from "../public/JSON/FE.json";
function frontend() {
  return (
    <div className='pt-20 text-center  relative flex justify-center mx-auto flex-col max-w-[1400px]'>
      <div class='grid mt-12 place-items-center text-xl font-bold md:text-3xl lg:text-7xl'>
        <div className=' max-w-[500px]'>
          <Lottie animationData={hand} />
        </div>

        <p class={`${"z-20"}${Styles.pHeaderTeam}`}>
          <span class={Styles.SpanHeaderTeam}>Frontend</span>
        </p>
      </div>
      <div className='mt-12 text-xl max-w-5xl justify-center flex mx-auto leading-loose mb-20 text-gray-300'>
        {" "}
        <h1 className={"mx-1 px-1"}>
          دور مطور الواجهات الامامية في عالم تطوير المواقع بعد ما بياخد ديزاين الموقع بيبدأ
          يشتغل عليها يعني دا اول حاجة بتاخد بالك منها وبتتفاعل معاها وبتعرف
          منها كل المعلومات الي تفيدك انت كمستخدم، ولكن كمطور دا موضوع تاني خالص
          مش هنسميه موضوع صعب ولكن موضوع شيق محتاج تشتغل علي نفسك عشان تفهمه
          وتدخل فيه 
          وابسط مثال يفهمك كلامنا شايف الموقع اللى انت فيه حاليا
          وبتقرأ الكلام ده منه وكمان ثوانى وهتقدم فى الفورم اللى موجوده عليه دى
          بردوا اهو كل الدزاين والاشكال والالوان دى كلها وحجم الخط ومكان كل
          حاجه موجوده هو المسئول عنها و انها تكون بالشكل ده
          ف باختصار اى حاجه انت شايفها فى الموقع اللى عاملها الشخص المسئول عن الفرونت اند
        </h1>
      </div>
    </div>
  );
}

export default frontend;
