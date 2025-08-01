import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Show Navbar Button (desktop only) */}
      {!showNavbar && (
        <button
          className="fixed top-5 right-5 z-50 cosmic-button shadow-xl border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hidden md:block"
          onClick={() => setShowNavbar(true)}
        >
          Show Navbar
        </button>
      )}

      <nav
        className={cn(
          "fixed w-full z-40 transition-all duration-500",
          isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5",
          // Only apply show/hide animation on desktop
          showNavbar
            ? "md:opacity-100 md:translate-y-0 md:pointer-events-auto"
            : "md:opacity-0 md:-translate-y-10 md:pointer-events-none"
        )}
        style={{ willChange: "opacity, transform" }}
      >
        <div className="container flex items-center justify-between">
          <a
            className="text-xl font-bold text-primary flex items-center"
            href="#hero"
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground"> Deshal's </span>{" "}
              Portfolio
            </span>
          </a>

          {/* desktop nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* mobile nav toggle */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* mobile nav menu */}
          <div
            className={cn(
              "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
              "transition-all duration-300 md:hidden",
              isMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            )}
          >
            <div className="flex flex-col space-y-8 text-xl">
              {navItems.map((item, key) => (
                <a
                  key={key}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          {/* Hide Navbar Button (desktop only) */}
          <button
            className="ml-4 px-3 py-1 rounded bg-red-500 text-white font-bold hidden md:block"
            onClick={() => setShowNavbar(false)}
          >
            Hide Navbar
          </button>
        </div>
      </nav>
    </>
  );
};