import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navbar";
import { Lato, Inter_Tight } from "next/font/google";
import Footer from "@/components/footer";
import { ToastContainer } from "react-toastify";
import Script from "next/script";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  title: "Pacific Safety Solution Limited | Marine Safety & Ship Maintenance",
  description:
    "PACIFIC SAFETY SOLUTION LIMITED - CAC Registration RC1928296. Leading supplier of marine safety equipment, life jackets, lifeboats, inflatable life rafts, ship maintenance parts, and marine supplies in Nigeria. Professional FFA inspection and recertification services.",
  keywords:
    "marine safety, life jackets, lifeboats, inflatable life rafts, ship maintenance, marine supplies, FFA inspection, life raft rental, marine equipment, safety equipment, Nigeria, fiberglass repairs, calibration services",
  icons: {
    icon: "/images/logo.ico",
    shortcut: "/images/logo-32x32.png",
    apple: "/images/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://pacificsafetysolutionltd.com",
    title: "Pacific Safety Solution Limited | Marine Safety & Ship Maintenance",
    description:
      "Leading supplier of marine safety equipment, life jackets, lifeboats, and ship maintenance services in Nigeria.",
    images: [
      {
        url: "https://pacificsafetysolutionltd.com/images/hero-image-1.webp",
        width: 1200,
        height: 630,
        alt: "Pacific Safety Solution Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pacific Safety Solution Limited | Marine Safety & Ship Maintenance",
    description:
      "Leading supplier of marine safety equipment and ship maintenance services",
    images: ["https://pacificsafetysolutionltd.com/images/hero-image-1.webp"],
  },
  other: {
    "google-site-verification": "dVdoPIU1AD1peVcptgjN0nu_zxE6WElWXIrzYzcratA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Organization Logo Schema */}
        <Script
          id="organization-logo"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              url: "https://pacificsafetysolutionltd.com",
              logo: "https://pacificsafetysolutionltd.com/images/logo.png",
              name: "Pacific Safety Solution Limited",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+2348054094450",
                contactType: "Customer Service",
                areaServed: "NG",
              },
            }),
          }}
        />
      </head>
      <body className={`${interTight.className} ${lato.className} font-sans`}>
        <NavBar />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
