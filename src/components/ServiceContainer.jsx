import PropTypes from "prop-types";

const ServiceContainer = ({
  title,
  description,

  alts,
  src,
}) => {
  return (
    <div className="flex flex-col items-center   ">
      <img
        src={src}
        alt={alts}
        className="w-full max-w-[350px] h-[300px] rounded-xl object-cover bg-[#333333] "
      />

      <div className="translate-y-[-70px] w-[300px] h-[200px] gap-4 justify-center bg-[#f5f1e3] rounded-xl shadow-2xl px-4 flex flex-col ">
        <h4 className="text-lg font-bold  ">{title}</h4>
        <p className=" text-base ">{description}</p>
      </div>
    </div>
  );
};

export default ServiceContainer;

ServiceContainer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,

  src: PropTypes.string,
  alts: PropTypes.string,
};
