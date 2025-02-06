import React from "react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="md:px-[80px] px-4 w-full py-[100px] my-[100px] md:py-[150px] lg:my-[150px] gap-4 rounded-t-ml bg-[#004d40] rounded-t-3xl text-white flex flex-col text-center items-center "
    >
      <div className="lg:w-[60%] w-full">
        <h2 className="md:text-5xl  text-3xl font-bold lg:leading-[80px] md:leading-[60px] leading-[40px]">
          Move Your Business <span className="text-[#D4AF37]  ">Forward</span>{" "}
          with SweetFlow
        </h2>
        <p className="md:text-lg text-sm mt-2 opacity-80">
          Driven by innovation, committed to your success
        </p>
      </div>
      <div className="border border-[#f5f1e3] opacity-20 w-full my-4"></div>
      <h6 className="flex opacity-60 justify-center items-center mt-10 text-[12px] md:text-sm 2xl:text-xl">
        copyright &copy; 2025 SWEETFLOWS GLOBAL SERVICE LIMITED. All Rights
        Reserved.
      </h6>
    </footer>
  );
};

export default Footer;
