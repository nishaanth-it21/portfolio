const Project = () => {
  return (
    <div id="project" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          My Projects
        </h1>

        {/* Project 1 and 2 in one row */}
        <div className="flex flex-col md:flex-col gap-10">
          {/* Blog Website Project */}
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              Blog Website
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A full-stack MERN blog website that allows users to create, edit,
              and manage blogs seamlessly. It features user authentication, rich
              text editing, and a dynamic dashboard for managing posts. Built
              with MongoDB, Express, React, and Node.js, it ensures a smooth and
              interactive blogging experience.
            </p>
            <a
              href="https://github.com/nishaanth-it21/mernblog"
              className="text-[#fe5617] font-bold text-lg hover:underline"
            >
              GitHub URL
            </a>
          </div>

          {/* Music Streaming Platform Project */}
          <div className="w-full md:w-1/2 flex flex-col place-self-end bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">
              Music Streaming Platform
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A music streaming platform built using React, Tailwind CSS, and
              MongoDB, integrating the JioSaavn API to fetch and stream songs.
              It features a modern UI, seamless playback, and playlist
              management for an enhanced user experience. The platform ensures
              smooth performance and responsiveness across devices.
            </p>
            <a
              href="https://github.com/DhineshKrishnan1206/Music-Streaming-website"
              className="text-[#fe5617] text-center font-bold text-lg hover:underline"
            >
              GitHub URL
            </a>
          </div>
        </div>

        {/* Memory Game Project */}
        <div className="flex flex-col md:flex-col gap-10">
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              Memory Game
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A memory game built using JavaScript, HTML, and CSS, designed to
              test and improve memory skills. Players match pairs of cards with
              a smooth and interactive UI. The game includes shuffle mechanics,
              timer, and score tracking for an engaging experience.
            </p>
            <a
              href="https://github.com/nishaanth-it21/javascript-projects/tree/main/memorygame"
              className="text-[#fe5617] font-bold text-lg hover:underline"
            >
              GitHub URL
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
