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
  ContactFormWrapper,
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
      <InfoContainer id="contact">
        <InfoH1>CONTACT ME</InfoH1>
        <InfoWrapper>
          <Column2>
            <ContactH2 style={{ marginBottom: "16px" }}>
              Social Profiles
            </ContactH2>
            <SocialIconWrapper>
              <SocialIcons>
                <IconDiv
                  href="https://www.facebook.com/hritikhrk"
                  target="_blank"
                >
                  <FaFacebookF />
                </IconDiv>
              </SocialIcons>
              <SocialIcons>
                <IconDiv
                  href="https://www.instagram.com/im_hrk_/"
                  target="_blank"
                >
                  <FaInstagram />
                </IconDiv>
              </SocialIcons>
              <SocialIcons>
                <IconDiv
                  href="https://www.linkedin.com/in/hritikhrk/"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </IconDiv>
              </SocialIcons>
              <SocialIcons>
                <IconDiv href="https://github.com/hritikhrk" target="_blank">
                  <FaGithub />
                </IconDiv>
              </SocialIcons>
              <SocialIcons>
                <IconDiv href="mailto:amanamn1r@gmail.com" target="_blank">
                  <SiGmail />
                </IconDiv>
              </SocialIcons>
              <SocialIcons>
                <IconDiv
                  href="https://www.hackerrank.com/hritikhrk"
                  target="_blank"
                >
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
