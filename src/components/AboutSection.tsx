import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <h2 className="font-heading text-sm font-medium tracking-widest uppercase text-primary">
            About
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Full-Stack Engineer focused on building modern product
              applications with strong frontend execution and practical backend
              architecture.
            </p>
            <p>
              My experience includes product development at TokenFlow and direct
              delivery for private clients in finance-oriented and digital
              asset-related environments.
            </p>
            <p>
              I work best in ownership-driven environments where clean
              implementation, usability, communication, and full application
              flow all matter.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
