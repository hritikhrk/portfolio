import styled from "styled-components";
import FilteredPropsInputField from "./FilteredPropsInputField";

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
  flex-basis: 33%;
  text-align: center;
  align-items: center;
`;

export const IconDiv = styled.button`
  margin: auto;
  padding: 8px;
  font-size: 1.6rem;
  background-color: #010606;
  white-space: nowrap;
  outline: none;
  border: none;
  color: #fff;
  cursor: pointer;

  &:active {
    color: #01bf71;
  }

  @media screen and (min-width: 1025px) {
    &:hover {
      color: #01bf71;
    }
  }
`;

export const ContactFormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Field = styled(FilteredPropsInputField)`
  width: 300px;
  height: 35px;
  background-color: #fff;

  &:focus,
  &:active {
    box-shadow: yellow 0px 0px 2px 1px,
      yellow 0px 0px 0px 3px;
    border: 1px solid voilet;
    outline: none;
  }
`;
