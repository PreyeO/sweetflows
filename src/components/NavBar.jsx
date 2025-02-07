import Button from "./Button";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <nav className="text-center flex justify-between items-center md:h-[100px] h-[50px] border-b w-full px-[80px] border-[#004d40] ">
      <h4 className="lg:text-4xl text-xl  text-[#004d40] ">
        <span className="text-[#D4AF37] ">Sweet</span>FlowsGlobal
      </h4>
      <Link to="contact" smooth={true} duration={500} className="">
        <Button
          label="Contact Us"
          className=" bg-[#333333] nav-btn md:w-[200px] lg:w-[250px] w-[120px] md:h-[56px] h-[40px] lg:h-[60px] lg:text-xl"
        />
      </Link>
    </nav>
  );
};

export default NavBar;
