import React from "react";
import { Section } from "../Section";

import { projects } from "../../../cv.json";

const PROSE_COUNT = 3;

export const Projects = () => {
  return (
    <Section title={"Projects"}>
      <ul className="flex flex-col gap-8">
        {projects.map(({ name, startDate, endDate, description, highlights, url }) => {
          const startYear = new Date(startDate).getFullYear();
          const endYear = endDate != null ? new Date(endDate).getFullYear() : "Present";
          const years = `${startYear} - ${endYear}`;

          const proseBullets = highlights.slice(0, PROSE_COUNT);
          const techTags = highlights.slice(PROSE_COUNT);

          return (
            <li key={name}>
              <article>
                <header className="flex justify-between items-start mb-1">
                  <h3>
                    <a
                      className="font-semibold hover:font-bold"
                      href={url}
                      title={name}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {name}
                    </a>
                  </h3>
                  <time className="text-sm min-w-28">{years}</time>
                </header>
                <p className="mb-2">{description}</p>
                <ul className="list-disc list-inside mb-2 flex flex-col gap-1 text-sm">
                  {proseBullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <ul className="inline-flex gap-1.5 flex-wrap">
                  {techTags.map((tag) => (
                    <li key={tag}>
                      <span className="bg-slate-100 border border-slate-200 rounded-md px-2 py-0.5 text-xs">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};
