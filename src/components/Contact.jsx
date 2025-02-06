import CustomerService from "../assets/Customerservice.jpg";
import Cards from "./Cards";

const Contact = () => {
  return (
    <section id="contact" className=" lg:my-[130px] my-[50px]">
      <h1 className="lg:text-3xl text-lg  font-bold text-[#004d40] text-center">
        Get in Touch - Your Next Business Move Starts Here!
      </h1>
      <div className=" flex justify-center gap-2 mt-[60px] flex-wrap md:flex-nowrap">
        <Cards />
        <img
          src={CustomerService}
          alt="customer service personnel"
          className="w-[400px] rounded-2xl"
        />
      </div>
    </section>
  );
};

export default Contact;
