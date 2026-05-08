import { motion } from "framer-motion";
import { SectionWrapper } from "../components/SectionWrapper";

const skillCategories = [
  { title: "ML & AI", skills: ["PyTorch", "CNNs", "Computer Vision", "Federated Learning", "Differential Privacy"] },
  { title: "Data", skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn"] },
  { title: "Languages", skills: ["Python", "JavaScript", "Java", "C++", "SQL"] },
  { title: "Backend", skills: ["Node.js", "Express.js", "Spring Boot"] },
  { title: "Frontend", skills: ["React", "Zustand", "Tailwind CSS"] },
  { title: "DevOps", skills: ["Docker", "AWS (EC2, S3)", "Git"] },
];

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, delay: i * 0.05, ease: "easeOut" },
  }),
};

export const Skills = () => (
  <SectionWrapper id="skills">
    <motion.div
      className="text-center mb-12 md:mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="text-white">Technical Skills</span>
      </h2>
      <p className="text-textSecondary max-w-2xl mx-auto text-sm md:text-base">
        A comprehensive toolkit spanning artificial intelligence, full-stack web development, and deployment architecture.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
      {skillCategories.map((category, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
          whileHover={{ y: -5, boxShadow: "0 0 32px rgba(255,255,255,0.07)" }}
          className="glass-card p-5 md:p-6 cursor-default"
        >
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 + 0.2 }}
            className="text-base md:text-lg font-semibold mb-4 text-white pb-2"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            {category.title}
          </motion.h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, sIdx) => (
              <motion.span
                key={sIdx}
                custom={sIdx}
                variants={pillVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.08, boxShadow: "0 0 14px rgba(255,255,255,0.1)" }}
                className="px-3 py-1.5 rounded-full text-textPrimary text-xs md:text-sm font-medium cursor-default hover:text-white transition-colors"
                style={{ backgroundColor: "#2F2F2F", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);
