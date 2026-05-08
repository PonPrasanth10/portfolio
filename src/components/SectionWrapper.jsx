import { motion } from "framer-motion";

export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

export const SectionWrapper = ({ children, id, className = "" }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className={`w-full py-20 md:py-28 ${className}`}
  >
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
      {children}
    </div>
  </motion.section>
);
