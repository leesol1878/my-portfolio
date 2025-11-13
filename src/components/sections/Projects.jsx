import ProjectCard from "../ProjectCard";

export const Projects = () => {
  const ProjectList = [
    {
      title: "Personal Portfolio",
      description:
        "The website you're viewing — a fast, responsive portfolio built with React, Vite and Tailwind CSS. Shows projects, skills and contact information.",
      tech: ["React", "Vite", "Tailwind CSS"],
      repoUrl: "https://github.com/leesol1878/my-portfolio",
      liveUrl: "https://your-domain.example.com",
    },
    {
      title: "TaskMaster — Task Manager",
      description:
        "A full-stack task management app with user authentication, realtime updates and drag-and-drop task boards.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
      repoUrl: "https://github.com/leesol1878/taskmaster",
      liveUrl: "https://taskmaster.example.com",
    },
    {
      title: "WeatherNow — Weather App",
      description:
        "Small SPA that fetches weather data from the OpenWeather API and displays forecasts, location search, and unit toggles.",
      tech: ["React", "Fetch API", "OpenWeather API"],
      repoUrl: "https://github.com/leesol1878/weathernow",
      liveUrl: "https://weathernow.example.com",
    },
    {
      title: "ShopMock — E-commerce Demo",
      description:
        "An e-commerce front-end demo showcasing product pages, cart flow and a Stripe-based checkout integration (mock).",
      tech: ["Next.js", "Stripe", "Tailwind CSS"],
      repoUrl: "https://github.com/leesol1878/shopmock",
      liveUrl: "https://shopmock.example.com",
    },
  ];
  return (
    <>
      <section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center text-center"
      >
        <h2 className="text-4xl font-bold text-primary mb-6">Projects</h2>
        <p className="text-foreground/70">
          Coming soon! Stay tuned for my latest work 👩‍💻
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 w-full max-w-5xl mx-auto place-items-stretch px-4">
          {ProjectList.map((project) => (
            <ProjectCard key={project.title} input={project} />
          ))}
        </div>
      </section>
    </>
  );
};
