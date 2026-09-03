"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  { label: "Home", href: "#intro" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "#footer" },
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
  const navbarColor = isOverNonWhite ? "text-white" : "text-dark-teal";

  const updateNavbarColor = useCallback(() => {
    // Measure which marked section is physically behind the navbar's center.
    const sampleY =
      (headerRef.current?.getBoundingClientRect().height ?? 96) / 2;
    const sections =
      document.querySelectorAll<HTMLElement>("[data-navbar-tone]");
    const activeSection = Array.from(sections).find((section) => {
      const bounds = section.getBoundingClientRect();
      return bounds.top <= sampleY && bounds.bottom > sampleY;
    });

    setIsOverNonWhite(activeSection?.dataset.navbarTone === "non-white");
  }, []);

  useEffect(() => {
    let animationFrame = 0;

    // Native scroll events still fire while Lenis animates. Scheduling the
    // measurement here avoids depending on Lenis being ready during hydration.
    const scheduleNavbarUpdate = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateNavbarColor);
    };

    updateNavbarColor();
    scheduleNavbarUpdate();

    window.addEventListener("scroll", scheduleNavbarUpdate, { passive: true });
    window.addEventListener("resize", scheduleNavbarUpdate);
    window.addEventListener("load", scheduleNavbarUpdate);
    window.addEventListener("pageshow", scheduleNavbarUpdate);

    const headerObserver = new ResizeObserver(scheduleNavbarUpdate);
    if (headerRef.current) headerObserver.observe(headerRef.current);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      headerObserver.disconnect();
      window.removeEventListener("scroll", scheduleNavbarUpdate);
      window.removeEventListener("resize", scheduleNavbarUpdate);
      window.removeEventListener("load", scheduleNavbarUpdate);
      window.removeEventListener("pageshow", scheduleNavbarUpdate);
    };
  }, [pathname, updateNavbarColor]);

  return (
    <>
      {/* Sections marked data-navbar-tone="non-white" use a white navbar.
          White sections use the brand's dark teal instead. */}
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-[100] flex w-full transform-gpu items-center justify-between bg-transparent px-5 py-5 opacity-100 transition-colors duration-200 sm:px-10 sm:py-8 ${navbarColor}`}
        onClick={closeMenu}
      >
        <Link href="#intro" className="flex items-center gap-1 sm:gap-2">
          <span className="text-2xl font-extrabold sm:text-4xl">Local</span>
          <span className="text-2xl font-light sm:text-4xl">Orchestra</span>
        </Link>

        <button
          type="button"
          aria-label={
            hamburgerClicked ? "Close navigation menu" : "Open navigation menu"
          }
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
        className={`fixed top-20 right-5 z-[100] flex transform-gpu flex-col items-end gap-5 text-xl font-light transition-all duration-300 ease-out sm:top-28 sm:right-10 sm:gap-7 sm:text-2xl ${navbarColor} ${
          hamburgerClicked
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none translate-x-[calc(100%+3rem)] opacity-0"
        }`}
      >
        {navigationLinks.map((link) => (
          <Link
            key={link.href}
            href={
              link.href === "/contact" && pathname === "/"
                ? "#footer"
                : link.href
            }
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
