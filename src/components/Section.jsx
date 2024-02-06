import React from "react";

export const Section = ({ children, title }) => {
  return (
    <section className="container mx-auto mb-16  max-w-3xl">
      {title && <h2 className="font-bold bottom-2 text-2xl ">{title}</h2>}
      <div>{children}</div>
    </section>
  );
};
