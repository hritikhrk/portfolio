import styled from "styled-components";

export const SectionWrapper = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  padding: 0 24px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const CardWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 800px) {
  }
`;

export const InterestsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  max-width: 340px;
  max-height: 600px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const InterestsIcon = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  border-radius: 10px 10px 0 0;
`;

export const InterestsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #010606;
`;

export const InterestsP = styled.p`
  font-size: 1rem;
  text-align: justify;
  padding: 0 18px 24px 18px;
  color: #010606;
`;
