import React from "react";
import { motion } from "framer-motion";

export default function Chaptersix12th() {
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
            Chapter 6 : Searching
          </h1>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-base md:text-lg leading-relaxed mb-4"
          >
            <ul className="list-disc pl-6 space-y-2">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Searching
              </h2>
              <li>
                Searching means locating a particular element in a collection of
                elements.
              </li>
              <li>
                It determines whether an element is present in a collection or
                not.
              </li>
              <li>
                There are three methods to search for an element: Linear Search,
                Binary Search, and Search by Hashing.
              </li>
            </ul>
          </motion.div>

          {/* Linear Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              1. Linear Search
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>This is a simple search method.</li>
              <li>
                In this method, every element of a given list is compared with
                the key element to be searched.
              </li>
              <li>
                This process continues until the key is found, at which point
                the search is successful.
              </li>
              <li>
                If the key element doesn't match, the search is unsuccessful.
              </li>
              <li>It is also called a sequential search or serial search.</li>
              <li>
                It is useful for a small collection of unordered elements.
              </li>
            </ul>
          </motion.div>

          {/* Binary Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              2. Binary Search
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>It is also a simple and fundamental search method.</li>
              <li>
                The elements of a given list should be arranged in a specific
                order (ascending or descending).
              </li>
              <li>In this method, there are three possibilities:</li>
              <ul className="list-[circle] pl-8 space-y-1">
                <li>
                  Find the mid value, and the mid element matches the key
                  element.
                </li>
                <li>
                  If the mid value is greater than the key value, it means the
                  key is in the first half of the list.
                </li>
                <li>
                  If the mid element is less than the key value, it means the
                  key is in the second half of the list.
                </li>
              </ul>
            </ul>

            {/* Applications of Binary Search */}
            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
              Applications of Binary Search
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Searching for a word in a dictionary.</li>
              <li>
                Finding a specific person's number in a telephone directory.
              </li>
              <li>Implementing the routing table in a router.</li>
            </ul>
          </motion.div>

          {/* Search by Hashing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              3. Search by Hashing
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>
                It is a technique where we can find the key value in a list with
                just one step.
              </li>
              <li>It is a very efficient method for searching elements.</li>
              <li>This method uses a formula called a hash function.</li>
              <li>
                This formula is used to calculate the value at an index in a
                list.
              </li>
              <li>
                The hash function takes every element of the list one by one and
                generates an index for every element.
              </li>
              <li>This process creates a new list called a hash table.</li>
              <li>
                <span className="font-semibold">Formula:</span> h(element) =
                element % Size
              </li>
              <ul>
              <li>
                <h2 className="text-[22px] font-bold text-gray-800 mb-3">
                  Collision
                </h2>{" "}
                When the hash table has the same index for two or more elements
                in a list. This condition is called collision . 
              </li>
              <li>
                <h2 className="text-[22px] font-bold text-gray-800 mb-3">
                  Collision Resolution
                </h2>
                A process for placing other elements with the same hash value in
                a hash table is called colliision resolution . 
              </li>
              <li>
                <h2 className="text-[22px] font-bold text-gray-800 mb-3">
                  Perfect hash function
                </h2>
                If every element of the list has a unique index in a hash table
                then the hash function is called perfect has function .
              </li>
              </ul>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
