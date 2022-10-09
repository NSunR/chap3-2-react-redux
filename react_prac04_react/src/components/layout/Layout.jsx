import React from "react";
import "./Layout.css";

const Layout = (props) => {
  return <div className="layBox">{props.children}</div>;
};

export default Layout;
