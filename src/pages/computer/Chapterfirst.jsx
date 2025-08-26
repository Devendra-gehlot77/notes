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
                  It has two main components (parts)
                </li>
                <li>
                  1. <span className="font-semibold "> ALU : </span> It perform
                  all the arithmatic and logic operations .
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
                Hardware and software together is called computer system .
              </li>
            </motion.ul>
          </div>
          {/* output device  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Output Devices
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                A device which is used to recieve the data from computer is
                called output device
              </li>
              <li>It converts the digital data (0,1) into human form . </li>
              <li>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  example :
                </span>
                Monitor , printer
              </li>
            </motion.ul>
          </div>
          {/* evolution of computer  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Evolution of computer
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  500 years ago BC =
                </span>
                Abacus
              </li>
              <li>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  1642 =
                </span>
                Pascaline (calculator)
              </li>
              <li>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  1834 =
                </span>
                Analytic Engine
              </li>
              <li>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  1890 =
                </span>
                Electrical Engine
              </li>
              <li>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  1945 =
                </span>
                EDVAC / ENTAC
              </li>
              <li>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  1947 =
                </span>
                Trensistors based
              </li>
              <li>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  1970 =
                </span>
                Integrated Circuit (IC)
              </li>
            </motion.ul>
          </div>
          {/*  computer system */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Computer System
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                It is used to store a data and instructions ( information )
              </li>
              <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                {" "}
                There are mainly two types of memory{" "}
              </p>
              <span>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  1. Primary Memory
                </span>
                <li> It is a volatile (temporary) memory . </li>
              </span>
              <li>
                The data will be remain in a till the power supply is on .
              </li>
              <li>It directly works with the CPU</li>
              <span>
                {/*  secondary */}
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  2. Secondary Memory
                </span>
                <li>
                  {" "}
                  It is a non - voletile memory (permanent) it is store the data
                  for future use .{" "}
                </li>
              </span>
              <span>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  Example :
                </span>
                - Hardisk , pendrive , memory card etc
              </span>
            </motion.ul>
          </div>
          {/*  cache memory  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Cache Memory
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>It is used to speed up a operation of CPU .</li>
            </motion.ul>
          </div>
          {/*  unit of memory  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Unit of Memory
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li> 0 , 1 = Bit </li>
              <li> 4 Bit = 1 Hibble </li>
              <li> 8 Bit = 1 byte </li>
              <li> 1024 bit = 1kb </li>
              <li>1024 kb = 1Mb </li>
              <li> 1024 mb = 1Gb </li>
              <li> 1024 gb = 1Tb </li>
              <li>1024 tb = 1Pb </li>
              <li> 1024 pb = 1Eb </li>
              <li>1024 eb = 1Zb </li>
              <li> 1024 zb = 1Yb </li>
            </motion.ul>
          </div>
          {/*   Data transfeer  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Data transfer between memory and CPU
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                Data are transfered between different component (part) of
                computer system using wire is called bus .{" "}
              </li>
              <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                There are three bypes of bus
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  1. Data bus ={" "}
                </span>
                It is used to transfer data between different components .
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  1. Adress bus ={" "}
                </span>
                It is used to transfer adress between .
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  1. Control bus ={" "}
                </span>
                It is used to communited and control the signal between
                different components of computer .
              </p>
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </>
  );
}
