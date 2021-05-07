import styled from "styled-components";

export const ContactH2 = styled.h3`
  text-align: center;
  font-size: 1.4rem;
`;

export const SocialIconWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 496px;
  margin: auto;
`;

export const SocialIcons = styled.div`
  margin: auto;
  ${'' /* padding: 10px 0; */}
  flex-basis: 33%;
  text-align: center;
  align-items: center;
  font-size: 1.8rem;
  cursor: pointer;
  border-radius: 100%;

  &:hover {
      color: #01BF71;
  }
`;

