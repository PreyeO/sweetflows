import Service from "./Service";
import ConstructionIcon from "../assets/constructionIcon.png";
import RealEstateIcon from "../assets/realestateicon.png";
import TelecomIcon from "../assets/telecomicon.png";
import TradingIcon from "../assets/exchange.png";
import ImportIcon from "../assets/importicon.png";
import Marquee from "react-fast-marquee";
import Button from "./Button";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="flex flex-col mt-[80px] hero">
      <div className="flex flex-col gap-4 text-lg md:w-[70%] w-full mx-auto  text-center items-center">
        <h1 className="font-bold xl:text-[70px] lg:text-[60px] text-3xl text-[#004d40] leading-[40px] lg:leading-[80px]">
          Powering Trade, Real Estate & Construction with Excellence
        </h1>
        <p className=" md:w-[500px] w-full md:text-lg text-sm">
          From import/export to property development and contracting, we deliver
          solutions that move businesses forward.
        </p>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer mt-2"
        >
          <Button
            label="Work With Us"
            className="bg-[#004d40] w-[250px] h-[60px]   "
          />
        </Link>
      </div>

      <Marquee
        pauseOnClick
        pauseOnHover
        loop={0}
        speed={50}
        className=" w-full my-6 "
        autoFill
      >
        <div className="mt-2 flex w-full gap-10 items-center relative">
          <Service
            service="Construction"
            alt="construction"
            src={ConstructionIcon}
          />
          <Service
            service="Real estate"
            alt="Real estate"
            src={RealEstateIcon}
          />
          <Service
            service="Import & Export"
            alt="ImportIcon"
            src={ImportIcon}
          />
          <Service
            service="Telecommunication"
            alt="Telecom"
            src={TelecomIcon}
          />
          <Service service="Trading" alt="Trading" src={TradingIcon} />
          <div className="w-[10px]" />
        </div>
      </Marquee>
    </section>
  );
};

export default Hero;
