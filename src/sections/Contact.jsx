import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../components/SectionWrapper";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const contactLinks = [
  { icon: <Mail className="w-5 h-5" />, label: "Email", href: "mailto:ponprasanthr@gmail.com", display: "ponprasanthr@gmail.com" },
  { icon: <LinkedinIcon className="w-5 h-5" />, label: "LinkedIn", href: "https://linkedin.com/in/ponprasanthr", display: "linkedin.com/in/ponprasanthr" },
  { icon: <GithubIcon className="w-5 h-5" />, label: "GitHub", href: "https://github.com/PonPrasanth10", display: "github.com/PonPrasanth10" },
];

const inputStyle = { backgroundColor: "rgba(47,47,47,0.5)", border: "1px solid rgba(255,255,255,0.1)", outline: "none" };
const inputClass = "w-full rounded-xl px-4 py-3 text-white text-sm transition-all placeholder-gray-500 focus:ring-1 focus:ring-white/20 bg-transparent";

export const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("https://formspree.io/f/xpqbjoqg", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formState),
      });
      if (res.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <SectionWrapper id="contact">
      <motion.div
        className="text-center mb-12 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-white">Get in Touch</span>
        </h2>
        <p className="text-textSecondary max-w-xl mx-auto text-sm md:text-base">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-stretch">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:w-2/5 flex"
        >
          <div className="glass-card p-6 md:p-8 w-full flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Let's Connect</h3>
              <p className="text-textSecondary text-sm md:text-base leading-relaxed">
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </motion.div>

            <div className="flex flex-col gap-3 flex-1 justify-center">
              {contactLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.12, duration: 0.4 }}
                  whileHover={{ x: 4, backgroundColor: "rgba(255,255,255,0.05)" }}
                  className="flex items-center gap-4 p-4 rounded-xl transition-colors group"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <motion.div
                    className="p-2.5 rounded-full text-textSecondary group-hover:text-white transition-colors flex-shrink-0"
                    style={{ backgroundColor: "#2F2F2F" }}
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {link.icon}
                  </motion.div>
                  <div className="min-w-0">
                    <span className="text-xs text-textSecondary block mb-0.5">{link.label}</span>
                    <span className="text-white text-sm font-medium group-hover:text-accent transition-colors truncate block">
                      {link.display}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="w-full lg:w-3/5 glass-card p-6 md:p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-5 h-full flex flex-col">
            {[
              { id: "name", label: "Name", type: "text", placeholder: "John Doe", field: "name" },
              { id: "email", label: "Email", type: "email", placeholder: "john@example.com", field: "email" },
            ].map((f, i) => (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <label htmlFor={f.id} className="block text-sm font-medium text-textSecondary mb-2">{f.label}</label>
                <input
                  type={f.type} id={f.id} name={f.id} required
                  value={formState[f.field]}
                  onChange={(e) => setFormState({ ...formState, [f.field]: e.target.value })}
                  className={inputClass} style={inputStyle} placeholder={f.placeholder}
                />
              </motion.div>
            ))}

            <motion.div
              className="flex-1 flex flex-col"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <label htmlFor="message" className="block text-sm font-medium text-textSecondary mb-2">Message</label>
              <textarea
                id="message" name="message" required rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className={inputClass + " resize-none flex-1"} style={inputStyle}
                placeholder="Your message here..."
              />
            </motion.div>

            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-green-400 text-sm"
              >
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                Message sent! I'll get back to you soon.
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-red-400 text-sm"
              >
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                Something went wrong. Please try again or email me directly.
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={status === "submitting"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed text-sm md:text-base"
              style={{ backgroundColor: "#ffffff", color: "#1F2430" }}
            >
              {status === "submitting" ? (
                <span className="w-5 h-5 border-2 border-gray-300 border-t-gray-700 rounded-full animate-spin" />
              ) : (
                <>Send Message <Send className="w-4 h-4" /></>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
