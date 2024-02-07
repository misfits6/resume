import React from "react";
import { Section } from "../Section";

import { publications } from "../../../cv.json";

export const Pubilish = () => {
  return (
    <Section title={"Publicaciones"}>
      <ul className="flex flex-col gap-8">
        {publications.map(({ name, releaseDate, publisher, url }) => {
          const startYear = new Date(releaseDate).getFullYear();
          const years = `${startYear}`;

          return (
            <li key={publisher}>
              <article>
                <header className="flex justify-between items-baseline mb-1">
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
                    {/* <h4>{publisher}</h4> */}
                  </div>
                  <time className="text-sm min-w-28">{releaseDate}</time>
                </header>

                <footer>
                  <p>{publisher}</p>
                </footer>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};
