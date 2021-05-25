import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;

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

export const ChartWrapper = styled.div`
  display: block;
  margin: 40px auto;
`;