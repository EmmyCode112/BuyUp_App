import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ sidebar,setSidebar }) => {
  return (
    <div className={`${!sidebar ? '' : 'cover-side' }`}>
      <div className={`${!sidebar ? "hideSidebar" : "sidebar"}`}>
      <div>
        <i onClick={()=>setSidebar(false)} className="fa fa-times cursor-pointer text-[27px] absolute right-[7%] top-[2%]" aria-hidden="true"></i>
        <ul className="p-[40px] flex flex-col gap-[30px] mt-[40px]">
          <li title="Rent Apartment"><i className="fa fa-home" aria-hidden="true"></i> Rent Apartment</li>
          <li title="Offers"><i className="fas fa-handshake    "></i> Offers</li>
          <li title="New Products"><i className="fa fa-shopping-bag" aria-hidden="true"></i> New Products</li>
          <li title="Profile"> <i className="fa fa-user"></i> Profile</li>
          <li title="Favorites"><i className="fa fa-heart"></i> Favorites</li>
          <div className="absolute bottom-[10%] left-0 right-0 m-auto text-center">
          <span title="Notifications" className="relative text-center p-4 bg-[#8080803f] w-[60px] rounded-full cursor-pointer h-[60px]"><i className="fa fa-bell text-[17px]" aria-hidden="true"></i>
          <div className="w-[10px] h-[10px] rounded-full bg-[tomato] absolute right-[20%] top-[20%]"></div>
          </span>
          </div>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
