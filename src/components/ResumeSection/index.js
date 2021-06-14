import React from "react";
import {
  SectionContainer,
  SectionH1,
  SectionWrapper,
} from "../InfoSection/InfoElements";
import { EducationData, WorkData } from "./Data";
import {
  Row,
  RowWrapper,
  RowTitle,
  TileWrapper,
  TileContainter,
  TileTitle,
  TileSubTitle,
  TileP,
} from "./ResumeElements";

const Tile = (props) => (
  <TileWrapper>
    <TileTitle>{props.title}</TileTitle>
    <TileSubTitle>
      <b>{props.instituteName}</b>
    </TileSubTitle>
    {props.degree ? (
      <TileP>
        <i>{props.degree}</i>&nbsp; |&nbsp; <i>{props.duration}</i>
      </TileP>
    ) : (
      <TileP>
        <i>{props.duration}</i>&nbsp; |&nbsp; <i>{props.por}</i>
      </TileP>
    )}
    {props.score ? (
      <TileP>
        <b>Score:</b> {props.score}
      </TileP>
    ) : null}
    {props.description ? <TileP>{props.description}</TileP> : null}
  </TileWrapper>
);

const EducationContainer = (props) => (
  <TileContainter>
    {props.tiles.map((tile) => (
      <Tile
        key={tile.id}
        title={tile.title}
        instituteName={tile.instituteName}
        degree={tile.degree}
        duration={tile.duration}
        score={tile.score}
        por={tile.por}
        description={tile.description}
      />
    ))}
  </TileContainter>
);

const ResumeSection = () => {
  return (
    <>
      <SectionContainer id="resume">
        <SectionH1>RESUME</SectionH1>
        <SectionWrapper>
          <Row>
            <RowWrapper>
              <RowTitle>Education</RowTitle>
              <EducationContainer tiles={EducationData} />
            </RowWrapper>
            <RowWrapper>
              <RowTitle>Work Experience</RowTitle>
              <EducationContainer tiles={WorkData} />
            </RowWrapper>
            <RowWrapper>
              <RowTitle>My Skills</RowTitle>
            </RowWrapper>
          </Row>
        </SectionWrapper>
      </SectionContainer>
    </>
  );
};

export default ResumeSection;
