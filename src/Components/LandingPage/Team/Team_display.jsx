import React from "react";
import "./Team.css";

const Team_display = ({
  imgURL,
  Name,
  Position,
  SocialOne,
  SocialTwo,
  SocialTre,
}) => {
  return (
    <div className="card-con relative">
      <div className="cards flex flex-col  ">
        <img src={imgURL} alt="" className="w-[200px] h-[200px] rounded-full" />
        <div className="mt-3 text-center">
          <p className="font-bold text-[20px] text-[tomato]">{Name}</p>
          <span className="">{Position}</span>
        </div>
        <ul className="links flex items-center gap-[15px] mt-[15px]">
          <li>
            <a className={SocialOne} href=""></a>
          </li>
          <li>
            <a className={SocialTwo} href=""></a>
          </li>
          <li>
            <a className={SocialTre} href=""></a>
          </li>
        </ul>
      </div>
      <div className="line"></div>
      <div className="line2"></div>
      <div className="line3"></div>
      <div className="line4"></div>
    </div>
  );
};

export default Team_display;
