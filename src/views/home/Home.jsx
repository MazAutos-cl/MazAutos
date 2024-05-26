import React from "react";
import Banner from "../../components/banners/Banner";
import WhyMazAutos from "../../components/banners/WhyMazAutos";
import Pools from "../../components/pools/Pools";
import SuccessBooking from "../../components/prebooking/SuccessBooking";

const Home = () => {
  return (
    <>
      <Banner />
      <Pools />
      <WhyMazAutos/>
      {/* <SuccessBooking/> */}
    </>
  );
};

export default Home;
