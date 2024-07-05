import "./About.css";
import { dropdown } from "../../../assets/assets";
import DropDown from "./DropDown";
const About = () => {



  return (
    <section id="about-us" className="">
      <h5 className="text-[tomato] my-5 text-[15px]">About us</h5>
      <div className="row wrap ">
        <div className="a-left col-lg-6 col-md-12">
          <h1 className="text-[25px] first-letter:text-[50px] leading-14 ">
            Small scale shop grows to biggest Supermarket in Africa
          </h1>
          <p className="mt-4 text-sm">
            With passion, love and unity we build BuyUp shop from scratch, with
            was started by EmmyCode in 1821 at London bridge.
          </p><p className="mt-4 text-sm">
            With passion, love and unity we build BuyUp shop from scratch, with
            was started by EmmyCode in 1821 at London bridge.
          </p>

          <button className='view'>View Our Offers</button>
        </div>
        <div className="a-right col-lg-6 col-md-12 flex flex-col gap-[30px]">
          {dropdown.map((item, index)=> (
            <DropDown
            key={index}
            firstLine={item.firstLine}
            dropdownItem={item.dropdownItem}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
