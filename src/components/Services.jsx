import Construction from "../assets/construction.jpg";
import RealEstate from "../assets/real-estate.jpg";
import Import from "../assets/export.jpg";
import Trading from "../assets/trading.jpg";
import Telecommunication from "../assets/telecom1.jpg";
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
          title="Construction & Building Contracts"
          description="Expert management of construction projects from start to finish."
          alts="construction image"
          src={Construction}
        />
        <ServiceContainer
          title="Real Estate & Property Development"
          description="Innovative property development and effective estate management."
          alts="real estate image"
          src={RealEstate}
        />

        <ServiceContainer
          title="Import & Export"
          description="Efficient global trade solutions for accessing international markets."
          alts="import and export"
          src={Import}
        />
        <ServiceContainer
          title="Trading & General Supplies"
          description="Wide ranging quality goods offered at competitive prices"
          alts="Trading"
          src={Trading}
        />

        <ServiceContainer
          title="Procurement & Sourcing Solutions"
          description="Streamlined procurement services to secure top quality goods."
          alts="procurement"
          src={Procurement}
        />
        <ServiceContainer
          title="Telecommunication Services "
          description="Reliable telecom solutions for seamless connectivity"
          alts="Telecommunication"
          src={Telecommunication}
        />
      </div>
    </section>
  );
};

export default Services;
