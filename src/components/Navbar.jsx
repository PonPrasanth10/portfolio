import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const scrollTo = (href) => {
  const el = document.getElementById(href.replace("#", ""));
  if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
};

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;
      if (scrollY < 100) { setActiveSection("hero"); return; }
      sections.forEach((sec) => {
        if (scrollY > sec.offsetTop - 100 && scrollY <= sec.offsetTop - 100 + sec.offsetHeight) {
          setActiveSection(sec.getAttribute("id"));
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    scrollTo(href);
    setMenuOpen(false);
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-50"
        style={{ scaleX, background: "linear-gradient(to right, #8A8F95, #D6D9DC)" }}
      />
      <header className="fixed top-0 left-0 right-0 z-40 glass-nav">
        <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => handleClick(e, "#hero")}
            className="text-xl font-bold tracking-tighter text-textPrimary hover:text-white transition-colors"
          >
            PON PRASANTH R
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`text-base font-medium transition-all duration-300 relative ${
                  activeSection === link.href.replace("#", "") ? "text-white" : "text-textSecondary hover:text-white"
                }`}
              >
                {link.name}
                {activeSection === link.href.replace("#", "") && (
                  <motion.span layoutId="underline" className="absolute -bottom-1 left-0 right-0 h-px bg-accent" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-textSecondary hover:text-white transition-colors p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="px-4 sm:px-6 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className={`text-base font-medium py-2.5 px-3 rounded-lg transition-colors ${
                      activeSection === link.href.replace("#", "")
                        ? "text-white bg-white/5"
                        : "text-textSecondary hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
