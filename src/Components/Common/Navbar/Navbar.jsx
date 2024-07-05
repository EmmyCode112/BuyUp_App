import "./Navbar.css";

const Navbar = ({ setShowLogin, setSidebar, sidebar }) => {
  return (
    <nav className=" flex justify-between items-center    bg-transparent  w-full text-[#323232]">
      <div className="n-left flex  items-center">
        <div
          onClick={() => setSidebar(true)}
          className="toggler p-8 cursor-pointer"
        >
          <i className="fa fa-bars"></i>
        </div>
        <div className="hr"></div>
        <ul className="nav-links">
          <li>Products</li>
          <li>Collections</li>
          <li>About Us</li>
        </ul>
      </div>

      <div className="n-center">
        <h3 className="mr-[120px] text-3xl cursor-pointer">BuyUp</h3>
      </div>

      <ul className="n-right flex items-center">
        <div className="hr"></div>
        <li onClick={() => setShowLogin(true)}>login</li>
        <div className="hr"></div>
        <li>carts</li>
      </ul>
    </nav>
  );
};

export default Navbar;
