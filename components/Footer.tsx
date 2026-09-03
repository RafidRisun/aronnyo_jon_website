import Image from "next/image";

const FOOTER_CONTENT_WIDTH = "w-full max-w-[84rem]";

export default function Footer() {
  return (
    <footer
      id="footer"
      data-navbar-tone="non-white"
      className="relative flex min-h-svh w-full flex-col items-start sm:items-center justify-center overflow-hidden bg-[#829DA4] px-6 pb-8 pt-28 text-white sm:px-10 sm:pb-10 sm:pt-32 lg:px-[clamp(3rem,6vw,6rem)]"
    >
      {/* Keep both marks in this grid so they scale evenly on small screens. */}
      <div>
        <div
          className={`grid flex-1 grid-cols-2 items-end justify-center gap-5 py-8 sm:gap-12 lg:gap-24 ${FOOTER_CONTENT_WIDTH}`}
        >
          <div className="flex min-w-0 flex-col items-center justify-center">
            <Image
              src="/images/Brochure/Detour.jpg"
              alt="Detour"
              width={300}
              height={300}
              sizes="(max-width: 640px) 42vw, 16rem"
              className="h-auto w-full max-w-48 object-contain sm:max-w-64"
            />
            <p className="mt-3 text-center text-sm font-extralight text-black sm:text-base">
              listen | design | build
            </p>
          </div>

          <div className="flex min-w-0 flex-col items-center justify-center">
            <Image
              src="/images/Brochure/aronnyojon.jpg"
              alt="Aronnyo Jon"
              width={300}
              height={300}
              sizes="(max-width: 640px) 42vw, 16rem"
              className="h-auto w-full max-w-48 object-contain sm:max-w-64"
            />
            <p className="mt-3 text-center text-sm font-extralight text-black sm:text-base">
              for ethical construction
            </p>
          </div>
        </div>
      </div>

      {/* On mobile these blocks flow vertically; desktop keeps the 3-column footer. */}
      <div
        className={`absolute bottom-10 grid grid-cols-1 gap-7 text-center text-sm font-extralight leading-relaxed sm:text-base lg:grid-cols-3 lg:items-end lg:gap-10 lg:text-left ${FOOTER_CONTENT_WIDTH}`}
      >
        <address className="not-italic">
          <span className="font-bold">Address:</span>
          <br />
          <a
            href="https://maps.app.goo.gl/4VhfTycrqGmQJvrJA"
            target="_blank"
            rel="noreferrer"
            className="inline-block text-white underline-offset-4 hover:underline"
          >
            68 Elephant Road, Dhaka 1205, Bangladesh
          </a>
          <br />
          <a
            href="https://maps.app.goo.gl/8eRyryvoYM6CXnVm8"
            target="_blank"
            rel="noreferrer"
            className="inline-block text-white underline-offset-4 hover:underline"
          >
            C-43/2 Mojidpur, Savar, Dhaka 1340, Bangladesh
          </a>
        </address>

        <p className="order-3 text-center lg:order-none">
          © 2026 Aronnyo Jon. All rights reserved.
        </p>

        <div className="lg:text-right">
          <span className="font-bold">E-mail:</span>
          <br />
          <a
            href="mailto:local.orchestra@gmail.com"
            className="inline-block text-white underline-offset-4 hover:underline"
          >
            local.orchestra@gmail.com
          </a>
          <br />
          <a
            href="mailto:aronnyojon@gmail.com"
            className="inline-block text-white underline-offset-4 hover:underline"
          >
            aronnyojon@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
