import React from "react"
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
                    <img src="../image/front-end-icon.png" />
                    <p className="mt-[18px]"><span>Front-End</span> Developer</p>
                    <p>(Css, Bootstrap, Tailwind)</p>
                </div>
                <div className={passionsBox}>
                    <img src="../image/back-end-icon.png" />
                    <p className="mt-[18px]"><span>Front-End</span> Developer</p>
                    <p>(C#, Javascript, SQLite)</p>
                </div>
                <div className={passionsBox}>
                    <img src="../image/Ui-Ux-icon.png" />
                    <p className="mt-[18px]"><span>Front-End</span> Developer</p>
                    <p>(Figma)</p>
                </div>
            </div>
        </div>
    )
}
export default AdditionalPassions;
