import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkedAlt,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#661cfa] text-white">
      <div className="container mx-auto px-6 py-10 grid gap-8 md:grid-cols-3 lg:grid-cols-5">
        {/* Location */}
        <div>
          <h4 className="text-lg font-medium mb-4 border-b-2 border-white inline-block">
            Location
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkedAlt className="mt-1" />
              <span className="capitalize">
                PLOT QFF 10. IBAFON STREET
                <br />
                OFF APAPA-OSHODI EXPRESS WAY
                <br />
                LAGOS-NIGERIA.
              </span>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-lg font-medium mb-4 border-b-2 border-white inline-block">
            Contact Information
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> <span>Tel: +2348054094490</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> <span>pacificsafety2020@yahoo.com</span>
            </li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-medium mb-4 border-b-2 border-white inline-block">
            Links
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/company-profile" className="hover:underline">
                Company Profile
              </Link>
            </li>
            <li>
              <Link href="" className="hover:underline">
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-medium mb-4 border-b-2 border-white inline-block">
            Services
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                className="py-3 pl-3 hover:bg-neutral-100 transition-colors duration-200"
                href="/ffa-Inspection-and-recertification"
              >
                LSA/FFA Inspection and Re-Certification
              </Link>
            </li>
            <li>
              <Link
                className="py-3 pl-3 capitalize hover:bg-neutral-100 transition-colors duration-200"
                href="/carbon-dioxide-refilling"
              >
                Refilling of C02 & medical oxygen cylinders.
              </Link>
            </li>
            <li>
              <Link
                className="py-3 pl-3 capitalize hover:bg-neutral-100 transition-colors duration-200"
                href="/marine-equipment-and-ship-maintenance"
              >
                Supplies of all marine safety equipment & ship stores
                maintenance parts.
              </Link>
            </li>
            <li>
              <Link
                className="py-3 pl-3 capitalize hover:bg-neutral-100 transition-colors duration-200"
                href="/fiberglass-repairs"
              >
                Fiberglass Repairs
              </Link>
            </li>
            <li>
              <Link
                className="py-3 pl-3 capitalize hover:bg-neutral-100 transition-colors duration-200"
                href="/inflatable-liferaft-rental"
              >
                Inflatable Liferaft on rental bases.
              </Link>
            </li>
            <li>
              <Link
                className="py-3 pl-3 capitalize hover:bg-neutral-100 transition-colors duration-200"
                href="/liferaft-service-and-recertification"
              >
                Liferaft Service & Recertification
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-medium mb-4 border-b-2 border-white inline-block">
            Social Media
          </h4>
          <div className="flex gap-3">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#005a9c] p-2 rounded-full hover:bg-gray-200"
            >
              <FaFacebook />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#005a9c] p-2 rounded-full hover:bg-gray-200"
            >
              <FaInstagram />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#005a9c] p-2 rounded-full hover:bg-gray-200"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#7533f7] text-center py-4 text-xs">
        <strong>Pacific Solutions Limited</strong> &copy; 2025 | Site By <a></a>
        .
      </div>
    </footer>
  );
}
