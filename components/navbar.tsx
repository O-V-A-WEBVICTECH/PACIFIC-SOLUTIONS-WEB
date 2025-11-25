"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronRight, ChevronDown, Phone, Mail } from "lucide-react";
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
        title: "Health Safety and Environment (HSE) Policy",
        url: "/health-safety-and-enviroment-policy",
      },
    ],
  },
  {
    title: "Approvals/Products",
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
      { title: "Foam Analysis and Air Quality Test", url: "/analysis" },
      {
        title: "Inflatable Liferaft Rental",
        url: "/inflatable-liferaft-rental",
      },
      {
        title: "Calibration of Equipment",
        url: "/calibration-of-equipment",
      },
      {
        title: "Marine Safety Equipment & Ship Maintenance Parts",
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
        title: "Services Request Form",
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
  const [scrolled, setScrolled] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setService(false);
    setAbout(false);
    setContact(false);
  };
  const toggleAbout = () => setAbout(!aboutOpen);
  const toggleService = () => setService(!serviceOpen);
  const toggleContact = () => setContact(!openContact);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      {/* Top Bar - Enhanced */}
      <div className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white border-b border-gray-700">
        <div className="container mx-auto px-4 lg:px-8 py-3 flex flex-wrap justify-between items-center gap-3 text-xs lg:text-sm">
          <a
            href="tel:+2348054094450"
            className="flex items-center gap-2 hover:text-orange-400 transition-colors group"
          >
            <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="font-medium">+234 805 409 4450</span>
          </a>

          <a
            href="mailto:pacificsafety2020@yahoo.com"
            className="flex items-center gap-2 hover:text-orange-400 transition-colors group"
          >
            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="font-medium hidden sm:inline">
              pacificsafety2020@yahoo.com
            </span>
            <span className="font-medium sm:hidden">Email Us</span>
          </a>

          <Link
            href="https://wa.me/message/TZVHNBSFMPKUM1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-1.5 bg-green-600 hover:bg-green-700 rounded-full transition-all hover:scale-105 shadow-lg"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span className="font-semibold hidden md:inline">Chat with Us</span>
            <span className="font-semibold md:hidden">Chat</span>
          </Link>
        </div>
      </div>

      {/* Main Header - Enhanced with glassmorphism */}
      <header
        className={`sticky top-0 z-[2000] transition-all duration-300 ${
          scrolled
            ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 shadow-xl"
            : "bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700"
        } ${menuOpen ? "overflow-hidden" : ""}`}
      >
        <div className="container mx-auto px-4 lg:px-8 py-4 lg:py-5 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 lg:w-12 h-10 lg:h-12 bg-white rounded-full p-1.5 shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105">
              <Image
                width={200}
                height={200}
                className="w-full h-full object-contain"
                src="/images/logo.png"
                alt="Pacific Safety Solution Limited"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base lg:text-xl font-bold text-white leading-tight">
                Pacific Safety Solution
              </span>
              <span className="text-xs text-white/80 hidden sm:block">
                Marine Safety Experts
              </span>
            </div>
          </Link>

          {/* Desktop Nav - Enhanced */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  href={item.url}
                  className="px-4 py-2 text-sm font-semibold text-white hover:text-orange-400 transition-all rounded-lg hover:bg-white/10 flex items-center gap-1"
                >
                  {item.title}
                  {item.subItems && (
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                  )}
                </Link>
                {item.subItems && (
                  <div className="absolute left-0 top-full mt-2 min-w-[280px] bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden border border-gray-100">
                    {item.subItems.map((sub, subIdx) => (
                      <Link
                        key={subIdx}
                        href={sub.url}
                        className="block px-6 py-3.5 text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-700 transition-all border-b last:border-b-0 border-gray-100 font-medium text-sm"
                      >
                        <span className="flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                          {sub.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <Link
              href="/contact-us"
              className="ml-4 px-6 py-2.5 bg-white text-indigo-700 font-bold rounded-full hover:bg-orange-500 hover:text-white transition-all shadow-lg hover:shadow-xl hover:scale-105 text-sm"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile Hamburger - Enhanced */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu - Enhanced with modern design */}
      <div
        className={`fixed top-0 left-0 h-full w-[85%] max-w-sm bg-white z-[3000] transform transition-transform duration-300 shadow-2xl ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 flex items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-full p-2 shadow-lg">
            <Image
              width={200}
              height={200}
              className="w-full h-full object-contain"
              src="/images/logo.png"
              alt="Pacific Safety"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-bold text-lg">Pacific Safety</h3>
            <p className="text-white/80 text-xs">Marine Safety Solutions</p>
          </div>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <nav className="overflow-y-auto h-[calc(100%-100px)] pb-6">
          <Link
            onClick={toggleMenu}
            className="flex items-center px-6 py-4 font-semibold text-gray-900 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-700 transition-all border-b border-gray-100"
            href="/"
          >
            Home
          </Link>

          {/* About Section */}
          <div className="border-b border-gray-100">
            <button
              onClick={toggleAbout}
              className="w-full flex items-center justify-between px-6 py-4 font-semibold text-gray-900 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-700 transition-all"
            >
              <span>About</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  aboutOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                aboutOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="bg-gray-50 py-2">
                <Link
                  onClick={toggleMenu}
                  className="flex items-center px-8 py-3 text-sm text-gray-700 hover:text-indigo-700 hover:bg-white transition-all"
                  href="/company-profile"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Company Profile
                </Link>
                <Link
                  onClick={toggleMenu}
                  className="flex items-center px-8 py-3 text-sm text-gray-700 hover:text-indigo-700 hover:bg-white transition-all"
                  href="/vision-and-mission-statements"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Vision and Mission
                </Link>
                <Link
                  onClick={toggleMenu}
                  className="flex items-center px-8 py-3 text-sm text-gray-700 hover:text-indigo-700 hover:bg-white transition-all"
                  href="/core-values"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Core Values
                </Link>
                <Link
                  onClick={toggleMenu}
                  className="flex items-center px-8 py-3 text-sm text-gray-700 hover:text-indigo-700 hover:bg-white transition-all"
                  href="/health-safety-and-enviroment-policy"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  HSE Policy
                </Link>
              </div>
            </div>
          </div>

          <Link
            onClick={toggleMenu}
            className="flex items-center px-6 py-4 font-semibold text-gray-900 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-700 transition-all border-b border-gray-100"
            href="/products"
          >
            Approvals / Products
          </Link>

          {/* Services Section */}
          <div className="border-b border-gray-100">
            <button
              onClick={toggleService}
              className="w-full flex items-center justify-between px-6 py-4 font-semibold text-gray-900 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-700 transition-all"
            >
              <span>Services</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  serviceOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                serviceOpen ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <div className="bg-gray-50 py-2">
                <Link
                  onClick={toggleMenu}
                  className="flex items-center px-8 py-3 text-sm text-gray-700 hover:text-indigo-700 hover:bg-white transition-all"
                  href="/ffa-Inspection-and-recertification"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  LSA/FFA Inspection
                </Link>
                <Link
                  onClick={toggleMenu}
                  className="flex items-center px-8 py-3 text-sm text-gray-700 hover:text-indigo-700 hover:bg-white transition-all"
                  href="/analysis"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Foam Analysis & Air Quality
                </Link>
                <Link
                  onClick={toggleMenu}
                  className="flex items-center px-8 py-3 text-sm text-gray-700 hover:text-indigo-700 hover:bg-white transition-all"
                  href="/marine-equipment-and-ship-maintenance"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Marine Equipment & Maintenance
                </Link>
                <Link
                  onClick={toggleMenu}
                  className="flex items-center px-8 py-3 text-sm text-gray-700 hover:text-indigo-700 hover:bg-white transition-all"
                  href="/fiberglass-repairs"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Fiberglass Repairs
                </Link>
                <Link
                  onClick={toggleMenu}
                  className="flex items-center px-8 py-3 text-sm text-gray-700 hover:text-indigo-700 hover:bg-white transition-all"
                  href="/inflatable-liferaft-rental"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Liferaft Rental
                </Link>
                <Link
                  onClick={toggleMenu}
                  className="flex items-center px-8 py-3 text-sm text-gray-700 hover:text-indigo-700 hover:bg-white transition-all"
                  href="/calibration-of-equipment"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Equipment Calibration
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="border-b border-gray-100">
            <button
              onClick={toggleContact}
              className="w-full flex items-center justify-between px-6 py-4 font-semibold text-gray-900 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-700 transition-all"
            >
              <span>Contact</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openContact ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openContact ? "max-h-48" : "max-h-0"
              }`}
            >
              <div className="bg-gray-50 py-2">
                <Link
                  onClick={toggleMenu}
                  className="flex items-center px-8 py-3 text-sm text-gray-700 hover:text-indigo-700 hover:bg-white transition-all"
                  href="/contact-us"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Contact Us
                </Link>
                <Link
                  onClick={toggleMenu}
                  className="flex items-center px-8 py-3 text-sm text-gray-700 hover:text-indigo-700 hover:bg-white transition-all"
                  href="/liferaft-service-request"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Service Request Form
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="px-6 py-6">
            <Link
              href="/contact-us"
              onClick={toggleMenu}
              className="block w-full text-center px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Get a Quote
            </Link>
          </div>
        </nav>
      </div>

      {/* Overlay - Enhanced with blur */}
      {menuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[2500] lg:hidden transition-all duration-300"
        />
      )}
    </>
  );
}
