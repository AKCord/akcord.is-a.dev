import React from "react";

const Section = ({ id, children, className = "", sectionRefs }) => (
  <section
    ref={(el) => (sectionRefs.current[id] = el)}
    id={id}
    className={`flex flex-col justify-center py-20 min-h-screen ${className}`}
    style={{
      minHeight: window.innerWidth <= 768 ? "0vh" : "100vh",
      paddingTop: window.innerWidth <= 768 ? "2rem" : "5rem",
      paddingBottom: window.innerWidth <= 768 ? "2rem" : "5rem",
    }}
  >
    {children}
  </section>
);

export default Section;
