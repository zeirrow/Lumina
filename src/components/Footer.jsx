import { socialIcons } from "../../data/data";
import { FiChevronUp } from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    { name: "Our Story", href: "#story" },
    { name: "Science", href: "#science" },
    { name: "Journal", href: "#journal" },
    { name: "Contact", href: "#contact" },
    { name: "FAQ", href: "#faq" },
    { name: "Shipping", href: "#shipping" },
    { name: "Returns", href: "#returns" },
    { name: "Privacy", href: "#privacy" },
    { name: "Terms", href: "#terms" },
  ];

  return (
    <footer className="relative bg-[#1F1F1F] text-[#F9F6F2]/80 pt-16 pb-8 px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C28F79] to-transparent opacity-20" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-[#C28F79]/5" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="space-y-4">
            <h3 className="text-3xl font-serif text-white">Lumina</h3>
            <p className="text-sm leading-relaxed">
              Plant-powered skincare that delivers visible results without
              compromise.
            </p>
            <div className="flex gap-4 text-xl pt-2">
              {/* eslint-disable-next-line */}
              {socialIcons.map(({ name, icon: Icon, color, link }) => (
                <a
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300"
                  aria-label={name}
                >
                  <Icon className="text-2xl" style={{ color }} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation columns */}
          <div className="space-y-4">
            <h4 className="text-white font-medium text-sm tracking-wider uppercase">
              Discover
            </h4>
            <ul className="space-y-3">
              {footerLinks.slice(0, 3).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-300 hover:pl-1 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-medium text-sm tracking-wider uppercase">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.slice(3, 6).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-300 hover:pl-1 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-medium text-sm tracking-wider uppercase">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.slice(6).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-300 hover:pl-1 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#3A3A3A] my-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-[#F9F6F2]/50 order-2 md:order-1">
            © {new Date().getFullYear()} Lumina Skincare. All rights reserved.
          </div>

          <div className="flex gap-6 text-sm order-1 md:order-2">
            <a
              href="#newsletter"
              className="hover:text-white transition-colors duration-300"
            >
              Newsletter
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors duration-300"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <FiChevronUp className="mt-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
