import React from "react";
import "./Testimonial.css";

const Testimonial_items = ({ imgURL, Name, details }) => {
  return (
    <div className="flex w-full items-start bg-white text-[black] p-[30px] gap-3 test-item">
      <div>
        <img src={imgURL} alt="" />
      </div>
      <div className="flex flex-col gap-[13px]">
        <p className="font-extrabold">{Name}</p>
        <p>
          <i className="fa fa-quote-left text-[tomato]"></i>
          {details} {""}
          <i className="fa fa-quote-right text-[tomato]"></i>
        </p>
      </div>
    </div>
  );
};

export default Testimonial_items;
