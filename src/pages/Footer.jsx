"use client";

import Link from "next/link";

export default function Fotter() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-10 fixed w-full bottom-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Services
              </h3>
              <ul className="space-y-2">
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>SEO Optimization</li>
                <li>Maintenance</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Contact Us
              </h3>
              <ul className="space-y-2">
                <li>Email: info@example.com</li>
                <li>Phone: +91 98765 43210</li>
                <li>Address: New Delhi, India</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
            © {new Date().getFullYear()} MyCompany. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
