import { motion } from "framer-motion";
import { SectionWrapper } from "../components/SectionWrapper";
import { Code2, Briefcase, BrainCircuit } from "lucide-react";

const highlights = [
  {
    icon: <Code2 className="w-7 h-7 text-accent mb-3" />,
    title: "300+ LeetCode",
    desc: "Problems solved, demonstrating strong data structures and algorithmic skills.",
  },
  {
    icon: <Briefcase className="w-7 h-7 text-accent mb-3" />,
    title: "Freelance Dev",
    desc: "Experience building scalable MERN stack apps and responsive web interfaces.",
  },
  {
    icon: <BrainCircuit className="w-7 h-7 text-accent mb-3" />,
    title: "AI/ML Projects",
    desc: "Built privacy-preserving ML systems and scalable AI applications.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const About = () => (
  <SectionWrapper id="about">
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start lg:items-center">
      {/* Text */}
      <div className="flex-1 w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="text-white">About Me</span>
        </h2>
        <p className="text-textSecondary text-base md:text-lg leading-relaxed mb-5">
          I am a third-year AI &amp; ML student passionate about bridging the gap between cutting-edge artificial intelligence and robust full-stack development. I specialize in creating privacy-preserving ML systems, secure architectures, and elegant, user-centric web applications.
        </p>
        <p className="text-textSecondary text-base md:text-lg leading-relaxed">
          Whether I'm fine-tuning a neural network, solving algorithmic challenges, or crafting a seamless user interface, my goal is always to build scalable and impactful solutions.
        </p>
      </div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex-1 w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4"
      >
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -4, scale: 1.02 }}
            className="glass-card p-5 md:p-6 transition-all duration-300"
          >
            {item.icon}
            <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
            <p className="text-sm text-textSecondary leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </SectionWrapper>
);
