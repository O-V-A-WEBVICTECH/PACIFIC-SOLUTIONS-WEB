import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Pacific Safety Solution Limited",
  description:
    "Get in touch with Pacific Safety Solution Limited. Contact us for inquiries about marine safety equipment, ship maintenance services, and other maritime solutions. Phone: +2348054094450",
  keywords:
    "contact us, customer service, marine services inquiry, maritime support, customer support, Pacific Safety Solution",
  openGraph: {
    type: "website",
    url: "https://pacificsafetysolutionltd.com/contact-us",
    title: "Contact Us | Pacific Safety Solution Limited",
    description:
      "Get in touch with Pacific Safety Solution Limited for all your marine safety needs.",
  },
  twitter: {
    card: "summary",
    title: "Contact Us | Pacific Safety Solution Limited",
    description:
      "Reach out to Pacific Safety Solution Limited for marine safety services",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
