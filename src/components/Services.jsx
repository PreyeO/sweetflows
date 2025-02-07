import ConstructionIcon from "../assets/constructionIcon.png";
import Construction from "../assets/construction.jpg";
import RealEstate from "../assets/real-estate.jpg";
import Import from "../assets/export.jpg";
import Trading from "../assets/trading.jpg";
import Telecommunication from "../assets/telecom.jpg";
import ServiceContainer from "./ServiceContainer";
import Procurement from "../assets/procurement.jpg";

const Services = () => {
  return (
    <section className=" lg:my-[130px] my-[50px]">
      <h1 className="lg:text-3xl text-lg  font-bold text-[#004d40] text-center">
        A Wide Range Of Our Services
      </h1>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 justify-center items-center  mt-[60px] md:grid-cols-2">
        <ServiceContainer
          alt="contrsuction icon"
          title="Construction & Building Contracts"
          description="Expert management of construction projects from start to finish."
          icon={ConstructionIcon}
          className=""
          alts="construction image"
          src={Construction}
        />
        <ServiceContainer
          alt="real estate icon"
          title="Real Estate & Property Development"
          description="Innovative property development and effective estate management."
          icon={ConstructionIcon}
          className=""
          alts="real estate image"
          src={RealEstate}
        />
        <ServiceContainer
          alt="telecommunication"
          title="Telecommunication "
          description="Reliable telecom solutions for seamless connectivity"
          icon={ConstructionIcon}
          className=""
          alts="Telecommunication"
          src={Telecommunication}
        />
        <ServiceContainer
          alt="trading"
          title="Trading & General Supplies"
          description="Wide ranging quality goods offered at competitive prices"
          icon={ConstructionIcon}
          className=""
          alts="Trading"
          src={Trading}
        />
        <ServiceContainer
          alt="import and export"
          title="Import & Export"
          description="Efficient global trade solutions for accessing international markets."
          icon={ConstructionIcon}
          className="import and export icon"
          alts="import and export"
          src={Import}
        />
        <ServiceContainer
          alt="procurement"
          title="Procurement & Sourcing Solutions"
          description="Streamlined procurement services to secure top quality goods."
          icon={ConstructionIcon}
          className=""
          alts="procurement"
          src={Procurement}
        />
      </div>
    </section>
  );
};

export default Services;
