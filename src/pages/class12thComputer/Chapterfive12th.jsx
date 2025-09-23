import React from "react";
import { motion } from "framer-motion";

export default function Chapterfive12th() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white shadow-lg rounded-2xl max-w-4xl w-full p-6 md:p-10"
        >
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-6">
            Chapter 5: Sorting
          </h1>

          {/* Intro */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            Sorting is the process of arranging a group of data in a particular
            order. There are three methods commonly used in Python:
            <span className="font-semibold"> Bubble Sorting</span>,{" "}
            <span className="font-semibold">Selection Sorting</span>, and{" "}
            <span className="font-semibold">Insertion Sorting</span>.
          </p>

          {/* Bubble Sorting */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              1. Bubble Sorting
            </h2>
            <p className="text-gray-700 mb-2">
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li> It is a simple sorting method. </li>
                <li>
                  It sorts a list by comparing every two adjacent elements and
                  swapping them if they are in unsort .
                </li>
                <li>Each iteration of the entire list is called a pass . </li>
                <li>There is total (n-1) passes to sort a list </li>
                <li> It is not use for a complex data collection . </li>
              </ul>
            </p>

            {/* Time complexities */}
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Best time complexity: O(n)</li>
              <li>Average time complexity: O(n²)</li>
              <li>Worst time complexity: O(n²)</li>
            </ul>
          </div>

          {/* Selection Sorting */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              2. Selection Sorting
            </h2>
            <p className="text-gray-700 mb-2">
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li> It is also a simplest sorting method. </li>
                <li>
                  It divides the list into two parts: first list contains the
                  sorted data and second list contains the unsorted data.
                </li>
                <li> It has a (n-1) passes. </li>
                <li>
                  The smallest element of the list is swapped with the first
                  element of the unsorted list.
                </li>
                <li>Best time complexity: O(n²)</li>
              </ul>
            </p>
          </div>

          {/* Insertion Sorting */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              3. Insertion Sorting
            </h2>
            <p className="text-gray-700 mb-2">
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li> It is also another sorting method. </li>
                <li>
                  It arranges the elements of a list in a particular order.
                </li>
                <li>
                  It also divides the list into two parts: one for the sorted
                  list and another for the unsorted list.
                </li>
                <li> It also has (n-1) passes. </li>
              </ul>
            </p>
          </div>

          {/* Time Complexity Explanation */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-blue-600 text-center mb-6">
              Time Complexity
            </h2>
            <p className="text-gray-700 mb-4">
              The amount of time an algorithm takes to process the given data is called time complexity
            </p>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                Any algorithm that doesn't have a loop will have a time
                complexity of <span className="font-semibold">1</span>, known as{" "}
                <span className="font-semibold">constant time algorithm</span>.
              </li>
              <li>
                Any algorithm with one loop will have a time complexity of{" "}
                <span className="font-semibold">n</span>, known as a{" "}
                <span className="font-semibold">linear time algorithm</span>.
              </li>
              <li>
                Any algorithm with a nested loop will have a time complexity of{" "}
                <span className="font-semibold">n²</span>, known as a{" "}
                <span className="font-semibold">quadratic time algorithm</span>.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </>
  );
}
