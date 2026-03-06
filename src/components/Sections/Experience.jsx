import React from "react";
import { Section } from "../Section";

import { work } from "../../../cv.json";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatDate(dateStr, isEnd) {
  if (!dateStr) return "Present";
  const d = new Date(dateStr);
  if (isEnd) return d.getFullYear().toString();
  return `${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

export const Experience = () => {
  return (
    <Section title={"Professional Experience"}>
      <ul className="flex flex-col gap-7">
        {work.map(({ name, startDate, endDate, position, highlights, technologies, url, location }) => {
          const start = formatDate(startDate, false);
          const end = endDate != null ? formatDate(endDate, true) : "Present";
          const dateRange = `${start} – ${end}`;

          return (
            <li key={name}>
              <article>
                <header className="flex justify-between items-baseline mb-1">
                  <p className="text-sm">
                    <strong>{position}</strong>
                    {" | "}
                    {url ? (
                      <a
                        className="font-semibold text-teal-700 hover:underline"
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {name}
                      </a>
                    ) : (
                      <strong>{name}</strong>
                    )}
                    {location && <span className="font-normal">, {location}</span>}
                  </p>
                  <time className="text-sm shrink-0 ml-4 italic">{dateRange}</time>
                </header>

                <ul className="list-disc list-outside ml-5 flex flex-col gap-1 text-sm mb-2">
                  {highlights.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                {technologies && technologies.length > 0 && (
                  <p className="text-sm italic">
                    <span className="font-semibold not-italic">Technologies:</span>{" "}
                    {technologies.join(", ")}
                  </p>
                )}
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};
