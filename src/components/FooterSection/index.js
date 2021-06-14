import React from "react";
import { FooterP, Heart, Copyright, SpanP1, SpanP2 } from "./FooterElements";

const FooterSection = () => {
  return (
    <>
      <FooterP>
        <SpanP1>
          Copyright
          <Copyright />
          {new Date().getFullYear() + "."}
        </SpanP1>
        <SpanP1 style={{ "marginLeft": "0" }}>All Rights Reserved.</SpanP1>
        <SpanP2>
          Hritik | Designed and Developed by
          <Heart />
        </SpanP2>
      </FooterP>
    </>
  );
};

export default FooterSection;
