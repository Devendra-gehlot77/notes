import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function ChapterFive() {
  const data = [
    {
      heading: "Program",
      content:
        "An ordered set of instructions to be executed by a computer to perform a specific task is called a program . ",
    },
    {
      heading: "Machine and low level language",
      content:
        "A langugae (0,1) that computer understand is called machine and low level language . ",
    },
    {
      heading: "High level language ",
      content:
        "A program (language) that is written by user (human) in a specific formate is called high level language . ",
    },
    {
      heading: "Source code  ",
      content:
        "A program written in a high level language is called a source data  . ",
    },
  ];
  const features = [
    {
      content: "It is a high level language . ",
    },
    {
      content: "It is free and open source language. ",
    },
    {
      content: "It is interpreted language  . ",
    },
    {
      content: "It is easy ot understand . ",
    },
    {
      content: "It has clearly defned syntax and simple structure . ",
    },
    {
      content: "It is case sensitive language . ",
    },
    {
      content: "It is portable and platform independent . ",
    },
    {
      content: "It has a rich library of predefined function . ",
    },
    {
      content: "It is helpful in web development . ",
    },
    {
      content: "It uses indentation for blocks and nested blocks . ",
    },
  ];

  const workingPython = [
    {
      content:
        "To write and run a puthon program we need a puthon interpreter this interpreter is called puthon shell .",
    },
    {
      content: "The symbol >>> is called the puthon prompt  .",
    },
    {
      content:
        "This prompt indicated that interpreter is ready to take instruction .",
    },
  ];

  const twoWaysPython = [
    {
      heading: " 1. Interactive mode = ",
      content: "This mode is used to execute a single line code . ",
    },
    {
      heading: " 2. Script Mode  = ",
      content:
        'This mode is used to right multiple lines of programs . The file have to be saved with the ".py" extension before the execute (run of program ) . ',
    },
  ];
  const setsnone = [
    {
      heading: " set",
      content:
        "It is unordered collection of element separated by comma and enclosed in a curly bracket . It cannot have duplicate value and once it created we cannot a change it . ",
      ex: ' {19 , 39 , "dev" , 23.4 } ',
    },
    {
      heading: " None  ",
      content:
        " It is a special data type with a single value . It signifies (represent) the absence of value in a situation ",
      ex: " a = none  ",
    },
  ];
  const dataMuteImmuteOp = [
    {
      heading: " Mutable data types ",
      content:
        "Variable whose value can be change after they are created are called mutable  . ",
      ex: "list or dictionary",
    },
    {
      heading: " Immutable data types ",
      content:
        "Variable whose value cannot  be change after they are created are called immutable  . ",
      ex: "Integer , Float , Complex , string , tuple ",
    },
    {
      heading: " Operators ",
      content:
        "An operator is used to perform a specific (particular) operations on value . THe values that the operator works on are called operands  ",
      ex: "Arithmetic Operations , Assignment Operations , Comparison Operations ,  Logical Operations ,  Membership Operations ",
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
            Chapter 5: Getting started with python
          </h1>
          {/* intorduction */}
          {data.map((v, i) => {
            return (
              <>
                <div>
                  <p className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed">
                    {v.heading}
                  </p>
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="list-disc-none pl-6 space-y-2 text-gray-700 text-base md:text-lg"
                  >
                    <li>{v.content}</li>
                  </motion.ul>
                </div>
              </>
            );
          })}

          {/* Central Processing unit */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Features of python
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              {features.map((v, i) => {
                return (
                  <>
                    <li> {v.content} </li>
                  </>
                );
              })}
            </motion.ul>
          </div>
          {/* Working with Python */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Working with Python
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              {workingPython.map((v, i) => {
                return (
                  <>
                    <li> {v.content} </li>
                  </>
                );
              })}
            </motion.ul>
          </div>
          {/* There are two ways to use the python interpreter */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              There are two ways to use the python interpreter
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc-none  pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              {twoWaysPython.map((v, i) => {
                return (
                  <li>
                    <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                      {v.heading}
                    </span>
                    {v.content}
                  </li>
                );
              })}
            </motion.ul>
          </div>
          {/* python keywords  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Python Keyword
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                Keyword that have already pre defined meaning in puthon library
                is called keywords . THere are also known as reserve words.
              </li>
              <li>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  Example :{" "}
                </span>
                INT , float , CONTINUE , TRY , FOR , AND , DEF , BREAK
              </li>
            </motion.ul>
          </div>
          {/*  Identifiers  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Identifiers
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                A name of variable function etc . given by user is called
                Identifiers{" "}
              </li>
            </motion.ul>
          </div>
          {/*  rules for naming of identifiers   */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              There are some rules for naming the identifiers
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li> The name should be begin with alphabet . </li>
              <li> It can be of any length . </li>
              <li> The name should not be a keyword . </li>
              <li> We cannot use any special symbol except (underscore) . </li>
              <li>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  Example :{" "}
                </span>
                M1 , avg, area, h12 , amount
              </li>
            </motion.ul>
          </div>
          {/*   Data transfeer  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Variable
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                Variable refer as an object which is used to store the value in
                a memory .{" "}
              </li>
              <li>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  Example :{" "}
                </span>
                <p> a = 10 </p>
                <p> Name = computer </p>
                <p> Avg = 45.50</p>
              </li>
            </motion.ul>
          </div>
          {/*  comments */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Comments
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                {" "}
                Comments are used to add the remark in a program for users to
                understand .{" "}
              </li>
              <li> The comment start with (hash # symbol )</li>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  Example : Sum of two numbers
                </span>
                <p> a = 10 </p>
                <p> b = 20 </p>
                <p> c = a + b </p>
                <p> Print (c) </p>
              </p>
            </motion.ul>
          </div>
          {/*  eveythin is object   */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Everything is an object
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                {" "}
                Python treats every value and data as an object . It has a
                unique indentity in a memory and this indentity can find by id
                () fucntion{" "}
              </li>
            </motion.ul>
          </div>
          {/* Data types  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Data types
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                Data types indentifies the types of data vlued that a variable
                an hold .
              </li>
            </motion.ul>
          </div>
          {/* data tupes in python  */}
          <div className="flex items-center justify-center p-6">
            <div className="bg-white shadow-md rounded-2xl p-6">
              <h1 className="text-xl font-bold text-center mb-6">
                Data Types in Python
              </h1>

              <div className="flex space-x-12">
                {/* Numbers */}
                <div className="text-center">
                  <p className="font-semibold text-blue-600">Numbers</p>
                  <div className="mt-2 pl-4 border-l-2 border-gray-400 text-left space-y-2 text-sm">
                    <p>Integer</p>
                    <div className="pl-4 border-l-2 border-gray-300">
                      <p>Boolean</p>
                    </div>
                    <p>Floating Point</p>
                    <p>Complex</p>
                  </div>
                </div>

                {/* Sequences */}
                <div className="text-center">
                  <p className="font-semibold text-green-600">Sequences</p>
                  <div className="mt-2 pl-4 border-l-2 border-gray-400 text-left space-y-2 text-sm">
                    <p>Strings</p>
                    <p>Lists</p>
                    <p>Tuples</p>
                  </div>
                </div>

                {/* Sets */}
                <div className="text-center">
                  <p className="font-semibold text-purple-600">Sets</p>
                  <div className="mt-2 pl-4 border-l-2 border-gray-400 text-left text-sm">
                    <p>Set</p>
                  </div>
                </div>

                {/* None */}
                <div className="text-center">
                  <p className="font-semibold text-red-600">None</p>
                  <div className="mt-2 pl-4 border-l-2 border-gray-400 text-left text-sm">
                    <p>NoneType</p>
                  </div>
                </div>

                {/* Mappings */}
                <div className="text-center">
                  <p className="font-semibold text-orange-600">Mappings</p>
                  <div className="mt-2 pl-4 border-l-2 border-gray-400 text-left text-sm">
                    <p>Dictionaries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* number  */}
          <div className="mt-4">
            <p>
              <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                {" "}
                Number{" "}
              </span>
              This data types stores numeric value only .
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  1. Int ={" "}
                </span>
                It holds the number without decimal .
                <p className="ms-5">
                  {" "}
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    example ={" "}
                  </span>{" "}
                  -12 , -3 , 0 , 125 , 30
                </p>
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  2. Float ={" "}
                </span>
                It holds the number with decimal point
                <p className="ms-5">
                  {" "}
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    example ={" "}
                  </span>{" "}
                  4.0 , -2.o4 , 14.25
                </p>
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  3.Complex ={" "}
                </span>
                It stores the complex number .
                <p className="ms-5">
                  {" "}
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    example ={" "}
                  </span>{" "}
                  3 + 4 I , 2 - 2 I
                </p>
                <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed  mt-2 mb-1">
                  {" "}
                  Sequence
                </p>
                <p className="mb-4">
                  {" "}
                  It is a order collection of element where each element has a
                  index .{" "}
                </p>
                <ul>
                  <li>
                    <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                      {" "}
                      1. String ={" "}
                    </span>
                    It is a group of character enclosed in a single and double
                    quotations mark ("") . A character can be number alphabets
                    and special symbol .
                    <li className="mb-4">
                      <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                        {" "}
                        Example ={" "}
                      </span>
                      ("hello ") , ("H 123")
                    </li>
                  </li>
                  <li>
                    <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                      {" "}
                      2.Tuple ={" "}
                    </span>
                    It is a sequence of data separated by comma and enclosed in
                    small bracket ( ) . Once it created we cannot change the
                    tuple .
                    <li className="mb-4">
                      <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                        {" "}
                        Example ={" "}
                      </span>
                      ( 1 , 2 , "dev" , 80.5)
                    </li>
                  </li>
                  <li>
                    <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                      {" "}
                      3. List ={" "}
                    </span>
                    It is a sequence of element separated comma and enclosed in
                    a square bracket [] . Once it created we can change the list
                    .
                    <li className="mb-4">
                      <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                        {" "}
                        Example ={" "}
                      </span>
                      [ 1, 20 , "dev" , 34.4]
                    </li>
                  </li>
                  <li>
                    <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                      {" "}
                      Software ={" "}
                    </span>
                    It is a set of instruction which is return for the specific
                    purpose of task .
                  </li>
                </ul>
              </p>
            </motion.ul>
          </div>
          {/* set none mappin etc  */}
          {setsnone.map((v, i) => {
            return (
              <>
                <div>
                  <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed  mt-2 ">
                    {" "}
                    {v.heading}
                  </p>
                  <p className="mb-4"> {v.content}</p>
                  <p>
                    <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed  mt-2 ">
                      {" "}
                      Example :{" "}
                    </span>
                    {v.ex}
                  </p>
                </div>
              </>
            );
          })}

          {/*dictionary  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Dictionary
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <p>
                <li> It holds data items in key value pair . </li>
                <li>
                  {" "}
                  The data items are enclosed in a curly bracket . Every key is
                  searated from its value using colon (:){" "}
                </li>
                <li>
                  {" "}
                  Every data item of a dictionary can be access using the key{" "}
                </li>
                <p className="ms-5">
                  {" "}
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    example ={" "}
                  </span>{" "}
                  d1 {'{"name":"Dev", "Sub": "Computer" , }'}
                </p>
              </p>
            </motion.ul>
          </div>
          {/*  Mutable , immutable , operator  */}
          {dataMuteImmuteOp.map((v, i) => {
            return (
              <>
                <div>
                  <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed  mt-2 ">
                    {" "}
                    {v.heading}
                  </p>
                  <p className="mb-1"> {v.content}</p>
                  <p>
                    <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed  mt-2 mb-4 ">
                      {" "}
                      Example :{" "}
                    </span>
                    {v.ex}
                  </p>
                </div>
              </>
            );
          })}
          {/* types of operaor  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-1">
              There are different types of operator in a python :
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  1. Arithmetic Operator ={" "}
                </span>
                Arithemetic operators are used to perform only arithmetic
                operations .
              </p>
            </motion.ul>
          </div>
          {/* Function of Operating system  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Function of operating system
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  1. Process Management ={" "}
                </span>
                The main task of the operating system is to manage a various
                (many) process and get multiple task completed in minimum time
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  2. Memory Management ={" "}
                </span>
                It manage the main memory by keeping the track of every location
                with in the memory as free of occupied .
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  3. File Management ={" "}
                </span>
                It invovles the creation , updation , deletion and protection of
                the files in a secoondary memory .
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  4. Device management ={" "}
                </span>
                It manages a many input and output devices by interacting with
                their related software .
              </p>
            </motion.ul>
          </div>
          {/*  OS  user interface  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              OS users interface
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-[lower-alpha] pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>Command base interface</li>
              <li>Graphical user interface</li>
              <li>Touch based interface</li>
              <li>Voice based interface</li>
            </motion.ul>
          </div>
          {/* programing lagnuage  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-1">
              Programing Language
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              A language which are developed to written a cot (instruction)
            </motion.ul>
          </div>
          {/*  translator  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-1">
              Language Translator
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              It is used to convert the high level language to low level
              lnaguage (0,1)
            </motion.ul>
          </div>
          {/* properitary Software  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-1">
              Proprietary Software
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              A software which has to be purchased is called a proprietary
              software .
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-1">
                  {" "}
                  Example =
                </span>
                MS Office , Windows
              </p>
            </motion.ul>
          </div>
          {/* free software  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-1">
              Free Software{" "}
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              A software which are freely available for a use is called free
              software .
            </motion.ul>
          </div>
          {/* open source software  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-1">
              Open Source Software
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              A software which are freely available with their software source
              is called a open source software .
            </motion.ul>
          </div>
          {/* FOSS */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-1">
              FOSS
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              Free and open source software
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </>
  );
}
