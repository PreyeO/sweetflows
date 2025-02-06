import Construction from "../assets/construction.jpg";
// import Container from "../assets/container.jpg";
import Telecommunications from "../assets/satalite.jpg";
import RealEstate from "../assets/real-estate.jpg";
import ImportExport from "../assets/export.jpg";
import Trading from "../assets/trading.jpg";
import Service from "./Service";
import ConstructionIcon from "../assets/constructionIcon.png";
import RealEstateIcon from "../assets/realestateicon.png";
import TelecomIcon from "../assets/telecomicon.png";
import TradingIcon from "../assets/exchange.png";
import ImportIcon from "../assets/importicon.png";
import Marquee from "react-fast-marquee";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center pt-[50px]  ">
      <div className="flex md:justify-between w-full flex-wrap md:flex-nowrap justify-center items-center ">
        <div className="flex flex-col gap-4 text-lg md:w-[45%] w-full text-center md:text-left">
          <h1 className="font-bold xl:text-[55px] 2xl:text-[65px] lg:text-[40px] text-3xl text-[#004d40] leading-[40px] lg:leading-[60px]">
            Powering Trade, Real Estate & Construction with Excellence
          </h1>
          <p className="">
            From import/export to property development and contracting, we
            deliver solutions that move businesses forward.
          </p>
          <div className="hidden lg:flex mt-2">
            <Button />
          </div>
        </div>

        <div className="bg-[#004d40] md:flex flex-wrap hidden lg:w-[45%] w-[50%]  gap-5 rounded-br-full p-4 lg:p-6 xl:p-4 lg:mt-[-110px]">
          <img
            src={RealEstate}
            alt="construction"
            className="xl:w-[180px] xl:h-[180px] lg:h-[150px] lg:w-[150px] w-[100px] h-[100px]  rounded-r-full"
          />

          {/* <img
            src={Container}
            alt="construction"
            className="w-[200px] h-[200px] rounded-l-full"
          /> */}
          <img
            src={ImportExport}
            alt="construction"
            className="xl:w-[180px] xl:h-[180px] lg:h-[150px] lg:w-[150px] w-[100px] h-[100px]    rounded-b-full"
          />
          <img
            src={Trading}
            alt="construction"
            className="xl:w-[180px] xl:h-[180px] lg:h-[150px] lg:w-[150px]  w-[100px] h-[100px]   rounded-t-[20%]"
          />

          <img
            src={Construction}
            alt="construction"
            className="xl:w-[180px] xl:h-[180px] lg:h-[150px] lg:w-[150px] w-[100px] h-[100px]   rounded-full"
          />
          <img
            src={Telecommunications}
            alt="construction"
            className="xl:w-[180px] xl:h-[180px] lg:h-[150px] lg:w-[150px]  w-[100px] h-[100px]   rounded-full"
          />
        </div>
      </div>

      <Marquee
        pauseOnClick
        pauseOnHover
        loop={0}
        speed={50}
        className=" w-full  "
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

      <div className="md:hidden flex flex-wrap bg-[#004d40] rounded-br-full p-4 gap-2 mt-10">
        <img
          src={RealEstate}
          alt="construction"
          className=" w-[100px] h-[100px] rounded-r-full"
        />

        {/* <img
            src={Container}
            alt="construction"
            className="w-[200px] h-[200px] rounded-l-full"
          /> */}
        <img
          src={ImportExport}
          alt="construction"
          className=" w-[100px] h-[100px]   rounded-b-full"
        />
        <img
          src={Trading}
          alt="construction"
          className="w-[100px] h-[100px]  rounded-t-[20%]"
        />

        <img
          src={Construction}
          alt="construction"
          className="w-[100px] h-[100px]  rounded-full"
        />
        <img
          src={Telecommunications}
          alt="construction"
          className="w-[100px] h-[100px]  rounded-full"
        />
      </div>
    </section>
  );
};

export default Hero;
