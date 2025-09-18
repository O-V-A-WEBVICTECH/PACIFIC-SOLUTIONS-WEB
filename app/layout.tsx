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
  title: "Pacific Safety Solution Limited",
  description:
    "PACIFIC SAFETY SOLUTION LIMITED is a duly registered Limited Liability Company with CAC in the federal republic of Nigeria with registration number RC1928296. We supply ship maintenance parts and other marine supplies such as Life Jackets, Work Vests, Immersion Suits, Emergency Food Rations and Water, Marine Distress Signals (Pyrotechnics), Safety Lights, Inflatable Life Rafts, MOB, HRU & Line Throwers, Navigational Aids, Engines, and more.",
  icons: {
    icon: "/images/logo.ico",
    shortcut: "/images/logo-32x32.png",
    apple: "/images/apple-touch-icon.png",
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
