import React from 'react'
import { useParams } from 'react-router-dom'
import Projectdata from '../data/Projectdata';
import { Link } from 'react-router-dom';
const Details = () => {
    const {id}=useParams();
    const matchdata=Projectdata.filter((data)=>{return data.id==id});
    console.log(matchdata)
  return (
    <div className='w-full h-auto  font-sora px-[30px] md:px-[140px] py-[50px]'>
        <div className=' w-[100%] md:w-[70%] m-auto '>
            <div className='w-[100%]'>
                <img className='w-full  md:h-[400px] rounded-[5px] ' src={matchdata[0].image} alt="" />
            </div>
            <div className='py-[30px]'>
                <div className='flex justify-end items-center gap-[30px]'>
                    <button className='px-[25px] py-[10px] text-[14px] font-[400]
                     rounded-[5px]  text-white bg-[#4b7bec]'>
                        <Link to={matchdata[0].demo} target='_blank'>
                        Demo
                        </Link>
                     </button>
                    <button className='px-[25px] py-[10px] text-[14px] font-[400] 
                    rounded-[5px]  text-white bg-[#4b7bec]'>
                     <Link to={matchdata[0].code} target='_blank'>
                         Source Code
                     </Link>
                    </button>
                </div>
                <h1 className='text-[22px] mt-[20px] md:text-[30px] font-[500] mb-[15px]'>{matchdata[0].title}</h1>
                <p className='text-[15px] text-justify md:text-[16px] leading-[28px] text-neutral-500'>{matchdata[0].description}</p>
                <p className='text-[15px] text-justify md:text-[16px] leading-[28px] text-neutral-500 mt-[10px]'>{matchdata[0].description2}</p>
                 <div className='mt-[20px] flex items-center gap-[20px]'>
                    {
                        matchdata[0].tag.map((tag)=>{
                            return(
                                <div className='px-[10px] py-[5px] rounded-[3px] flex justify-center items-center border-[1px] border-neutral-500'>
                        {tag}
                    </div>
                            )
                        })
                    }
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Details