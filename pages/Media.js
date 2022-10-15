import React from "react";
import Styles from "../styles/Team.module.css";
import Lottie from "lottie-react";
import hand from "../public/JSON/media.json";
function Media() {
  return (
    <div className='pt-20 text-center  relative flex justify-center mx-auto flex-col max-w-[1400px]'>
      <div class='grid mt-12 place-items-center text-xl font-bold md:text-3xl lg:text-7xl'>
        <div className=' max-w-[500px]'>
          <Lottie animationData={hand} />
        </div>

        <p class={`${"z-20"}${Styles.pHeaderTeam}`}>
          <span class={Styles.SpanHeaderTeam}>
            Media (social media & designs)
          </span>
        </p>
      </div>
      <div className='mt-12 text-xl max-w-5xl justify-center flex mx-auto leading-loose mb-20 text-gray-300'>
        {" "}
        <h1 className={"mx-1 px-1"}>
          ● الميديا دول هتلاقي ديما عندهم حس سينمائي كدا في تصوير الفديوهات و
          ديما الصورة الي بيخدوها غير✨.
          ● فيعتبروا من أهم التيمز الي موجوده في
          أي كوميونتي ، لانها بتبين للناس العظمة المخفية وراء كل التعب والشغل
          الي بيبذله افراد ال الكوميونتي وبيظهر او بيكون مخفى في الكواليس
          . 
         ● وبسبب أن وجودك في مجتمع فني عظيم هيصنع منك شخص عظيم، في انت هتتعلم كل
          تفاصيل التصوير والفيديوهات وكمان أنك تقدر تصور برمو أعلاني بطريقة
          احترافية + ازاى تصنع بوست كويس صوره مناسبه مع كلام متهندل ويشد اى حد
          يقراء البوست وازاى تدير صفحات السوشيل بشكل كويس
          ● هتتعلم ازاي بقا تعدل
          علي الصور بتاعتك لان %70 من جمال الصورة من جمال تعديلك عليها وأكيد مش
          هننسي الفيديوهات علي برامج مختلفة.  
          ده غير انك كمان هتتعلم فن
          التصميم اللى ضرورى وبيخدم الميديا بشكل كبير ● 
          التصميم باختصار هو :
          .... الي بيرسم شكل أي كيان في عيون الناس بداية من الشعار مرورا بكل
          التفاصيل الي بتترسخ في هيكلة الكيان. ●
          عشان تبدأ أي مجال مش ضروري تكون
          موهوب لان أي مهارة تقدر تكتسبها بالممارسة زي التصميم كدا؛ لكن لازم
          يكون عندك صبر وشغف بكل ما هو مرئي وانك تعرف الاساسيات والادوات الي
          هتستعملها
          . ● التصميم ليه مبادئ منها: Unity, Balance, Dominance,
          Hierarchy.
          ● أكيد محتاج برامج تشتغل عليها أفضلهم: Adobe Photoshop,
          Adobe Illustrator.
        </h1>
      </div>
    </div>
  );
}

export default Media;
