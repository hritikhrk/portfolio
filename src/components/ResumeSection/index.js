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
  SkillContainer,
  SkillTitle,
  SkillDiv,
  ProgrammingSkill,
  SkillPart,
  SkillP,
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
      <SectionContainer id="resume" style={{paddingTop: "30px"}}>
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
              <SkillContainer>
                <ProgrammingSkill>
                  <SkillTitle>Programming Skill:</SkillTitle>
                  <SkillDiv>
                    <SkillPart>
                      <SkillP>C,</SkillP>
                    </SkillPart>
                    <SkillPart>
                      <SkillP>C++,</SkillP>
                    </SkillPart>
                    <SkillPart>
                      <SkillP>Java,</SkillP>
                    </SkillPart>
                    <SkillPart>
                      <SkillP>Data Structure,</SkillP>
                    </SkillPart>
                    <SkillPart>
                      <SkillP>Design and Analysis of Algorithms,</SkillP>
                    </SkillPart>
                    <SkillPart>
                      <SkillP>HTML,</SkillP>
                    </SkillPart>
                    <SkillPart>
                      <SkillP>CSS,</SkillP>
                    </SkillPart>
                    <SkillPart>
                      <SkillP>JavaScript,</SkillP>
                    </SkillPart>
                    <SkillPart>
                      <SkillP>React.js,</SkillP>
                    </SkillPart>
                    <SkillPart>
                      <SkillP>Node.js,</SkillP>
                    </SkillPart>
                    <SkillPart>
                      <SkillP>Express.js,</SkillP>
                    </SkillPart>
                    <SkillPart>
                      <SkillP>MongoDb,</SkillP>
                    </SkillPart>
                    <SkillPart>
                      <SkillP>MySql</SkillP>
                    </SkillPart>
                  </SkillDiv>
                </ProgrammingSkill>
                <ProgrammingSkill>
                  <SkillTitle>Tools Skill:</SkillTitle>
                  <SkillDiv>
                    <SkillPart>
                      <SkillP>Git,</SkillP>
                    </SkillPart>
                    <SkillPart>
                      <SkillP>Visual Studio Code IDE</SkillP>
                    </SkillPart>
                  </SkillDiv>
                </ProgrammingSkill>
              </SkillContainer>
            </RowWrapper>
          </Row>
        </SectionWrapper>
      </SectionContainer>
    </>
  );
};

export default ResumeSection;
