import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
  // Deployed projects/link go here
  const [projects] = useState([
    {
      name: "URL Regex Tutorial",
      description: "Simple gist explaining the use of the URL regex",
      repo: "https://github.com/UnbindingNote/Regex-Tutorial-URL-",
    },
    {
      name: "PWA Text Editor",
      description:
        "Text editor w/ local installation available as a progressive web app",
      repo: "https://github.com/UnbindingNote/PWA-Text-Editor",
    },
    {
      name: "Coding Quiz",
      description: "Short-ish timed quiz for web dev trivia",
      link: "https://unbindingnote.github.io/Coding-Quiz-/",
      repo: "https://github.com/UnbindingNote/Coding-Quiz-",
    },
    {
      name: "READme Generator",
      description:
        "Short and sweet READme generator that runs in the command line",
      repo: "https://github.com/UnbindingNote/READme-Gen",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
