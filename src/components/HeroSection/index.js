import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  ImageBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowDownward,
  ArrowDown,
} from "./HeroElements";
import { Button } from "../ButtonElement";
import Image from '../../Images/low-poly-grid-haikei.svg'

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <ImageBg src={Image} />
      </HeroBg>
      <HeroContent>
        <HeroH1>Hi there, My name is Hritik Kumar.</HeroH1>
        <HeroP>
          Tech Enthusiast, currently a Final year Undergraduate, pursuing B.Tech in Information Technology at NIT Kururkshera.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="about"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            exact='true'
            offset={-80}
            spy={true}
            smooth={true}
            duration={500}
          >
            know more {hover ? <ArrowDownward /> : <ArrowDown />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
