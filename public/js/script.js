document.addEventListener("DOMContentLoaded", () => {
  const content = {
    about: `
        <section
      id="content"
      class="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 fade-in"
    >
<div>
  <p class="leading-relaxed font-bold text-gray-400 ">Hey, I'm AKCord,</p>
  <p class="mt-5 text-sm">
    I've loved computers ever since I was a kid, I discovered Discord
    bots at a pretty young age and I was amazed at how things worked
    back-end. At that time, I had no prior knowledge of programming
    languages, and that moment marked the beginning of my journey.
  </p>
</div>
<div>
  <p class="leading-relaxed font-bold text-gray-400 text-xs">‎ </p>
  <p class="mt-5 text-sm">
    Available for hire: simple websites, API integrations,
    simple to advanced Discord bots, or just enquiry on what you want.
    I'll respond as soon as possible!
  </p>
</div>
</section>

`,

    experience: `
     <section
        id="experience"
        class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in"
      >
        <!-- LiteClash Card -->
        <div class="space-y-6 flex justify-center">
          <div
            class="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full transform hover:scale-105"
          >
            <div class="flex items-center space-x-6 mb-6">
              <div class="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src="imgs/experiences/liteclash.webp"
                  alt="LiteClash Logo"
                  class="w-full h-full object-cover"
                />
              </div>
              <div>
                <p class="text-2xl font-semibold text-gray-200">
                  LiteClash - A Discord-Based Casino
                </p>
              </div>
            </div>
            <div class="text-sm text-gray-400 leading-relaxed mb-4">
              <p>
                Owner and developer of LiteClash, a unique Discord-based casino
                providing an exciting gaming experience for users worldwide.
              </p>
            </div>
            <div class="mt-auto">
              <p class="text-sm text-gray-500">Role: Owner / Developer</p>
              <p class="text-sm text-gray-500">Timeline: 2024-</p>
            </div>
          </div>
        </div>

        <!-- Kindo Card -->
        <div class="space-y-6 flex justify-center" id="kindoCard">
          <div
            class="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full transform hover:scale-105"
          >
            <div class="flex items-center space-x-6 mb-6">
              <div class="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src="imgs/experiences/kindo.webp"
                  alt="Kindo Logo"
                  class="w-full h-full object-cover"
                />
              </div>
              <div>
                <p class="text-2xl font-semibold text-gray-200">
                  Kindo - A Discord Bot
                </p>
              </div>
            </div>
            <div class="text-sm text-gray-400 leading-relaxed mb-4">
              <p>
                The first public Discord bot I developed, featuring moderation
                tools, website search functions, and more.
              </p>
            </div>
            <div class="mt-auto">
              <p class="text-sm text-gray-500">Role: Owner + Developer</p>
              <p class="text-sm text-gray-500">Timeline: 2021-2022</p>
            </div>
          </div>
        </div>

        <!-- Kcvdh Card -->
        <div class="space-y-6 flex justify-center">
          <div
            class="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full transform hover:scale-105"
          >
            <div class="flex items-center space-x-6 mb-6">
              <div class="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src="imgs/experiences/kcvdh.webp"
                  alt="Kcvdh Logo"
                  class="w-full h-full object-cover"
                />
              </div>
              <div>
                <p class="text-2xl font-semibold text-gray-200">
                  kcvdh.com - Developer's Team
                </p>
              </div>
            </div>
            <div class="text-sm text-gray-400 leading-relaxed mb-4">
              <p>
                A collaborative Discord server uniting developers, designers,
                and creators to work on exciting projects together.
              </p>
            </div>
            <div class="mt-auto">
              <p class="text-sm text-gray-500">Role: Partner</p>
              <p class="text-sm text-gray-500">Timeline: 2024-2024</p>
            </div>
          </div>
        </div>

        <!-- StarDevs Card -->
        <div class="space-y-6 flex justify-center" id="stardevsCard">
          <div
            class="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full transform hover:scale-105"
          >
            <div class="flex items-center space-x-6 mb-6">
              <div class="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src="imgs/experiences/stardevs.webp"
                  alt="StarDevs Logo"
                  class="w-full h-full object-cover"
                />
              </div>
              <div>
                <p class="text-2xl font-semibold text-gray-200">
                  StarDevs - Developers Marketplace
                </p>
              </div>
            </div>
            <div class="text-sm text-gray-400 leading-relaxed mb-4">
              <p>
                A marketplace for developers to connect with clients or other
                developers for collaboration on projects, coding tasks, and
                more.
              </p>
            </div>
            <div class="mt-auto">
              <p class="text-sm text-gray-500">Role: Bot Developer</p>
              <p class="text-sm text-gray-500">Timeline: 2025-</p>
            </div>
          </div>
        </div>
      </section>`,

    techstack: `
         <section
        id="techstack"
        class="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 fade-in justify-items-center"
      >
        <div class="flex flex-wrap justify-center gap-6 p-6">
          <div
            class="flex items-center gap-6 rounded-lg border-1 border-black-200 bg-gray-900 w-75"
          >
            <div
              class="p-6 bg-gray-800 rounded-full w-24 h-24 flex items-center justify-center"
            >
              <img
                src="imgs/javascript-logo.webp"
                alt="JavaScript logo"
                class="w-20 h-20 object-contain"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-wrap justify-center gap-6 p-6">
          <div
            class="flex items-center gap-6 rounded-lg border-1 border-black-200 bg-gray-900 w-75"
          >
            <div
              class="p-6 bg-gray-800 rounded-full w-24 h-24 flex items-center justify-center"
            >
              <img
                src="imgs/html-logo.webp"
                alt="JavaScript logo"
                class="w-20 h-20 object-contain"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-wrap justify-center gap-6 p-6">
          <div
            class="flex items-center gap-6 rounded-lg border-1 border-black-200 bg-gray-900 w-75"
          >
            <div
              class="p-6 bg-gray-800 rounded-full w-24 h-24 flex items-center justify-center"
            >
              <img
                src="imgs/css-logo.webp"
                alt="JavaScript logo"
                class="w-20 h-20 object-contain"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-wrap justify-center gap-6 p-6">
          <div
            class="flex items-center gap-6 rounded-lg border-1 border-black-200 bg-gray-900 w-75"
          >
            <div
              class="p-6 bg-gray-800 rounded-full w-24 h-24 flex items-center justify-center"
            >
              <img
                src="imgs/djs.png"
                alt="JavaScript logo"
                class="w-20 h-20 object-contain"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-wrap justify-center gap-6 p-6">
          <div
            class="flex items-center gap-6 rounded-lg border-1 border-black-200 bg-gray-900 w-75"
          >
            <div
              class="p-6 bg-gray-800 rounded-full w-24 h-24 flex items-center justify-center"
            >
              <img
                src="imgs/node-logo.webp"
                alt="JavaScript logo"
                class="w-20 h-20 object-contain"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-wrap justify-center gap-6 p-6">
          <div
            class="flex items-center gap-6 rounded-lg border-1 border-black-200 bg-gray-900 w-75"
          >
            <div
              class="p-6 bg-gray-800 rounded-full w-24 h-24 flex items-center justify-center"
            >
              <img
                src="imgs/mongodb.png"
                alt="JavaScript logo"
                class="w-20 h-20 object-contain"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-wrap justify-center gap-6 p-6">
          <div
            class="flex items-center gap-6 rounded-lg border-1 border-black-200 bg-gray-900 w-75"
          >
            <div
              class="p-6 bg-gray-800 rounded-full w-24 h-24 flex items-center justify-center"
            >
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"/></svg>
            </div>
          </div>
        </div>
      </section>`,

    projects: `
      <div class="flex items-center p-6 bg-gray-900 rounded-lg shadow-lg">
        <div class="flex gap-6 overflow-x-auto pb-4">
          <div
            class="flex-shrink-0 w-60 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            <div
              class="relative mb-6 flex justify-center items-center rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300"
            >
              <img
                src="imgs/projects/liteclash.webp"
                alt="LiteClash Icon"
                class="w-12 h-12 rounded-full object-cover shadow-md"
              />
            </div>
            <h4 class="text-lg font-medium text-white">LiteClash</h4>
            <p class="text-gray-400 text-sm">
              The main Discord bot for LiteClash maintained by me.
            </p>
          </div>

          <div
            class="flex-shrink-0 w-60 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            <div
              class="relative mb-6 flex justify-center items-center rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300"
            >
              <img
                src="imgs/projects/liteclash.webp"
                alt="LiteClash Helper Icon"
                class="w-12 h-12 rounded-full object-cover shadow-md"
              />
            </div>
            <h4 class="text-lg font-medium text-white">LiteClash Helper</h4>
            <p class="text-gray-400 text-sm">
              Helper bot for giveaways, tickets, XP system, and vanity system
              for LiteClash.
            </p>
          </div>

          <div
            class="flex-shrink-0 w-60 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            <div
              class="relative mb-6 flex justify-center items-center rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300"
            >
              <img
                src="imgs/projects/night.webp"
                alt="Night Icon"
                class="w-12 h-12 rounded-full object-cover shadow-md"
              />
            </div>
            <h4 class="text-lg font-medium text-white">night ♱</h4>
            <p class="text-gray-400 text-sm">
              A Discord bot for handling tickets and custom commands.
            </p>
          </div>

          <div
            class="flex-shrink-0 w-60 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            <div
              class="relative mb-6 flex justify-center items-center rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300"
            >
              <img
                src="imgs/projects/riel's robux.webp"
                alt="Riel's Robux Icon"
                class="w-12 h-12 rounded-full object-cover shadow-md"
              />
            </div>
            <h4 class="text-lg font-medium text-white">Riel's Robux</h4>
            <p class="text-gray-400 text-sm">
              A Discord bot with a giveaway system, ticket system, vouch system,
              and Robux leaderboard.
            </p>
          </div>

          <div
            class="flex-shrink-0 w-60 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            <div
              class="relative mb-6 flex justify-center items-center rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300"
            >
              <img
                src="imgs/projects/swish.webp"
                alt="Swish Icon"
                class="w-12 h-12 rounded-full object-cover shadow-md"
              />
            </div>
            <h4 class="text-lg font-medium text-white">Swish</h4>
            <p class="text-gray-400 text-sm">
              A ticket bot with Roblox username scanning, queue system, and
              button-handled controls.
            </p>
          </div>
          <div
            class="flex-shrink-0 w-60 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            <div
              class="relative mb-6 flex justify-center items-center rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300"
            >
              <img
                src="imgs/projects/stardevs.webp"
                alt="Swish Icon"
                class="w-12 h-12 rounded-full object-cover shadow-md"
              />
            </div>
            <h4 class="text-lg font-medium text-white">
              StarDevs Bot + ModMail
            </h4>
            <p class="text-gray-400 text-sm">
              A posting bot with acceptance system, with a modmail system and a
              website for transcripts.
            </p>
          </div>
        </div>
      </div>`,
  };

  const contentSection = document.getElementById("contentSection");

  setTimeout(() => {
    contentSection.innerHTML = content.about;
    contentSection.classList.add("fade-in");

    setTimeout(() => {
      contentSection.classList.remove("fade-in");
    }, 600);
  }, 100);

  const validSections = ["about", "experience", "techstack", "projects"];

  document.querySelectorAll("nav ul li").forEach((item) => {
    if (validSections.includes(item.id)) {
      item.addEventListener("click", () => {
        const section = item.id;

        contentSection.classList.add("fade-out");

        setTimeout(() => {
          if (content[section]) {
            contentSection.innerHTML = content[section];
          }
          contentSection.classList.remove("fade-out");
          contentSection.classList.add("fade-in");

          setTimeout(() => {
            contentSection.classList.remove("fade-in");
          }, 500);
        }, 500);
      });
    }
  });
});
