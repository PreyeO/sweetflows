import Button from "./Button";

const NavBar = () => {
  return (
    <nav className="pt-5 text-center flex justify-between items-center ">
      <h4 className="md:text-3xl 2xl:text-5xl text-2xl font-bold text-[#D4AF37] ">
        <span className="text-[#004d40] ">Sweet</span>Flows
      </h4>
      <div className="xl:hidden flex">
        <Button />
      </div>
    </nav>
  );
};

export default NavBar;
