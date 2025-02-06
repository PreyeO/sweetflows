import React from "react";

const Button = ({ label, className }) => {
  return (
    <button
      className={`${className} cursor-pointer  text-[#f5f1e3] rounded-xl   group default-transition relative z-10 overflow-hidden  text-center  block
    before:left-0 before:absolute before:-z-[1] before:rounded-xl before:w-[0%] before:top-0 before:bottom-0 before:transition before:[transition-property:width] before:[transition-duration:500ms]
    hover:before:w-full  before:bg-[#C9A13E]  shadow-[0.15]`}
    >
      {label}
    </button>
  );
};

export default Button;
