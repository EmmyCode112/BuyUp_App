import React from "react";
import "./CollectionDisplay.css";

const CollectionDisplay = ({ categories, imgURL, btn, id }) => {
  return (
    <div className="col-card cursor-pointer">
      <p className="font-bold text-[27px] mb-3">{categories}</p>
      <div className="flex items-center flex-col justify-center gap-3">
        <img className="w-full h-[200px] rounded-[10px]" src={imgURL} alt="" />
        <div>
          <button className="bg-[#a31d05] text-white button-red">{btn}</button>
        </div>
      </div>
    </div>
  );
};

export default CollectionDisplay;
