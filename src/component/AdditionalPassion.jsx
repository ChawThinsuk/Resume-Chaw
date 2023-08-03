import React from "react"
import front from '../../image/front-end-icon.png'
import back from '../../image/back-end-icon.png'
import ui from '../../image/Ui-Ux-icon.png'


const header = "flex justify-center text-[35px] font-normal";
const additionalPassionBox = "w-full flex lg:flex-row justify-center text-start mt-[50px] mb-[150px] gap-[50px] max-lg:flex-col items-center"
const passionsBox = "flex justify-center flex-col relative items-center w-[347px] h-[266px] rounded-[10px] shadow-lg";
function AdditionalPassions () {
    return (
        <div id="passions" className="flex flex-col w-full">
            <div className={header}>
                <p>Additional <span className="font-semibold">passions</span></p>
            </div>
            <div className={additionalPassionBox}>
                <div className={passionsBox}>
                    <img src={front} />
                    <p className="mt-[18px]"><span>Front-End</span> Developer</p>
                    <p>(Css, Bootstrap, Tailwind)</p>
                </div>
                <div className={passionsBox}>
                    <img src={back} />
                    <p className="mt-[18px]"><span>Front-End</span> Developer</p>
                    <p>(C#, Javascript, SQLite)</p>
                </div>
                <div className={passionsBox}>
                    <img src={ui} />
                    <p className="mt-[18px]"><span>Front-End</span> Developer</p>
                    <p>(Figma)</p>
                </div>
            </div>
        </div>
    )
}
export default AdditionalPassions;
