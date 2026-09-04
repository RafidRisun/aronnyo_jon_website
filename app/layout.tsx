import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Local Orchestra | Aronnyojon",
  description:
    "Local Orchestra brings communities together through sustainable architecture, ethical construction, and ecological practices rooted in local culture and knowledge.",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Local Orchestra | Aronnyojon",
    description:
      "Local Orchestra brings communities together through sustainable architecture, ethical construction, and ecological practices rooted in local culture and knowledge.",
    url: "https://localorchestra.org",
    siteName: "Local Orchestra",
    images: [
      {
        url: "https://localorchestra.org/images/Brochure/0.jpg",
        width: 1200,
        height: 630,
        alt: "Local Orchestra | Aronnyojon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col font-sans">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
