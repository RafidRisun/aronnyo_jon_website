"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const TEMPLATE_BACKGROUND = "/images/projects/1.jpg";

// REUSABLE SECTION BASE
// Add this constant to each new section to keep it exactly one screen tall.
const FULL_SCREEN_SECTION =
  "relative flex h-svh min-h-svh w-full overflow-hidden bg-white px-[clamp(1.5rem,6vw,6rem)] py-[clamp(5.5rem,10vw,9rem)]";

const FLEX_SECTION =
  "relative flex w-full items-start justify-center overflow-hidden bg-white px-[clamp(1.5rem,6vw,6rem)] py-[clamp(5.5rem,10vw,9rem)]";
// REUSABLE CONTENT WIDTH
// Use this inside every section so all content follows the same 84rem frame.
const SECTION_CONTENT_WIDTH = "w-full max-w-[84rem]";

const HEADING =
  "max-w-[15ch] text-[clamp(1.5rem,4vw,5rem)] leading-[1.1] tracking-[-0.045em]";
const DESCRIPTION =
  "mt-8 max-w-2xl text-[clamp(1rem,1.5vw,1.3rem)] leading-[1.65]";

export default function Welcome() {
  const [pageReady, setPageReady] = useState(false);
  const [brochureReady, setBrochureReady] = useState(false);

  useEffect(() => {
    // Keeps the opening moment completely white before the brochure fades in.
    const revealTimer = window.setTimeout(() => setPageReady(true), 750);
    return () => window.clearTimeout(revealTimer);
  }, []);

  const showBrochure = pageReady && brochureReady;

  return (
    <main className="w-full overflow-x-clip bg-white text-dark-teal">
      {/* INTRO SECTION
          Change BROCHURE_IMAGE above to replace the opening artwork. */}
      <section
        className={`${FULL_SCREEN_SECTION} items-center justify-center p-0 opacity-0 transition-opacity duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          showBrochure ? "opacity-100" : ""
        }`}
        aria-label="Intro"
        data-navbar-tone="white"
      >
        <div className={`relative h-[65%] ${SECTION_CONTENT_WIDTH}`}>
          <Image
            src="/images/Brochure/0.jpg"
            alt="Local Orchestra online brochure cover"
            fill
            priority
            sizes="(min-width: 1344px) 1344px, 100vw"
            onLoad={() => setBrochureReady(true)}
            className={`object-contain object-center`}
          />
        </div>
        <span className="absolute bottom-15 font-light">
          for our living environment
        </span>
      </section>

      <section
        className={`${FLEX_SECTION} text-[#0B3335]`}
        data-navbar-tone="non-white"
      >
        <Image
          src="/images/Brochure/4.jpg"
          alt="Architecture project interior"
          fill
          sizes="100vw"
          className="z-0 object-cover object-center"
        />
        <div
          className={`z-20 flex flex-col gap-2 items-start justify-start ${SECTION_CONTENT_WIDTH}`}
        >
          <h2 className={`${HEADING}`}>
            Architecture for our Living Environment: Developing Places and
            Spaces
            <span className="font-bold">{` Together`}</span>
          </h2>
          <p className={`${DESCRIPTION}`}>
            Local Orchestra works for and cherishes a better living environment.
            We aim to design healthier and better practices that help people
            connect with their surroundings thoughtfully and with positivity,
            keeping in mind that we are not the only beings who are part of this
            beautiful planet. <br />
            <br /> We work to improve the living environment by prioritizing
            sustainability, inclusivity, health, and well-being. Enriching the
            knowledge base of society, community engagement, and raising
            awareness help us achieve our goals.
            <br />
            <br /> Local Orchestra&apos;s philosophy is based on a strong
            respect for nature and people who intend no harm. We believe in
            sharing our knowledge of sustainable and sensible practices while
            also learning from others. By understanding the unique identity,
            values, and culture of any place, we aim to create spaces and
            opportunities where everyone feels a sense of ownership and
            belonging. Collective efforts with local governments, partners, and
            communities help us aspire and thrive together.
          </p>
        </div>
      </section>

      <section
        className={`${FULL_SCREEN_SECTION} items-start justify-center text-dark-teal`}
        data-navbar-tone="non-white"
      >
        {/* <Image
          src="/images/Brochure/12.jpg"
          alt="Architecture project interior"
          fill
          sizes="100vw"
          className="z-0 object-cover object-center"
        /> */}
        <div
          className={`z-20 flex items-center justify-center black ${SECTION_CONTENT_WIDTH}`}
        >
          <p className={`${DESCRIPTION} text-center`}>
            We come together <br /> hoping to make our world <br /> a bit less
            distressed <br /> and <br />a bit more beautiful.
          </p>
        </div>
      </section>

      <section
        className={`${FLEX_SECTION} text-white`}
        data-navbar-tone="non-white"
      >
        <Image
          src="/images/Brochure/15.jpg"
          alt="Architecture project interior"
          fill
          sizes="100vw"
          className="z-0 object-cover object-center"
        />
        <div
          className={`z-20 flex flex-col gap-2 items-end justify-start ${SECTION_CONTENT_WIDTH}`}
        >
          <div>
            <h2 className={`${HEADING} font-bold`}>
              Cultural Identity, <br />
              <span className="font-light">{`Contextual Solution`}</span>
            </h2>
            <p className={`${DESCRIPTION}`}>
              We believe every community has a unique identity that reflects its
              history, practices, and the landscape it lives in. We strongly
              avoid imposing practices or solutions from other places onto the
              places where we work. Instead, we prioritize contextual solutions,
              identify potentials, and develop them for a suitable future
              practice. For that, observing and learning from the locals is very
              important. We do learn from other contexts, but only to translate
              the inspiration in a contextual way. <br /> <br /> To us, context
              is not just the site; it comprises the local trees, plants, birds,
              people, livelihoods, rituals, communities, and festivals. To build
              respectfully within this living ecosystem, our solutions
              prioritize what is already there. We identify and build with
              locally available materials, regional techniques, and the hands of
              local artisans to create spaces that truly belong to their ground.
            </p>
          </div>
        </div>
      </section>

      <section
        className={`${FULL_SCREEN_SECTION} items-start justify-center text-dark-teal`}
        data-navbar-tone="non-white"
      >
        {/* <Image
          src="/images/Brochure/12.jpg"
          alt="Architecture project interior"
          fill
          sizes="100vw"
          className="z-0 object-cover object-center"
        /> */}
        <div
          className={`z-20 flex items-center justify-center black ${SECTION_CONTENT_WIDTH}`}
        >
          <p className={`${DESCRIPTION} text-center`}>
            Even if we
            <br /> live for <br /> just a day.
          </p>
        </div>
      </section>
      {/* ----------------------------------------- */}

      {/* IMAGE BACKGROUND TEMPLATE
          Change TEMPLATE_BACKGROUND above, or set a different src directly here. */}
      <section
        className={`${FULL_SCREEN_SECTION} text-white`}
        data-navbar-tone="non-white"
      >
        <Image
          src={TEMPLATE_BACKGROUND}
          alt="Architecture project interior"
          fill
          sizes="100vw"
          className="z-0 object-cover object-center"
        />
        <div
          className={`z-20 grid grid-cols-1 items-center md:grid-cols-2 ${SECTION_CONTENT_WIDTH}`}
        >
          <div className="flex min-h-0 flex-col justify-center py-8 md:min-h-[22rem] md:p-[clamp(1.5rem,5vw,5rem)]">
            <h2 className={`${HEADING} mx-0`}>Two-column layout</h2>
          </div>
          <div className="flex min-h-0 flex-col justify-center border-t border-[#104649]/30 py-8 md:min-h-[22rem] md:border-t-0 md:border-l md:p-[clamp(1.5rem,5vw,5rem)]">
            <p className={`${DESCRIPTION} mx-0`}>
              Use this side for supporting text, an image, project details, or
              any other content. Both columns stay balanced on desktop and
              become one readable column on mobile.
            </p>
          </div>
        </div>
      </section>

      {/* TWO-COLUMN SECTION TEMPLATE
          Duplicate this section when you need text and media side by side.
          On smaller screens the columns automatically stack. */}
      <section className={FULL_SCREEN_SECTION} data-navbar-tone="white">
        <div
          className={`grid grid-cols-1 items-center md:grid-cols-2 ${SECTION_CONTENT_WIDTH}`}
        >
          <div className="flex min-h-0 flex-col justify-center py-8 md:min-h-[22rem] md:p-[clamp(1.5rem,5vw,5rem)]">
            <h2 className={`${HEADING} mx-0`}>Two-column layout</h2>
          </div>
          <div className="flex min-h-0 flex-col justify-center border-t border-[#104649]/30 py-8 md:min-h-[22rem] md:border-t-0 md:border-l md:p-[clamp(1.5rem,5vw,5rem)]">
            <p className={`${DESCRIPTION} mx-0`}>
              Use this side for supporting text, an image, project details, or
              any other content. Both columns stay balanced on desktop and
              become one readable column on mobile.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
