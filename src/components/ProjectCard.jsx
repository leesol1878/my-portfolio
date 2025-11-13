import React from "react";
import { GitHub, ExternalLink } from "lucide-react";

function ProjectCard({ input }) {
  return (
    <div
      className="h-full flex flex-col justify-between p-4 rounded-lg shadow-sm border transition-shadow hover:shadow-lg"
      style={{
        background: "var(--color-card)",
        color: "var(--color-foreground)",
        borderColor: "var(--color-border)",
      }}
    >
      <div>
        <h3 className="text-lg font-semibold" style={{ color: "var(--color-primary)" }}>
          {input?.title}
        </h3>
        <p className="text-sm mt-2" style={{ color: "var(--color-foreground)", opacity: 0.95 }}>
          {input?.description}
        </p>
        {input?.tech && (
          <div className="flex flex-wrap gap-2 mt-3">
            {input.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded-md"
                style={{ background: "rgba(0,0,0,0.03)", color: "var(--color-foreground)" }}
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex gap-3 mt-4 items-center">
        {input?.repoUrl && (
          <a
            href={input.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm underline"
            style={{ color: "var(--color-primary)" }}
          >
            <GitHub size={16} />
            <span>Repo</span>
          </a>
        )}
        {input?.liveUrl && (
          <a
            href={input.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm underline"
            style={{ color: "var(--color-primary)" }}
          >
            <ExternalLink size={16} />
            <span>Live</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
