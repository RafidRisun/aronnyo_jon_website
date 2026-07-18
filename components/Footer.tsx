"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const path = usePathname();
  return (
    <>
      {path !== "/" && (
        <div className="flex w-full items-end justify-between px-10 py-15 bg-white text-[#104649]">
          <div className="flex-1">
            <div className="relative w-50 h-50">
              <Image
                src="/images/logo blue.jpg"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <span>© 2026 Local Orchestra. All rights reserved.</span>
          </div>
          <div className="flex-1 flex flex-col items-end justify-end text-end gap-2">
            <span className="font-bold text-2xl">Contact Us:</span>
            <a
              href="mailto:info@localorchestra.com"
              className="hover:underline"
              target="_blank"
            >
              info@localorchestra.com
            </a>
            <a
              href="tel:+880123456789"
              className="hover:underline"
              target="_blank"
            >
              +880 123 456 789
            </a>
            <a
              href="https://maps.app.goo.gl/XXKn9BitP53spAht6"
              className="hover:underline"
              target="_blank"
            >
              Aronnyojon Construction Studio, Rajashon, Savar, Dhaka, Bangladesh
            </a>
          </div>
        </div>
      )}
    </>
  );
}
