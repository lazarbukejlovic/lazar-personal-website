import { motion } from "framer-motion";

interface ExperienceEntry {
  company: string;
  title: string;
  period: string;
  points: string[];
}

const EXPERIENCE: ExperienceEntry[] = [
  {
    company: "TokenFlow",
    title: "Full-Stack Engineer",
    period: "February 2025 – Present",
    points: [
      "Working across multiple project streams in a client-facing development environment, balancing parallel priorities while delivering clean, usable product work.",
      "Building and maintaining modern interfaces alongside backend-connected flows with strong attention to structure, usability, and execution quality.",
      "Handling client communication, project coordination, and managing multiple delivery tracks simultaneously.",
      "Strong preference toward UI/UX-oriented product work and interface quality inside broader full-stack delivery.",
    ],
  },
  {
    company: "Private Clients",
    title: "Freelance Full-Stack Engineer",
    period: "December 2023 – February 2025",
    points: [
      "Delivered custom applications for private clients in finance-oriented and digital asset-related environments.",
      "Built dashboard-based systems for internal fund tracking, business entry workflows, operational visibility, and payment/subscription handling.",
      "Replaced manual spreadsheet-based processes with structured software workflows used internally on a daily basis.",
      "This period accelerated the practical application of engineering skills and contributed directly to building a portfolio of 10+ shipped product projects.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20 py-20">
      <div className="section-container">
        <h2 className="font-heading text-sm font-medium tracking-widest uppercase text-primary">
          Experience
        </h2>

        <div className="mt-10 space-y-12">
          {EXPERIENCE.map((entry, i) => (
            <motion.article
              key={entry.company}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative border-l-2 border-border pl-8"
            >
              {/* Timeline dot */}
              <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-primary bg-background" />

              <p className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                {entry.period}
              </p>
              <h3 className="mt-1 font-heading text-xl font-semibold text-foreground">
                {entry.company}
              </h3>
              <p className="mt-0.5 text-sm font-medium text-primary">
                {entry.title}
              </p>

              <ul className="mt-4 space-y-2">
                {entry.points.map((point, j) => (
                  <li
                    key={j}
                    className="text-sm leading-relaxed text-muted-foreground"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
