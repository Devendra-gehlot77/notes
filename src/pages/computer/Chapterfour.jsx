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
  const flowControl = [
    {
      heading: "Sequence =",
      content:
        "When the statement in an algorithm are executed one after another are said to be execute in sequence . ",
    },
    {
      heading: "Selection =",
      content:
        "In algorithm there are some two or more than two. There are some option and user need to one option to be executed . This process is called selelction  . ",
    },
    {
      heading: "Repetition =",
      content:
        " Execution of some statement in an algorithm are repeated till some specified condition . This process is called repetition . ",
    },
  ];
  const timeComplexity = [
    {
      heading: "Time complexity = ",
      content:
        "A program need a processing time to execute is called time complexity .",
    },
    {
      heading: "Space Complexity = ",
      content: " A program need a memory to store is called space complexity.",
    },
    {
      heading: "Coding =  ",
      content:
        "When the algorithm is written in a high level language it process is callled coding . Every programming langugae follows some set of instructinos that is called syntax . ",
    },
    {
      heading: "Decomposition = ",
      content:
        "When the program is very complexity users need to decompose it into smaller parts. To breakdown the program into a small parts is called decomoposition  . ",
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
          <div>
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
          </div>
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
              className="list-disc-none  pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  1. Flowchart ={" "}
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
              <ul>
                <li>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {" "}
                    2. Pseudocode ={" "}
                  </span>
                  It is a detailed description of instruction that a computer
                  must follow in a particular roder .
                </li>
              </ul>
              <ul className="list-disc  pl-6 space-y-2 text-gray-700 text-base md:text-lg">
                <li> It is known as non-formal language </li>
                <li>There are some terms (keywords) used in a pseudocode </li>
                <p> INPUT </p>
                <p>COMPUTE</p>
                <p> PRINT </p>
                <p> INCREMENT </p>
                <p> DECREMENT </p>
                <p>IF / ELSE</p>
                <p> WHILE </p>
                <p>TRUE / FALSE </p>
              </ul>
              <li>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  example = Sum of two numbers{" "}
                </span>
                <li>INPUT : a , b </li>
                <li> COMPUTE : c = a + b</li>
                <li>PRINT : C</li>
              </li>
            </motion.ul>
          </div>
          {/*  FLow of control  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Flow of control
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                An algorithm where all the steps are executed in a specific
                order . THis process is called as flow of control .{" "}
              </li>
              <li>There are three method for flow of control .</li>
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
              >
                {flowControl.map((v, i) => {
                  return (
                    <>
                      <li>
                        <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                          {" "}
                          {v.heading}
                        </span>
                        {v.content}
                      </li>
                    </>
                  );
                })}
              </motion.ul>
            </motion.ul>
          </div>
          {/* verifying algorithm  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Comparison of an algorithm
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className=" pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                {" "}
                There are many method to solve and any problem so user need this
                method to be compared and an analyse on the basis of amount of
                processing time and memory to execute them{" "}
              </li>
            </motion.ul>
          </div>
          {/* time complaxity  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              These terms are called time and space complexity
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className=" list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              {timeComplexity.map((v, i) => {
                return (
                  <>
                    <li>
                      <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                        {v.heading}
                      </span>
                      {v.content}
                    </li>
                  </>
                );
              })}
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
