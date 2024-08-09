import React from 'react'
import design1 from "../assets/design1.png";
import design2 from "../assets/design2.png";
import figma from "../assets/figma.png";

const Servicecontent = () => {
  return (
    <div className='h-auto px-[40px] md:px-[140px] py-[40px] md:py-[60px] w-full '>
    <div className="service-text pb-[30px] w-[100%] md:w-[50%] text-center m-auto">
      <h1 className='text-[25px] md:text-[35px] font-[600] mb-[10px]'>My Services</h1>
      <p className='text-[15px] md:text-[17px] text-[#495461] leading-[25px]'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
    </div>
    {/* service main section */}
     <div className='w-full h-auto py-[30px] flex flex-col md:flex-row justify-center items-center gap-[30px] md:gap-[50px]'>
       <div className='border-[1px] border-bordercolor p-[12px] md:p-[30px] w-[100%] md:w-[30%] text-center'>
           <div>
            <img className='w-[100px] m-auto mb-[15px]' src={design1} alt="" />
           </div>
           <h1 className='text-[20px] font-[600] mb-[10px]'>Web Design</h1>
           <p className='text-[16px] text-justify'>I craft beautiful and user-friendly websites using HTML, CSS, Tailwind CSS, and JavaScript.I design websites that not only look amazing but also provide a seamless user experience. I use many tools for creating intuitive and engaging interfaces with responsive design.Expert in crafting responsive designs for optimal user experience across devices.Transform your brand online with modern web design.Let's bring your vision to life!</p>
           
       </div>

       <div className='border-[1px] border-bordercolor p-[12px] md:p-[30px] w-[100%] md:w-[30%] text-center'>
           <div>
            <img className='w-[100px] m-auto mb-[15px]' src={design2} alt="" />
           </div>
           <h1 className='text-[20px] font-[600] mb-[10px]'>Web Development</h1>
           <p className='text-[16px] text-justify'>Experienced full-stack developer proficient in designing, developing, and deploying complex web applications. With expertise in both front-end and back-end technologies.I design and develop beautiful, functional, and data-driven web applications using HTML, CSS, JS, Tailwind CSS, Node.js, React.js, and MongoDB.Transform your ideas into digital reality. I deliver high-quality solutions. Let's create something extraordinary together.</p>
       </div>

       <div className='border-[1px] border-bordercolor p-[12px] md:p-[30px] w-[100%] md:w-[30%] text-center'>
           <div>
            <img className='w-[100px] m-auto mb-[15px]' src={figma} alt="" />
           </div>
           <h1 className='text-[20px] font-[600] mb-[10px]'>Figma</h1>
           <p className='text-[16px] text-justify'> A Full-Stack Web Developer & Figma Design Expert
           I'm here to bridge the gap between your imagination and a thriving online presence. As a skilled full-stack web developer, I possess a deep understanding of both front-end and back-end technologies, allowing me to craft powerful and user-friendly web applications.Beyond development, I leverage Figma to meticulously design the user experience (UX) of your website.</p>
       </div>
     </div>
    {/* service main section */}
  </div>
  )
}

export default Servicecontent