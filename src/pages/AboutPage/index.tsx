import React from "react";

import { Img, Text } from "components";
import Footer from "components/Footer";
import HomeHeader from "components/HomeHeader";

const AboutPagePage: React.FC = () => {
  return (
    <>
      <div className="bg-lime-700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[898px] items-center justify-between mx-auto w-auto sm:w-full md:w-full">
        <HomeHeader className="flex flex-row gap-5 items-center justify-start px-10 sm:px-5 py-[30px] shadow-bs w-full" />
        <Footer className="bg-light_green-800 flex gap-5 items-center justify-center px-10 md:px-5 py-5 w-full" />
      </div>
    </>
  );
};

export default AboutPagePage;
