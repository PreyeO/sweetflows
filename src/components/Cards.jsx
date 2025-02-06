import PropTypes from "prop-types";

const Cards = ({ contact, title, children }) => {
  return (
    <div className="md:w-[400px] lg:w-[350px] xl:w-[400px] w-[250px] frame  md:h-[300px] h-[200px] border-2 border-[#D4AF37] transition-all flex flex-col items-center justify-center">
      <div className="h-[300px] md:text-lg text-center gap-4 rotate-x-45 text-white lg:w-[350px] xl:w-[400px]  w-[250px] bg-[#333333]  shape rounded-xl p-4 flex flex-col justify-center">
        <h4 className="font-bold md:text-2xl text-xl">{title}</h4>
        <p>{contact}</p>
        {children}
      </div>
    </div>
  );
};

export default Cards;

Cards.propTypes = {
  contact: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
};
