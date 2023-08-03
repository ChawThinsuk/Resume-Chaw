import React from "react";
import circleIcon from '../image/circle-icon.png'
import agency from '../image/agency-web.png'
import photo from '../image/photography-website.png'
import resume from '../image/resume-pic.png';



const container = "flex flex-row justify-center text-start mt-[50px] gap-[50px] max-lg:flex-col items-center";
const portfolioBox = "flex justify-center flex-col relative items-center w-[347px] h-[266px] mt-[18px] rounded-[10px] shadow-lg ";
const circle = "-z-1 absolute top-[20px]";
const image = "w-[285px] h-[164px] rounded-[7px] z-3 ml-[50px] shadow-lg object-contain";
function MyPortfolio() {
  return (
    <div id="portfolio" className="w-full flex flex-col">
      <div className="flex justify-center text-[35px] font-normal">
        <p>
          My <span className="font-semibold">Portfolio</span>
        </p>
      </div>
      <div className={container}>
        <div className={portfolioBox}>
          <div className="flex relative flex-col w-full pl-[17px]">
            <img
              src={circleIcon}
              className={circle}
            />
            <div className="w-[175px] h-[47px] mb-[10px]">
              <p className="text-[25px] font-semibold">Agency</p>
              <p>Website</p>
            </div>
          </div>
          <div className="flex relative w-full mt-[10px]">
            <img
              src={agency}
              className={image}
            />
          </div>
        </div>
        <div className={portfolioBox}>
          <div className="flex relative flex-col w-full pl-[17px]">
            <img
              src={circleIcon}
              className={circle}
            />
            <div className="w-[175px] h-[47px] mb-[10px]">
              <p className="text-[25px] font-semibold">Photographer</p>
              <p>Website</p>
            </div>
          </div>
          <div className="flex relative w-full mt-[10px]">
            <img
              src={photo}
              className={image}
            />
          </div>
        </div>
        <div className={portfolioBox}>
          <div className="flex relative flex-col w-full pl-[17px]">
            <img
              src={circleIcon}
              className={circle}
            />
            <div className="w-[175px] h-[47px] mb-[10px]">
              <p className="text-[25px] font-semibold">Resume</p>
              <p>Website</p>
            </div>
          </div>
          <div className="flex relative w-full mt-[10px]">
            <img
              src={resume}
              className={image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyPortfolio;
