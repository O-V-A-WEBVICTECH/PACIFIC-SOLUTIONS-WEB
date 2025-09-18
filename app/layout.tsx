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
  title: "Pacific Safety Solution limited",
  description:
    "PACIFIC SAFETY SOLUTION LIMITED  is a duly registered Limited Liability Company with CAC in the federal republic of Nigeria with registration number RC1928296, we supply ship maintainace part and other marine supplies such as ship Life Jackets and Work Vests, Immersion Suits, Emergency Food Rations and Water Marine Distress Signals (Pyrotechnics) Safety Lights, New Inflatable Life rafts, MOB, HRU & Line thrower Navigational aids Engines etc ",
  icons: {
    icon: "/images/logo.ico",
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
        <Script
          id="organization-logo"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              url: "https://pacificsafetysolutionltd.com",
              logo: "https://pacificsafetysolutionltd.com/images/logo.png",
              name: "Pacific Safety Solution limited",
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
