import React from "react";
import { Section } from "../Section";

import { skills } from "../../../cv.json";

export const Skills = () => {
  return (
    <Section title={"Technical Skills"}>
      <ul className="flex flex-col gap-3">
        {skills.map(({ name, keywords }) => (
          <li key={name} className="flex flex-col sm:flex-row sm:items-start gap-2">
            <span className="min-w-[10rem] shrink-0 font-semibold text-sm">{name}</span>
            <ul className="inline-flex gap-1.5 flex-wrap">
              {keywords.map((kw) => (
                <li key={kw}>
                  <span className="bg-slate-100 border border-slate-200 rounded-md px-2 py-0.5 text-xs">
                    {kw}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
};
