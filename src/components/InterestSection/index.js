import React from "react";
import {
  SectionWrapper,
  CardWrapper,
  InterestsCard,
  InterestsIcon,
  CardContent,
  InterestsH2,
  InterestsP,
} from "./InterestElements";
import { SectionContainer, SectionH1 } from "../InfoSection/InfoElements";
import { CardsData } from "./Data";

const Card = (props) => (
  <a style={{textDecoration: "none"}} rel="noreferrer" target="_blank" href={props.href}>
  <InterestsCard className="card" >
    <InterestsIcon src={props.imgUrl} alt={props.alt || "Image"} />
    <CardContent className="card-content">
      <InterestsH2>{props.title}</InterestsH2>
      <InterestsP>{props.content}</InterestsP>
    </CardContent>
  </InterestsCard>
  </a>
);

const CardContainer = (props) => (
  <CardWrapper className="cards-container">
    {props.cards.map((card) => (
      <Card
        key={card.id}
        title={card.title}
        content={card.content}
        imgUrl={card.imgUrl}
        href={card.href}
      />
    ))}
  </CardWrapper>
);

const InterestSection = () => {
  return (
    <>
      <SectionContainer style={{paddingBottom: "80px"}} id="interests">
        <SectionH1>PROJECTS</SectionH1>
        <SectionWrapper>
          <CardContainer cards={CardsData} />
        </SectionWrapper>
      </SectionContainer>
    </>
  );
};

export default InterestSection;
