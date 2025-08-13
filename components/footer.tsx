import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#005a9c] text-white">
      <div className="container mx-auto px-6 py-10 grid gap-8 md:grid-cols-3 lg:grid-cols-5">
        {/* Location */}
        <div>
          <h4 className="text-lg font-medium mb-4 border-b-2 border-white inline-block">
            Location
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              {/* <FaMapMarkedAlt className="mt-1" /> */}
              <span>
                Somewhere in Africa,
                <br />
                ******
                <br />
                ****
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
              {/* <FaPhoneAlt /> <span>Tel: 1-868-634-4410</span> */}
            </li>
            <li className="flex items-center gap-2">
              {/* <FaFax /> <span>Fax: 1-868-634-2067</span> */}
            </li>
            <li className="flex items-center gap-2">
              {/* <FaEnvelope /> <span>info@marinesafetytt.com</span> */}
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
              <Link href="" className="hover:underline">
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
                href="/liferaft-service-and-recertification"
                className="hover:underline"
              >
                Liferaft Service &amp; Recertification
              </Link>
            </li>
            <li>
              <Link
                href="/cylinder-hydrotesting-and-requalification"
                className="hover:underline"
              >
                Cylinder Hydrotesting &amp; Requalification
              </Link>
            </li>
            <li>
              <Link
                href="/carbon-dioxide-refilling"
                className="hover:underline"
              >
                Carbon Dioxide Refilling
              </Link>
            </li>
            <li>
              <Link
                href="/inflatable-liferaft-rental"
                className="hover:underline"
              >
                Inflatable Liferaft Rental
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
              {/* <FaFacebook /> */}
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#005a9c] p-2 rounded-full hover:bg-gray-200"
            >
              {/* <FaInstagram /> */}
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#005a9c] p-2 rounded-full hover:bg-gray-200"
            >
              {/* <FaLinkedin /> */}
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#00457a] text-center py-4 text-xs">
        <strong>Pacific Solutions Limited</strong> &copy; 2025 | Site By <a></a>
        .
      </div>
    </footer>
  );
}
