import React from "react";

import { Img, Text } from "components";

type HomeHeaderProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "home" | "gallery" | "about"
> &
  Partial<{ home: string; gallery: string; about: string }>;

const HomeHeader: React.FC<HomeHeaderProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-base text-center text-white-A700 w-auto"
          size="txtInterRegular16WhiteA700"
        >
          {props?.home}
        </Text>
        <Text
          className="text-base text-center text-white-A700 w-auto"
          size="txtInterRegular16WhiteA700"
        >
          {props?.gallery}
        </Text>
        <Text
          className="text-base text-center text-white-A700 w-auto"
          size="txtInterRegular16WhiteA700"
        >
          {props?.about}
        </Text>
        <Img className="h-6 w-6" src="images/img_facebook.svg" alt="facebook" />
        <Img className="h-6 w-6" src="images/img_settings.svg" alt="settings" />
      </div>
    </>
  );
};

HomeHeader.defaultProps = { home: "Home", gallery: "Gallery", about: "About" };

export default HomeHeader;
