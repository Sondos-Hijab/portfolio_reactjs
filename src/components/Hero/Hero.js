import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Sondos's Portfolio
      </SectionTitle>
      <SectionText>
        I'm Sondos Hijab, and I'm a 4th year computer engineering student at
        An-Najah National University. My interests are in Front End Engineering,
        and I love to create beautiful and performant products with delightful
        user experiences.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = "https://www.linkedin.com/in/sondos-qais/")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
