import PropTypes from "prop-types";

const Service = ({ service, alt, src }) => {
  return (
    <div className="flex  gap-2 items-center">
      <img src={src} alt={alt} className="w-[30px] h-[30px]" />
      <h2 className="md:text-2xl text-lg font-bold">{service}</h2>
    </div>
  );
};

export default Service;

Service.propTypes = {
  service: PropTypes.string,
  alt: PropTypes.string,
  src: PropTypes.string,
};
