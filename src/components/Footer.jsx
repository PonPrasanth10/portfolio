export const Footer = () => (
  <footer
    className="py-8"
    style={{ backgroundColor: "rgba(47,47,47,0.4)", borderTop: "1px solid rgba(255,255,255,0.08)" }}
  >
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-3">
      <p className="text-sm text-textSecondary">
        © {new Date().getFullYear()} Pon Prasanth R. All rights reserved.
      </p>
      <p className="text-sm text-textSecondary">
        Built with <span className="text-white">React</span> &amp; <span className="text-white">Tailwind</span>
      </p>
    </div>
  </footer>
);
