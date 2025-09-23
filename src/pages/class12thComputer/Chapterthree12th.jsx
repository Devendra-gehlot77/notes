import React from "react";
import { motion } from "framer-motion";

export default function Chapterthree12th() {
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
            Chapter 1: Stack
          </h1>

          {/* Introduction */}
          <p className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed mb-4">
            Data Structure
          </p>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
          >
            <li>A way to store and organise data to access it efficiently.</li>
            <li>
              A string is a data structure that contains a sequence of
              characters.
            </li>
          </motion.ul>

          {/* Types of Data Structure */}
          <div className="mt-6">
            <p className="text-gray-700 font-bold text-base md:text-lg mb-2">
              There are two main data structures:
            </p>
            <ul className="list-disc pl-6 text-gray-700 text-base md:text-lg space-y-2">
              <li>Stack</li>
              <li>Queue</li>
            </ul>
          </div>

          {/* Stack */}
          <div className="mt-6">
            <p className="text-gray-700 font-bold text-lg mb-2">Stack</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>It is a linear data structure.</li>
              <li>It follows the principle of LIFO (Last-In-First-Out).</li>
              <li>Users can add and remove elements from only one end.</li>
            </ul>

            <p className="mt-3 text-gray-700 font-semibold">Operations:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>
                <span className="font-semibold">Push operation:</span> Adds an
                element at the top of the stack (overflow if full).
              </li>
              <li>
                <span className="font-semibold">Pop operation:</span> Removes an
                element from the top (underflow if empty).
              </li>
            </ul>

            <p className="mt-3 text-gray-700 font-semibold">
              Applications of Stack:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Piles of clothes in an almirah.</li>
              <li>Multiple chairs in a vertical pile.</li>
              <li>Reversing a string.</li>
              <li>
                Keeping track of changes made during file or image editing.
              </li>
            </ul>
          </div>

          {/* Operations of Stack */}
          <div className="mt-10">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-600 text-center mb-6">
              Operations of Stack
            </h1>

            {/* Push Operation */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
                1. Push Operation
              </h2>
              <p className="text-gray-700 mb-2">
                Adding an element at the{" "}
                <span className="font-semibold">top</span> of the stack is
                called <span className="font-semibold">push</span> operation.
              </p>
              <p className="text-gray-700 mb-4">
                Trying to add a new element in a{" "}
                <span className="font-semibold">full stack</span> is called{" "}
                <span className="font-semibold">overflow condition</span>.
              </p>

              {/* Push Diagram */}
              <div className="flex justify-center space-x-10">
                {/* Before Push */}
                <div className="text-center">
                  <p className="font-semibold mb-2">Before Push(E)</p>
                  <div className="border border-gray-400 rounded-md p-2">
                    <p>D ← Top</p>
                    <p>C</p>
                    <p>B</p>
                    <p>A</p>
                  </div>
                </div>

                {/* After Push */}
                <div className="text-center">
                  <p className="font-semibold mb-2">After Push(E)</p>
                  <div className="border border-gray-400 rounded-md p-2">
                    <p>E ← Top</p>
                    <p>D</p>
                    <p>C</p>
                    <p>B</p>
                    <p>A</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pop Operation */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
                2. Pop Operation
              </h2>
              <p className="text-gray-700 mb-2">
                Removing an element from the{" "}
                <span className="font-semibold">top</span> of the stack is
                called <span className="font-semibold">pop</span> operation.
              </p>
              <p className="text-gray-700 mb-4">
                Trying to remove an element from an{" "}
                <span className="font-semibold">empty stack</span> is called{" "}
                <span className="font-semibold">underflow condition</span>.
              </p>

              {/* Pop Diagram */}
              <div className="flex justify-center space-x-10">
                {/* Before Pop */}
                <div className="text-center">
                  <p className="font-semibold mb-2">Before Pop()</p>
                  <div className="border border-gray-400 rounded-md p-2">
                    <p>E ← Top</p>
                    <p>D</p>
                    <p>C</p>
                    <p>B</p>
                    <p>A</p>
                  </div>
                </div>

                {/* After Pop */}
                <div className="text-center">
                  <p className="font-semibold mb-2">After Pop()</p>
                  <div className="border border-gray-400 rounded-md p-2">
                    <p>D ← Top</p>
                    <p>C</p>
                    <p>B</p>
                    <p>A</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Functions of Stack */}
          <div className="mt-10">
            <p className="text-gray-700 font-bold text-lg mb-2">
              Functions of Stack
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>
                <span className="font-semibold">isempty():</span> Checks if the
                stack is empty.
              </li>
              <li>
                <span className="font-semibold">isfull():</span> Checks if the
                stack is full.
              </li>
              <li>
                <span className="font-semibold">peek():</span> Displays the top
                element without removing it.
              </li>
            </ul>
          </div>

          {/* Notation */}
          <div className="mt-10">
            <p className="text-gray-700 font-bold text-lg mb-2">
              Notation of Arithmetic Expressions
            </p>
            <p className="text-gray-700">
              Users write arithmetic expressions using operators between
              operands. Example: <span className="font-semibold">A + B</span>.
            </p>
            <p className="mt-2 font-semibold text-gray-700">Three methods:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>
                <span className="font-semibold">Infix:</span> Operators between
                operands (A + B).
              </li>
              <li>
                <span className="font-semibold">Postfix:</span> Operators after
                operands (AB+).
              </li>
              <li>
                <span className="font-semibold">Prefix:</span> Operators before
                operands (+AB).
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </>
  );
}
