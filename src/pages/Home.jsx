"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Homemenu() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center pt-32 pb-28 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg"
        >
          Welcome to <span className="text-yellow-300">StudyNotes</span> 📚
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-2xl mb-10 font-light max-w-2xl"
        >
          Your one-stop destination for{" "}
          <span className="font-semibold text-yellow-200">
            notes, subjects & exam prep
          </span>
          .
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link
            href="/notes"
            className="bg-yellow-300 text-gray-900 px-8 py-4 rounded-full font-bold shadow-lg hover:bg-yellow-400 transition transform hover:scale-105"
          >
            🚀 Explore Notes
          </Link>
        </motion.div>
      </section>

      {/* Subjects Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-14 text-gray-800"
        >
          📖 Subjects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            { name: "Maths", link: "/subjects/maths" },
            { name: "Science", link: "/subjects/science" },
            { name: "Accounts", link: "/subjects/accounts" },
            { name: "Economics", link: "/subjects/economics" },
            { name: "English", link: "/english" },
            { name: "Computer", link: "/computer" },
          ].map((subject, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 text-center border border-gray-200 hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold mb-3 text-indigo-600">
                {subject.name}
              </h3>
              <p className="text-gray-500 mb-6">
                Explore {subject.name} notes & guides.
              </p>
              <Link
                href={subject.link}
                className="inline-block text-indigo-600 font-semibold hover:underline"
              >
                View Notes →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Notes Preview Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-center mb-14 text-gray-800"
          >
            ✨ Latest Notes
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[1, 2, 3].map((note, idx) => (
              <motion.div
                key={note}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2 border border-gray-200"
              >
                <h3 className="text-2xl font-semibold mb-3 text-indigo-600">
                  Chapter {note} Notes
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Summary & important questions for Chapter {note}.
                </p>
                <Link
                  href={`/notes/chapter-${note}`}
                  className="inline-block text-indigo-600 font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-indigo-600 text-white py-10 mt-auto"
      >
        <div className="max-w-7xl mx-auto px-6 text-center text-sm md:text-base">
          © {new Date().getFullYear()}{" "}
          <span className="font-bold">StudyNotes</span>. All rights reserved.
        </div>
      </motion.footer>
    </div>
  );
}
