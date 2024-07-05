import React, { useState } from "react";
import "./About.css";

const DropDown = ({ firstLine, dropdownItem }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <div className="dropdown">
        <label
          onClick={() => setChecked((prev) => !prev)}
          className="flex items-center justify-between"
        >
          <div className="firstLine font-bold text-[#a31d05] text-[16px]">
            {firstLine}
          </div>
          <div>
            <i
              className={`fa ${
                !checked ? "fa-arrow-down reverse" : " fa-arrow-down rotate"
              }`}
            ></i>
          </div>
        </label>
        <div className={!checked ? "dropdown-content": "hide-dropdown"}>{dropdownItem}</div>
      </div>
    </div>
  );
};

export default DropDown;
