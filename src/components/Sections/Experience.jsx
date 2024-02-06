import React from "react";
import { Section } from "../Section";

import { work } from "../../../cv.json";

export const Experience = () => {
  return (
    <Section title={"Experience"}>
      <ul>
        {work.map(({ name, startDate, endDate, position, summary, url }) => {
          const startYear = new Date(startDate).getFullYear();
          const endYear =
            endDate != null ? new Date(endDate).getFullYear() : "Actual";
          const years = `${startYear} - ${endYear}`;

          return (
            <li>
              <article>
                <header>
                  <div>
                    <h3>
                      <a href={url} title={`Ver ${name}`} target="_blank">
                        {name}
                      </a>
                    </h3>
                    <h4>{position}</h4>
                  </div>
                  <time>{years}</time>
                </header>

                <footer>
                  <p>{summary}</p>
                </footer>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};
