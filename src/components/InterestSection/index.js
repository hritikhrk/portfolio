import React from "react";
import {
  SectionWrapper,
  // InterestsCard,
  // InterestsH2,
  // InterestsIcon,
  // InterestsP,
  // CardWrapper,
} from "./InterestElements";
import { SectionContainer, SectionH1 } from "../InfoSection/InfoElements";
// import Icon1 from "../../Images/icon1.jpg";
// import Icon2 from "../../Images/icon2.jpg";
// import Icon3 from "../../Images/icon3.jpg";

import { CardsData } from "./Data";

const Card = (props) => (
  <div className="card" >
    <img src={props.imgUrl} alt={props.alt || "Image"} />
    <div className="card-content">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  </div>
);

const CardContainer = (props) => (
  <div className="cards-container">
    {props.cards.map((card) => (
      <Card key={card.id} title={card.title} content={card.content} imgUrl={card.imgUrl} />
    ))}
  </div>
);

const InterestSection = () => {
  return (
    <>
      <SectionContainer id="interests">
        <SectionH1>INTERESTS</SectionH1>
        <SectionWrapper>
          <CardContainer cards={CardsData} />
          {/* <CardWrapper>
            <InterestsCard>
              <InterestsIcon src={Icon1} />
              <InterestsH2>Interset 1</InterestsH2>
              <InterestsP>
                Qui incididunt esse consectetur ad veniam incididunt deserunt
                enim et. Ex aliqua id ipsum veniam. Culpa excepteur dolor minim
                voluptate id commodo et esse
              </InterestsP>
            </InterestsCard>
          </CardWrapper>
          <CardWrapper>
            <InterestsCard>
              <InterestsIcon src={Icon2} />
              <InterestsH2>Interset 2</InterestsH2>
              <InterestsP>
                Duis aliquip amet cupidatat aliquip magna ut occaecat esse amet.
                Sunt mollit ex ut dolor veniam ullamco anim commodo tempor
                commodo. Nisi proident aliqua proident ipsum non qui
                reprehenderit commodo veniam laborum laborum pariatur ea ut.
                Commodo mollit dolor sunt eu ea et ex nostrud velit dolor ut
                incididunt ea. Excepteur ea commodo pariatur nostrud laboris
                consequat voluptate exercitation sint reprehenderit ex ea.
              </InterestsP>
            </InterestsCard>
          </CardWrapper>
          <CardWrapper>
            <InterestsCard>
              <InterestsIcon src={Icon3} />
              <InterestsH2>Interset 3</InterestsH2>
              <InterestsP>
                Et velit cillum deserunt ex eu. Veniam qui excepteur quis in
                dolor duis. Voluptate do ullamco velit nulla esse adipisicing.
                Labore veniam velit exercitation enim mollit velit deserunt
                tempor occaecat enim ut ea veniam adipisicing. Non ullamco
                cillum ad non ad non esse veniam. Irure culpa Lorem deserunt
                irure ad ipsum ea ullamco sint incididunt. Fugiat incididunt
                Lorem cupidatat labore in nisi fugiat officia exercitation
                veniam commodo.
              </InterestsP>
            </InterestsCard>
          </CardWrapper> */}
        </SectionWrapper>
      </SectionContainer>
    </>
  );
};

export default InterestSection;
