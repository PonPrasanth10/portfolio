import { motion } from "framer-motion";
import { SectionWrapper } from "../components/SectionWrapper";
import { ArrowRight } from "lucide-react";

const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const projects = [
  {
    title: "Secure Federated Learning for Medical Diagnostics",
    description:
      "A TensorFlow-based federated system utilizing FedAvg with Differential Privacy (ε ≈ 5.0) and Secure Aggregation (SMPC), achieving 90–95% accuracy on distributed diagnostic datasets without compromising patient privacy.",
    tags: ["TensorFlow", "Federated Learning", "Python", "Differential Privacy", "SMPC"],
    github: "https://github.com/PonPrasanth10",
    image: "https://res.cloudinary.com/dipyjuboz/image/upload/v1777688859/federated_learning_img_q1np1l.png",
  },
  {
    title: "Interview Prep AI",
    description:
      "An AI-powered interview question generator built with the MERN stack and Zustand state management. Leverages the Gemini API and advanced prompt engineering via a scalable backend to provide tailored preparation experiences.",
    tags: ["MERN", "Zustand", "Gemini API", "Node.js", "Prompt Engineering"],
    github: "https://github.com/PonPrasanth10",
    image: "https://res.cloudinary.com/dipyjuboz/image/upload/v1777689053/interview_prep_img_cgfjxf.png",
  },
];

export const Projects = () => (
  <SectionWrapper id="projects">
    <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 md:mb-16 gap-4">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          <span className="text-white">Featured Projects</span>
        </h2>
        <p className="text-textSecondary max-w-2xl text-sm md:text-base">
          A selection of my recent work focusing on scalable machine learning systems and intelligent web applications.
        </p>
      </div>
      <a
        href="https://github.com/PonPrasanth10"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-textSecondary hover:text-white transition-colors text-sm whitespace-nowrap flex-shrink-0"
      >
        View all on GitHub <ArrowRight className="w-4 h-4" />
      </a>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
      {projects.map((project, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.15, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="glass-card group flex flex-col overflow-hidden transition-shadow duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.06)]"
        >
          {/* Image — fixed aspect ratio 16/9 */}
          <div className="w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-5 md:p-6">
            {/* Title + GitHub */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="text-base md:text-lg font-bold text-white group-hover:text-accent transition-colors leading-snug">
                {project.title}
              </h3>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textSecondary hover:text-white transition-colors flex-shrink-0 mt-0.5"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              )}
            </div>

            <p className="text-textSecondary text-sm leading-relaxed mb-5 flex-grow">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-xs font-medium px-3 py-1 rounded-full text-textSecondary"
                  style={{ border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "rgba(31,36,48,0.8)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);
