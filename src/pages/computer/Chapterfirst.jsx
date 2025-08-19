import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Chapterfirst() {
  const data = [
    {
      heading: "input devices",
      inFsp:
        "A device which is used to send the data to the computer are called Input device",
      insep: "It converts teh data into digtal form (0,1)",
      inex: "Mouse Keyboard etc",
    },
  ];
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
            Chapter 1: Computer System
          </h1>
          {/* intorduction */}
          <p className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed mb-4">
            Introduction
          </p>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
          >
            <li>It is a electronic devices.</li>
            <li>
              It takes the data from users , processing and generate the output
              on the screen .
            </li>
            <li>Hardware and software together is called computer system . </li>
          </motion.ul>
          {/* Central Processing unit */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Central Processing unit
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>It is a electronic circuit of a computer .</li>
              <li>It is also known as brain of computer . </li>
              <li>It is called as a processor . </li>
              <li> It is used to given instruction by a program . </li>
              <ul>
                <li className="font-medium">
                  It has two main components (parts){" "}
                </li>
                <li>
                  {" "}
                  1. <span className="font-semibold "> ALU : </span> It perform
                  all the arithmatic and logic operations .{" "}
                </li>
                <li>
                  2. <span className="font-semibold "> CU : </span> It controls
                  all the devices of a computer and given the instructions to
                  them .
                </li>
              </ul>
            </motion.ul>
          </div>
          {/* input devies */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Input devices 
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>It is a electronic devices.</li>
              <li>
                It takes the data from users , processing and generate the
                output on the screen .
              </li>
              <li>
                Hardware and software together is called computer system .{" "}
              </li>
            </motion.ul>
          </div>{" "}
          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-600 rounded-lg"
          >
            <p className="text-gray-800 text-sm md:text-base">
              📘 Note: These are just static notes for{" "}
              <strong>Chapter 1</strong>. In your real app, you can link to
              detailed notes and examples.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
