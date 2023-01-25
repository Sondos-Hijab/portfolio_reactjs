import React from "react";
import { DiReact } from "react-icons/di";
import { RxFigmaLogo } from "react-icons/Rx";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have experience working with a variety of technologies within the web
      development field. From front-end development to user experience and user
      interface design.
    </SectionText>

    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>Front-End</ListContainer>
        <ListParagraph>
          Experience with
          <br /> ReactJS
        </ListParagraph>
      </ListItem>

      <ListItem>
        <RxFigmaLogo size="3rem" />
        <ListContainer>UX/UI</ListContainer>
        <ListParagraph>
          Experience with <br />
          Figma & Adobe XD
        </ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
