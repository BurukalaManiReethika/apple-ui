import { Apple, Github, Twitter, Linkedin } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <a href="#home" className="flex items-center gap-2">
          <Apple size={20} />
          AppleUI
        </a>

        <div className="flex items-center gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <p className="text-gray-500">© {new Date().getFullYear()} AppleUI</p>
      </div>
    </footer>
  );
}
