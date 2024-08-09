import React from 'react'
import { FiLink } from "react-icons/fi";
import {Link, NavLink} from "react-router-dom"
import { FaGithub } from "react-icons/fa6";
import project1 from "../assets/project1.png"
import Projectdata from '../data/Projectdata';
const Projects = () => {
  return (
    <div className='font-sora px-[40px] md:px-[140px] py-[30px] md:py-[60px]'>
        <div className="service-text pb-[15px] md:pb-[30px] w-[100%] md:w-[50%] text-center m-auto">
      <h1 className='text-[25px] md:text-[35px] font-[600] mb-[10px]'>Recent Projects</h1>
    </div>
    {/* ------------------my projects--------------------- */}
     <div className="projects">
        {/* <div className="project-filter flex justify-center items-center h-auto m-auto ">
          <ul className='flex justify-center items-center gap-[15px] md:gap-[30px] md:px-[20px] py-[10px] rounded-[25px] '>
            <li className='text-[14px] md:text-[18px]  cursor-pointer border-b-[2px] border-[#6244C5] text-[#6244C5] px-[18px] py-[5px]  '>All</li>
            <li className='text-[14px] md:text-[18px] '>React</li>
            <li className='text-[14px] md:text-[18px] '>NodeJS</li>
            <li className='text-[14px] md:text-[18px] '>Mearn Stack</li>
          </ul>
        </div> */}
        {/* --------------------all project box--------------------------- */}
          <div className="allproject flex md:justify-between gap-[20px] md:gap-[30px] items-center flex-wrap pt-[25px] md:pt-[50px]">
            {
              Projectdata.map((data)=>{
                return(
                  <div className="projectbox border-[1px] min-h-[520px] border-bordercolor hover:shadow-sm rounded-[5px] w-[100%] md:w-[31%] p-[10px]">
              <NavLink to={`/${data.id}`}>
              <div className="projectimg mb-[20px]">
                <img className='w-full h-[250px] rounded-[10px]' src={data.image} alt="" />
              </div>
              </NavLink>
              <div className="project-text">
              <NavLink to={`/${data.id}`}>
              <h2 className='text-[20px] hover:underline font-[500]'>{data.title}</h2>
              </NavLink>
              <NavLink to={`/${data.id}`}>
              {
                data.description.length >150 ? <h1>{data.description.slice(0,150)}...</h1>:<p className='mt-[5px] text-[#495461]'>{data.description}</p>
              }
              </NavLink>
               <div className='flex items-center gap-[20px] mt-[15px]'>
                     <div className=''>
                       <Link to={data.demo} target='blank' className='px-[15px] py-[10px] rounded-[5px] flex justify-center items-center gap-[10px] border-[1px] border-[#EEEEEE] text-black'>
                       <FiLink size={20}/>
                       View
                       </Link>
                     </div>
                     <div className=''>
                       <Link className='px-[15px] py-[10px] rounded-[5px] flex justify-center items-center gap-[10px] border-[1px] border-[#EEEEEE] text-black' to={data.code} target='_blank'>
                       <FaGithub size={20}/>
                       Code
                       </Link>
                     </div>

               </div>
              </div>
            </div>
                )
              })
            }

          </div>
        {/* --------------------------all project box-------------------------- */}
     </div>
    {/* ------------------my projects--------------------- */}
    </div>
  )
}

export default Projects