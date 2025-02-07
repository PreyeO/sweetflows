import PropTypes from "prop-types";

const ServiceContainer = ({
  title,
  description,
  icon,
  alt,
  className,
  alts,
  src,
}) => {
  return (
    <div className="flex flex-col items-center ">
      <img
        src={src}
        alt={alts}
        className="w-full max-w-[350px] h-[300px] rounded-xl object-cover bg-[#333333]"
      />
      <div
        className={` ${className} translate-y-[-70px] w-[300px] h-[200px] bg-[#f5f1e3] rounded-xl shadow-2xl px-4 flex flex-col gap-3 `}
      >
        <div className="w-[40px] h-[40px] bg-white rounded-md flex flex-col justify-center ">
          <img
            src={icon}
            alt={alt}
            className="w-[30px] h-[30px] flex flex-col"
          />
        </div>
        <h4 className="text-lg font-bold">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceContainer;

ServiceContainer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  alt: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string,
  alts: PropTypes.string,
};
