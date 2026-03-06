import React from "react";
import { Section } from "../Section";

import { languages } from "../../../cv.json";

export const Lenguage = () => {
  return (
    <Section title={"Languages"}>
      <ul className="inline-flex gap-2 flex-wrap">
        {languages.map(({ language, fluency }) => {
          // const iconName = name === "Next.js" ? "Next" : name;
          // const Icon = SKILLS_ICONS[iconName];

          return (
            <li className=" rounded-md flex" key={fluency}>
              <div className="rounded-md bg-slate-200 px-2 text-sm">
                <h2>{language}</h2>
                <p>{fluency}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};
