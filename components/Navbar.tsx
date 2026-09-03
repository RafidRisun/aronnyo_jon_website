"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setHamburgerClicked,
  toggleHamburgerClicked,
} from "@/redux/hamburgerClickedSlice";

type NavigationState = {
  hamburgerClicked: {
    value: boolean;
  };
};

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [isOverNonWhite, setIsOverNonWhite] = useState(false);
  const hamburgerClicked = useSelector(
    (state: NavigationState) => state.hamburgerClicked.value,
  );
  const dispatch = useDispatch();

  const closeMenu = () => dispatch(setHamburgerClicked(false));
  const navbarColor = isOverNonWhite ? "text-white" : "text-[#104649]";

  const updateNavbarColor = useCallback(() => {
    // Measure which marked section is physically behind the navbar's center.
    const sampleY = (headerRef.current?.getBoundingClientRect().height ?? 96) / 2;
    const sections = document.querySelectorAll<HTMLElement>(
      "[data-navbar-tone]",
    );
    const activeSection = Array.from(sections).find((section) => {
      const bounds = section.getBoundingClientRect();
      return bounds.top <= sampleY && bounds.bottom > sampleY;
    });

    setIsOverNonWhite(activeSection?.dataset.navbarTone === "non-white");
  }, []);

  // Lenis calls this on every smooth-scroll update.
  useLenis(updateNavbarColor);

  useEffect(() => {
    updateNavbarColor();
    window.addEventListener("scroll", updateNavbarColor, { passive: true });
    window.addEventListener("resize", updateNavbarColor);

    return () => {
      window.removeEventListener("scroll", updateNavbarColor);
      window.removeEventListener("resize", updateNavbarColor);
    };
  }, [pathname, updateNavbarColor]);

  return (
    <>
      {/* Sections marked data-navbar-tone="non-white" use a white navbar.
          White sections use the brand's dark teal instead. */}
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 flex w-full items-center justify-between px-5 py-5 transition-colors duration-200 sm:px-10 sm:py-8 ${navbarColor}`}
        onClick={closeMenu}
      >
        <div className="pointer-events-none flex items-center gap-1 sm:gap-2">
          <span className="text-2xl font-extrabold sm:text-4xl">Local</span>
          <span className="text-2xl font-light sm:text-4xl">Orchestra</span>
        </div>

        <button
          type="button"
          aria-label={hamburgerClicked ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="primary-navigation"
          aria-expanded={hamburgerClicked}
          onClick={(event) => {
            event.stopPropagation();
            dispatch(toggleHamburgerClicked());
          }}
          className="pointer-events-auto cursor-pointer transition-transform duration-300 ease-out hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
        >
          <GiHamburgerMenu
            aria-hidden="true"
            className={`size-8 transition-transform duration-300 sm:size-11 ${
              hamburgerClicked ? "rotate-90" : "rotate-0"
            }`}
          />
        </button>
      </header>

      <nav
        id="primary-navigation"
        aria-label="Primary navigation"
        className={`fixed top-20 right-5 z-50 flex flex-col items-end gap-5 text-xl font-light transition-all duration-300 ease-out sm:top-28 sm:right-10 sm:gap-7 sm:text-2xl ${navbarColor} ${
          hamburgerClicked
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none translate-x-[calc(100%+3rem)] opacity-0"
        }`}
      >
        {navigationLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
