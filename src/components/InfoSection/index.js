import React from "react";
import Image from "../../Images/hritik.jpg";
import {
  InfoContainer,
  InfoH1,
  InfoWrapper,
  Column1,
  Img,
  Column2,
  IntroP,
} from "./InfoElements";

const InfoSection = () => {
  return (
    <>
      <InfoContainer id="about">
        <InfoH1>ABOUT ME</InfoH1>
        <InfoWrapper>
          <Column1>
            <Img src={Image} style={{"alignSelf": "center"}} />
          </Column1>
          <Column2>
            <IntroP>
              My name is Hritik Kumar from Gaya, Bihar. I'm pursuing B.Tech
              Degree in Information Technology at NIT Kurukshetra.
            </IntroP>
            <IntroP>Currently, I am in 2nd year.</IntroP>
            <IntroP>
              Elit dolore anim sint cupidatat occaecat sint incididunt Lorem
              duis quis aute elit nulla. Ullamco veniam pariatur dolor commodo
              officia veniam ea quis voluptate cillum culpa exercitation dolor
              laborum. Amet eiusmod eu laboris quis do in sunt occaecat
              excepteur. Reprehenderit laborum mollit eu ipsum pariatur in in
              est irure.
            </IntroP>
            <IntroP>
              Sint cillum ut ipsum culpa minim elit ex exercitation commodo ea. Magna elit reprehenderit Lorem cupidatat labore ea proident commodo deserunt excepteur ipsum id ex amet. Culpa excepteur velit aute nisi do.
            </IntroP>
          </Column2>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
