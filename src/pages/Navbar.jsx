"use client";
import Link from "next/link";
import logo from "../../public/logo.jpg";
import { Search, UserCircle } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src={logo.src}
              alt="Logo"
              width={100}
              // height={0}
              className="rounded-full"
            />
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-4 relative hidden md:block">
            <input
              type="text"
              placeholder="Search notes..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          </div>

          {/* Profile Icon */}
          <UserCircle className="w-9 h-9 text-gray-600 hover:text-blue-600 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}


