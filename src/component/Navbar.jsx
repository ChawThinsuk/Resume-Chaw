import React from "react";
import { useState } from "react";
import nav from '../image/navbar-icon.png'
import x from '../image/x-icon.png'


function Navbar() {
  const navItem = "hover:text-[#CACACA] scroll-smooth"
  const [open,setOpen] = useState(false)

  return (
    <>
    <nav className="w-full flex justify-between items-center mt-[30px] px-[12%] mb-[40px]">
      <div className="max-lg:w-full flex flex-row justify-between">
        <a className="text-3xl font-bold hover:scale-125" href="https://chawbanthin.wixsite.com/mysite-1">CHaw.Thinsuk</a>
        <div className="text-3xl absolute right-10 top-10 cursor-pointer lg:hidden" onClick={() => setOpen(!open)}>
         <img src={open ? x : nav} className="lg:hidden h-[20px] pr-[10px]"/>
        </div>
      </div>
      <div class={`flex lg:items-center absolute lg:static bg:white md:z-auto z-[1] left-0 w-full lg:w-auto pl-9 gap-[20px] duration-500 transition-opacity
      ${open ? 'top-20 opacity-100 flex-col items-end pr-[50px] leading-[50px]': 'top-[-490px]'} lg:opacity-100 opacity-0`}>
        <a className={navItem} href="#about">About</a>
        <a className={navItem} href="#passions">Passions</a>
        <a className={navItem} href="#portfolio">Portfolio</a>
        <button className="bg-[#2F2E41] rounded-[10px] text-[#FFFFFF] text-center w-[196px] h-[58px] hover:bg-[#CACACA]">
          <a href="#contact">Contact Me</a>
        </button>
      </div>
    </nav>
    </>
  );
}
export default Navbar;
