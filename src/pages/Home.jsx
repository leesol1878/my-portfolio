import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Intro } from "../components/sections/Intro";
import { About } from "../components/sections/About";
import { Skills } from "../components/sections/Skills";
import { Projects } from "../components/sections/Projects";
import { Contact } from "../components/sections/Contact";

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main className="pt-24 space-y-40">
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer var1={"value 1"} var2={{ test: "test" }} />
    </div>
  );
};
