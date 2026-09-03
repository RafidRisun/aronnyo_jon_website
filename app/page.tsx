"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const BROCHURE_IMAGE = "/images/LOCAL ORCHESTRA_ONLINE BROCHURE.jpg";
const TEMPLATE_BACKGROUND = "/images/projects/1.jpg";

// REUSABLE SECTION BASE
// Add this constant to each new section to keep it exactly one screen tall.
const FULL_SCREEN_SECTION =
  "relative flex h-svh min-h-svh w-full items-center justify-center overflow-hidden bg-white px-[clamp(1.5rem,6vw,6rem)] py-[clamp(5.5rem,10vw,9rem)]";

const EYEBROW =
  "mb-5 text-sm font-bold uppercase tracking-[0.18em]";
const HEADING =
  "mx-auto max-w-[15ch] text-[clamp(2.75rem,7vw,7rem)] font-light leading-[0.95] tracking-[-0.045em]";
const DESCRIPTION =
  "mx-auto mt-8 max-w-2xl text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.65]";

export default function Welcome() {
  const [pageReady, setPageReady] = useState(false);
  const [brochureReady, setBrochureReady] = useState(false);

  useEffect(() => {
    // Keeps the opening moment completely white before the brochure fades in.
    const revealTimer = window.setTimeout(() => setPageReady(true), 350);
    return () => window.clearTimeout(revealTimer);
  }, []);

  const showBrochure = pageReady && brochureReady;

  return (
    <main className="w-full overflow-x-clip bg-white text-[#104649]">
      {/* INTRO SECTION
          Change BROCHURE_IMAGE above to replace the opening artwork. */}
      <section
        className={`${FULL_SCREEN_SECTION} p-0`}
        aria-label="Local Orchestra brochure"
      >
        <Image
          src={BROCHURE_IMAGE}
          alt="Local Orchestra online brochure cover"
          fill
          priority
          sizes="100vw"
          onLoad={() => setBrochureReady(true)}
          className={`object-contain object-center opacity-0 transition-opacity duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-0 ${
            showBrochure ? "opacity-100" : ""
          }`}
        />
      </section>

      {/* BASIC SECTION TEMPLATE
          Copy this entire <section> and replace its content. */}
      <section className={FULL_SCREEN_SECTION}>
        <div className="w-full max-w-[62rem] text-center">
          <p className={EYEBROW}>Section 01</p>
          <h1 className={HEADING}>A full-screen section</h1>
          <p className={DESCRIPTION}>
            Replace this text with your own content. The shared section constant
            keeps every copied section exactly one screen tall.
          </p>
        </div>
      </section>

      {/* IMAGE BACKGROUND TEMPLATE
          Change TEMPLATE_BACKGROUND above, or set a different src directly here. */}
      <section className={`${FULL_SCREEN_SECTION} justify-start text-white`}>
        <Image
          src={TEMPLATE_BACKGROUND}
          alt="Architecture project interior"
          fill
          sizes="100vw"
          className="z-0 object-cover object-center"
        />
        <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(6,24,25,0.76),rgba(6,24,25,0.12))]" />
        <div className="relative z-20 w-full max-w-[52rem]">
          <p className={EYEBROW}>Section 02</p>
          <h2 className={`${HEADING} mx-0 text-white`}>Image background</h2>
          <p className={`${DESCRIPTION} mx-0 text-white`}>
            Swap this image and copy when you turn the template into a project story.
          </p>
        </div>
      </section>

      {/* TWO-COLUMN SECTION TEMPLATE
          Duplicate this section when you need text and media side by side.
          On smaller screens the columns automatically stack. */}
      <section className={FULL_SCREEN_SECTION}>
        <div className="grid w-full max-w-[84rem] grid-cols-1 items-center md:grid-cols-2">
          <div className="flex min-h-0 flex-col justify-center py-8 md:min-h-[22rem] md:p-[clamp(1.5rem,5vw,5rem)]">
            <p className={EYEBROW}>Section 03</p>
            <h2 className={`${HEADING} mx-0`}>Two-column layout</h2>
          </div>
          <div className="flex min-h-0 flex-col justify-center border-t border-[#104649]/30 py-8 md:min-h-[22rem] md:border-t-0 md:border-l md:p-[clamp(1.5rem,5vw,5rem)]">
            <p className={`${DESCRIPTION} mx-0`}>
              Use this side for supporting text, an image, project details, or any
              other content. Both columns stay balanced on desktop and become one
              readable column on mobile.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
