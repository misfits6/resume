import React from "react";
import { Section } from "../Section";

import { certificates } from "../../../cv.json";

export const Certificates = () => {
  return (
    <Section title={"Certifications"}>
      <ul className="flex flex-col gap-4">
        {certificates.map(({ name, date, issuer, url }) => {
          const year = date.slice(0, 4);

          return (
            <li key={name}>
              <article className="flex justify-between items-start">
                <div>
                  {url ? (
                    <h3>
                      <a
                        className="font-semibold hover:font-bold"
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {name}
                      </a>
                    </h3>
                  ) : (
                    <h3 className="font-semibold">{name}</h3>
                  )}
                  <p className="text-sm">{issuer}</p>
                </div>
                <time className="text-sm min-w-28">{year}</time>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};
