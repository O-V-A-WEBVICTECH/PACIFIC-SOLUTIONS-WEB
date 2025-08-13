"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import Image from "next/image";

interface NavLinks {
  title: string;
  url: string;
}

const navLinks: NavLinks[] = [
  {
    title: "About",
    url: "#about",
  },
  {
    title: "Products",
    url: "/products",
  },
  {
    title: "Services",
    url: "/services",
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
            <Link
              href={item.url}
              key={index}
              className="hover:text-gray-300 transition"
            >
              {item.title}
            </Link>
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
        className={`fixed top-0 left-0 font-[lato] h-full w-[65%] bg-gray-100 text-neutral-900 z-[3000] transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-6">
          <p className="text-lg uppercase  font-bold">Menu</p>
          <button onClick={toggleMenu} aria-label="Close menu">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="text-base font-medium  font-[lato] flex flex-col">
          <Link
            className="py-5 pl-6 uppercase flex items-center justify-between border-b-[1px]  border-neutral-300"
            href="#about"
          >
            About
            {aboutOpen ? (
              <ChevronDown
                onClick={toggleAbout}
                size={24}
                className="mx-4 border-l-[1px] border-gray-300"
              />
            ) : (
              <ChevronRight
                onClick={toggleAbout}
                size={24}
                className="mx-4 border-l-[1px] border-gray-300"
              />
            )}
          </Link>
          {aboutOpen ? (
            <nav className="flex text-base pl-6 flex-col">
              <Link
                className="py-5 pl-6 capitalize  border-b-[1px]  border-neutral-300"
                href="#contact"
              >
                company profile
              </Link>
              <Link
                className="py-5 pl-6 capitalize  border-b-[1px]  border-neutral-300"
                href="#contact"
              >
                Vision and Mission Statement
              </Link>
              <Link
                className="py-5 pl-6 capitalize  border-b-[1px]  border-neutral-300"
                href="#contact"
              >
                Core Values
              </Link>
            </nav>
          ) : null}
          <Link
            className="py-5 pl-6 uppercase   border-b-[1px]  border-neutral-300"
            href="#products"
          >
            Products
          </Link>
          <Link
            className="py-5 flex items-center flex-row justify-between pl-6 uppercase  border-b-[1px]  border-neutral-300"
            href="#"
          >
            Services
            {serviceOpen ? (
              <ChevronDown
                onClick={toggleService}
                size={24}
                className="mx-4 border-l-[1px] border-gray-300"
              />
            ) : (
              <ChevronRight
                onClick={toggleService}
                size={24}
                className="mx-4 border-l-[1px] border-gray-300"
              />
            )}
          </Link>
          {serviceOpen ? (
            <nav className="flex text-base pl-6 flex-col">
              <Link
                className="py-5 pl-6 capitalize  border-b-[1px]  border-neutral-300"
                href="/Cylinder-Hydrotesting-and-Requalification"
              >
                Cylinder Hydrotesting & Requalification
              </Link>
              <Link
                className="py-5 pl-6 capitalize  border-b-[1px]  border-neutral-300"
                href="/carbon-dioxide-refilling"
              >
                Carbon Dioxide Refilling
              </Link>
              <Link
                className="py-5 pl-6 capitalize  border-b-[1px]  border-neutral-300"
                href="/inflatable-liferaft-rental"
              >
                Inflatable Liferaft Rental
              </Link>
              <Link
                className="py-5 pl-6 capitalize  border-b-[1px]  border-neutral-300"
                href="/liferaft-service-and-recertification"
              >
                Liferaft Service & Recertification
              </Link>
            </nav>
          ) : null}
          <Link
            className="py-5 pl-6 uppercase  border-b-[1px]  border-neutral-300"
            href="#contact"
          >
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
