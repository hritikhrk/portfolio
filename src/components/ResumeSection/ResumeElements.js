import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media screen and (min-width: 769px) {
    flex: 50%;
  }

`;

export const RowTitle = styled.h2`
  text-align: center;
`;

export const TileSubTitle = styled.p`
  font-size: 1.3rem;
`;

export const TileContainter = styled.div`
  padding-bottom: 32px;
`;

export const TileWrapper = styled.div`
  padding: 16px;

  @media screen and (max-width: 480px) {
    padding: 16px 0px;
  }
`;

export const TileTitle = styled.h3`
  color: #01bf67;
  text-decoration: underline;
  -webkit-text-decoration-color: #01bf; /* safari still uses vendor prefix */
  text-decoration-color: #01bf;
`;

export const TileP = styled.p``;

export const SkillContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto 24px auto;
`;

export const ProgrammingSkill = styled.div`
margin-top: 24px;
`;

export const SkillTitle = styled.h3`
  color: #01bf67;
`;

export const SkillDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SkillDivWrapper = styled.div`

`;

export const SkillPart = styled.div`
  padding: 4px 12px 0 0;
`;

export const SkillP = styled.p``;
