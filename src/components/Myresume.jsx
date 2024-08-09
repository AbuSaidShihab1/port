import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
const Myresume = () => {
  return (
    <div className='h-auto px-[30px] py-[20px] md:px-[140px] md:py-[60px] w-full font-sora '>
        <div className="about-text pb-[30px]">
          <h1 className='text-center text-[25px] md:text-[35px] font-[600] mb-[10px]'>Resume</h1>
          <div className='w-[100px] bg-[#bcbcbc] h-[3px] rounded-[2px] m-auto'></div>
          <div className='w-[60px] mt-[6px] bg-[#bcbcbc] h-[3px] rounded-[2px] m-auto'></div>
      </div>
      {/*---------------------------- experiance----------------------- */}
      <div className='flex md:justify-between  flex-col md:flex-row gap-[20px] md:gap-0 items-center'>
      <div className="experiance-box  w-[100%] md:w-[50%]">
            <h1 className='text-[22px] mb-[10px] md:text-[30px] font-bold bg-gradient-to-r from-blue-600  to-indigo-400  text-transparent bg-clip-text'>Education</h1>
            <div className="exp-box min-h-[300px] border-[1px] border-bordercolor p-[20px] relative before:w-[4px] before:bg-gradient-to-b before:from-color2 before:to-color3  before:h-[100%] before:bg-red-50 before:absolute before:top-0 before:left-0  ">
              <h1 className='text-[20px] mb-[5px] font-bold'>HSC</h1>
              <p className='text-[15px] text-[#495461]'>Government Adamjee Nagar MW College / 2023</p>
              <p className='text-[17px]'>Recent graduate of Government Adamjee Nagar MW College, passionate about pursuing a career in Computer Engineering .</p>
            </div>
            <div className="exp-box min-h-[300px] border-[1px] border-bordercolor p-[20px] md:before:w-0 relative before:w-[4px] before:bg-gradient-to-b before:from-color2 before:to-color3  before:h-[100%] before:bg-red-50 before:absolute before:top-0 before:right-0 ">
              <h1 className='text-[20px] mb-[5px] font-bold'>SSC</h1>
              <p className='text-[15px] text-[#495461]'>MW Hight School / 2021</p>
              <p className='text-[17px]'>Equipped with a strong foundation from MW High School, I'm a recent SSC graduate ready for the next chapter!</p>
            </div>

            <div className="exp-box min-h-[300px] border-[1px] border-bordercolor p-[20px] relative before:w-[4px] before:bg-gradient-to-b before:from-color2 before:to-color3  before:h-[100%] before:bg-red-50 before:absolute before:top-0 before:left-0 ">
              <h1 className='text-[20px] mb-[5px] font-bold'>JSC</h1>
              <p className='text-[15px] text-[#495461]'>MW Hight School / 2019</p>
              <p className='text-[17px]'>J.S.C. graduate from MW High School, actively involved in the debate club and passionate about many things.</p>
            </div>

       </div>
       
       <div className="experiance-box w-[100%] md:w-[50%]">
            <h1 className='text-[22px] mb-[10px] md:text-[30px] font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text'>Experiance</h1>
            <div className="exp-box min-h-[300px] border-[1px] border-bordercolor p-[20px] relative before:w-[4px] before:bg-gradient-to-b before:from-color2 before:to-color3  before:h-[100%] before:bg-red-50 before:absolute before:top-0 before:right-0  ">
              <h1 className='text-[20px] mb-[5px] font-bold'>Frontend Developer</h1>
              <p className='text-[15px] text-[#495461]'>2021</p>
              <p className='text-[17px] '>Enthusiastic Frontend Developer with a passion for building user-friendly and visually appealing web applications. Possesses strong foundational knowledge in HTML, CSS, and JavaScript, along with expertise in modern frameworks like ReactJS and Tailwind CSS. Since 2021, I've been crafting dynamic and responsive user interfaces that prioritize both functionality and aesthetics. Eager to leverage my skills and contribute to a collaborative team environment.</p>
            </div>
            <div className="exp-box min-h-[300px] border-[1px] border-bordercolor p-[20px] relative before:w-[4px] before:bg-gradient-to-b before:from-color2 before:to-color3  before:h-[100%] before:bg-red-50 before:absolute before:top-0 before:left-0 ">
              <h1 className='text-[20px] mb-[5px] font-bold'>Backend Developer</h1>
              <p className='text-[15px] text-[#495461]'>2021 - 2022</p>
              <p className='text-[17px]'>Dedicated Backend Developer with a strong foundation in Node.js, Express.js, and MongoDB. Since 2022, I've been crafting robust and scalable backend systems. My expertise lies in designing efficient APIs, database management, and optimizing application performance. Passionate about building reliable and maintainable backend infrastructure.</p>
            </div>

            <div className="exp-box min-h-[300px] border-[1px] border-bordercolor p-[20px] relative before:w-[4px] before:bg-gradient-to-b before:from-color2 before:to-color3  before:h-[100%] before:bg-red-50 before:absolute before:top-0 before:right-0 ">
              <h1 className='text-[20px] mb-[5px] font-bold'>Mearn Stack Developer</h1>
              <p className='text-[15px] text-[#495461]'>2023 - 2024</p>
              <p className='text-[17px]'>Full-Stack Web Developer with a mastery of the MEAN stack (MongoDB, Express.js,React.js, Node.js).  Thriving on the challenge of crafting dynamic and data-driven web applications from the ground up. Since 2023, I've been bringing ideas to life with efficient backend logic, user-friendly interfaces, and a focus on performance.</p>
            </div>

       </div>
       

      </div>
      {/*---------------------------- experiance----------------------- */}
    </div>
  )
}

export default Myresume;