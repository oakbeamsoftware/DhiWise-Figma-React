import React from "react";

import { Img, Text } from "components";
import Footer from "components/Footer";
import HomeHeader from "components/HomeHeader";

const Home1Page: React.FC = () => {
  return (
    <>
      <div className="bg-lime-900 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full min-height-view">
        <div className="md:px-5 relative w-full">
          <Img
            className="h-[982px] m-auto object-cover opacity-op w-full"
            src="images/img_47510021.png"
            alt="47510021"
          />
          <HomeHeader className="absolute flex flex-row gap-5 inset-x-[0] items-center justify-start max-w-[1920px] mx-auto px-10 sm:px-5 py-[30px] shadow-bs top-[0] w-full" />
        </div>
        <Footer className="bg-light_green-800 flex gap-5 items-center justify-center px-10 md:px-5 py-5 w-full" />
      </div>
    </>
  );
};

export default Home1Page;
