"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, ChevronRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

interface NavLinks {
  title: string;
  url: string;
  subItems?: NavLinks[];
}

const navLinks: NavLinks[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/company-profile",
    subItems: [
      { title: "Company Profile", url: "/company-profile" },
      {
        title: "Vision and Mission Statement",
        url: "/vision-and-mission-statements",
      },
      { title: "Core Values", url: "/core-values" },
      {
        title: "Health safety and enviroment (HSE) policy",
        url: "/health-safety-and-enviroment-policy",
      },
    ],
  },
  {
    title: "Products",
    url: "/products",
  },
  {
    title: "Services",
    url: "#",
    subItems: [
      {
        title: "LSA/FFA Inspection and Re-Certification",
        url: "/ffa-Inspection-and-recertification",
      },
      { title: "Carbon Dioxide Refilling", url: "/carbon-dioxide-refilling" },
      {
        title: "Inflatable Liferaft Rental",
        url: "/inflatable-liferaft-rental",
      },
      {
        title: "Calibration of equipment",
        url: "/calibration-of-equipment",
      },
      {
        title: " Marine Safety Equipment & Ship Maintenance Parts",
        url: "/marine-equipment-and-ship-maintenance",
      },
      {
        title: "Fiberglass Repairs",
        url: "/fiberglass-repairs",
      },
    ],
  },
  {
    title: "Contact",
    url: "/contact-us",
    subItems: [
      {
        title: "Contact Us",
        url: "/contact-us",
      },
      {
        title: "Services request form",
        url: "/liferaft-service-request",
      },
    ],
  },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [serviceOpen, setService] = useState<boolean>(false);
  const [aboutOpen, setAbout] = useState<boolean>(false);
  const [openContact, setContact] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setService(false);
    setAbout(false);
  };
  const toggleAbout = () => setAbout(!aboutOpen);
  const toggleService = () => setService(!serviceOpen);
  const toggleContact = () => setContact(!openContact);

  useEffect(() => {
    let scrollY = 0;

    if (menuOpen) {
      scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, scrollY);
    }
  }, [menuOpen]);

  return (
    <>
      {/* Top Bar */}
      <div className="w-full bg-neutral-900 text-white text-xs lg:text-sm py-2 px-4  flex justify-between items-center gap-6">
        <span className="flex items-center gap-1">
          📞{" "}
          <a href="tel:+2348054094490" className="hover:underline">
            +2348054094490
          </a>
        </span>
        <span className="flex items-center gap-1">
          ✉️{" "}
          <a
            href="mailto:pacificsafety2020@yahoo.com"
            className="hover:underline"
          >
            pacificsafety2020@yahoo.com
          </a>
        </span>
        <span>
          <Link
            href="https://wa.me/message/TZVHNBSFMPKUM1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 flex items-center gap-1  rounded-full"
          >
            <FaWhatsapp />
            <p className="hidden md:block font-medium">Chat</p>
          </Link>
        </span>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-[2000] bg-[#5200f5] text-white transition-colors duration-300 ${
          menuOpen ? "overflow-hidden" : ""
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 py-4 lg:py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image
              width={200}
              height={200}
              className="w-6 lg:w-6 h-auto"
              src="/images/logo.png"
              alt="logo"
            />
            <p className="text-base  lg:text-2xl font-bold truncate">
              Pacific Safety Solution Limited
            </p>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  href={item.url}
                  className="hover:text-gray-300 transition"
                >
                  {item.title}
                </Link>
                {item.subItems && (
                  <div className="absolute left-0 top-full  min-w-[220px] bg-white text-neutral-900 rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-50">
                    {item.subItems.map((sub, subIdx) => (
                      <Link
                        key={subIdx}
                        href={sub.url}
                        className="block px-6 py-3 hover:bg-gray-100 border-b last:border-b-0 border-gray-200"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          {menuOpen ? null : (
            <button
              onClick={toggleMenu}
              className="lg:hidden focus:outline-none"
              aria-label="Toggle menu"
            >
              <Menu className="w-9 h-5" />
            </button>
          )}
        </div>

        {/* Side Mobile Menu */}
        <div
          className={`fixed top-0 pt-12 left-0 font-[lato] h-full w-[65%] bg-white text-neutral-900 z-[3000] overflow-y-scroll transform transition-transform duration-300 shadow-xl ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav className="text-sm font-semibold flex flex-col">
            <Link
              onClick={toggleMenu}
              className="py-3 pl-8 uppercase flex items-center justify-between border-b border-neutral-200 hover:bg-neutral-50 transition-colors duration-200"
              href="/"
            >
              Home
            </Link>
            <Link
              className="py-3 pl-8 uppercase flex items-center justify-between border-b border-neutral-200 hover:bg-neutral-50 transition-colors duration-200"
              href="#"
            >
              About
              {aboutOpen ? (
                <ChevronDown
                  onClick={toggleAbout}
                  size={24}
                  className="mx-4 text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
                />
              ) : (
                <ChevronRight
                  onClick={toggleAbout}
                  size={24}
                  className="mx-4 text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
                />
              )}
            </Link>
            {aboutOpen && (
              <nav className="flex text-sm pl-10 flex-col bg-neutral-50">
                <Link
                  onClick={toggleMenu}
                  className="py-3 pl-3 capitalize hover:bg-neutral-100 transition-colors duration-200"
                  href="/company-profile"
                >
                  Company Profile
                </Link>
                <Link
                  onClick={toggleMenu}
                  className="py-3 pl-3 capitalize hover:bg-neutral-100 transition-colors duration-200"
                  href="/vision-and-mission-statements"
                >
                  Vision and Mission
                </Link>
                <Link
                  onClick={toggleMenu}
                  className="py-3 pl-3 capitalize hover:bg-neutral-100 transition-colors duration-200"
                  href="/core-values"
                >
                  Core Values
                </Link>
                <Link
                  onClick={toggleMenu}
                  className="py-3 pl-3 capitalize hover:bg-neutral-100 transition-colors duration-200"
                  href="/health-safety-and-enviroment-policy"
                >
                  Health safety and enviroment (HSE) policy
                </Link>
              </nav>
            )}
            <Link
              onClick={toggleMenu}
              className="py-3 pl-8 uppercase border-b border-neutral-200 hover:bg-neutral-50 transition-colors duration-200"
              href="/products"
            >
              Products
            </Link>
            <Link
              className="py-3 pl-8 uppercase flex items-center justify-between border-b border-neutral-200 hover:bg-neutral-50 transition-colors duration-200"
              href="#"
            >
              Services
              {serviceOpen ? (
                <ChevronDown
                  onClick={toggleService}
                  size={24}
                  className="mx-4 text-neutral-600 hover:text-neutral-900 transition-colors duration-200 border-neutral-200 "
                />
              ) : (
                <ChevronRight
                  onClick={toggleService}
                  size={24}
                  className="mx-4 text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
                />
              )}
            </Link>
            {serviceOpen && (
              <nav className="flex text-sm pl-10 flex-col bg-neutral-50">
                <Link
                  onClick={toggleMenu}
                  className="py-3 pl-3  hover:bg-neutral-100 transition-colors duration-200"
                  href="/ffa-Inspection-and-recertification"
                >
                  LSA/FFA Inspection and Re-Certification
                </Link>
                <Link
                  onClick={toggleMenu}
                  className="py-3 pl-3 capitalize hover:bg-neutral-100 transition-colors duration-200"
                  href="/carbon-dioxide-refilling"
                >
                  Carbon Dioxide Refilling
                </Link>
                <Link
                  onClick={toggleMenu}
                  className="py-3 pl-3 capitalize hover:bg-neutral-100 transition-colors duration-200"
                  href="/marine-equipment-and-ship-maintenance"
                >
                  Marine Safety Equipment & Ship Maintenance Parts
                </Link>
                <Link
                  onClick={toggleMenu}
                  className="py-3 pl-3 capitalize hover:bg-neutral-100 transition-colors duration-200"
                  href="/fiberglass-repairs"
                >
                  Fiberglass Repairs
                </Link>
                <Link
                  onClick={toggleMenu}
                  className="py-3 pl-3 capitalize hover:bg-neutral-100 transition-colors duration-200"
                  href="/inflatable-liferaft-rental"
                >
                  Inflatable Liferaft Rental
                </Link>
                <Link
                  onClick={toggleMenu}
                  className="py-3 pl-3 capitalize hover:bg-neutral-100 transition-colors duration-200"
                  href="/calibration-of-equipment"
                >
                  Calibration of equipment
                </Link>
              </nav>
            )}
            <Link
              className="py-3 pl-8 uppercase border-b flex items-center justify-between border-neutral-200 hover:bg-neutral-50 transition-colors duration-200"
              href="#"
            >
              Contact
              {openContact ? (
                <ChevronDown
                  onClick={toggleContact}
                  size={24}
                  className="mx-4 text-neutral-600 hover:text-neutral-900 transition-colors duration-200 border-neutral-200 "
                />
              ) : (
                <ChevronRight
                  onClick={toggleContact}
                  size={24}
                  className="mx-4 text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
                />
              )}
            </Link>
            {openContact && (
              <nav className="flex text-sm pl-10 flex-col bg-neutral-50">
                <Link
                  onClick={toggleMenu}
                  className="py-3 pl-3 capitalize hover:bg-neutral-100 transition-colors duration-200"
                  href="/contact-us"
                >
                  Contact us
                </Link>
                <Link
                  onClick={toggleMenu}
                  className="py-3 pl-3 capitalize hover:bg-neutral-100 transition-colors duration-200"
                  href="/liferaft-service-request"
                >
                  Services request form
                </Link>
              </nav>
            )}
          </nav>
        </div>

        {/* Transparent click area to close menu (no dark overlay) */}
        {menuOpen && (
          <div
            onClick={toggleMenu}
            className="fixed inset-0 z-[2500] lg:hidden"
          />
        )}
      </header>
    </>
  );
}
