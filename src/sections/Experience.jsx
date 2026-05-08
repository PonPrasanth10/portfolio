import { motion } from "framer-motion";
import { SectionWrapper } from "../components/SectionWrapper";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    period: "Sep 2025 – Present",
    location: "Remote",
    description: [
      "Delivered end-to-end MERN stack projects focusing on performance and user experience.",
      "Built an SEO-optimized restaurant website to increase local discoverability.",
      "Developed a complete food e-commerce platform including shopping cart and secure payment gateways.",
      "Created responsive, pixel-perfect user interfaces using React and Tailwind CSS.",
    ],
  },
];

const bulletVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" },
  }),
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, delay: i * 0.06, ease: "easeOut" },
  }),
};

export const Experience = () => (
  <SectionWrapper id="experience">
    <motion.div
      className="mb-10 md:mb-14"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-3">
        <span className="text-white">Work Experience</span>
      </h2>
      <p className="text-textSecondary max-w-2xl text-sm md:text-base">
        Professional timeline highlighting my journey in software development.
      </p>
    </motion.div>

    <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 lg:items-stretch">

      {/* LEFT — Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full lg:w-[42%] flex-shrink-0"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative w-full h-64 sm:h-80 lg:h-full min-h-[300px] rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <img
            src="https://res.cloudinary.com/dipyjuboz/image/upload/v1777688625/portfolio_fs_image_wsbbpg.png"
            alt="Freelance Full Stack Developer"
            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-28"
            style={{ background: "linear-gradient(to top, rgba(31,36,48,0.9), transparent)" }}
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-4 left-4"
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-white"
              style={{ backgroundColor: "rgba(138,143,149,0.25)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for work
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* RIGHT — Card */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        className="w-full lg:flex-1 flex"
      >
        <motion.div
          whileHover={{ y: -4, boxShadow: "0 0 36px rgba(255,255,255,0.07)" }}
          transition={{ duration: 0.25 }}
          className="glass-card p-6 md:p-8 w-full flex flex-col"
        >
          {/* Header */}
          <motion.div
            className="flex items-start gap-4 mb-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-accent mt-1"
              style={{ backgroundColor: "#1F2430", border: "2px solid rgba(138,143,149,0.4)" }}
            >
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <span className="flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-accent">
                  <Calendar className="w-3 h-3" />
                  {experiences[0].period}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-textSecondary">
                  <MapPin className="w-3 h-3" />
                  {experiences[0].location}
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white">{experiences[0].role}</h3>
              <h4 className="text-textSecondary text-sm font-medium mt-0.5">{experiences[0].company}</h4>
            </div>
          </motion.div>

          <div className="w-full h-px mb-6" style={{ backgroundColor: "rgba(255,255,255,0.07)" }} />

          {/* Bullet points — staggered slide-in */}
          <ul className="space-y-4 flex-1">
            {experiences[0].description.map((item, i) => (
              <motion.li
                key={i}
                custom={i}
                variants={bulletVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-start text-textSecondary text-sm leading-relaxed"
              >
                <motion.span
                  className="mr-3 mt-[7px] w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.1, type: "spring", stiffness: 400 }}
                />
                {item}
              </motion.li>
            ))}
          </ul>

          {/* Tags — staggered pop-in */}
          <div className="mt-6 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "MongoDB", "Tailwind CSS", "Express.js"].map((tag, i) => (
                <motion.span
                  key={tag}
                  custom={i}
                  variants={tagVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.08 }}
                  className="text-xs px-3 py-1 rounded-full text-textSecondary cursor-default"
                  style={{ backgroundColor: "#2F2F2F", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </SectionWrapper>
);
