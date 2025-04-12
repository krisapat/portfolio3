"use client";

import { useEffect, useRef, useState } from "react";

const sections = ["Home", "About us", "Menu","Location & Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [barStyle, setBarStyle] = useState({ left: 0, width: 0 });

  const linkRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);

            const linkEl = linkRefs.current[id];
            if (linkEl) {
              const rect = linkEl.getBoundingClientRect();
              const containerRect = linkEl.parentElement?.getBoundingClientRect();
              if (containerRect) {
                setBarStyle({
                  left: rect.left - containerRect.left,
                  width: rect.width,
                });
              }
            }
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleInitialSection = () => {
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.2) {
            setActiveSection(id);
            const linkEl = linkRefs.current[id];
            if (linkEl) {
              const linkRect = linkEl.getBoundingClientRect();
              const containerRect = linkEl.parentElement?.getBoundingClientRect();
              if (containerRect) {
                setBarStyle({
                  left: linkRect.left - containerRect.left,
                  width: linkRect.width,
                });
              }
            }
            break;
          }
        }
      }
    };
    handleInitialSection();

    return () => observer.disconnect();
  }, []);

  return (
    <header className="flex items-center justify-end md:justify-center">
      <nav className="border border-white/50 backdrop-blur-md bg-black/50 p-3 fixed top-5 z-30 rounded-2xl">
        <div className="container mx-auto flex items-end md:items-center justify-center">
          {/* Desktop Menu */}
          <div className="relative flex text-white hidden md:flex">
            {sections.map((sec) => (
              <a
                key={sec}
                href={`#${sec}`}
                ref={(el) => {
                  linkRefs.current[sec] = el;
                }}
                className={`${activeSection === sec ? "text-white" : "text-white"
                  } text-xl hover:scale-[1.1] transition-transform duration-300 capitalize relative px-4 z-20`}
              >
                {sec}
              </a>
            ))}

            {/* Moving Background */}
            <div
              className="border border-white/50 absolute rounded-xl bottom-0 h-full bg-white/20 transition-all duration-200 z-10"
              style={{
                left: barStyle.left,
                width: barStyle.width,
                maxWidth: "calc(100% - 1rem)"
              }}
            />
          </div>


          {/* Hamburger Button */}
          <div className="md:hidden flex items-center text-white ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none relative w-6 h-6"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6 absolute top-0 left-0 transition-opacity duration-300 ease-in-out"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                  className={`transition-all duration-300 ${isOpen ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                />
              </svg>

              <svg
                className="w-6 h-6 absolute top-0 left-0 transition-opacity duration-300 ease-in-out"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                  className={`transition-all duration-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                />
              </svg>
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden z-20 text-white flex flex-col items-start rounded-xl border border-white/50 backdrop-blur-md bg-black/50 shadow-lg fixed top-18 right-3 overflow-hidden w-[70%] sm:w-[50%] max-w-xs transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        style={{ zIndex: 20 }}
      >
        {sections.map((sec) => (
          <a
            key={sec}
            href={`#${sec}`}
            onClick={handleLinkClick}
            className={`${activeSection === sec ? "bg-white/20" : ""
              } w-full px-6 py-4 text-xl capitalize hover:scale-[1.05] hover:bg-white/20 transition-all duration-300`}
          >
            {sec}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
