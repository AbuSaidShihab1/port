import React, { useEffect } from 'react'
import Rightimage from "../assets/right.png"
import { TypeAnimation } from 'react-type-animation';
import Aboutcontent from '../components/Aboutcontent';
import Servicecontent from '../components/Servicecontent';
import Resume from '../components/Myresume';
import Projects from '../components/Projects';
import { LuDownload } from "react-icons/lu";
import Review from '../components/Review';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import Blogs from '../components/Blogs';
import Contact from '../components/Contact';
import atom from "../assets/atom.png"
import atom2 from "../assets/atom2.png"
import cube from "../assets/cube.png"
import cube2 from "../assets/cube2.png"

export const Home = () => {
  return (
    <div className='font-sora scroll-smooth'>
      
      <div className="hero relative w-full gap-[30px] h-[88vh] flex justify-between items-center px-[30px] py-[40px] md:flex-row flex-col-reverse md:px-[140px] md:py-[20px]  ">
        <div className='absolute top-[10%] left-[10%] '>
        <img src={atom} alt=""className='w-[50px] animate-spin transition duration-75' />
      </div>
      <div className='absolute top-[50%] right-[3%] '>
        <img src={atom2} alt=""className='w-[50px] animate-spin transition duration-75' />
      </div>
      <div className='absolute bottom-[10%] right-[60%] '>
        <img src={cube} alt=""className='w-[30px] animate-spin transition duration-75' />
      </div>
      <div className='absolute top-[10%] right-[30%] '>
        <img src={cube2} alt=""className='w-[30px] animate-ping transition duration-75' />
      </div>
          <div className="left">
            <h4 className='md:text-[30px] text-[22px] mb-[2px] font-sora font-[600] text-[#222] '>Hi I'm</h4>
            <h1 className='md:text-[50px] text-[25px] font-[500]'><span className='text-[#111a24] font-sora font-[600]'>Abu Said Shihab</span></h1>
            <h1 className='font-[500] md:text-[30px] text-[20px] mb-[15px] text-[#222]'>
              I am a <span></span>
               <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Web Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Designer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
       
              </h1>
            <div className="btn flex gap-[20px] mt-[20px] md:mt-[40px] md:flex-row flex-wrap">
              {/* <button className='border-[1px] text-[15px] border-[#111a24] px-[10px] py-[5px] rounded-[25px]'>View Project</button> */}
              <button className='text-[14px] w-full md:w-auto md:text-[15px] bg-[#8054ff] text-white px-[20px] py-[15px]  md:px-[30px] md:py-[15px] rounded-[25px] flex justify-center items-center gap-[10px] '>Download CV <LuDownload size={20}/></button>
              <div className="btngroup mt-[15px] md:mt-0 w-[100%] md:w-auto flex justify-center items-center gap-[15px] ">
                <button className='p-[13px] border-[1px] rounded-full border-[#e6e6e6] text-color3'onClick={()=>{window.open("https://www.facebook.com/profile.php?id=100084654139671")}}><FaFacebookF className='text-[20px] md:text[25px]'/></button>
                <button className='p-[13px] border-[1px]  rounded-full border-[#e6e6e6] text-color3'><FaInstagram className='text-[20px] md:text[25px]'/></button>
                <button className='p-[13px] border-[1px]  rounded-full border-[#e6e6e6] text-color3'onClick={()=>window.open("https://youtube.com/@programmingperson?si=6RuxIDSh_HwnjhmN")}><IoLogoYoutube className='text-[20px] md:text[25px]'/></button>
              </div>
            </div>
          </div>
          <div className="right w-full md:w-[45%]">
            <img src={Rightimage} className=' md:w-[100%]  w-[70%] md:m-0 m-auto ' alt="" />
          </div>
      </div>
      {/* about */}
        <Aboutcontent/>
      {/* about */}
      {/* ---------------service section----------------- */}
     <Servicecontent/>
      {/* ---------------service section----------------- */}
      {/* ------------------skill content--------------- */}
       <Resume/>
      {/* ------------------skill content--------------- */}
      {/* ----------------projects----------------- */}
      <Projects/>
      {/* ----------------projects----------------- */}
      {/* -----------------review section-------------- */}
      <Review/>
      {/* --------------------review section------------- */}
      {/* --------------blog section----------------- */}
       <Blogs/>
      {/* --------------blog section----------------- */}
      {/* ----------------contact section--------------- */}
      <Contact/>
      {/* ----------------contact section--------------- */}
    </div>
  )
}
