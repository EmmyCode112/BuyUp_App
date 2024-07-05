import React, { useState } from "react";
import "./ProductDetail.css";

const ProductDisplay = ({ imgURL, details, price, btn1, btn2, id }) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="flex flex-col card overflow-hidden">
      <div className="img-cover w-full relative overflow-hidden">
        <div className="overlay"></div>
        <img src={imgURL} alt="" className=" w-full h-[200px]" />
        <div
          onClick={() => setFavorite((prev) => !prev)}
          className="icon"
          title="Add to favorite"
        >
          <i
            className={`fa fa-heart ${
              favorite ? "text-[#a31d05]" : "text-white"
            }`}
          ></i>
        </div>
        <div className="icons second" title="Search product detail">
          <i className="fa fa-search"></i>
        </div>
      </div>
      <div className="details px-[15px] pb-[10px] text-center">
        <div className="card-detail mt-3">
          <p>{details}</p>
          <div className="rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <p className="text-center font-bold text-[20px] font-monospace">
            ₦{price}
          </p>
        </div>
        <div className="buttons flex gap-3 items-center my-2">
          <button>{btn2}</button>
          <button>
            {btn1}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
