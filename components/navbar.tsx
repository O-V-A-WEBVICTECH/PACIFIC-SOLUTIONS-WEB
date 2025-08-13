"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import Image from "next/image";

interface NavLinks {
  title: string;
  url: string;
  subItems?: NavLinks[];
}

const navLinks: NavLinks[] = [
  {
    title: "About",
    url: "#about",
    subItems: [
      { title: "Company Profile", url: "#contact" },
      { title: "Vision and Mission Statement", url: "#contact" },
      { title: "Core Values", url: "#contact" },
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
        title: "Cylinder Hydrotesting & Requalification",
        url: "/cylinder-hydrotesting-and-requalification",
      },
      { title: "Carbon Dioxide Refilling", url: "/carbon-dioxide-refilling" },
      {
        title: "Inflatable Liferaft Rental",
        url: "/inflatable-liferaft-rental",
      },
      {
        title: "Liferaft Service & Recertification",
        url: "/liferaft-service-and-recertification",
      },
    ],
  },
  {
    title: "Contact",
    url: "#contact",
  },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [serviceOpen, setService] = useState<boolean>(false);
  const [aboutOpen, setAbout] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setService(false);
    setAbout(false);
  };
  const toggleAbout = () => setAbout(!aboutOpen);
  const toggleService = () => setService(!serviceOpen);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-[2000] bg-[#5200f5] text-white transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12 py-4 lg:py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image
            width={200}
            height={200}
            className="w-6 lg:w-6 h-auto"
            src="/images/logo.png"
            alt="logo"
          />
          <p className="text-base font-[lato] lg:text-2xl font-bold truncate">
            Pacific Safety Solution Limited
          </p>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((item, index) => (
            <div key={index} className="relative group">
              <Link href={item.url} className="hover:text-gray-300 transition">
                {item.title}
              </Link>
              {item.subItems && (
                <div className="absolute left-0 top-full mt-2 min-w-[220px] bg-white text-neutral-900 rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-50">
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
        className={`fixed top-0 pt-10 left-0 font-[lato] h-full w-[65%] bg-white text-neutral-900 z-[3000] overflow-y-scroll transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="text-xs font-medium  flex flex-col">
          <Link
            className="py-2 pl-6 uppercase flex items-center justify-between  border-neutral-300"
            href="#about"
          >
            About
            {aboutOpen ? (
              <ChevronDown onClick={toggleAbout} size={20} className="mx-4 " />
            ) : (
              <ChevronRight onClick={toggleAbout} size={20} className="mx-4 " />
            )}
          </Link>
          {aboutOpen ? (
            <nav className="flex text-sm pl-6 flex-col">
              <Link className="py-2 pl-2 capitalize" href="#contact">
                company profile
              </Link>
              <Link className="py-2 pl-2 capitalize" href="#contact">
                Vision and Mission Statement
              </Link>
              <Link className="py-2 pl-2 capitalize " href="#contact">
                Core Values
              </Link>
            </nav>
          ) : null}
          <Link className="py-2 pl-6 uppercase" href="#products">
            Products
          </Link>
          <Link
            className="py-2 flex items-center flex-row justify-between pl-6 uppercase  "
            href="#"
          >
            Services
            {serviceOpen ? (
              <ChevronDown
                onClick={toggleService}
                size={20}
                className="mx-4 text-neutral-900 border-l-[1px] border-gray-300"
              />
            ) : (
              <ChevronRight
                onClick={toggleService}
                size={20}
                className="mx-4 border-l-[1px] border-gray-300"
              />
            )}
          </Link>
          {serviceOpen ? (
            <nav className="flex text-sm pl-6 flex-col">
              <Link
                className="py-2 pl-2 capitalize  "
                href="/Cylinder-Hydrotesting-and-Requalification"
              >
                Cylinder Hydrotesting & Requalification
              </Link>
              <Link
                className="py-2 pl-2 capitalize  "
                href="/carbon-dioxide-refilling"
              >
                Carbon Dioxide Refilling
              </Link>
              <Link
                className="py-2 pl-2 capitalize  "
                href="/inflatable-liferaft-rental"
              >
                Inflatable Liferaft Rental
              </Link>
              <Link
                className="py-2 pl-2 capitalize  "
                href="/liferaft-service-and-recertification"
              >
                Liferaft Service & Recertification
              </Link>
            </nav>
          ) : null}
          <Link className="py-2 pl-6 uppercase " href="#contact">
            Contact
          </Link>
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
  );
}
