import React from "react";

const Button = ({ label, className }) => {
  return (
    <button className={`${className} rounded-xl text-[#f5f1e3] `}>
      {label}
    </button>
  );
};

export default Button;
