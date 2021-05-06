import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ LightBg }) => (LightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoH1 = styled.h1`
  font-size: 48px;
  margin-bottom: 32px;
  text-align: center;
  color: #01bf76;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    height: 860px;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
  width: 50%;
  align-items: center;

  @media screen and (min-width: 769px and max-width: 980px) {
      display: flex;
      align-items: center;
      justify-items: center;
  }
  @media screen and (max-width: 768px) {
    max-width: 480px;
    width: 100%;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
  width: 50%;
  height: auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 15px;
  }
`;

export const IntroP = styled.p`
  font-size: 18px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  color: #fff;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 15px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  padding-right: 0;
  margin: auto;
  border-radius: 50%;

  @media screen and (max-width: 768px) {
    max-width: 480px;
  }
`;
