import React from "react";
import {
  Column2,
  InfoContainer,
  InfoH1,
  InfoWrapper,
} from "../InfoSection/InfoElements";
import { ContactH2, SocialIconWrapper, SocialIcons } from "./ContactElements";
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
            <ContactH2 style={{ "margin-bottom": "16px" }}>
              Social Profiles
            </ContactH2>
            <SocialIconWrapper>
              <SocialIcons to="https://www.facebook.com/hritikhrk">
                <FaFacebookF />
              </SocialIcons>
              <SocialIcons>
                <FaInstagram />
              </SocialIcons>
              <SocialIcons>
                <FaLinkedinIn />
              </SocialIcons>
              <SocialIcons>
                <FaGithub />
              </SocialIcons>
              <SocialIcons>
                <SiGmail />
              </SocialIcons>
              <SocialIcons>
                <FaHackerrank />
              </SocialIcons>
            </SocialIconWrapper>
          </Column2>
          <Column2>
            <ContactH2 style={{ "margin-bottom": "16px" }}>
              Get in touch
            </ContactH2>
            <ContactForm />
          </Column2>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default ContactSection;
