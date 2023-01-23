import React from "react";
import Brand from "../../components/Brand";
import Specials from "../../components/Specials";
import HomeLayout from "../../layouts/HomeLayout";

const Home = () => {
  return (
    <HomeLayout>
      <Brand />
      <Specials />
    </HomeLayout>
  );
};

export default Home;
