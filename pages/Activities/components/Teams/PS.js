import React from "react";
import Styles from "../../../../styles/Team.module.css";
import Lottie from "lottie-react";
import hand from "../../../../public/JSON/ps.json";
function PS() {
  return (
    <div className='pt-20 text-center  relative flex justify-center mx-auto flex-col max-w-[1400px]'>
      <div class='grid mt-12 place-items-center text-xl font-bold md:text-3xl lg:text-7xl'>
        <div className='-mt-[50px]  max-w-[500px]'>
          <Lottie animationData={hand} />
        </div>

        <p class={`${"z-20"}${Styles.pHeaderTeam}`}>
          <span class={Styles.SpanHeaderTeam}>Problem solving</span>
        </p>
      </div>
      <div className='mt-12 text-xl max-w-5xl justify-center flex mx-auto leading-loose mb-20 text-gray-300'>
        {" "}
        <h1 className={"mx-1 px-1"}>
          عمرك وقفت حائر قدام مشكلة وسألت نفسك ازاي تقدر تحل المشكلة دي طب عمرك
          سألت نفسك هو مفهوم البرمجة قائم علي أيه؟ تعالو نجاوب علي السؤالين دول
          مع بعض،البرمجة باختصار بتعتمد اعتماد أساسي علي التفكير المنطقي
          والرياضي والقدرة على حل المشكلات ايوه زى ما بقولك كده البرمجه عباره عن
          حل مشاكل وطريقة حل المشكلات دي موهبة مكتسبة ممكن تتعلمها وتتقنها
          وبعيدا عن المجال البرمجي دي صفة حياتية لازم تكون عند كل واحد فينا.
          وبكدا فهمنا أن برمجة يعني حل المشكلات . 
          والتيم معمول عشان تخطو اولي
          خطواتك مع الحل المشاكل  دا غير اننا هنعمل شراكه مع اقوى تيم
          للتدريب على مستوى فروع الجامعة المصرية للتعلم الالكتروني الاهلية كلها
        </h1>
      </div>
    </div>
  );
}

export default PS;
