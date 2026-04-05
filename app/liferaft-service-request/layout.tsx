import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liferaft Service Request | Pacific Safety Solution Limited",
  description:
    "Submit a service request for liferaft inspection, maintenance, and recertification. Professional maritime equipment servicing with quick turnaround.",
  keywords:
    "liferaft service request, liferaft maintenance, service request, maritime maintenance, equipment servicing, professional repair",
  openGraph: {
    type: "website",
    url: "https://pacificsafetysolutionltd.com/liferaft-service-request",
    title: "Liferaft Service Request | Pacific Safety Solution Limited",
    description:
      "Submit a service request for professional liferaft maintenance and recertification services.",
  },
  twitter: {
    card: "summary",
    title: "Liferaft Service Request",
    description:
      "Submit a service request for liferaft maintenance and inspection",
  },
};

export default function LiferaftServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
