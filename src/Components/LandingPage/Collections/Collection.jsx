import React from "react";
import { collections } from "../../../assets/assets";
import CollectionDisplay from "./CollectionDisplay";

const Collection = () => {
  return (
    <section id="collection" className="">
      <h5 className="text-[tomato] my-5 text-[15px] ">Our collections</h5>

      <div className="grid flexible gap-[40px]">
        {collections.map((item, index) => (
          <CollectionDisplay
            key={index}
            categories={item.category}
            id={item.id}
            imgURL={item.imgURL}
            btn={item.btn}
          />
        ))}
      </div>
    </section>
  );
};

export default Collection;
