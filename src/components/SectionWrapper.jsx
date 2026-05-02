import { motion } from "framer-motion";

export const SectionWrapper = ({ children, id, className = "" }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full py-20 md:py-28 ${className}`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {children}
      </div>
    </motion.section>
  );
};
