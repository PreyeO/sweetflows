const Cards = () => {
  return (
    <div className=" lg:px-[40px] px-4 py-[40px]  md:text-lg gap-4  text-[#333333] lg:w-[600px]  w-full  bg-[#faf9f6]  rounded-2xl flex flex-col ">
      <p className=" lg:text-base lg:leading-8 leading-7 text-sm">
        At sweetFlow, we value seamless communication. Whether you have
        enquiries about our services, need expert advice, or want to explore
        business opportunities with us, we are ready to assis.
      </p>
      <div className="flex flex-col gap-1">
        <h4 className="font-bold md:text-2xl text-lg">Head Office:</h4>
        <p className="text-sm leading-7">
          Nurses House, First Floor, PC 43, Church Street, Victoria Island,
          Lagos, Nigeria. P.O.BOX 70780, Victoria Island, Lagos
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="font-bold md:text-2xl text-lg">Phone Numbers:</h4>
        <p className="text-sm leading-7">
          TEL: +234-(01)-7615965, +234-(0)8077719777
        </p>
        <p className="text-sm leading-7">FAX: +234-(01)-4623712</p>
      </div>
    </div>
  );
};

export default Cards;
