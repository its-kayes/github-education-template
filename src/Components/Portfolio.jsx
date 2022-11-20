/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";
// import image from "../images/kayes-with-laptop.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Before my internship begins, I work on a few projects 🎉",
    description:
      "Collaboration to create a beginner friendly project to help explain Web development and tooling to get started.",
    url: "https://emrul-kayes.live/project",
  },
  {
    title: "More about me",
    description:
      "Reading the documentation for other things in addition to programming.",
    url: "https://emrul-kayes.live/aboutme",
  },
  {
    title: "Resume find",
    description:
      "Team player with self-motivation and a grasp for learning new skills. quick learner and a good team player.",
    url: "https://drive.google.com/file/d/12hfLgaOUyxGkREqni8iDFLlmFNUKSC15/view?usp=sharing",
  },
  {
    title: "Checkout On GitHub.",
    description:
      "Github is a place where I can share my work with the world. I also use it to collaborate with others on projects.",
    url: "https://github.com/its-kayes",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            // <div key={project.title}>
              <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
