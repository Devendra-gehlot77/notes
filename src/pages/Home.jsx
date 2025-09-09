"use client";
// import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Homemenu() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}

      {/* Hero Section */}
      <section className="pt-24 pb-16 text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to StudyNotes 📚
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Your one-stop destination for notes, subjects & exam preparation.
        </p>
        <Link
          href="/notes"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Explore Notes
        </Link>
      </section>

      {/* Subjects Section */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Subjects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Maths */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Maths</h3>
            <p className="text-gray-600 mb-4">Explore Maths notes & guides.</p>
            <Link
              href="/subjects/maths"
              className="text-blue-600 font-medium hover:underline"
            >
              View Notes →
            </Link>
          </div>

          {/* Science */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Science</h3>
            <p className="text-gray-600 mb-4">
              Explore Science notes & guides.
            </p>
            <Link
              href="/subjects/science"
              className="text-blue-600 font-medium hover:underline"
            >
              View Notes →
            </Link>
          </div>

          {/* Accounts */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Accounts</h3>
            <p className="text-gray-600 mb-4">
              Explore Accounts notes & guides.
            </p>
            <Link
              href="/subjects/accounts"
              className="text-blue-600 font-medium hover:underline"
            >
              View Notes →
            </Link>
          </div>

          {/* Economics */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Economics</h3>
            <p className="text-gray-600 mb-4">
              Explore Economics notes & guides.
            </p>
            <Link
              href="/subjects/economics"
              className="text-blue-600 font-medium hover:underline"
            >
              View Notes →
            </Link>
          </div>

          {/* English */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">English</h3>
            <p className="text-gray-600 mb-4">
              Explore English notes & guides.
            </p>
            <Link
              href="/english"
              className="text-blue-600 font-medium hover:underline"
            >
              View Notes →
            </Link>
          </div>

          {/* Computer */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Computer</h3>
            <p className="text-gray-600 mb-4">
              Explore Computer notes & guides.
            </p>
            <Link
              href="/computer"
              className="text-blue-600 font-medium hover:underline"
            >
              View Notes →
            </Link>
          </div>
        </div>
      </section>

      {/* Notes Preview Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Latest Notes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((note) => (
              <div
                key={note}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">
                  Chapter {note} Notes
                </h3>
                <p className="text-gray-600 mb-4">
                  Summary & important questions for Chapter {note}.
                </p>
                <Link
                  href={`/notes/chapter-${note}`}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          © {new Date().getFullYear()} StudyNotes. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
