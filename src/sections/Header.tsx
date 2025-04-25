"use client";
import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import { Button } from "@/components/Button";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Adding smooth scrolling behavior
      section.scrollIntoView({ behavior: "smooth" });
      // Close mobile menu after clicking
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToFeaturesMiddle = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      // Calculate the position to scroll to (middle of the features section)
      const featuresRect = featuresSection.getBoundingClientRect();
      const middlePosition =
        window.pageYOffset + featuresRect.top + featuresRect.height / 2 - window.innerHeight / 2;

      // Scroll to the calculated position
      window.scrollTo({
        top: middlePosition,
        behavior: "smooth",
      });

      // Close mobile menu after clicking
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    // Handle direct URL with hash
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 0);
    }

    // Prevent scrolling when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-10 border-b border-white/15 py-4 md:border-none">
      <div className="absolute inset-0 -z-10 backdrop-blur md:hidden"></div>
      <div className="container">
        <div className="relative mx-auto flex max-w-2xl items-center justify-between rounded-xl border-white/15 md:border md:p-2.5 md:backdrop-blur">
          <div className="absolute inset-0 -z-10 hidden backdrop-blur md:block"></div>
          <div>
            <div className="flex items-center gap-2 lg:flex-1">
              <LogoIcon className="h-8 w-8" />
              <div className="font-medium">AIBET.ASIA</div>
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-lg">
              <a
                className="cursor-pointer text-white/70 transition hover:text-white"
                onClick={() => scrollToSection("features")}
              >
                功能
              </a>

              <a
                className="cursor-pointer text-white/70 transition hover:text-white"
                onClick={scrollToFeaturesMiddle}
              >
                价格
              </a>
              <a
                className="cursor-pointer text-white/70 transition hover:text-white"
                onClick={() => scrollToSection("testimonials")}
              >
                客户反馈
              </a>
              <a
                className="cursor-pointer text-white/70 transition hover:text-white"
                onClick={() => scrollToSection("footer")}
              >
                联系我们
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button>Login</Button>

            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="focus:outline-none"
                aria-label="Toggle menu"
              >
                <MenuIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={toggleMobileMenu}
          ></div>
          <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-gray-900 p-6 shadow-lg">
            <div className="flex justify-end">
              <button
                onClick={toggleMobileMenu}
                className="focus:outline-none"
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="mt-8">
              <ul className="space-y-6">
                <li>
                  <a
                    className="block text-xl font-medium text-white/90 transition hover:text-white"
                    onClick={() => scrollToSection("features")}
                  >
                    功能
                  </a>
                </li>
                <li>
                  <a
                    className="block text-xl font-medium text-white/90 transition hover:text-white"
                    onClick={scrollToFeaturesMiddle}
                  >
                    价格
                  </a>
                </li>
                <li>
                  <a
                    className="block text-xl font-medium text-white/90 transition hover:text-white"
                    onClick={() => scrollToSection("testimonials")}
                  >
                    客户反馈
                  </a>
                </li>
                <li>
                  <a
                    className="block text-xl font-medium text-white/90 transition hover:text-white"
                    onClick={() => scrollToSection("footer")}
                  >
                    联系我们
                  </a>
                </li>
                <li className="pt-6">
                  <div className="w-full">
                    <Button className="w-full">Login</Button>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
