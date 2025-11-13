import React from "react";

export function Skills() {
  return (
    <>
      <section
        id="skills"
        className="min-h-screen flex flex-col items-center justify-center text-center"
      >
        <h2 className="text-4xl font-bold text-primary mb-6">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-foreground/80">
          <li>React</li>
          <li>JavaScript</li>
          <li>Tailwind CSS</li>
          <li>Python</li>
          <li>Git</li>
          <li>HTML & CSS</li>
          <li>UI/UX Design</li>
          <li>Node.js</li>
        </ul>
      </section>
    </>
  );
}
