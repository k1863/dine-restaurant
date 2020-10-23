import React from "react";

import "../../sass/app.scss";

const CustomButton = ({ children, ...otherProps }) => (
  <button {...otherProps}>{children}</button>
);

export default CustomButton;
