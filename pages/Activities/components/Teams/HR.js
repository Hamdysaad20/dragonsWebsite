import React from "react";
import Styles from "../../../../styles/Team.module.css";
import Lottie from "lottie-react";
import hand from "../../../../public/JSON/hr.json";
function HR() {
  return (
    <div className='pt-20 text-center  relative flex justify-center mx-auto flex-col max-w-[1400px]'>
      <div class='grid mt-12 place-items-center text-xl font-bold md:text-3xl lg:text-7xl'>
        <div className='-mt-[100px] max-w-[500px]'>
          <Lottie animationData={hand} />
        </div>

        <p class={`${"z-20"}${Styles.pHeaderTeam}`}>
          <span class={Styles.SpanHeaderTeam}>Human Resources(HR)</span>
        </p>
      </div>
      <div className='mt-12 text-xl max-w-5xl justify-center flex mx-auto leading-loose mb-20 text-gray-300'>
        {" "}
        <h1 className={"mx-1 px-1"}>
          هو حلقة الوصل بين الموظفين والمنظمة كإدارة وكيان.
          ..........................
           لو ركزنا مع أي شخص
          بيقدم علي أي وظيفة أو نشاط هنلاقي أن اول مرحله اساسيه من مراحل
          الانترفيو وهى ال اتش ار انترفيو و طبعاً بنسمع ساعتها اغرب اسئله ممكن
          نتسألها ومش بنكون فاهمين السؤال بس الاسئله دى مش بتكون من فراغ ...
          الاسئله دى بتكون غرضها انها تقيس حاجات معينه فى شخصية وتفكير الشخص
          اللى متقدم للوظيفه وكمان تحدد هل الشخص لائق بالمكان وطبيعه العمل ولا
          لاء .....
          وده دور تيم ال اتش ار انه يساعدنا فى اننا نختار الشخص المناسب فى
          كل جزء من الكوميونتي ويتابع سلوكيات كل تيم وهل بيبأدى بكفاءه عاليه ولا لا
       
       </h1>
      </div>
    </div>
  );
}

export default HR;
