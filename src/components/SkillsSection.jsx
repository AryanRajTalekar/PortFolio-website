import React, { useState } from "react";
import { cn } from "../lib/utils";

const Skills = [
  { name: "HTML/CSS", level: 85, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React.js", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express.js", level: 80, category: "backend" },
  { name: "MongoDB", level: 75, category: "database" },
  { name: "Java", level: 85, category: "backend" },
  { name: "Git & GitHub", level: 80, category: "tools" },
  { name: "Figma", level: 70, category: "tools" },
  { name: "Machine Learning (Python)", level: 65, category: "ml" },
  { name: "REST APIs", level: 80, category: "backend" },
];

const categories = ["all", "frontend", "backend", "ml", "tools", "database"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? Skills
      : Skills.filter(
          (skill) =>
            skill.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 text-sm capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card p-6 rounded-xl shadow-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold mb-1">{skill.name}</h3>
              <div className="w-full bg-muted rounded-full h-2 mb-2 overflow-hidden">
                <div
                  className="bg-primary h-2 transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="text-sm text-muted-foreground">{skill.level}% proficiency</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
