import React from 'react'
const Aboutcontent = () => {
  return (
   <div className='h-auto px-[30px] py-[60px] md:px-[140px] md:py-[60px] w-full font-sora '>
      <div className="about-text pb-[30px]">
          <h1 className='text-center text-[25px] md:text-[35px] font-[600] mb-[10px]'>About Me</h1>
          <div className='w-[100px] bg-[#bcbcbc] h-[3px] rounded-[2px] m-auto'></div>
          <div className='w-[60px] mt-[6px] bg-[#bcbcbc] h-[3px] rounded-[2px] m-auto'></div>
      </div>

      {/* --------------------about section------------------ */}
      <div className="about flex md:justify-center flex-col md:flex-row  md:items-center gap-[50px] md:gap-[100px]">
        <div className="about-box w-[100%] md:w-[45%] ">
            <h1 className='text-[20px] md:text-[25px] font-[600] mb-[15px] text-[#222]'>Web Developer</h1>
            <p className='text-[17px] text-[#495461]  md:text-[17px] leading-[28px]'>I am a dedicated web developer with over two years of experience crafting engaging and functional digital experiences. Proficient in HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, and MongoDB, I excel in building robust full-stack applications using the MERN stack. With a keen eye for design, I leverage Figma to create visually stunning user interfaces. Passionate about creating innovative solutions, I thrive on turning ideas into reality.</p>
            <p className='text-[18px] text-bold mb-[20px]'>Email:shihabmoni15@gmail.com</p>
            <button className='md:px-[35px] py-[15px] px-[28px] text-[16px] md:text-[18px] rounded-[30px] shadow-xl
             text-white bg-[#8054ff] font-[500]'>View Project</button>
        </div>
        {/* about box */}
       <div className='w-full md:w-[45%]'>
       <div className="about-box w-full">
          <div className="skill">
            <h2 className='text-[18px] mt-[15px] font-[500]'>HTML,CSS</h2>
            <div className='w-full h-[15px] mt-[10px]  bg-gray-300 rounded-[25px]'>
              <div className='rounded-l-[25px] w-[90%] h-[100%] relative  bg-gradient-to-r  from-color5 to-color3  '>
                <div className='absolute right-0 top-[-18px] w-[50px] flex justify-center items-center h-[50px] rounded-full bg-[#8054ff] shadow-xl text-white text-[14px]'>
                  90%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-box w-full">
          <div className="skill">
            <h2 className='text-[18px] mt-[10px] font-[500]'>Javascript,TailwindCSS</h2>
            <div className='w-full h-[15px] mt-[10px]  bg-gray-300 rounded-[25px]'>
              <div className='rounded-l-[25px] w-[85%] h-[100%] relative  bg-gradient-to-r  from-color5 to-color3  '>
                <div className='absolute right-0 bg-[#8054ff] shadow-xl text-white text-[14px] top-[-18px] w-[50px] flex justify-center items-center h-[50px] rounded-full '>
                  85%
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-box w-full">
          <div className="skill">
            <h2 className='text-[18px] mt-[10px] font-[500]'>ReactJS</h2>
            <div className='w-full h-[15px] mt-[10px]  bg-gray-300 rounded-[25px]'>
              <div className='rounded-l-[25px] w-[80%] h-[100%] relative  bg-gradient-to-r  from-color5 to-color3  '>
                <div className='absolute right-0 bg-[#8054ff] shadow-xl text-white text-[14px] top-[-18px] w-[50px] flex justify-center items-center h-[50px] rounded-full'>
                  80%
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="about-box w-full">
          <div className="skill">
            <h2 className='text-[18px] mt-[10px] font-[500]'>NodeJS,MongoDB</h2>
            <div className='w-full h-[15px] mt-[10px]  bg-gray-300 rounded-[25px]'>
              <div className='rounded-l-[25px] w-[85%] h-[100%] relative  bg-gradient-to-r  from-color5 to-color3  '>
                <div className='absolute right-0 bg-[#8054ff] shadow-xl text-white text-[14px] top-[-18px] w-[50px] flex justify-center items-center h-[50px] rounded-full '>
                  85%
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="about-box w-full">
          <div className="skill">
            <h2 className='text-[18px] mt-[10px] font-[500]'>Figma</h2>
            <div className='w-full h-[15px] mt-[10px]  bg-gray-300 rounded-[25px]'>
              <div className='rounded-l-[25px] w-[80%] h-[100%] relative  bg-gradient-to-r  from-color5 to-color3  '>
                <div className='absolute right-0 bg-[#8054ff] shadow-xl text-white text-[14px] top-[-18px] w-[50px] flex justify-center items-center h-[50px] rounded-full'>
                  80%
                </div>
              </div>
            </div>
          </div>
        </div>



       </div>
        
        {/* about box */}
      </div>
      {/* --------------------about section------------------ */}
   </div>
  )
}

export default Aboutcontent