import React from "react";
import {
  Column2,
  InfoContainer,
  InfoH1,
  InfoWrapper,
} from "../InfoSection/InfoElements";
import {
  ContactH2,
  SocialIconWrapper,
  SocialIcons,
  IconDiv,
  ContactFormWrapper
} from "./ContactElements";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaHackerrank,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <>
      <InfoContainer>
        <InfoH1>CONTACT ME</InfoH1>
        <InfoWrapper>
          <Column2>
            <ContactH2 style={{ marginBottom: "16px" }}>
              Social Profiles
            </ContactH2>
            <SocialIconWrapper>
              <SocialIcons to="https://www.facebook.com/hritikhrk">
                <IconDiv>
                  <FaFacebookF />
                </IconDiv>
              </SocialIcons>
              <SocialIcons>
                <IconDiv>
                  <FaInstagram />
                </IconDiv>
              </SocialIcons>
              <SocialIcons>
                <IconDiv>
                  <FaLinkedinIn />
                </IconDiv>
              </SocialIcons>
              <SocialIcons>
                <IconDiv>
                  <FaGithub />
                </IconDiv>
              </SocialIcons>
              <SocialIcons>
                <IconDiv>
                  <SiGmail />
                </IconDiv>
              </SocialIcons>
              <SocialIcons>
                <IconDiv>
                  <FaHackerrank />
                </IconDiv>
              </SocialIcons>
            </SocialIconWrapper>
          </Column2>
          <Column2>
            <ContactH2 style={{ marginBottom: "16px" }}>Get in touch</ContactH2>
            <ContactFormWrapper>
              <ContactForm />
            </ContactFormWrapper>
          </Column2>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default ContactSection;
