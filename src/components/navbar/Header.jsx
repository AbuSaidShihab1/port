import React, { useState } from 'react'
import Logo from "../../assets/logo.png";
import { NavLink } from 'react-router-dom';
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
const Header = () => {
    // toggle menu
          const [menu,activemenu]=useState(false);
          const [shadowadd,setshadow]=useState(false);
     function activemenufunction(){
        console.log("ell")
        activemenu(!menu)
     }
     window.addEventListener("scroll",()=>{
        if(window.scrollY >0){
            setshadow(true)
        }else{
            setshadow(false)
        }
     })
    // toggle menu
    const navlink=[
        {
            name:"Home",
            pathname:"/"
        },
        {
            name:"About",
            pathname:"/about"
        },
        {
            name:"Services",
            pathname:"/services"
        },
        {
            name:"Projects",
            pathname:"/projects"
        },
        {
            name:"Contact",
            pathname:"/contact"
        },
        {
            name:"Resume",
            pathname:"/resume"
        },
    ]
  return (
    <header className={shadowadd ? "w-full  fixed bg-white top-0 left-0 duration-200 z-[1000] font-sora shadow-lg   h-[12vh] flex justify-between items-center md:px-[140px] px-[40px] py-[10px]":'w-full font-sora   h-[12vh] flex justify-between z-[1000] items-center  duration-300 md:px-[140px] px-[40px] py-[10px] '}>
        <div className="logo">
            <img src={Logo} alt=""className='w-[150px]' />
        </div>
        <nav className={menu ? 'md:flex  h-auto px-[20px] bg-[whitesmoke] w-full  z-[10000] py-[30px] md:items-center gap-[100px] flex-col absolute top-[10vh] left-0 md:static  ':'hidden md:flex  w-full h-auto px-[20px]  z-[10000]  py-[30px] md:justify-end md:items-center gap-[100px] absolute top-[10vh] left-0 md:static  '}>
            <ul className='md:flex  md:justify-center md:items-center gap-[30px] block'>
              {
                navlink.map((data)=>{
                    return(
                        <>
                          <li className='text-[17px] relative mb-[15px] md:mb-0 text-[#2a1454] md:text-lg font-[400]'><NavLink to={data.pathname}>{data.name}</NavLink></li>
                        </>
                    )
                })
              }
            </ul>
       <Link to="https://wa.me/01688494104"target='_blank'>
       <button className='md:px-[35px] hover:bg-color4 hover:transition hover:duration-300 hover:shadow-sm hover:text-white py-[14px] w-full md:w-auto rounded-[30px]
             text-black bg-none border-[1px] border-[#e6e6e6]  font-[400] text-[13px] md:text-[14px]  '>Hire Me!</button></Link>
            {/* <div className="mode overflow-hidden md:overflow-auto px-[20px] md:px-[0] flex m-[20px] md:m-0 justify-center items-center md:justify-end gap-[30px] w-full md:w-auto">
                <div className="search-box rounded-[25px] w-full md:w-auto bg-white shadow-md px-[20px] py-[10px] h-[50px] flex items-center">
                    <input type="text"placeholder='Search...'className='outline-none w-[80%]' />
                    <button className='bg-none cursor-pointer text-right  w-[20%] md:w-auto'><i class='bx bx-search-alt text-[30px]' ></i></button>
                </div>
                <button className='bg-none cursor-pointer'><i class='bx bxs-user text-[30px]'></i></button>
            </div> */}
        </nav>
        <div className='md:hidden cursor-pointer'>
         {menu ? <IoMdClose size={30} onClick={activemenufunction} className='cursor-pointer' />:<IoMenuSharp className='cursor-pointer' size={30} onClick={activemenufunction} />}
        </div>
    </header>
  )
}

export default Header