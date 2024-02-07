import React from "react";
import { Section } from "../Section";

import { work } from "../../../cv.json";

export const Experience = () => {
  return (
    <Section title={"Experiencia Laboral"}>
      <ul className="flex flex-col gap-8">
        {work.map(
          ({
            name,
            startDate,
            endDate,
            position,
            summary,
            highlights,
            url,
          }) => {
            const startYear = new Date(startDate).getFullYear();
            const endYear =
              endDate != null ? new Date(endDate).getFullYear() : "Actual";
            const years = `${startYear} - ${endYear}`;

            return (
              <li key={summary}>
                <article>
                  <header className="flex justify-between items-start mb-1">
                    <div>
                      <h3>
                        <a
                          className="font-semibold hover:font-bold"
                          href={url}
                          title={`Ver ${name}`}
                          target="_blank"
                        >
                          {name}
                        </a>
                      </h3>
                      <h4>{position}</h4>
                    </div>
                    <time className="text-sm min-w-28">{years}</time>
                  </header>

                  <footer>
                    <p>{summary}</p>
                    <h2>Tecnologias</h2>
                    <ul className="inline-flex gap-2 flex-wrap text-xs">
                      {highlights.map((item) => {
                        return (
                          <li className=" rounded-md flex" key={item}>
                            <span className="rounded-md bg-slate-200 px-2">
                              {item}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
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
