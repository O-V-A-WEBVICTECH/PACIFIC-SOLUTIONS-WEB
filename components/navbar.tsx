"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

interface NavLink {
  title: string;
  url: string;
  subItems?: NavLink[];
}

const navLinks: NavLink[] = [
  { title: "Home", url: "/" },
  {
    title: "About",
    url: "/company-profile",
    subItems: [
      { title: "Company Profile", url: "/company-profile" },
      { title: "Vision & Mission Statement", url: "/vision-and-mission-statements" },
      { title: "Core Values", url: "/core-values" },
      { title: "HSE Policy", url: "/health-safety-and-enviroment-policy" },
    ],
  },
  { title: "Approvals / Products", url: "/products" },
  {
    title: "Services",
    url: "#",
    subItems: [
      { title: "LSA/FFA Inspection & Re-Certification", url: "/ffa-Inspection-and-recertification" },
      { title: "Foam Analysis & Air Quality Test", url: "/analysis" },
      { title: "Inflatable Liferaft Rental", url: "/inflatable-liferaft-rental" },
      { title: "Calibration of Equipment", url: "/calibration-of-equipment" },
      { title: "Marine Safety Equipment & Ship Maintenance", url: "/marine-equipment-and-ship-maintenance" },
      { title: "Fiberglass Repairs", url: "/fiberglass-repairs" },
    ],
  },
  {
    title: "Contact",
    url: "/contact-us",
    subItems: [
      { title: "Contact Us", url: "/contact-us" },
      { title: "Service Request Form", url: "/liferaft-service-request" },
    ],
  },
];

function MobileSection({
  label,
  isOpen,
  onToggle,
  children,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-violet-100 hover:text-white hover:bg-white/10 transition-colors"
      >
        <span>{label}</span>
        <ChevronDown
          size={15}
          className={`text-violet-300 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-2">{children}</div>
      </div>
    </div>
  );
}

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const scrollYRef = useRef(0);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenSection(null);
  };

  const toggleSection = (section: string) =>
    setOpenSection((prev) => (prev === section ? null : section));

  useEffect(() => {
    if (menuOpen) {
      scrollYRef.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollYRef.current);
    }
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="w-full bg-[#3a00b0] text-violet-200 text-xs py-2 px-4 flex justify-between items-center gap-4 border-b border-[#4a00d8]">
        <a href="tel:+2348054094450" className="flex items-center gap-1.5 hover:text-white transition-colors">
          <Phone size={11} />
          +234 805 409 4450
        </a>
        <a
          href="mailto:pacificsafety2020@yahoo.com"
          className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
        >
          <Mail size={11} />
          pacificsafety2020@yahoo.com
        </a>
        <Link
          href="https://wa.me/message/TZVHNBSFMPKUM1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-green-400 hover:text-green-300 transition-colors font-medium"
        >
          <FaWhatsapp size={13} />
          <span className="hidden sm:inline">WhatsApp</span>
        </Link>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-[2000] text-white transition-all duration-300 ${
          scrolled
            ? "bg-[#5200f5]/95 backdrop-blur-sm shadow-lg shadow-[#5200f5]/30"
            : "bg-[#5200f5]"
        }`}
      >
        <div className="container mx-auto px-5 lg:px-12 py-3 lg:py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <Image
              width={80}
              height={80}
              className="w-7 h-7 object-contain"
              src="/images/logo.png"
              alt="Pacific Safety Solution logo"
            />
            <div className="leading-tight">
              <p className="text-sm font-bold group-hover:text-violet-200 transition-colors">
                Pacific Safety
              </p>
              <p className="text-[10px] font-normal text-violet-300">Solution Limited</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
            {navLinks.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  href={item.url}
                  className="flex items-center gap-1 px-3 py-2 rounded-md hover:bg-white/15 transition-colors"
                >
                  {item.title}
                  {item.subItems && (
                    <ChevronDown
                      size={13}
                      className="opacity-60 group-hover:opacity-100 transition-all duration-200 group-hover:rotate-180"
                    />
                  )}
                </Link>
                {item.subItems && (
                  <div className="absolute left-0 top-full mt-1.5 min-w-[240px] bg-white text-slate-800 rounded-xl shadow-2xl border border-slate-100 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 translate-y-1 group-hover:translate-y-0 z-50 overflow-hidden">
                    {item.subItems.map((sub, si) => (
                      <Link
                        key={si}
                        href={sub.url}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-violet-50 hover:text-[#5200f5] border-b last:border-b-0 border-slate-100 transition-colors"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#5200f5]/40 shrink-0" />
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact-us"
              className="ml-3 px-4 py-2 bg-white text-[#5200f5] text-sm font-bold rounded-lg hover:bg-violet-50 transition-colors shadow-lg"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden p-2 rounded-md hover:bg-white/15 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Backdrop — outside header so it covers everything */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-[2500] bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile drawer — outside header, always fully rendered */}
      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-[#5200f5] z-[3000] flex flex-col transform transition-transform duration-300 ease-in-out shadow-2xl ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/20 shrink-0">
            <Link href="/" onClick={closeMenu} className="flex items-center gap-2.5">
              <Image
                width={60}
                height={60}
                className="w-7 h-7 object-contain"
                src="/images/logo.png"
                alt="Pacific Safety Solution logo"
              />
              <div className="leading-tight">
                <p className="text-sm font-bold text-white">Pacific Safety</p>
                <p className="text-[10px] text-violet-300">Solution Limited</p>
              </div>
            </Link>
            <button
              onClick={closeMenu}
              aria-label="Close menu"
              className="p-1.5 rounded-md hover:bg-white/15 text-violet-200 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 overflow-y-auto py-2 flex flex-col divide-y divide-white/10">
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-violet-100 hover:text-white hover:bg-white/10 transition-colors"
            >
              Home
            </Link>

            <MobileSection
              label="About"
              isOpen={openSection === "about"}
              onToggle={() => toggleSection("about")}
            >
              {[
                { label: "Company Profile", href: "/company-profile" },
                { label: "Vision & Mission", href: "/vision-and-mission-statements" },
                { label: "Core Values", href: "/core-values" },
                { label: "HSE Policy", href: "/health-safety-and-enviroment-policy" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={closeMenu}
                  className="flex items-center gap-2.5 pl-8 pr-5 py-2.5 text-sm text-violet-200 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <span className="w-1 h-1 rounded-full bg-white/50 shrink-0" />
                  {l.label}
                </Link>
              ))}
            </MobileSection>

            <Link
              href="/products"
              onClick={closeMenu}
              className="flex items-center px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-violet-100 hover:text-white hover:bg-white/10 transition-colors"
            >
              Approvals / Products
            </Link>

            <MobileSection
              label="Services"
              isOpen={openSection === "services"}
              onToggle={() => toggleSection("services")}
            >
              {[
                { label: "LSA/FFA Inspection & Re-Certification", href: "/ffa-Inspection-and-recertification" },
                { label: "Foam Analysis & Air Quality Test", href: "/analysis" },
                { label: "Inflatable Liferaft Rental", href: "/inflatable-liferaft-rental" },
                { label: "Calibration of Equipment", href: "/calibration-of-equipment" },
                { label: "Marine Safety Equipment & Maintenance", href: "/marine-equipment-and-ship-maintenance" },
                { label: "Fiberglass Repairs", href: "/fiberglass-repairs" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={closeMenu}
                  className="flex items-center gap-2.5 pl-8 pr-5 py-2.5 text-sm text-violet-200 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <span className="w-1 h-1 rounded-full bg-white/50 shrink-0" />
                  {l.label}
                </Link>
              ))}
            </MobileSection>

            <MobileSection
              label="Contact"
              isOpen={openSection === "contact"}
              onToggle={() => toggleSection("contact")}
            >
              {[
                { label: "Contact Us", href: "/contact-us" },
                { label: "Service Request Form", href: "/liferaft-service-request" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={closeMenu}
                  className="flex items-center gap-2.5 pl-8 pr-5 py-2.5 text-sm text-violet-200 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <span className="w-1 h-1 rounded-full bg-white/50 shrink-0" />
                  {l.label}
                </Link>
              ))}
            </MobileSection>
          </nav>

          {/* Drawer footer */}
          <div className="p-5 border-t border-white/20 shrink-0 flex flex-col gap-3">
            <Link
              href="/contact-us"
              onClick={closeMenu}
              className="block text-center py-3 bg-white text-[#5200f5] text-sm font-bold rounded-lg hover:bg-violet-50 transition-colors shadow-lg"
            >
              Get a Quote
            </Link>
            <Link
              href="https://wa.me/message/TZVHNBSFMPKUM1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-green-300 text-sm font-medium rounded-lg transition-colors"
            >
              <FaWhatsapp size={15} />
              Chat on WhatsApp
            </Link>
            <div className="pt-1 flex flex-col gap-2">
              <a href="tel:+2348054094450" className="flex items-center gap-2 text-xs text-violet-300 hover:text-white transition-colors">
                <Phone size={11} />
                +234 805 409 4450
              </a>
              <a href="mailto:pacificsafety2020@yahoo.com" className="flex items-center gap-2 text-xs text-violet-300 hover:text-white transition-colors">
                <Mail size={11} />
                pacificsafety2020@yahoo.com
              </a>
            </div>
          </div>
        </div>
    </>
  );
}
