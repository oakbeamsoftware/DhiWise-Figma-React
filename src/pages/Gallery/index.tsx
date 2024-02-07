import React from "react";

import { Img, Text } from "components";
import HomeHeader from "components/HomeHeader";

const GalleryPage: React.FC = () => {
  return (
    <>
      <div className="bg-lime-700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[898px] items-center justify-between mx-auto w-auto sm:w-full md:w-full">
        <HomeHeader className="flex flex-row gap-5 items-center justify-start px-10 sm:px-5 py-[30px] shadow-bs w-full" />
        <div className="flex flex-col h-full items-center justify-start md:px-10 sm:px-5 px-[200px] py-10 w-full">
          <div className="bg-deep_orange-200 flex flex-col items-center justify-start max-w-[1520px] mx-auto p-[21px] md:px-5 w-full">
            <Text
              className="mb-[715px] text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
              size="txtInterBold48"
            >
              Ovo je neki naslov
            </Text>
          </div>
        </div>
        <div className="bg-light_green-800 flex flex-col gap-5 items-center justify-center max-w-[1920px] px-10 sm:px-5 py-5 w-full">
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
      </div>
    </>
  );
};

export default GalleryPage;
