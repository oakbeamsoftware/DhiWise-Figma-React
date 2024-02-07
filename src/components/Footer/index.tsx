import React from "react";

import { Text } from "components";

type FooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col gap-[17px] items-center justify-center">
          <Text
            className="text-base text-center text-white-A700 underline w-auto"
            size="txtInterRegular16WhiteA700"
          >
            info@oakbeam.hr
          </Text>
          <Text
            className="text-base text-blue-900 text-center w-auto"
            size="txtInterRegular16"
          >
            www.oakbeam.hr
          </Text>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
