import React from "react";
const contactBox = "flex flex-col justify-center";
const container =
  "flex lg:flex-row align-middle justify-center gap-[134px] max-lg:flex-col max-lg:items-center text-[35px]";
function ContactMe() {
  return (
    <div id="contact" className="flex flex-col">
      <div className="flex justify-center mb-[59px] mt-[150px] text-[35px]">
        <p>
          Contact<span className="font-semibold"> Me</span>
        </p>
      </div>
      <div className={container}>
        <div className={contactBox}>
          <div className="w-[166px] h-[160px]">
            <img src="../image/github-icon.png" />
          </div>
          <a className="mt-[30px] text-center hover:text-[#CACACA]" href="https://github.com/ChawThinsuk">Github</a>
        </div>
        <div className={contactBox}>
          <div className="w-[166px] h-[160px]">
            <img src="../image/instagram-logo.png" />
          </div>
          <a className="mt-[30px] text-center hover:text-[#CACACA]" href="https://www.instagram.com/chawthinsuk/">Instagram</a>
        </div>
        <div className={contactBox}>
          <div className="flex items-center w-[166px] h-[160px] justify-center">
            <img src="../image/gmail-logo.png" className="w-[106px] h-[90px]"/>
          </div>
          <a className="mt-[30px] text-center hover:text-[#CACACA]" href="https://mail.google.com/">Email</a>
        </div>
        <div className={contactBox}>
          <div className="w-[166px] h-[160px]">
            <img src="../image/facebook-icon.png" />
          </div>
          <a className="mt-[30px] text-center hover:text-[#CACACA]" href="https://www.facebook.com/CH.Thinsuk">Facebook</a>
        </div>
      </div>
    </div>
  );
}
export default ContactMe;
