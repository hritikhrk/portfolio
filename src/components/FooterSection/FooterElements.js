import styled from "styled-components";
import { AiOutlineCopyrightCircle, AiTwotoneHeart } from "react-icons/ai";

export const FooterP = styled.div`
  background-color: #01bf71;
  color: #010606;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-self: center;
  align-items: center;
`;

export const SpanP1 = styled.span`
  margin: 5px 12px;
`;
export const SpanP2 = styled.span`
  @media screen and (max-width: 620px) {
    margin: 0 12px 8px 24px;
  }
`;

export const Heart = styled(AiTwotoneHeart)`
  color: red;
  margin-right: 8px;
  margin-left: 8px;
`;

export const Copyright = styled(AiOutlineCopyrightCircle)`
  margin-right: 8px;
  margin-left: 8px;
`;
