import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Chapterfour12th() {
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
            Chapter 4: Queue
          </h1>

          {/* Intro */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            A <span className="font-semibold">queue</span> is an ordered,
            linear data structure. It works on the{" "}
            <span className="font-semibold">FIFO (First-In-First-Out)</span>{" "}
            principle.
          </p>

          <ul className="list-disc pl-6 text-gray-700 text-base md:text-lg space-y-2">
            <li>
              Adding an element at one end is called the{" "}
              <span className="font-semibold">rear</span> and is also called{" "}
              <span className="font-semibold">enqueue</span> operation.
            </li>
            <li>
              Deleting an element from the other end is called the{" "}
              <span className="font-semibold">front</span> and is also called{" "}
              <span className="font-semibold">dequeue</span> operation.
            </li>
          </ul>

          {/* Applications */}
          <div className="mt-6">
            <p className="text-lg font-bold text-gray-700 mb-2">
              Applications of Queue:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>
                Purchasing a ticket at a single ticket counter (served first).
              </li>
              <li>
                Vehicles on a road — those that entered first will exit first.
              </li>
              <li>
                A web server uses queue to respond to multiple requests.
              </li>
            </ul>
          </div>

          {/* Operations on Queue */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-blue-600 text-center mb-6">
              Operations on Queue
            </h2>

            {/* Enqueue */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                1. Enqueue Operation
              </h3>
              <p className="text-gray-700 mb-2">
                Used to add a new element to the queue at the{" "}
                <span className="font-semibold">rear end</span>.
              </p>
              <p className="text-gray-700 mb-4">
                Trying to add an element to a{" "}
                <span className="font-semibold">full queue</span> is called{" "}
                <span className="font-semibold">overflow condition</span>.
              </p>

              {/* Diagram */}
              <div className="flex justify-center space-x-10">
                <div className="text-center">
                  <p className="font-semibold mb-2">Before Enqueue(X)</p>
                  <div className="border border-gray-400 rounded-md p-2">
                    <p>Front → A</p>
                    <p>B</p>
                    <p>C</p>
                  </div>
                </div>

                <div className="text-center">
                  <p className="font-semibold mb-2">After Enqueue(X)</p>
                  <div className="border border-gray-400 rounded-md p-2">
                    <p>Front → A</p>
                    <p>B</p>
                    <p>C</p>
                    <p>X ← Rear</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dequeue */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                2. Dequeue Operation
              </h3>
              <p className="text-gray-700 mb-2">
                Used to remove an element from the{" "}
                <span className="font-semibold">front</span> end.
              </p>
              <p className="text-gray-700 mb-4">
                Trying to remove an element from an{" "}
                <span className="font-semibold">empty queue</span> is called{" "}
                <span className="font-semibold">underflow condition</span>.
              </p>

              {/* Diagram */}
              <div className="flex justify-center space-x-10">
                <div className="text-center">
                  <p className="font-semibold mb-2">Before Dequeue()</p>
                  <div className="border border-gray-400 rounded-md p-2">
                    <p>Front → A</p>
                    <p>B</p>
                    <p>C ← Rear</p>
                  </div>
                </div>

                <div className="text-center">
                  <p className="font-semibold mb-2">After Dequeue()</p>
                  <div className="border border-gray-400 rounded-md p-2">
                    <p>Front → B</p>
                    <p>C ← Rear</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Functions of Queue */}
          <div className="mt-10">
            <h2 className="text-lg font-bold text-gray-700 mb-2">
              Functions of Queue:
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>
                <span className="font-semibold">isempty():</span> Checks if the
                queue is empty or not.
              </li>
              <li>
                <span className="font-semibold">isfull():</span> Checks if the
                queue is full or not.
              </li>
              <li>
                <span className="font-semibold">peek():</span> Views the element
                at the front without removing it.
              </li>
            </ul>
          </div>

          {/* Dequeue (Double Ended Queue) */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-blue-600 text-center mb-6">
              Dequeue (Double Ended Queue)
            </h2>

            <p className="text-gray-700 mb-4">
              A <span className="font-semibold">Dequeue</span> is an arrangement
              in which addition and deletion of elements can happen from{" "}
              <span className="font-semibold">either end</span>.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Operations on Dequeue:
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Insert Front: Adds a new element at the front end.</li>
              <li>Delete Front: Deletes an element from the front end.</li>
              <li>Insert Rear: Adds a new element at the rear end.</li>
              <li>Delete Rear: Deletes an element from the rear end.</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
              Applications of Dequeue:
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Vehicles at a highway toll tax booth.</li>
              <li>Checking if a given string is a palindrome.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </>
  );
}
