import styled from "styled-components";

export const SectionContainer = styled.div`
  color: #fff;
  background-color: #0d0d0d;
  padding-top: 100px;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const SectionH1 = styled.h1`
  font-size: 48px;
  margin-bottom: 32px;
  text-align: center;
  color: #01bf76;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  z-index: 1;
  height: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
  width: 50%;
  display: flex;
  align-self: center;

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
  font-size: 1.1rem;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  color: #fff;
  text-align: justify;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 15px;
    font-size: 1rem;
  }
`;

export const Img = styled.img`
  max-width: 320px;
  width: 100%;
  height: auto;
  padding-right: 0;
  margin: auto;
  border-radius: 50%;

  @media screen and (max-width: 768px) {
    max-width: 220px;
  }
`;
