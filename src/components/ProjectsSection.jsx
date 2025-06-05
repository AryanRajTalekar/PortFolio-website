import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "ThinkStack - LMS Web Application",
    description:
      "A learning management system currently under construction, designed to organize course content and track user progress effectively.",
    image: "/projects/lms.png",
    tags: ["React", "Express", "Redux RTK Query"],
    demoUrl: "https://github.com/AryanRajTalekar/ThinkStack",
    gitHubUrl: "https://github.com/AryanRajTalekar/ThinkStack",
  },
  {
    id: 2,
    title: "Library Management System",
    description:
      "A GUI-based Python application for managing library operations like book lending, returns, and member records using Tkinter.",
    image: "/projects/library_management_app (2).png",
    tags: ["Python", "Tkinter"],
    demoUrl: "-",
    gitHubUrl: "https://github.com/AryanRajTalekar/library_management_system",
  },
  {
    id: 3,
    title: "Bank Management System",
    description:
      "A desktop banking application built using Java Swing, supporting account creation, transaction history, and customer data management.",
    image: "/projects/bank_management.png",
    tags: ["Java", "Swing", "OOP"],
    demoUrl: "-",
    gitHubUrl: "https://github.com/AryanRajTalekar/Bank-Management-Project",
  },

  {
    id: 4,
    title: "Password Generator",
    description:
      "A password generator app focusing on React Hooks like `useState`, `useRef`, and `useEffect`.",
    image: "/projects/password-generator.png",
    tags: ["React", "Hooks", "JavaScript"],
    demoUrl: "https://password-generator-597m.vercel.app/",
    gitHubUrl: "https://github.com/AryanRajTalekar/Password-Generator",
  },
  {
    id: 5,
    title: "Redux Counter Project",
    description:
      "A basic counter app built with Redux Toolkit to demonstrate state management patterns in a clean and scalable way.",
    image: "/projects/redux-counter (1).png",
    tags: ["React", "Redux Toolkit"],
    demoUrl: "https://counter-in-react-using-redux-toolki-iota.vercel.app/",
    gitHubUrl:
      "https://github.com/AryanRajTalekar/Counter_In_react_Using_redux_toolkit",
  },
  {
    id: 6,
    title: "Uber Clone",
    description: "A full-stack ride-booking platform inspired by Uber.",
    image: "/projects/cropped-Uber_Clone.jpeg",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    demoUrl: "-",
    gitHubUrl: "https://github.com/AryanRajTalekar/uber_clone_resume_project",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A showcase of my recent projects that reflect my learning journey and
          practical experience. Some are still in progress, but each highlights
          my focus on clean UI, full-stack functionality, and a drive to explore
          new technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="rounded-full px-2 py-1 border text-xs font-medium bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm ">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.gitHubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/AryanRajTalekar"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"

          >
            Check My GitHUb
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
