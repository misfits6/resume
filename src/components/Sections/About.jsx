import React from "react";
import { Section } from "../Section";

import { basics } from "../../../cv.json";

const { summary } = basics;

export const About = () => {
  return (
    <Section title={"About"}>
      <p>{summary}</p>
    </Section>
  );
};
