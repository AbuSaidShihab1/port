import React from 'react'
import { FaPlay } from "react-icons/fa";
const Review = () => {
  return (
    <div className='w-[100%] md:w-[80%] m-auto font-sora'>
        <div className='w-full  h-[400px] md:h-[500px] text-center md:rounded-[10px] bg-[url("https://maraviyainfotech.com/projects/biox-html/multipage/assets/img/hire/bg.png")] bg-no-repeat bg-cover bg-center flex justify-center items-center px-[40px] md:px-[140px] py-[30px] bg-[#f6f3fc]'>
            <div className="text">
            <h1 className='text-[20px] md:text-[40px] text-white mb-[15px] font-bold'>Let’s Create Something <br /> Creative Together</h1>
            <p className='text-white text-[15px] md:text-[17px] mb-[20px]'>We can’t wait to hear from making something beautiful and new!</p>
            <div className='w-[100px] h-[100px] transition duration-700  animate-ping rounded-full bg-reviewcolor flex justify-center items-center  m-auto'>
                <div className='w-[80px] h-[80px]  bg-white rounded-full flex justify-center items-center  '>
                  <FaPlay color='black' size={25}/>
                </div>
            </div>
            </div>
    </div>
    </div>
  )
}

export default Review