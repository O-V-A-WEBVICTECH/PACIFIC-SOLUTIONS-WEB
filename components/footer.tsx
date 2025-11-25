import Link from "next/link";
import Image from "next/image";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full p-2 shadow-lg">
                <Image
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                  src="/images/logo.png"
                  alt="Pacific Safety Solution"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Pacific Safety Solution
                </h3>
                <p className="text-sm text-gray-400">Marine Safety Experts</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner in marine safety and LSA/FFA solutions. We
              deliver professional services in accordance with the latest IMO
              and SOLAS conventions.
            </p>

            {/* Social Media */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-white">
                Connect With Us
              </h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center rounded-full hover:bg-indigo-600 hover:border-indigo-600 transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-white group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center rounded-full hover:bg-pink-600 hover:border-pink-600 transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-white group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center rounded-full hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-white group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://wa.me/message/TZVHNBSFMPKUM1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center rounded-full hover:bg-green-600 hover:border-green-600 transition-all duration-300 hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="text-white group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full" />
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="tel:+2348054094450"
                  className="group flex items-start gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 transition-all">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Phone</p>
                    <span className="font-medium">+234 805 409 4450</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:pacificsafety2020@yahoo.com"
                  className="group flex items-start gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600 transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Email</p>
                    <span className="font-medium break-all">
                      pacificsafety2020@yahoo.com
                    </span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Location</p>
                  <span className="font-medium">
                    Plot QFF 10, Ibafon Street
                    <br />
                    Off Apapa-Oshodi Expressway
                    <br />
                    Lagos, Nigeria
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full" />
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/company-profile"
                  className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>Company Profile</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/our-gallery"
                  className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>Gallery</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full" />
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  href="/ffa-Inspection-and-recertification"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>LSA/FFA Inspection</span>
                </Link>
              </li>
              <li>
                <Link
                  className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  href="/analysis"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>Foam Analysis & Air Quality</span>
                </Link>
              </li>
              <li>
                <Link
                  className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  href="/marine-equipment-and-ship-maintenance"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>Marine Equipment Supply</span>
                </Link>
              </li>
              <li>
                <Link
                  className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  href="/fiberglass-repairs"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>Fiberglass Repairs</span>
                </Link>
              </li>
              <li>
                <Link
                  className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  href="/inflatable-liferaft-rental"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>Liferaft Rental</span>
                </Link>
              </li>
              <li>
                <Link
                  className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  href="/calibration-of-equipment"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>Equipment Calibration</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Get the latest updates on marine safety and our services
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              &copy; 2025{" "}
              <span className="font-semibold text-white">
                Pacific Safety Solution Limited
              </span>
              . All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
