import React from "react";

const AboutContent = () => {
  return (
    <div className="space-y-6 md:space-y-12">
      <div className="space-y-2 md:space-y-4">
        <h2 className="text-3xl md:text-5xl font-light text-white">about</h2>
        <div className="w-20 h-0.5 bg-gradient-to-r from-white to-gray-400 mt-4"></div>
        <br />
        <p className="text-gray-400 text-base md:text-lg max-w-2xl">
          I'm a passionate developer focused primarily on web development, I've
          loved computers ever since I was a kid and my journey began with
          exploring bots, where my curiosity about how the backend systems
          worked first sparked my interest in the programming world.
        </p>
      </div>

      <div></div>
    </div>
  );
};

export default AboutContent;
