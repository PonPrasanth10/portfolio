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

export const Experience = () => (
  <SectionWrapper id="experience">
    <div className="mb-10 md:mb-14">
      <h2 className="text-3xl md:text-4xl font-bold mb-3">
        <span className="text-white">Work Experience</span>
      </h2>
      <p className="text-textSecondary max-w-2xl text-sm md:text-base">
        Professional timeline highlighting my journey in software development.
      </p>
    </div>

    {/* items-stretch makes both columns equal height */}
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 lg:items-stretch">

      {/* LEFT — Image fills full height */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full lg:w-[42%] flex-shrink-0"
      >
        <div
          className="relative w-full h-64 sm:h-80 lg:h-full min-h-[300px] rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <img
            src="https://res.cloudinary.com/dipyjuboz/image/upload/v1777688625/portfolio_fs_image_wsbbpg.png"
            alt="Freelance Full Stack Developer"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          {/* Bottom gradient overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 h-28"
            style={{ background: "linear-gradient(to top, rgba(31,36,48,0.9), transparent)" }}
          />
          {/* Available badge */}
          <div className="absolute bottom-4 left-4">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-white"
              style={{
                backgroundColor: "rgba(138,143,149,0.25)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for work
            </div>
          </div>
        </div>
      </motion.div>

      {/* RIGHT — Card fills full height */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="w-full lg:flex-1 flex"
      >
        <motion.div
          whileHover={{ y: -4, boxShadow: "0 0 32px rgba(255,255,255,0.07)" }}
          transition={{ duration: 0.25 }}
          className="glass-card p-6 md:p-8 w-full flex flex-col"
        >
          {/* Timeline dot + role header */}
          <div className="flex items-start gap-4 mb-6">
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
          </div>

          {/* Divider */}
          <div className="w-full h-px mb-6" style={{ backgroundColor: "rgba(255,255,255,0.07)" }} />

          {/* Bullet points — flex-1 so they fill remaining height */}
          <ul className="space-y-4 flex-1">
            {experiences[0].description.map((item, i) => (
              <li key={i} className="flex items-start text-textSecondary text-sm leading-relaxed">
                <span className="mr-3 mt-[7px] w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          {/* Bottom tag */}
          <div className="mt-6 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "MongoDB", "Tailwind CSS", "Express.js"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full text-textSecondary"
                  style={{ backgroundColor: "#2F2F2F", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </SectionWrapper>
);
