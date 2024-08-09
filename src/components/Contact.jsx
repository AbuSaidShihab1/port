import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { SlPhone } from "react-icons/sl";
import { MdOutlineMailOutline } from "react-icons/md";
const Contact = () => {
  return (
    <div className='w-[100%] md:w-[80%] m-auto font-sora h-auto px-[40px] md:px-[100px] py-[30px] md:py-[60px] mb-[50px]'>
        <div className="service-text pb-[30px] md:w-[50%] flex justify-center items-center flex-col text-center m-auto">
      <h1 className='text-[25px] md:text-[35px] font-[600] mb-[10px]'>Get in Touch</h1>
      <div className='w-[100px] bg-[#bcbcbc] h-[3px] rounded-[2px] m-auto'></div>
      <div className='w-[60px] mt-[6px] bg-[#bcbcbc] h-[3px] rounded-[2px] m-auto'></div>
    </div>
    {/* ---------------form--------------------- */}
    <div className="mainform">
        <div className="formup text-center  flex justify-between gap-[10px] flex-wrap items-center px-0 md:px-[30px] py-[20px]">
            <div className="upbox md:w-auto w-[45%] flex md:justify-center flex-col md:items-center gap-[20px]">
            <div className='w-[40px] h-[40px] m-auto md:w-[60px] md:h-[60px] flex justify-center items-center bg-[#7371f9] rounded-full'>
                <MdLocationOn color='white' className="text-[20px] md:text-[25px] "/>
            </div>
            <div className='w-auto'>
                <h1 className='text-[18px] md:text-[25px] font-[600]'>Address</h1>
                <p className='mt-[5px] text-[#6c757d] text-[14px] md:text-[18px]'>Bangladesh</p>
            </div>
            </div>
            <div className="upbox flex md:w-auto w-[45%]  md:justify-center flex-col md:items-center gap-[20px]">
            <div  className='w-[40px] h-[40px] m-auto md:w-[60px] md:h-[60px] flex justify-center items-center bg-[#7371f9] rounded-full'>
                <SlPhone color='white' className="text-[20px] md:text-[25px] "/>
            </div>
            <div>
                <h1 className='text-[18px] md:text-[25px] font-[600] text-center'>Phone</h1>
                <p className='mt-[5px] text-[#6c757d] text-[14px] md:text-[18px]'>+8801688494104</p>
            </div>
            </div>
            <div className="upbox md:w-auto  w-[45%] mt-[15px] md:mt-0 flex justify-center flex-col md:items-center gap-[20px]">
            <div className='w-[40px] h-[40px] m-auto md:w-[60px] md:h-[60px] flex justify-center items-center bg-[#7371f9] rounded-full'>
                <MdOutlineMailOutline color='white'className="text-[20px] md:text-[25px] "/>
            </div>
            <div>
                <h1 className='text-[18px] md:text-[25px] font-[600] text-center'>Email</h1>
                <p className='mt-[5px] text-[#6c757d] text-[14px] md:text-[18px]'>shihabmoni15@gmail.com</p>
            </div>
            </div>
        </div>
        {/* form */}
        <form action=""className='w-full h-auto mt-[30px] '>
            <input type="text"placeholder='Enter Name'className='w-full h-[50px] md:h-[60px] mb-[20px] px-[10px] border-[1px] bg-none rounded-[5px] border-[#ced4da]'required /><br/>
            <input type="text"placeholder='Enter Email'className='w-full  h-[50px] md:h-[60px] mb-[20px] px-[10px] border-[1px] bg-none rounded-[5px] border-[#ced4da]'required /><br/>
            <textarea className='w-full h-[150px] md:h-[200px] p-[10px] border-[1px] bg-none rounded-[5px] border-[#ced4da]' name="message" id="message"placeholder='Enter Your Message...'></textarea>
            <button className='mt-[20px] px-[30px] py-[15px] bg-[#7371f9] text-white text-[14px] md:text-[18px]'>Send Message</button>
        </form>
        {/* form */}
    </div>
    {/* ---------------form--------------------- */}
    </div>
  )
}

export default Contact