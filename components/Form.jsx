import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";

const ContactUs = () => {
  const router = useRouter();

  const form = useRef();
  const [nameRing, setnameRing] = useState(false);
  const [emailRing, setemailRing] = useState(false);
  const [messageRing, setmessageRing] = useState(false);
  const [number, setNumber] = useState(false);
  const [ID, setID] = useState(false);

  const [count, setCount] = useState(0);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4irr0gp",
        "template_znl9859",
        form.current,
        "icWEtEN3OYScLYf9J"
      )
      .then(
        (result) => {
          console.log(result.text);
          router.push("/Done");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className='flex  flex-col my-12  items-center justify-center'>
        <h4
          style={{ fontFamily: "Poppins-Bold", width: "400" }}
          className='px-1 pb-2 text-gray-400  text-center  md:text-xl lg:text-2xl text-lg font-bold'>
          Simple Information To Get Started😊
        </h4>
        <div
          style={{ fontFamily: "Poppins-Bold", width: "400" }}
          className='flex flex-col lg:w-[500px] min-w-[300px] text-white rounded-md bg-gray-800/50 p-2 items-center justify-center'>
          <div className='w-full'>
            <p className='text-left ml-1 my-1'>Name*</p>
            <input
              onClick={() => {
                setnameRing(!nameRing);
                setemailRing(false);
                setmessageRing(false);
                setNumber(false);
                setID(false);
              }}
              className={`
              w-full  rounded-md h-12 px-2 sm:px-2 py-1 text-gray-400 bg-gray-700/20
                            ${nameRing ? "ring-2 duration-100" : ""}`}
              label='Name'
              name='user_name'
              type='text'
              placeholder='Full Name'
              maxLength='20'
              required
            />
          </div>
          <div className='w-full '>
            <p className='text-left ml-1 my-1'>Email* </p>

            <input
              onClick={() => {
                setemailRing(!emailRing);
                setnameRing(false);
                setmessageRing(false);
                setNumber(false);
                setID(false);
              }}
              className={`
              w-full  rounded-md h-12 px-2 sm:px-2 py-1 text-gray-400 bg-gray-700/20                          ${
                emailRing ? "ring-2 duration-100" : ""
              }`}
              label='Email'
              name='user_email'
              type='email'
              maxLength='100'
              placeholder='Email'
              required
            />
          </div>
          <div className='w-full '>
            <p className='text-left ml-1 my-1'>Number (whatsapp)*</p>

            <input
              onClick={() => {
                setemailRing(false);
                setNumber(!number);
                setnameRing(false);
                setmessageRing(false);
                setID(false);
              }}
              className={`
              w-full  rounded-md h-12 px-2 sm:px-2 py-1 text-gray-400 bg-gray-700/20                          ${
                number ? "ring-2 duration-100" : ""
              }`}
              label='Number'
              name='user_Number'
              type='tel'
              maxLength='11'
              placeholder='number'
              required
            />
          </div>
          <div className='w-full '>
            <p className='text-left ml-1 my-1'>University ID*</p>

            <input
              onClick={() => {
                setemailRing(false);
                setNumber(false);
                setnameRing(false);
                setmessageRing(false);
                setID(!ID);
              }}
              className={`
              w-full  rounded-md h-12 px-2 sm:px-2 py-1 text-gray-400 bg-gray-700/20                          ${
                ID ? "ring-2 duration-100" : ""
              }`}
              label='Number'
              name='user_ID'
              type='tel'
              maxLength='7'
              placeholder='number'
              required
            />
          </div>
          <div className=' w-full m-1 mt-2 select-none rounded-md text-center  px-2 gap-1 bg-gray-700/20'>
            {" "}
            <p className='my-2 font-semibold'>Choose a Team :*</p>
            <div className='flex md:flex-none flex-wrap w-full relative mb-2 text-sm rounded-md  px-2 gap-1 bg-gray-700/20'>
              <div className='hover:bg-yellow-400/20 cursor-pointer select-none active:scale-95 duration-300 px-1 rounded-md my-1  justify-center mx-auto gap-1 flex '>
                {" "}
                <label className='cursor-pointer font-semibold' htmlFor='HR'>
                  {" "}
                  <input
                    className='mt-[5px]'
                    type='radio'
                    name='team'
                    id='HR'
                    value='HR'
                    required
                  />{" "}
                  HR(Human Resources)
                </label>
              </div>

              <div className='hover:bg-yellow-400/20 cursor-pointer select-none active:scale-95 duration-300 px-1 rounded-md my-1  justify-center mx-auto gap-1 flex '>
                {" "}
                <label className='cursor-pointer font-semibold' htmlFor='PR'>
                  {" "}
                  <input
                    className='mt-[5px]'
                    type='radio'
                    id='PR'
                    name='team'
                    value='PR'
                  />{" "}
                  PR (Public relations)
                </label>
              </div>

              <div className='hover:bg-yellow-200/20 cursor-pointer select-none active:scale-95 duration-300 px-1 rounded-md my-1  justify-center mx-auto gap-1 flex '>
                {" "}
                <label className='cursor-pointer font-semibold' htmlFor='Media'>
                  {" "}
                  <input
                    className='mt-[5px]'
                    type='radio'
                    id='Media'
                    name='team'
                    value='Media'
                  />{" "}
                  Media (social media designs)
                </label>
              </div>

              <div className='hover:bg-blue-400/20 cursor-pointer select-none active:scale-95 duration-300 px-1 rounded-md my-1  justify-center mx-auto gap-1 flex '>
                {" "}
                <label className='cursor-pointer font-semibold' htmlFor='Back'>
                  {" "}
                  <input
                    className='mt-[5px]'
                    type='radio'
                    id='Back'
                    name='team'
                    value='Back'
                  />{" "}
                  Back-end(web)
                </label>
              </div>
              <div className='hover:bg-blue-400/20 cursor-pointer select-none active:scale-95 duration-300 px-1 rounded-md my-1  justify-center mx-auto gap-1 flex '>
                {" "}
                <label className='cursor-pointer font-semibold' htmlFor='Java'>
                  {" "}
                  <input
                    className='mt-[5px]'
                    type='radio'
                    id='Java'
                    name='team'
                    value='Java'
                  />{" "}
                  Java + &quot;Spring&quot; Framework
                </label>
              </div>
              <div className='hover:bg-blue-400/20 cursor-pointer select-none active:scale-95 duration-300 px-1 rounded-md my-1  justify-center mx-auto gap-1 flex '>
                {" "}
                <label className='cursor-pointer font-semibold' htmlFor='Front'>
                  {" "}
                  <input
                    className='mt-[5px]'
                    type='radio'
                    id='Front'
                    name='team'
                    value='Front'
                  />{" "}
                  Front-end(web)
                </label>
              </div>
            </div>
          </div>
          <div className='flex md:flex-none flex-wrap w-full relative mb-2 text-sm rounded-md    px-9 gap-1 bg-gray-700/20'>
            <div className='hover:bg-gray-200/20  cursor-pointer select-none active:scale-95 w-full duration-300 px-3 rounded-md my-1  justify-center mx-auto gap-1 flex '>
              {" "}
              <label className='cursor-pointer font-semibold' htmlFor='Head'>
                <input
                  className='mt-[5px]'
                  type='radio'
                  name='position'
                  id='Head'
                  value='Head'
                  required
                />{" "}
                Head
              </label>
            </div>
            <div className='hover:bg-gray-200/20  cursor-pointer select-none active:scale-95 duration-300 px-3 rounded-md my-1  justify-center mx-auto gap-1 flex '>
              {" "}
              <label className='cursor-pointer font-semibold' htmlFor='Vice'>
                <input
                  className='mt-[5px]'
                  type='radio'
                  name='position'
                  id='Vice'
                  value='Vice'
                  required
                />{" "}
                Vice
              </label>
            </div>
            <div className='hover:bg-gray-200/20  cursor-pointer select-none active:scale-95 duration-300 px-3 rounded-md my-1  justify-center mx-auto gap-1 flex '>
              {" "}
              <label className='cursor-pointer font-semibold' htmlFor='Member'>
                <input
                  className='mt-[5px]'
                  type='radio'
                  name='position'
                  id='Member'
                  value='Member'
                  required
                />{" "}
                Member
              </label>
            </div>
          </div>

          <div className=' w-full m-1 mt-2 select-none rounded-md text-center  px-2 gap-1 bg-gray-700/20'>
            {" "}
            <p className='my-2 font-semibold'>Your Level :</p>
            <div className='flex md:flex-none flex-wrap w-full relative mb-2 text-sm rounded-md  px-2 gap-1 bg-gray-700/20'>
              <div className='hover:bg-gray-200/20  cursor-pointer select-none active:scale-95 duration-300 w-12 rounded-md my-1  justify-center mx-auto gap-1 flex '>
                {" "}
                <label className='cursor-pointer font-semibold' htmlFor='one'>
                  <input
                    className='mt-[5px]'
                    type='radio'
                    name='level'
                    id='one'
                    value='one'
                    required
                  />{" "}
                  1
                </label>
              </div>
              <div className='hover:bg-gray-200/20  cursor-pointer select-none active:scale-95 duration-300 w-12 px-1 rounded-md my-1  justify-center mx-auto gap-1 flex '>
                {" "}
                <label className='cursor-pointer font-semibold' htmlFor='two'>
                  <input
                    className='mt-[5px]'
                    type='radio'
                    name='level'
                    id='two'
                    value='two'
                    required
                  />{" "}
                  2
                </label>
              </div>
              <div className='hover:bg-gray-200/20  cursor-pointer select-none active:scale-95 duration-300 px-1 rounded-md my-1 w-12 justify-center mx-auto gap-1 flex '>
                {" "}
                <label className='cursor-pointer font-semibold' htmlFor='three'>
                  <input
                    className='mt-[5px]'
                    type='radio'
                    name='level'
                    id='three'
                    value='three'
                    required
                  />{" "}
                  3
                </label>
              </div>
            </div>
          </div>
          <div className='flex md:flex-none text-center mx-auto justify-center flex-wrap w-full relative mb-2 text-sm rounded-md  px-2 gap-1 bg-gray-700/20'>
            <p className='my-2 font-semibold w-full'>Your field of Study :</p>

            <div className='flex md:flex-none flex-wrap w-full relative mb-2 text-sm rounded-md   px-9 gap-1 bg-gray-700/20'>
              {" "}
              <div className='hover:bg-gray-200/20  cursor-pointer select-none active:scale-95 duration-300 px-3 rounded-md my-1  justify-center mx-auto gap-1 flex '>
                {" "}
                <label className='cursor-pointer font-semibold' htmlFor='BA'>
                  <input
                    className='mt-[5px]'
                    type='radio'
                    name='field'
                    id='BA'
                    value='BA'
                    required
                  />{" "}
                  BA
                </label>
              </div>
              <div className='hover:bg-gray-200/20  cursor-pointer select-none active:scale-95 duration-300 px-3 rounded-md my-1  justify-center mx-auto gap-1 flex '>
                {" "}
                <label className='cursor-pointer font-semibold' htmlFor='IT'>
                  <input
                    className='mt-[5px]'
                    type='radio'
                    name='field'
                    id='IT'
                    value='IT'
                    required
                  />{" "}
                  IT
                </label>
              </div>
            </div>
          </div>
          <div className='w-full overflow-hidden relative'>
            <p className='my-2 font-semibold'>
              Introduce yourself and skills in a few lines (optional) :
            </p>{" "}
            <textarea
              onClick={() => {
                setmessageRing(!messageRing);
                setnameRing(false);
                setemailRing(false);
                setNumber(false);
              }}
              className={`
                          w-full mt-2 z-50 rounded-md min-h-32 h-32  overflow-hidden duration-300 hover:overflow-y-scroll max-h-64 px-2 py-1 text-gray-400 bg-gray-700/20
                          ${messageRing ? "ring-2 duration-100" : ""}`}
              label='Message'
              name='message'
              type='text'
              rowws='5'
              onChange={(e) => {
                setCount(e.target.value.length);
              }}
              maxLength='150'
              placeholder='Message'
            />
            <div className='select-none hover:bg-gray-700 rounded p-1 duration-500 absolute text-gray-300/50 text-xs z-30 bottom-5 right-2'>
              {count}/150
            </div>
          </div>
          <input
            type='submit'
            value='Send'
            className='w-full max-w-[200px] m-2 duration-300 select-none bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-400/90 focus:outline-none focus:shadow-outline'
          />
        </div>
      </form>
    </div>
  );
};
export default ContactUs;
