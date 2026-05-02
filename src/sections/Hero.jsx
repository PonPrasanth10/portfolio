import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const TypewriterText = ({ texts }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];
    const typeSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      } else {
        setText(currentText.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, texts]);

  return (
    <span className="text-textSecondary border-r-2 border-accent pr-1">
      {text}
    </span>
  );
};

const scrollTo = (href) => {
  const el = document.getElementById(href.replace("#", ""));
  if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
};

export const Hero = () => {
  const roles = ["AI Engineer", "ML Developer", "Problem Solver", "Full Stack Developer"];

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full blur-[120px]"
          style={{ backgroundColor: "rgba(138,143,149,0.06)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], x: [0, -50, 0], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] -right-[10%] w-[50vw] h-[50vw] md:w-[30vw] md:h-[30vw] rounded-full blur-[100px]"
          style={{ backgroundColor: "rgba(59,130,246,0.05)" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-24 pb-20">
        {/* Two-column layout — stacks on mobile, side-by-side on lg+ */}
        <div className="flex flex-col-reverse lg:flex-row lg:items-stretch gap-10 lg:gap-16">

          {/* LEFT — Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex flex-col justify-center text-center lg:text-left items-center lg:items-start"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-accent font-medium tracking-[0.2em] text-sm mb-4 uppercase"
            >
              Hello, I'm
            </motion.p>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 tracking-tight text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(to right, #ffffff, #9FB4BD)" }}
            >
              Pon Prasanth R
            </h1>

            <div className="text-lg sm:text-xl md:text-2xl font-light mb-6 h-9 flex items-center">
              <TypewriterText texts={roles} />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-textSecondary text-sm sm:text-base leading-relaxed mb-8 max-w-lg"
            >
              Third-year AI &amp; ML student building privacy-preserving ML systems and scalable AI applications. 300+ LeetCode problems solved.
            </motion.p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); scrollTo("#projects"); }}
                className="px-7 py-3.5 rounded-full bg-white text-primary font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300 text-sm md:text-base"
              >
                View Projects <ArrowRight size={17} />
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
                className="px-7 py-3.5 rounded-full glass-card font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 text-sm md:text-base"
              >
                Contact Me <Mail size={17} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT — Profile image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-shrink-0 flex justify-center lg:justify-end"
          >
            {/* Outer glow ring */}
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl blur-2xl opacity-20"
                style={{ backgroundColor: "#8A8F95", transform: "scale(0.95)" }}
              />
              <div
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[460px] rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <img
                  src="https://res.cloudinary.com/dipyjuboz/image/upload/v1777690414/profile-img_lgrfsj.jpg"
                  alt="Pon Prasanth R"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                {/* Subtle bottom fade */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-20"
                  style={{ background: "linear-gradient(to top, rgba(31,36,48,0.6), transparent)" }}
                />
              </div>

              {/* Floating stat badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 sm:-left-6 px-4 py-2.5 rounded-xl text-sm font-medium text-white"
                style={{
                  backgroundColor: "rgba(31,36,48,0.9)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <span className="text-accent font-bold text-base">300+</span>
                <span className="text-textSecondary ml-1.5 text-xs">LeetCode</span>
              </motion.div>

              {/* Floating AI badge */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-4 -right-4 sm:-right-6 px-4 py-2.5 rounded-xl text-sm font-medium text-white"
                style={{
                  backgroundColor: "rgba(31,36,48,0.9)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <span className="text-accent font-bold text-base">AI</span>
                <span className="text-textSecondary ml-1.5 text-xs">&amp; ML</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-textSecondary tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  );
};
