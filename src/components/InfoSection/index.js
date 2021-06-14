import React from "react";
import Image from "../../Images/hritik.jpg";
import {
  SectionContainer,
  SectionH1,
  SectionWrapper,
  Column1,
  Img,
  Column2,
  IntroP,
} from "./InfoElements";

const InfoSection = () => {
  return (
    <>
      <SectionContainer id="about">
        <SectionH1>ABOUT ME</SectionH1>
        <SectionWrapper>
          <Column1>
            <Img src={Image} style={{ alignSelf: "center" }} />
          </Column1>
          <Column2>
            <IntroP>
              My name is Hritik Kumar. I am from Gaya, Bihar. I'm pursuing
              B.Tech Degree in Information Technology at NIT Kurukshetra. I have
              recently passed the 2<sup>nd</sup> year of my undergraduate.
            </IntroP>
            <IntroP>
              I have a keen interest in programming and dream to be a good
              software developer. I enjoy creating cool stuff with programming.
              I am open to work and collaborate with people who love to do
              programming and develop cool things.
            </IntroP>
            <IntroP>
              Besides these things, I love to teach children and help them to
              grow and learn faster. I am also a sci-fi/mystery genre movie
              lover.
            </IntroP>
          </Column2>
        </SectionWrapper>
      </SectionContainer>
    </>
  );
};

export default InfoSection;
