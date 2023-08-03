import React from "react"
function HeaderDisplay () {
    return (
        <div id="about" className="w-full flex lg:flex-row justify-center lg-mt-[60px] gap-[70px] max-lg:flex-col-reverse max-lg:items-center">
            <div className="flex flex-col w-[580px] justify-center text-start leading-normal  lg:ml-[130px] max-lg:text-center">
                <p className="max-lg:text-[25px] text-[35px]">Hi !</p>
                <p className="max-lg:text-[30px] text-[50px] font-semibold">I’m Mueangcho Thinsuk.</p>
                <p className="max-lg:text-[30px] text-[50px] font-semibold">a Front-End Developer</p>
                <div className="w-[600px] h-[108px] mt-[32px]">
                 <p className="text-[23px]">Front-End devel oper based in Bangkok, Thailand I’am coding with a clean and beautiful problem solving in mind.</p>      
                </div>         
            </div>
            <div className="flex flex-none w-[512px] h-[366px] lg:mr-[140px] justify-center items-center">
                <img src="../image/header.png" className="w-[512px] h-[366px] bg-contain"/>
            </div>
            <div></div>
        </div>
    )
}
export default HeaderDisplay;