import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";

export default function Chapterfirst() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      {/* Card with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white shadow-lg rounded-2xl max-w-3xl w-full p-6 md:p-10"
      >
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-6">
          Chapter 1: Introduction to Computer Science
        </h1>

        {/* Content */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
          Computer Science is the study of computers and computational systems. It
          deals with theory, development of software, algorithms, and how data is
          processed and stored.
        </p>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
          In this chapter, you will learn about the basics of computers, their
          history, and their importance in today’s world.
        </p>

        {/* Key Points */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
        >
          <li>Definition and scope of Computer Science</li>
          <li>History and Generations of Computers</li>
          <li>Applications of Computers in daily life</li>
          <li>Importance of Computer Science in education & business</li>
        </motion.ul>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-600 rounded-lg"
        >
          <p className="text-gray-800 text-sm md:text-base">
            📘 Note: These are just static notes for <strong>Chapter 1</strong>.
            In your real app, you can link to detailed notes and examples.
          </p>
        </motion.div>
      </motion.div>
    </div>
    </>
  )
}
