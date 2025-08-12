// import Link from "next/link";

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
                Cor. Tucker Valley &amp; Airways Roads,
                <br />
                Chaguaramas,
                <br />
                Trinidad, W.I.
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
              <a
                href="https://marinesafetytt.com/about-mse/company-profile/"
                className="hover:underline"
              >
                Company Profile
              </a>
            </li>
            <li>
              <a
                href="https://marinesafetytt.com/contact-us/"
                className="hover:underline"
              >
                Contact us
              </a>
            </li>
            <li>
              <a
                href="https://marinesafetytt.com/online-payment/"
                className="hover:underline"
              >
                Online Payment
              </a>
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
              <a
                href="https://marinesafetytt.com/our-services/inflatable-liferaft-service-recertification/"
                className="hover:underline"
              >
                Liferaft Service &amp; Recertification
              </a>
            </li>
            <li>
              <a
                href="https://marinesafetytt.com/our-services/gas-cylinder-hydrotesting-requalificatio/"
                className="hover:underline"
              >
                Cylinder Hydrotesting &amp; Requalification
              </a>
            </li>
            <li>
              <a
                href="https://marinesafetytt.com/our-services/carbon-dioxide-refilling/"
                className="hover:underline"
              >
                Carbon Dioxide Refilling
              </a>
            </li>
            <li>
              <a
                href="https://marinesafetytt.com/our-services/inflatable-liferaft-rental/"
                className="hover:underline"
              >
                Inflatable Liferaft Rental
              </a>
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
              href="https://www.facebook.com/marinesafetytt/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#005a9c] p-2 rounded-full hover:bg-gray-200"
            >
              {/* <FaFacebook /> */}
            </a>
            <a
              href="http://instagram.com/marinesafety.tt/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#005a9c] p-2 rounded-full hover:bg-gray-200"
            >
              {/* <FaInstagram /> */}
            </a>
            <a
              href="https://tt.linkedin.com/company/marine-safety-equipment-service-&-sales-company-limited"
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
        <strong>
          Marine Safety Equipment Service and Sales Company Limited
        </strong>{" "}
        &copy; 2025 | Site By{" "}
        <a
          href="https://forwardmultimedia.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold"
        >
          Forward Multimedia Ltd
        </a>
        .
      </div>
    </footer>
  );
}
