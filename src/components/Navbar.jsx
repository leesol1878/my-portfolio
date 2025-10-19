import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={cn(
          'fixed w-full z-40 transition-all duration-300',
          isScrolled
            ? 'py-3 bg-background/80 backdrop-blur-md shadow-xs'
            : 'py-5'
        )}
      >
        <div className="container flex items-center justify-between">
          <a className="text-xl font-bold text-primary flex items-center">
            <span className="relative z-10">
              <span className="text-glow text-foreground">TSION SOLOMON</span> PORTFOLIO
            </span>
          </a>

          {/* NAVIGATION MENU */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* PAGE SECTIONS */}
      <main className="pt-24 space-y-40">
        <section id="home" className="min-h-screen flex items-center justify-center text-center">
          <div>
            <h1 className="text-5xl font-bold text-primary mb-4">Welcome to My Portfolio</h1>
            <p className="text-foreground/70 text-lg">I'm Tsion Solomon — a passionate developer crafting creative digital solutions.</p>
          </div>
        </section>

        <section id="about" className="min-h-screen flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">About Me</h2>
          <p className="max-w-2xl text-foreground/70">
            I’m a front-end developer with a love for clean design, interactive interfaces, and building beautiful, functional web apps.
          </p>
        </section>

        <section id="skills" className="min-h-screen flex flex-col items-center justify-center text-center">
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

        <section id="projects" className="min-h-screen flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">Projects</h2>
          <p className="text-foreground/70">Coming soon! Stay tuned for my latest work 👩‍💻</p>
        </section>

        <section id="contact" className="min-h-screen flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">Contact Me</h2>
          <p className="text-foreground/70 mb-4">Let’s connect and build something amazing together!</p>
          <a
            href="mailto:tsionsolomon@example.com"
            className="bg-primary text-background py-2 px-6 rounded-lg hover:bg-primary/80 transition"
          >
            Send Email
          </a>
        </section>
      </main>
    </>
  );
};
