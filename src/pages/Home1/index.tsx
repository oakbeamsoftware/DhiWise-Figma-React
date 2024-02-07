import React from "react";

import { Img, Text } from "components";
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
        <footer className="bg-light_green-800 flex items-center justify-center px-10 md:px-5 py-5 w-full">
          <div className="flex flex-col gap-[17px] items-center justify-center">
            <a
              href="mailto:info@oakbeam.hr"
              className="text-base text-center text-white-A700 underline w-auto"
              target="_blank"
              rel="noreferrer"
            >
              <Text>info@oakbeam.hr</Text>
            </a>
            <a
              href="www.oakbeam.hr"
              className="text-base text-blue-900 text-center w-auto"
              target="_blank"
              rel="noreferrer"
            >
              <Text size="txtInterRegular16">www.oakbeam.hr</Text>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home1Page;
