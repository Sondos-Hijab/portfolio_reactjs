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
        I am Sondos Hijab, and I am a 4th year computer engineering student at
        An-Najah National University. I am passionate about front end
        engineering and creating beautiful, efficient, and delightful user
        experiences.
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
