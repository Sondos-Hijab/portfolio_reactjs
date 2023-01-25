import React from "react";
import {
  AiFillGithub,
  AiFillBehanceCircle,
  AiFillLinkedin,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+970-593-907-273">+970-593-907-273</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:sondos.hijab@gmail.com">
            sondos.hijab@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan></Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Sondos-Hijab">
            <AiFillGithub size="3rem" />
          </SocialIcons>

          <SocialIcons href="https://www.linkedin.com/in/sondos-qais/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>

          <SocialIcons href="https://www.behance.net/sondosshigab">
            <AiFillBehanceCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
