import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

interface Project {
  title: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
}

const PROJECTS: Project[] = [
  {
    title: "EchoRoom",
    description:
      "A social communication app where posts become conversations through feed interaction, profiles, direct messaging, discovery, and live discussion rooms.",
    liveUrl: "https://echoroomlive.lovable.app",
    githubUrl: "https://github.com/lazarbukejlovic/echoroom",
  },
  {
    title: "Foundry Studios",
    description:
      "A booking and payments product centered on service flows, scheduling logic, and polished user-facing structure.",
    liveUrl: "https://foundry-studios.lovable.app",
    githubUrl: "https://github.com/lazarbukejlovic/foundry-studios",
  },
  {
    title: "ClientFlow",
    description:
      "A business operations platform for client management, project workflows, invoicing, and dashboard visibility.",
    liveUrl: "https://useclientflow.lovable.app",
    githubUrl: "https://github.com/lazarbukejlovic/clientflow",
  },
  {
    title: "RoomPulse",
    description:
      "A workflow execution platform focused on task visibility, progress tracking, structured operations, and responsive product UX.",
    liveUrl: "https://pulse-board-flow.lovable.app",
    githubUrl: "https://github.com/lazarbukejlovic/roompulse",
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-20 py-20">
      <div className="section-container">
        <h2 className="font-heading text-sm font-medium tracking-widest uppercase text-primary">
          Selected Work
        </h2>

        <div className="mt-10 space-y-6">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex flex-col gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/30 sm:flex-row sm:items-start sm:justify-between"
            >
              <div className="max-w-lg">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>

              <div className="flex shrink-0 gap-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-secondary"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-secondary"
                >
                  <Code2 size={14} />
                  GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
