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
  display: flex;
  flex-direction: row;
  margin: 10px auto;
  align-items: center;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const SkillTitle = styled.div`
  font-size: 1.14rem;
  width: 25%;
  text-align: center;
  text-decoration: underline;
  padding: 8px;
  margin-right: 40px;

  @media screen and (max-width: 480px) {
    align-items: center;
    margin-bottom: 4px;
    margin-right: 0px;
    width: 100%;
  }
`;

export const SkillDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const SkillDivWrapper = styled.div`
  display: flex;
  margin: auto;
  padding: 0 auto;
`;

export const SkillPart = styled.div`
  text-align: center;
  padding: 4px 12px;
  float: center;
`;

export const SkillP = styled.p``;
