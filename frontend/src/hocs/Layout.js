import React, { Fragment } from "react";
import Navbar from "../components/Navbar";

const layout = ({children}) => {
  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  );
};

export default layout;
