import React from "react";
import { Section } from "../Section";

import { volunteer } from "../../../cv.json";

export const Voluntary = () => {
  return (
    <Section title={"Voluntariado"}>
      <ul className="flex flex-col gap-8">
        {volunteer.map(
          ({
            organization,
            startDate,
            endDate,
            position,
            summary,
            highlights,
          }) => {
            const startYear = new Date(startDate).getFullYear();
            const endYear =
              endDate != null ? new Date(endDate).getFullYear() : "Actual";
            const years = `${startYear} - ${endYear}`;

            return (
              <li key={summary}>
                <article>
                  <header className="flex justify-between items-start mb-1">
                    <div className="flex justify-between items-start">
                      <h3 className="mr-1">{organization} -</h3>
                      <h4>{position}</h4>
                    </div>
                    <time className="text-sm min-w-28">{years}</time>
                  </header>

                  <footer>
                    <h3>{highlights}</h3>
                    <p>{summary}</p>
                  </footer>
                </article>
              </li>
            );
          }
        )}
      </ul>
    </Section>
  );
};
