import React from "react";
import Styles from "../styles/Team.module.css";
import Lottie from "lottie-react";
import hand from "../public/JSON/be.json";
function backend() {
  return (
    <div className='pt-20 text-center  relative flex justify-center mx-auto flex-col max-w-[1400px]'>
      <div class='grid mt-12 place-items-center text-xl font-bold md:text-3xl lg:text-7xl'>
        <div className=' max-w-[500px]'>
          <Lottie animationData={hand} />
        </div>

        <p class={`${"z-20"}${Styles.pHeaderTeam}`}>
          <span class={Styles.SpanHeaderTeam}>Backend</span>
        </p>
      </div>
      <div className='mt-12 text-xl max-w-5xl justify-center flex mx-auto leading-loose mb-20 text-gray-300'>
        {" "}
        <h1 className={"mx-1 px-1"}>
          هو المسئول عن معالجة البيانات وتنفيذ الإجراءات على مواقع الويب. على
          عكس ال Front المتحكم في كل ما يمكنك رؤيته على موقع الويب ، يشارك مطور
          ال Back في تخزين البيانات والأمان والوظائف الأخرى من جانب الخادم التي
          لا يمكنك رؤيتها.
          مثال بردوا عشان كلامنا يكون مفهوم اكتر بردوا
          الموقع اللى انت فيه حاليا وبتقرأ الكلام منه دلوقتى مطور الباك اند هو
          المسئول عن تخزين البيانات ( بيانات كل فرد هيقدم فى الفورم ) وكمان
          مسئول عن تأمين البيانات دى .
          وفى بعض المواقع اللى متواجد فيها( دفع
          الكترونى او تسجيل دخول / انشاء حساب ، او ادمن ومستخدم عادى ) ف هو
          بردوا المسئول عن كل ده سواء داتا او تأمين او تشفير او السيستم اللى
          يربط كل ده وميسمحش ل اى حد معدى كده يدخل يعمل اللى هو عايزه فى الموقع
          بتاعك
          ف اللى نلاحظه ان كل ما الموقع بيكون كبير ومتطلباته كتيره و
          معقده دور مطور الباك  بيكون كبير ويكاد يكون معقد
        </h1>
      </div>
    </div>
  );
}

export default backend;
