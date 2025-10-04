import React, { useState, useEffect, useRef } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

const Sidebar = ({
  activeSection,
  navigationItems,
  socialIcons,
  scrollToSection,
}) => {
  const [markerStyle, setMarkerStyle] = useState({});
  const navRefs = useRef({});

  // get if device is mobile or not
  const isMobile = useMediaQuery("(max-width: 1023px)");

  useEffect(() => {
    if (activeSection && navRefs.current[activeSection]) {
      const activeItem = navRefs.current[activeSection];
      setMarkerStyle({
        top: activeItem.offsetTop,
        height: activeItem.offsetHeight,
      });
    }
  }, [activeSection, isMobile]);

  return (
    <>
      <div className="sidebar-wrapper">
        <div
          className={`fixed top-0 left-0 h-full z-20 backdrop-blur-xl border-r border-gray-800/50 flex flex-col justify-between transition-all duration-300 ease-in-out ${
            isMobile ? "w-20 p-4" : "w-80 p-8"
          }`}
        >
          <div>
            {!isMobile && (
              <div className="mb-12">
                <div className="font-bold text-7xl bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
                  akcord
                </div>
                <div className="text-gray-400 text-sm tracking-wide">
                  - styling websites for fun.
                </div>
                <div className="w-20 h-0.5 bg-gradient-to-r from-white to-gray-400 mt-4"></div>
              </div>
            )}

            {isMobile && (
              <div className="font-bold text-4xl text-center text-white mb-10">
                a.
              </div>
            )}

            <nav className="space-y-4 relative">
              {!isMobile && (
                <div
                  className="absolute w-1 bg-white/50 rounded-full transition-all duration-500 ease-in-out"
                  style={markerStyle}
                ></div>
              )}

              {navigationItems.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  ref={(el) => (navRefs.current[key] = el)}
                  onClick={() => scrollToSection(key)}
                  className={`flex items-center w-full p-3 rounded-lg transition-all duration-300 ease-in-out group relative z-10 ${
                    isMobile ? "justify-center" : "space-x-4"
                  } ${
                    activeSection === key
                      ? "text-white transform hover:scale-110"
                      : "text-gray-400 hover:text-gray-200"
                  } 
                  ${activeSection === key && !isMobile ? "pl-8" : ""} ${
                    activeSection !== key && !isMobile
                      ? "hover:translate-x-1"
                      : ""
                  }`}
                  aria-label={label} // for mobile
                >
                  <Icon
                    className={`w-6 h-6 ${
                      activeSection === key
                        ? "text-white"
                        : "group-hover:text-gray-300"
                    }`}
                  />
                  {!isMobile && (
                    <span className="text-base font-medium">{label}</span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {!isMobile && (
            <h2 className="text-5xl font-semibold text-white/70">
              Make it <span className="text-white">matter.</span>
            </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
