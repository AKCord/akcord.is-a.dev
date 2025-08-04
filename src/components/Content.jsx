import React from "react";
import Section from "./Section";

const Content = ({ contentRef, sectionRefs, sections }) => {
  return (
    <div
      ref={contentRef}
      className="flex-1 ml-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
      style={{ height: "100vh" }}
    >
      <div className="max-w-5xl mx-auto px-12">
        {sections.map((section) => (
          <Section
            key={section.id}
            id={section.id}
            sectionRefs={sectionRefs}
            className={section.className}
          >
            {section.component}
          </Section>
        ))}
      </div>
    </div>
  );
};

export default Content;
