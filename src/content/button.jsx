import React from "react";

const Button = ({ text, buttonClicked }) => {
  return <button onClick={buttonClicked}>{text}</button>;
};

export default Button;
