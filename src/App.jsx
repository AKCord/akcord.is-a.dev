import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { navigationItems, socialIcons, sections } from "./components/data";

const App = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isMobile, setIsMobile] = useState(false);
  const contentRef = useRef(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: contentRef.current,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      Object.values(sectionRefs.current).forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = sectionRefs.current[sectionId];
    if (element && contentRef.current) {
      contentRef.current.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  // render for mobile
  if (isMobile) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-4 text-center">
        <h1 className="text-2xl">
          This webpage is not supported on mobile devices.
        </h1>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="w-80 flex-shrink-0">
        <Sidebar
          activeSection={activeSection}
          navigationItems={navigationItems}
          socialIcons={socialIcons}
          scrollToSection={scrollToSection}
        />
      </div>

      <div className="flex-1 overflow-y-auto" style={{ height: "100vh" }}>
        <Content
          contentRef={contentRef}
          sectionRefs={sectionRefs}
          sections={sections}
        />
      </div>
    </div>
  );
};

export default App;
