import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Chapterfour() {
  const problemSolvingData = [
    {
      heading: "Analysing the problem = ",
      content:
        "It is important to indentify the problem and then make a list of input that problem need and display find the output ",
    },
    {
      heading: "Developing and algorithm = ",
      content:
        "Writting a program code for a giving problem we need a solution in a natural langugae is called algorithm",
    },
    {
      heading: "Coding  = ",
      content:
        "After writting an algorithm we need to covert the algorithm into a format (programming language) and this format is understood by the computer and also called coding  ",
    },
    {
      heading: "Testing and Debugging = ",
      content:
        "After creating a code for a program we need various input to generate the correct output . Debuggin is a process to remove the error from program  ",
    },
    {
      heading: "Algorithm  = ",
      content:
        "A definite set of instructions to perform a specific task and get are desired output is called algorithm ",
    },
  ];
  const featuresAlgorithm = [
    {
      heading: "Precious = ",
      content: "The steps should defined clearly . ",
    },
    {
      heading: "Uniqueness = ",
      content:
        "Every steps should be uniquely defined adn depend on only given input and then get output . ",
    },
    {
      heading: "Finiteness = ",
      content: "Algorithm should always have finite number of steps . ",
    },
    {
      heading: "Input = ",
      content: "Every algorithm revieves some input  . ",
    },
    {
      heading: "Output = ",
      content: "Every algorithm produces (display) some output. ",
    },
  ];
  const componentsAlgorithm = [
    {
      heading: "Input = ",
      content: "These are taken from the users . ",
    },
    {
      heading: "Processing = ",
      content: " To be performed to get output  ",
    },
    {
      heading: "Output = ",
      content: "It desired by the user .  ",
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
            Chapter 4: Introduction to problem Solving
          </h1>
          {/* steps for problem solving   */}
          <p className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed mb-4">
            Steps for the problem for solving
          </p>
          {problemSolvingData.map((v, i) => {
            return (
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
              >
                <li>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {" "}
                    {v.heading}
                  </span>
                  {v.content}
                </li>
              </motion.ul>
            );
          })}
          {/* features of an algorithm  */}
          <p className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed mb-4">
            Characterstics (Features) of algorithm
          </p>
          {featuresAlgorithm.map((v, i) => {
            return (
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
              >
                <li>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {" "}
                    {v.heading}
                  </span>
                  {v.content}
                </li>
              </motion.ul>
            );
          })}
          {/* components of algorithm  */}
          <p className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed mb-4">
            Components of algorithm (element of algorithm )
          </p>
          {componentsAlgorithm.map((v, i) => {
            return (
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
              >
                <li>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {" "}
                    {v.heading}
                  </span>
                  {v.content}
                </li>
              </motion.ul>
            );
          })}
          {/* Representation of algorithm */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Representation of algorithm
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  Flowchart ={" "}
                </span>
                It is a visual representation of an algorithm and it is made up
                of diagrams like boxes, diamonds and other shapes.
                {/*  diagram  */}
                <div className="flex flex-col items-start gap-6 p-8">
                  {/* Start / End */}
                  <div className="flex items-center gap-4">
                    <div className="w-40 h-10 bg-gray-200 rounded-full border border-gray-600 flex items-center justify-center">
                      Start / End
                    </div>
                  </div>

                  {/* Process */}
                  <div className="flex items-center gap-4">
                    <div className="w-40 h-12 bg-gray-200 border border-gray-600 flex items-center justify-center">
                      Process
                    </div>
                  </div>

                  {/* Decision */}
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gray-200 border border-gray-600 rotate-45 flex items-center justify-center">
                      <span className="-rotate-45">Decision</span>
                    </div>
                  </div>

                  {/* Input / Output */}
                  <div className="flex items-center gap-4">
                    <div className="w-48 h-12 bg-gray-200 border border-gray-600 skew-x-12 flex items-center justify-center">
                      <span className="-skew-x-12">Input / Output</span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <div className="w-32 h-1 bg-gray-600"></div>
                      <div className="w-0 h-0 border-t-[8px] border-b-[8px] border-l-[12px] border-t-transparent border-b-transparent border-l-gray-600"></div>
                    </div>
                    <span className="ml-4">Arrow</span>
                  </div>
                </div>
              </li>
              {/* example  */}
              <li>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  Example :{" "}
                </span>
                Add two values
                {/*  diagram  */}
                <div className="flex flex-col items-start gap-6 p-8">
                  {/* Start / End */}
                  <div className="flex items-center gap-4">
                    <div className="w-40 h-10 bg-gray-200 rounded-full border border-gray-600 flex items-center justify-center">
                      Start
                    </div>
                  </div>

                  {/* Process */}
                  <div className="flex items-center gap-4">
                    <div className="w-40 h-12 bg-gray-200 border border-gray-600 flex items-center justify-center">
                      Read a , b
                    </div>
                  </div>

                  {/* Decision */}
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gray-200 border border-gray-600 rotate-45 flex items-center justify-center">
                      <span className="-rotate-45">c = a + b </span>
                    </div>
                  </div>

                  {/* Input / Output */}
                  <div className="flex items-center gap-4">
                    <div className="w-48 h-12 bg-gray-200 border border-gray-600 skew-x-12 flex items-center justify-center">
                      <span className="-skew-x-12">End </span>
                    </div>
                  </div>
                </div>
              </li>
            </motion.ul>
          </div>
          {/* ASCII
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
          {/* <div className="mt-4">
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
          </div> */}
          {/* Number system  */}
          {/* <div className="mt-4">
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
            </motion.ul>
          </div> */}
          {/* unicode  */}
          {/* <div className="mt-4">
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
              <li>
                {" "}
                Commonly used UNICODE are UIF = 16, 0 , UTF = 8 , UTE = 32{" "}
              </li>
            </motion.ul>
          </div> */}
        </motion.div>
      </div>
    </>
  );
}
