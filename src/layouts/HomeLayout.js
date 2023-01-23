import React from "react";
import Header from "../components/Header";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default HomeLayout;
