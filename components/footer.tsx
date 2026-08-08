import Link from "next/link";
import Image from "next/image";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#5200f5] text-violet-200">
      <div className="container mx-auto px-6 lg:px-12 py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-5">

        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/images/logo.png"
              alt="Pacific Safety Solution logo"
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
            />
            <span className="text-white font-bold text-sm leading-tight">
              Pacific Safety<br />
              <span className="font-normal text-violet-300 text-xs">Solution Limited</span>
            </span>
          </div>
          <p className="text-xs text-violet-300 leading-relaxed">
            Trusted marine safety and LSA/FFA specialists serving Nigeria and West Africa since 2022.
          </p>
        </div>

        {/* Location */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
            Location
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <FaMapMarkerAlt className="mt-0.5 text-violet-300 shrink-0" />
              <span className="text-violet-200 leading-relaxed">
                Plot QFF 10, Ibafon Street,<br />
                Off Apapa-Oshodi Expressway,<br />
                Lagos, Nigeria.
              </span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
            Contact
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2.5">
              <FaPhoneAlt className="text-violet-300 shrink-0" />
              <a href="tel:+2348054094450" className="text-violet-200 hover:text-white transition-colors">
                +234 805 409 4450
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <FaEnvelope className="text-violet-300 shrink-0 mt-0.5" />
              <a
                href="mailto:info@pacificsafetysolutionltd.com"
                className="text-violet-200 hover:text-white transition-colors break-all"
              >
                info@pacificsafetysolutionltd.com
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <FaEnvelope className="text-violet-300 shrink-0 mt-0.5" />
              <a
                href="mailto:pacificsafety2020@yahoo.com"
                className="text-violet-200 hover:text-white transition-colors break-all"
              >
                pacificsafety2020@yahoo.com
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
            Services
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "LSA/FFA Inspection & Re-Certification", href: "/ffa-Inspection-and-recertification" },
              { label: "Foam Analysis & Air Quality Test", href: "/analysis" },
              { label: "Marine Safety Equipment", href: "/marine-equipment-and-ship-maintenance" },
              { label: "Fiberglass Repairs", href: "/fiberglass-repairs" },
              { label: "Inflatable Liferaft Rental", href: "/inflatable-liferaft-rental" },
              { label: "Calibration of Equipment", href: "/calibration-of-equipment" },
            ].map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="text-violet-200 hover:text-white transition-colors">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links + Social */}
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Company Profile", href: "/company-profile" },
                { label: "Our Gallery", href: "/our-gallery" },
                { label: "Products", href: "/products" },
                { label: "Contact Us", href: "/contact-us" },
                { label: "Service Request", href: "/liferaft-service-request" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-violet-200 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">
              Follow Us
            </h4>
            <div className="flex gap-2">
              {[
                { icon: <FaFacebook />, href: "" },
                { icon: <FaInstagram />, href: "" },
                { icon: <FaLinkedin />, href: "" },
                { icon: <FaWhatsapp />, href: "https://wa.me/message/TZVHNBSFMPKUM1" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 text-violet-200 hover:bg-white hover:text-[#5200f5] transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-6 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-violet-300">
          <p>
            &copy; 2026{" "}
            <strong className="text-white">Pacific Safety Solution Limited</strong>.
            All rights reserved.
          </p>
          <p>
            Site by{" "}
            <a
              href="https://www.webvictech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-200 hover:text-white transition-colors underline"
            >
              Webvictech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
