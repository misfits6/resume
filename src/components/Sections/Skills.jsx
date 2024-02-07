import React from "react";
import { Section } from "../Section";

import { skills } from "../../../cv.json";

export const Skills = () => {
  return (
    <Section title={"Habilidades"}>
      <ul className="inline-flex gap-2 flex-wrap">
        {skills.map(({ name }) => {
          // const iconName = name === "Next.js" ? "Next" : name;
          // const Icon = SKILLS_ICONS[iconName];

          return (
            <li className=" rounded-md flex" key={name}>
              <p className="rounded-md bg-slate-200 px-2 text-sm">{name}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};
