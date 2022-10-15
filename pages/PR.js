import React from "react";
import Styles from "../styles/Team.module.css";
import Lottie from "lottie-react";
import hand from "../public/JSON/pr.json";
function PR() {
  return (
    <div className='pt-20 text-center  relative flex justify-center mx-auto flex-col max-w-[1400px]'>
      <div class='grid mt-12 place-items-center text-xl font-bold md:text-3xl lg:text-7xl'>
        <div className=' max-w-[500px]'>
          <Lottie animationData={hand} />
        </div>

        <p class={`${"z-20"}${Styles.pHeaderTeam}`}>
          <span class={Styles.SpanHeaderTeam}>PR (Public relations)</span>
        </p>
      </div>
      <div className='mt-12 text-xl max-w-5xl justify-center flex mx-auto leading-loose mb-20 text-gray-300'>
        {" "}
        <h1 className={"mx-1 px-1"}>
           اي كوميونتي أو شركة موجودة في اي مكان بتقدم حاجة من الاتنين منتج أو
          خدمة وبالتالي لازم يكون ليها جمهور بيتعامل معها عشان تقدم ليهم الخدمة
          أو المنتج .
          عشان كدا لازم يكون في حلقة وصل بين الجمهور والكيان دا سواء
          كان الجمهور دا داخلي او خارجي، أيوا احنا بنتكلم عن العلاقات العامة 
          ................................................
          العلاقات العامة هما واجهه أي مؤسسة هما الي بيتعاملوا مع الجهات الخارجيه ويعرفوهم
          بينا و بنشاطنا و يوصلونا ببعض وكمان مسئولين بشكل كبيرعن تنظيم اى ندوه
          او اى نشاط هيكون بين الكيان والطلاب
        </h1>
      </div>
    </div>
  );
}

export default PR;
