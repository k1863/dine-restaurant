import React from "react";

import "./CustomButtonStyles.css";

const CustomButton = ({ children, ...otherProps }) => (
  <button {...otherProps}>{children}</button>
);

export default CustomButton;
