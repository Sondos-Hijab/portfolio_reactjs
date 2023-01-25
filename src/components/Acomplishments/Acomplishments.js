import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { title: "Intermediate React Course", text: "Frontend masters" },
  { title: "Complete Intro to React Course", text: "Frontend masters" },
  { title: "The Complete JavaScript Course 2022", text: "Udemy" },
  { title: "Web Programming Course", text: "An-Najah National University" },
  {
    title: "Software Engineering Course",
    text: "An-Najah National University",
  },
  {
    title: "Algorithms Course",
    text: "An-Najah National University",
  },
  {
    title: "Data Structure Course",
    text: "An-Najah National University",
  },
  {
    title: "Object Oriented Programming Course",
    text: "An-Najah National University",
  },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Courses Taken</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.title}`}</BoxNum>

          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
