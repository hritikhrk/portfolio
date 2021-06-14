import styled from "styled-components";
import FilteredPropsInputField from "./FilteredPropsInputField";

export const ContactH2 = styled.h3`
  text-align: center;
  font-size: 1.4rem;
`;

export const RowsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 496px;
  margin: auto;
`;

export const SocialIcons = styled.div`
  margin: 5%;
  flex-basis: 20%;
  text-align: center;
  align-items: center;
`;

export const IconDiv = styled.a`
  margin: auto;
  padding: 8px;
  font-size: 1.6rem;
  background-color: #0d0d0d;
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
  margin-bottom: 50px;
  max-width: 432px;
  margin-left: auto;
  margin-right: auto;
`;

export const InputWrapper = styled.div`
  margin-bottom: 12px;
`;

export const Input = styled(FilteredPropsInputField)`
  background-color: rgb(232, 240, 254);
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.6rem;
  font-style: normal;
  width: 100%;
  margin-top: 0.1rem;
  padding: 0.3rem 0.3rem;
  outline: none;
  border: none;

  &:focus,
  &:active {
    border: 4px solid #ff9900;
  }

  ${
    "" /* ${({ valid }) =>
    valid &&
    css`
      border: 1px solid rgb(0, 156, 38);

      &:focus,
      &:active {
        border: 1px solid rgb(0, 156, 38);
        box-shadow: rgb(106, 237, 97) 0px 0px 2px 1px,
          rgb(177, 247, 160) 0px 0px 0px 3px;
        outline: none;
      }
    `}

  ${({ error }) =>
    error &&
    css`
      border: 1px solid rgb(191, 49, 12);
      outline: none;

      &:focus,
      &:active {
        box-shadow: rgb(244, 129, 116) 0px 0px 2px 1px,
          rgb(251, 178, 174) 0px 0px 0px 3px;
        border: 1px solid rgb(191, 49, 12);
        outline: none;
      }
    `} */
  }
`;

export const Submit = styled.button`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 8px 30px;
  color: #ffffff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: pointer;
    background-color: rgb(163, 168, 173);
    box-shadow: none;
    color: rgb(255, 255, 255) !important;

    &:hover,
    &:focus {
      cursor: not-allowed;
    }
  }
`;

export const ErrorMsgWrapper = styled.div`
  background-color: #0d0d0d;
  color: Red;
  outline: none;
  border: none;
  margin: 0.2rem 0 10px 0;
`;
