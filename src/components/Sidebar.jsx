import React, { useState, useEffect, useRef } from "react";
const Sidebar = ({
  activeSection,
  navigationItems,
  socialIcons,
  scrollToSection,
}) => {
  const [markerStyle, setMarkerStyle] = useState({});
  const navRefs = useRef({});

  useEffect(() => {
    if (activeSection && navRefs.current[activeSection]) {
      const activeItem = navRefs.current[activeSection];
      setMarkerStyle({
        top: activeItem.offsetTop,
        height: activeItem.offsetHeight,
      });
    }
  }, [activeSection]);

  return (
    <>
      <div className="sidebar-wrapper">
        <div className="w-80 bg-black/80 backdrop-blur-xl border-r border-gray-800/50 flex flex-col justify-between p-8 fixed h-full z-10">
          <div>
            <div className="mb-12">
              <div className="font-bold text-7xl bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
                akcord
              </div>
              <div className="font-semibold text-gray-400 text-sm tracking-wide">
                - developer
              </div>
              <div className="w-20 h-0.5 bg-gradient-to-r from:white to-gray-400 mt-4"></div>
            </div>
            <nav className="space-y-5 relative">
              <div
                className="absolute left-1 w-1 bg-white/50 rounded-full transition-all duration-500 ease-in-out"
                style={markerStyle}
              ></div>
              {navigationItems.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  ref={(el) => (navRefs.current[key] = el)}
                  onClick={() => scrollToSection(key)}
                  className={`flex items-center space-x-4 w-full p-3 rounded-lg transition-all duration-300 ease-in-out group relative z-10 ${
                    activeSection === key
                      ? "text-white transform scale-105 pl-8"
                      : "text-gray-400 hover:text-gray-200 hover:translate-x-1"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      activeSection === key
                        ? "text-white"
                        : "group-hover:text-gray-300"
                    }`}
                  />
                  <span className="text-base font-medium">{label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="pt-5 border-t border-gray-600">
            <h2 className="text-5xl font-semibold text-white/70">
              Make it <span className="text-white">matter.</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
