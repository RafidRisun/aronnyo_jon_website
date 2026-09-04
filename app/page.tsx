"use client";

import { setHamburgerClicked } from "@/redux/hamburgerClickedSlice";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// REUSABLE SECTION BASE
// Add this constant to each new section to keep it exactly one screen tall.
const FULL_SCREEN_SECTION =
  "relative flex min-h-svh w-full overflow-hidden bg-white px-[clamp(1.5rem,6vw,6rem)] py-[clamp(5.5rem,10vw,9rem)]";

const FLEX_SECTION =
  "relative flex w-full min-h-[100vh] items-start justify-center overflow-hidden bg-white px-[clamp(1.5rem,6vw,6rem)] py-[clamp(5.5rem,10vw,9rem)]";
// REUSABLE CONTENT WIDTH
// Use this inside every section so all content follows the same 84rem frame.
const SECTION_CONTENT_WIDTH = "w-full max-w-[84rem]";

const HEADING =
  "max-w-[15ch] text-[clamp(2rem,4vw,5rem)] leading-[1.1] tracking-[-0.045em]";
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

  const dispatch = useDispatch();
  function clickedAnywhere() {
    dispatch(setHamburgerClicked(false));
  }

  return (
    <main
      className="w-full overflow-x-clip bg-white text-dark-teal"
      onClick={clickedAnywhere}
    >
      {/* INTRO SECTION
          Change BROCHURE_IMAGE above to replace the opening artwork. */}
      <section
        className={`${FULL_SCREEN_SECTION} items-center justify-center p-0 opacity-0 transition-opacity duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          showBrochure ? "opacity-100" : ""
        }`}
        aria-label="Intro"
        data-navbar-tone="white"
        id="intro"
      >
        <div className={`relative h-[65svh] w-full ${SECTION_CONTENT_WIDTH}`}>
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
        <span className="absolute bottom-8 px-6 text-center font-light sm:bottom-15">
          for our living environment
        </span>
      </section>

      {/* sky blue */}
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
        data-navbar-tone="white"
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

      {/* brown */}
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
        className={`${FULL_SCREEN_SECTION} items-center justify-center text-dark-teal`}
        data-navbar-tone="white"
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
      {/* river */}
      <section
        className={`${FLEX_SECTION} text-white`}
        data-navbar-tone="non-white"
      >
        <Image
          src="/images/Brochure/27.jpg"
          alt="Architecture project interior"
          fill
          sizes="100vw"
          className="z-0 object-cover object-center"
        />
        <div
          className={`z-20 flex flex-col items-start justify-start gap-12 lg:flex-row lg:gap-16 ${SECTION_CONTENT_WIDTH}`}
        >
          <div className="flex min-w-0 flex-1 flex-col items-start justify-start gap-2 text-left lg:items-end lg:text-end text-dark-teal">
            <h2 className={`${HEADING} font-normal`}>
              <span className="font-bold">{`Collective `}</span> Efforts <br />{" "}
              for
              <span className="font-bold">{` Inclusivity`}</span>
            </h2>
            <p className={`${DESCRIPTION}`}>
              The built environment can serve as a great equalizer. Design
              solutions that embrace the full spectrum of humanity, ensuring our
              spaces remain deeply inclusive of all genders, religions, and
              cultures. From crafting safe, empowering environments for women to
              designing specialized educational spaces for differently-abled
              children, every project prioritizes equitable participation and
              universal access. We dedicate our collective efforts to serving
              marginalized communities across the country—creating dignified
              solutions that celebrate diversity. By dissolving both physical
              and social barriers, our work fosters a shared sense of belonging,
              proving that truly ethical construction leaves absolutely no one
              behind.
            </p>
          </div>
          <div className="flex min-w-0 flex-1 flex-col items-start justify-start gap-2">
            <div className="hidden h-38 lg:block" />
            <div className="flex flex-col gap-2 items-start justify-start">
              <h2 className={`${HEADING} font-normal`}>
                Environmental<span className="font-bold">{` Health`}</span>{" "}
                <br /> Renewable<span className="font-bold">{` Energy`}</span>{" "}
                <br /> <span className="font-bold">{`Waste `}</span>Management
              </h2>
              <p className={`${DESCRIPTION}`}>
                We recognize that any intervention must extend beyond physical
                structures to address foundational human needs, particularly
                environmental health, hygiene, and sources of energy. Our
                practice actively engages in the design and implementation of
                waste management efforts, collective practices for renewable
                energy solutions, and reducing pollution. Sustainable impact
                requires deep community involvement, which is why our spatial
                solutions are intrinsically linked with hands-on workshops,
                action-based research, and targeted awareness programs. This
                holistic approach envisions long-term resilience, dignity, and
                systemic well-being for the people who need them most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* comic */}
      <section
        className={`${FLEX_SECTION} text-[#0B3335]`}
        data-navbar-tone="non-white"
      >
        <Image
          src="/images/Brochure/33.jpg"
          alt="Architecture project interior"
          fill
          sizes="100vw"
          className="z-0 object-cover object-center"
        />
        <div
          className={`z-20 flex flex-col gap-2 items-start justify-start ${SECTION_CONTENT_WIDTH}`}
        >
          <h2 className={`${HEADING} text-white`}>
            Visualization <br />
            <span className="font-bold">{`& Storytelling`}</span>
          </h2>
          <p className={`${DESCRIPTION}`}>
            Our work goes beyond just building spaces—it extends into
            visualization and storytelling. As our living environment is
            fundamentally about the people and other beings who inhabit it, we
            want to share the true stories of the communities we work with.
            Through creative booklets, illustrations, and careful documentation,
            we capture their memories, stories, songs, vibrant cultures, and
            everyday lifestyles.
          </p>
        </div>
      </section>

      {/* education */}
      <section
        className={`${FLEX_SECTION} items-start justify-center text-dark-teal`}
        data-navbar-tone="white"
      >
        <div
          className={`z-20 flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-18 ${SECTION_CONTENT_WIDTH}`}
        >
          <Image
            src="/images/Brochure/37.jpg"
            alt="Architecture project interior"
            width={600}
            height={600}
            className="h-auto w-full max-w-[32rem] object-contain object-center lg:w-[44%]"
          />
          <div className="z-20 flex min-w-0 flex-1 flex-col items-start justify-start gap-2">
            <h2 className={`${HEADING}`}>
              Education, <span className="font-bold">{` Knowledge`}</span>{" "}
              <br /> & Environmental Practice
            </h2>
            <p className={`${DESCRIPTION}`}>
              Education and knowledge sharing are the foundation of lasting
              change. Our work actively facilitates meaningful learning for
              children, women, and the wider community. We focus on creating
              inclusive spaces and opportunities where knowledge can be shared
              openly. A major part of this mission is practicing and teaching
              good environmental habits, such as sustainable building methods
              and ecological care. Through hands-on community programs and
              workshops, we raise awareness about how to protect the local
              environment while improving everyday life. By combining education
              with real-world action, we empower communities to make informed
              choices, ensuring that both the people and their natural
              surroundings can thrive together for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* emergency */}
      <section
        className={`${FLEX_SECTION} text-white`}
        data-navbar-tone="non-white"
      >
        <Image
          src="/images/Brochure/41.jpg"
          alt="Architecture project interior"
          fill
          sizes="100vw"
          className="z-0 object-cover object-center"
        />
        <div
          className={`z-20 flex flex-col gap-2 items-start justify-start ${SECTION_CONTENT_WIDTH}`}
        >
          <h2 className={`${HEADING} font-normal`}>
            <span className="font-bold">{`Emergency `}</span>Response,
            <br />
            <span className="font-bold">{`Low Footprint `}</span>&<br />
            <span className="font-bold">{`Affordable `}</span>Solutions
          </h2>
          <p className={`${DESCRIPTION}`}>
            Our emergency response initiatives focus on designing safe,
            dignifying emergency shelters and rapid disaster response for
            affected communities. We understand that emergencies require more
            than just quick fixes. Our philosophy is rooted in creating
            resilient, long-term solutions that help vulnerable populations
            rebuild their lives safely and within limited resources.
          </p>
        </div>
      </section>

      {/* Material */}
      <section
        className={`${FLEX_SECTION} items-start justify-center text-dark-teal`}
        data-navbar-tone="white"
      >
        <div
          className={`z-20 flex flex-col items-center justify-center gap-10 sm:gap-14 lg:gap-18 ${SECTION_CONTENT_WIDTH}`}
        >
          <div className="w-full">
            <Image
              src="/images/Brochure/43.jpg"
              alt="Architecture project interior"
              width={1200}
              height={1200}
              className="h-auto w-full object-contain object-center"
            />
          </div>
          <div
            className={`z-20 flex flex-col items-start justify-start gap-8 lg:flex-row lg:gap-18 ${SECTION_CONTENT_WIDTH}`}
          >
            <h2 className={`${HEADING} text-left lg:text-end`}>
              Material <br /> <span className="font-bold">{`Research`}</span>{" "}
              <br /> Training <br /> &{" "}
              <span className="font-bold">{` Livelihood`}</span>
            </h2>
            <p className={`${DESCRIPTION}`}>
              A major focus of our practice involves researching and using
              sustainable, locally sourced materials to find the most
              appropriate and eco-friendly solutions for every project. The
              process tries to go far beyond just construction; it actively
              creates valuable new skills and meaningful livelihood
              opportunities. By connecting material research with community
              knowledge sharing, we want to enable communities to earn a better
              living while protecting the local environment, ensuring that our
              projects bring long-lasting economic and ecological benefits.
            </p>
          </div>
          <div className="w-full">
            <Image
              src="/images/Brochure/44.jpg"
              alt="Architecture project interior"
              width={1200}
              height={1200}
              className="h-auto w-full object-contain object-center"
            />
          </div>
        </div>
      </section>

      {/* forest */}
      <section
        className={`${FLEX_SECTION} text-white`}
        data-navbar-tone="non-white"
      >
        <Image
          src="/images/Brochure/47.jpg"
          alt="Architecture project interior"
          fill
          sizes="100vw"
          className="z-0 object-cover object-center"
        />
        <div
          className={`z-20 flex flex-col gap-2 items-end justify-start ${SECTION_CONTENT_WIDTH}`}
        >
          <div>
            <h2 className={`${HEADING} font-light`}>
              <span className="font-bold">{`Forest`}</span> <br />
              <span className="font-bold">{`Agriculture`}</span> & <br />
              <span className="font-bold">{`Soil`}</span> Development
            </h2>
            <p className={`${DESCRIPTION}`}>
              Reflecting our commitment to the environment, we actively work
              alongside environmental and agricultural activists to promote
              sustainable practices and ecological healing. A core part of our
              approach is treating soil as a valuable resource and creating
              fast-growing forests with native plants to quickly revive local
              biodiversity. We are deeply invested in understanding and
              restoring native ecosystems, ensuring that our efforts are not
              foreign to the local environment.
            </p>
          </div>
        </div>
      </section>

      {/* Connection */}
      <section
        className={`${FLEX_SECTION} text-dark-teal`}
        data-navbar-tone="white"
      >
        <div
          className={`z-20 flex flex-col items-start justify-start gap-10 sm:gap-16 ${SECTION_CONTENT_WIDTH}`}
        >
          <div className="flex w-full flex-col items-start justify-start gap-10 text-left lg:flex-row lg:items-end lg:gap-18 lg:text-end">
            <div className="w-3/5">
              <Image
                src="/images/Brochure/49.jpg"
                alt="Architecture project interior"
                width={1200}
                height={1200}
                className="h-auto w-full max-w-[32rem] object-contain object-center lg:w-3/5"
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col items-start justify-start gap-4 lg:items-end">
              <h2 className={`${HEADING} font-normal`}>
                <span className="font-bold">{`Trust, `}</span> Connection &{" "}
                <br />
                <span className="font-bold">{`Collective`}</span>
              </h2>
              <p className={`${DESCRIPTION}`}>
                Meaningful architecture is driven by clear intention to build
                trust, genuine connections, and strong collectives. We actively
                collaborate with a wide range of stakeholders—including
                government bodies, academic institutions, local businesses, and
                grassroots entrepreneurs. Rather than imposing top-down design
                decisions, we practice the art of &ldquo;slow building.&rdquo;
                By maintaining a steady presence within the communities we
                serve, we allow projects to develop gradually and organically
                over time.
              </p>
            </div>
          </div>
          <div className="w-full">
            <Image
              src="/images/Brochure/50.jpg"
              alt="Architecture project interior"
              width={1200}
              height={1200}
              className="h-auto w-full object-contain object-center"
            />
          </div>
        </div>
      </section>

      {/* ethical */}
      <section
        className={`${FLEX_SECTION} text-white`}
        data-navbar-tone="non-white"
      >
        <Image
          src="/images/Brochure/54.jpg"
          alt="Architecture project interior"
          fill
          sizes="100vw"
          className="z-0 object-cover object-center"
        />
        <div
          className={`z-20 flex flex-col gap-2 items-start justify-start ${SECTION_CONTENT_WIDTH}`}
        >
          <h2 className={`${HEADING} font-normal`}>
            <span className="font-bold">{`Ethical`}</span>
            <br />
            Construction
          </h2>
          <p className={`${DESCRIPTION}`}>
            Our construction process also resonates with ethical practices,
            guiding everything from the sustainable sourcing of materials to the
            actual making and long-term maintenance of a space. We believe that
            construction should not erase history, which is why we actively work
            to preserve and celebrate local cultural elements through our
            building techniques. We place a strong emphasis on engaging the
            community directly in the construction process itself. By working
            side-by-side with residents and artisans, we ensure that the
            creation of the building is a culturally respectful, dignifying, and
            empowering experience.
          </p>
        </div>
      </section>
    </main>
  );
}
