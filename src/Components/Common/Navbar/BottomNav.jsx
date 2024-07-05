import React from "react";
import './BottomNav.css'

const BottomNav = () => {
  return (
    <div className="Nav">
      <ul className="flex justify-around">
        <li>
          <i class="fas fa-home    "></i>
        </li>
        <li>
          <i class="fas fa-box    "></i>
        </li>
        <li>
          <img src="./profile_icon.png" alt="" />
        </li>
        <li>
          <img src="./basket_icon.png" alt="" />
        </li>
      </ul>
    </div>
  );
};

export default BottomNav;
