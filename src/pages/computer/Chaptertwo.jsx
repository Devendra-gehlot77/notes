import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Chaptertwo() {
  const data = [
    {
      heading: "input devices",
      inFsp:
        "A device which is used to send the data to the computer are called Input device",
      insep: "It converts teh data into digtal form (0,1)",
      inex: "Mouse Keyboard etc",
    },
  ];

  const numberSystemData = [
    {
      heading: "Binary number  system = ",
      details: " 0-1 = Base = 2",
    },
    {
      heading: "Octal number  system = ",
      details: " 0-7 = Base = 8",
    },
    {
      heading: "Decimal number  system = ",
      details: " 0-9 = Base = 10",
    },
    {
      heading: "Hexadecimal number  system = ",
      details: " 0-9 = Base = 16",
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
            Chapter 2: Encoding Schemes and Number System
          </h1>
          {/* Encoding  */}
          <p className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed mb-4">
            Encoding
          </p>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
          >
            <li>
              It is a methond to convert the data into a specific code is called
              a encoding{" "}
            </li>
          </motion.ul>
          {/* ASCII */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              ASCII
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                It is stands for "American Standard Code Inofromation
                Interchange{" "}
              </li>
              <li>It was develop for standard the character representation </li>
              <li>It is most commonly used coding scheme (method) </li>
              <li>
                {" "}
                It is used seven bit to represent the different cahracter on
                keyboard{" "}
              </li>
              <li>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  Example :{" "}
                </span>
                Capital A = 65 , a = 97 , space = -32
              </li>
            </motion.ul>
          </div>
          {/* ISCII  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              ISCII
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>Indian Script Code for Information Interchange </li>
              <li>It is commanly used for Indian language .</li>
              <li>It was developed in mid 1980s</li>
              <li> It uses 8 bit code for a Indian language </li>
            </motion.ul>
          </div>
          {/* Number system  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Number System
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>It is a method to represent the numbers .</li>
              <li>It has a unique set of character . </li>
              <li>
                The four number system are used in a computer and every number
                system have a different number of character .
              </li>
              {numberSystemData.map((v, i) => {
                return (
                  <ul className="list-decimal">
                    <li>
                      <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                        {" "}
                        {v.heading}
                      </span>
                      {v.details}
                    </li>
                  </ul>
                );
              })}
            </motion.ul>
          </div>
          {/* unicode  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Unicode
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>IS a encoding scheme (system) </li>
              <li>
                UNICODE has been developed to support all the character of every
                langugae of the world{" "}
              </li>
              <li>
                It provide a unique number to every character for a different
                platform .{" "}
              </li>
              <li> Commonly used UNICODE are UIF = 16, 0 , UTF = 8 , UTE = 32 </li>
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </>
  );
}
