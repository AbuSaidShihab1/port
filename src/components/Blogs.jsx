import React from 'react'
import { MdDateRange } from "react-icons/md";
import { FiLink } from "react-icons/fi";
import { Link } from 'react-router-dom';
const Blogs = () => {
    return (
        <div className='w-full h-auto px-[40px] md:px-[100px] py-[30px] md:py-[60px]'>
            <div className='w-[100%] md:w-[50%] text-center m-auto'>
                <h1 className='text-[25px] md:text-[35px] font-[600] mb-[10px] '>My Recent Blogs</h1>
                <p className='text-[15px] md:text-[17px] text-[#495461] leading-[25px]'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
            </div>
            {/* --------------------recent blog--------------------------- */}
            <div className='w-full h-auto flex flex-wrap justify-center items-center gap-[40px] py-[30px] md:py-[50px]'>
                <div className='w-[100%] md:w-[28%] h-[340px] rounded-[10px] relative overflow-hidden'>
                    <div>
                        <img className='w-full h-[340px]' src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <div className='w-full h-[100%] flex justify-center items-end '>
                        <div className='absolute top-[20px] left-[10px] px-[15px] py-[5px] text-[14px] text-white rounded-[25px] bg-[#8054ff]'>
                            <h1>Tutorial</h1>
                            </div>  
                        <div className="text absolute bottom-[20px] w-[90%] p-[10px] bg-white rounded-[10px]">
                          <div className='flex justify-between items-center'>
                          <div className='flex gap-[10px] mb-[10px]'>
                                <MdDateRange />
                                <span>26 july 2023</span>
                            </div>
                            <div >
                               <Link className='flex gap-[10px] mb-[10px] px-[15px] py-[5px]  justify-center items-center rounded-[25px] bg-[#8054ff] text-white'>
                               <FiLink />
                               <span>View</span>
                               </Link>
                            </div>
                          </div>
                            <h2 className='text-[20px] font-[500]'>Web Development Guides</h2>
                        </div>
                    </div>
                </div>

                <div className='w-[100%] md:w-[28%] h-[340px] rounded-[10px] relative overflow-hidden'>
                    <div>
                        <img className='w-full h-[100%]' src="https://images.pexels.com/photos/2376728/pexels-photo-2376728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <div className='w-full h-[100%] flex justify-center items-end '>
                        <div className='absolute top-[20px] left-[10px] px-[15px] py-[5px] text-[14px] text-white rounded-[25px] bg-[#8054ff]'>
                            <h1>Tutorial</h1>
                            </div>  
                        <div className="text absolute bottom-[20px] w-[90%] p-[10px] bg-white rounded-[10px]">
                          <div className='flex justify-between items-center'>
                          <div className='flex gap-[10px] mb-[10px]'>
                                <MdDateRange />
                                <span>23 july 2023</span>
                            </div>
                            <div >
                               <Link className='flex gap-[10px] mb-[10px] px-[15px] py-[5px]  justify-center items-center rounded-[25px] bg-[#8054ff] text-white'>
                               <FiLink />
                               <span>View</span>
                               </Link>
                            </div>
                          </div>
                            <h2 className='text-[20px] font-[500]'>App Development Guides</h2>
                        </div>
                    </div>
                </div>


                <div className='w-[100%] md:w-[28%] h-[340px] rounded-[10px] relative overflow-hidden'>
                    <div>
                        <img className='w-full h-[100%]' src="https://images.pexels.com/photos/2808402/pexels-photo-2808402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <div className='w-full h-[100%] flex justify-center items-end '>
                        <div className='absolute top-[20px] left-[10px] px-[15px] py-[5px] text-[14px] text-white rounded-[25px] bg-[#8054ff]'>
                            <h1>Tutorial</h1>
                            </div>  
                        <div className="text absolute bottom-[20px] w-[90%] p-[10px] bg-white rounded-[10px]">
                          <div className='flex justify-between items-center'>
                          <div className='flex gap-[10px] mb-[10px]'>
                                <MdDateRange />
                                <span>23 july 2023</span>
                            </div>
                            <div >
                               <Link className='flex gap-[10px] mb-[10px] px-[15px] py-[5px]  justify-center items-center rounded-[25px] bg-[#8054ff] text-white'>
                               <FiLink />
                               <span>View</span>
                               </Link>
                            </div>
                          </div>
                            <h2 className='text-[20px] font-[500]'>App Development Guides</h2>
                        </div>
                    </div>
                </div>

            </div>
            {/* --------------------recent blog--------------------------- */}
        </div>
    )
}

export default Blogs