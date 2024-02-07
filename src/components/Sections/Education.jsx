import React from "react";
import { Section } from "../Section";

import { education } from "../../../cv.json";

export const Education = () => {
  return (
    <Section title={"Educación"}>
      <ul className="flex flex-col gap-8">
        {education.map(({ institution, startDate, endDate, area, courses }) => {
          const startYear = new Date(startDate).getFullYear();
          const endYear =
            endDate != null ? new Date(endDate).getFullYear() : "Actual";
          const years = `${startYear} - ${endYear}`;

          return (
            <li key={area}>
              <article>
                <header className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-lg">{area}</h3>
                  </div>

                  <time className="text-sm min-w-28">{years}</time>
                </header>

                <footer>
                  <h2>{institution}</h2>
                  <p>{courses}</p>
                </footer>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};
