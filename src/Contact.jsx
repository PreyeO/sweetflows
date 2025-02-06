import Cards from "./components/Cards";

const Contact = () => {
  return (
    <section className=" lg:py-[100px] lg:my-[150px] my-[80px] py-[50px]">
      <h1 className="lg:mt-5 lg:text-2xl text-lg underline font-bold text-[#004d40] text-center">
        Contact Us
      </h1>
      <div className=" flex lg:justify-around mx-auto  mt-[70px] flex-wrap lg:flex-nowrap justify-center gap-10 lg:gap-5  xl:gap-0">
        <Cards
          title="Head Office:"
          contact=" Nurses House, First Floor, PC 43, Church Street, Victoria Island,
          Lagos, Nigeria"
        />
        <Cards
          title="Contact Us:"
          contact="P.O.BOX 70780, Victoria Island, Lagos"
        >
          <p>TEL: +234-(01)-7615965, +234-(0)8077719777</p>
          <p>FAX: +234-(01)-4623712</p>
        </Cards>
      </div>
    </section>
  );
};

export default Contact;
