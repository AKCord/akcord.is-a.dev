import React from "react";

const Section = ({ id, children, className = "", sectionRefs }) => (
  <section
    ref={(el) => (sectionRefs.current[id] = el)}
    id={id}
    className={`min-h-screen flex flex-col justify-center py-20 ${className}`}
  >
    {children}
  </section>
);

export default Section;
