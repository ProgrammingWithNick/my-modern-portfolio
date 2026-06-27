import React from "react";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import { ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-20 border-t border-neutral-900 bg-brand-black py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="text-sm text-neutral-500">
          © 2026 Nikhil Khavdu. All rights reserved.
        </p>

        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/ProgrammingWithNick"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
          >
            <img
              src={github}
              alt="GitHub"
              className="h-5 w-5"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/nikhil-khavdu/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className="h-5 w-5"
            />
          </a>

          <button
            onClick={scrollToTop}
            className="rounded-full border border-neutral-800 bg-neutral-900 p-2 text-neutral-400 transition-colors hover:text-white"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;