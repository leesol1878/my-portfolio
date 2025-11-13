import React from "react";

export function Contact() {
  return (
    <>
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center text-center"
      >
        <h2 className="text-4xl font-bold text-primary mb-6">Contact Me</h2>
        <p className="text-foreground/70 mb-4">
          Let’s connect and build something amazing together!
        </p>
        <a
          href="mailto:tsionsolomon@example.com"
          className="bg-primary text-background py-2 px-6 rounded-lg hover:bg-primary/80 transition"
        >
          Send Email
        </a>
      </section>
    </>
  );
}
