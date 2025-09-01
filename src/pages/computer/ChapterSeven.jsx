import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function ChapterSeven() {
  const advantages = [
    {
      content: "It increases The read ability for the longer program ",
    },
    {
      content:
        "By using function program can be better originase and easy to understand .  ",
    },
    {
      content: "It reduces the lenght of complex program  ",
    },
    {
      content: " It makes debugging easier ",
    },
    {
      content:
        " It increases the reuse ability because function can be called anywhere in the program or other function .  ",
    },
    {
      content:
        "With the help of function work can be divided among the team members .  ",
    },
  ];

  const builtFunction = [
    {
      operator: " abs (x) ",
      description: "Return only absolute / positive value . ",
      example: `>>> abs (4)
                    4
                >>> abs(-5.7)
                    5`,
    },
    {
      operator: " deumod (x,y",
      description: "Return teh quotient and remiander ",
      example: `>> abs(7,2)
                    (3,1)`,
    },
    {
      operator: " max(n1,n2,n3) ",
      description: "It return the maximum value from the sequence ",
      example: `>> max (4 , 5 , 10 , 2)
                10`,
    },
    {
      operator: " pow (x,y) ",
      description: " It return the result of (x , y) ",
      example: `pow(2,3)
                8`,
    },
    {
      operator: " Sum(n1,n2,n3) ",
      description: " it return the some of all the elements of a list  ",
      example: `sum(4,6,2,3)
                15`,
    },
    {
      operator: "len(x)",
      description: "It returns the length of list .  . ",
      example: ` >> len(10,20,30,)
                    3`,
    },
  ];

  const module = [
    {
      no: " 1 ",
      operator: " math.ceil (x) ",
      example: `>>> math.ceil(-9.7)
                    9
                >>> math.ceil(9.7)
                    10
                    >>> math.ceil(9)
                    9`,
    },
    {
      no: " 2 ",
      operator: " math.floor(x) ",
      example: `>>> math.floor(-4.5)
                    -5
                >>> math.floor(4.5)
                    4
                    >>> math.floor(4)
                    4`,
    },
    {
      no: " 3 ",
      operator: " math.fabs (x) ",
      example: `>>> math.fabs(6.7)
                    6.7
                >>> math.fabs(-6.7)
                    6.7
                    >>> math.fabs(-4)
                    4.0`,
    },
    {
      no: " 4 ",
      operator: " math.factorial (x) ",
      example: `>>> math.factorial(5)
                    120`,
    },

    {
      no: " 6 ",
      operator: " math.gcd (x,y) ",
      example: `>>> math.gcd(10,2)
                    2`,
    },
  ];

  const data = [
    {
      syntax: "math.ceil(x)",
      examples: `>> math.ceil(-9.7)  
                -9
            >> math.ceil(9.7)   
             10
            >> math.ceil(9)     
             9`,
    },
    {
      syntax: "math.floor(x)",
      examples: `>> math.floor(-4.5)
                  -5
          >> math.floor(4.5)  
           4
          >> math.floor(4)    
           4`,
    },
    {
      syntax: "math.fabs(x)",
      examples: `>> math.fabs(6.7)   
       6.7
      >>> math.fabs(-6.7)
                    6.7
                    >>> math.fabs(-4)
                    4.0`,
    },
    {
      syntax: " math.factorial (x) ",
      examples: `>>> math.factorial(5)
                    120`,
    },
    {
      syntax: " math.fmod (x,y) ",
      examples: `>>> math.fmod(4 , 4.9)
                    4.0
                >>> math.fmod(4.9 , 4.9)
                    0.0
                    >>> math.fmod(-4.9 , 2.5)
                    -2.4
                    >>> math.fmod(4.9 , -4.9)
                    0.0`,
    },
    {
      syntax: " math.gcd (x,y) ",
      examples: `>>> math.gcd(10 , 2)
                    2`,
    },
    {
      syntax: " math.pow (x,y) ",
      examples: `>>> math.pow(3 , 2)
                    9.0
                >>> math.pow(4 , 2.5)
                    320
                    >>> math.pow(6.5 , 2)
                    42.25
                    >>> math.pow(5.5 , 3.2)
                    233.97`,
    },
    {
      syntax: " math.sprt (x) ",
      examples: `>>> math.sprt(144)
                    12.0
                >>> math.sprt(64)
                    0.8`,
    },
    {
      syntax: " math.sin (x) ",
      examples: `>>> math.sin(0)
                      0
                >>> math.sin(6)
                    0.279`,
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
            Chapter 7: Functions
          </h1>
          {/* intorduction */}
          <p className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed ">
            Functions
          </p>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
          >
            It is a part of program and define as a group fo instruction that
            perform a specific task and it can be called anywhere in the program
            .
          </motion.ul>
          {/*advantagers of functions*/}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Advantage of funtions
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              {advantages.map((v, i) => {
                return <li>{v.content}</li>;
              })}
            </motion.ul>
          </div>
          {/* types of funciions   */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Types of funtions
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-[num] pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                * There are two types of functions in a python
              </p>
              <p>
                {/* user define function */}
                <li>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {" "}
                    User define function ={" "}
                  </span>
                  A functin which is define to perform a specfic task according
                  to the users need is called user define functiom .
                </li>
                <p>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {" "}
                    Syntax ={" "}
                  </span>
                  define function name (parameter):
                  <p> body of function </p>
                </p>
                <p>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {"  "}
                    Example{" "}
                  </span>
                  <p> define add (a,b )</p>
                  <p>c = a + b</p>
                  <p> print (c) </p>
                  <p> add (10 , 30) </p>
                  <p> add (30, 40) </p>
                </p>
                {/* built in function  */}
                <li className="mt-5">
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2 ">
                    {" "}
                    Built in function ={" "}
                  </span>
                  A function which is already predefine in a python library is
                  called built in function .
                </li>
                <p>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {"  "}
                    Example{" "}
                  </span>
                  input() , output() , len() , list() etc
                </p>
              </p>
            </motion.ul>
          </div>
          {/* Arguments and Parameter   */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Arguments and Parameter
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                A value which is passed to the funciton during the funciton call
                is called argument .
              </li>
              <li>
                A value which is receive during the funciton defination is known
                s parameter .{" "}
              </li>
              <li>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  example :
                </span>
                <span>
                  <p>def add (a, b ) ={"> "} Paramter </p>
                  <p>c = a + b</p>
                  <p> print (c) </p>
                  <p> add (10,30) {"=>"} Argument </p>
                  <p> add (30,40) </p>
                </span>
              </li>
            </motion.ul>
          </div>
          {/* default parameter  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed">
              Default Parameter
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className=" pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              A value that is predecided and a assigned to the paramter is
              knonwn as paramter
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed">
                  {" "}
                  Example ={" "}
                </span>
                Def add (a=10 , b=20) : default paramter
                <li>c = a + b</li>
                <li>print (c)</li>
                <li> add () </li>
              </p>
            </motion.ul>
          </div>
          {/* buitl in funciion*/}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Built in funciion
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              {/* table */}
              <div>
                <div className="flex items-center justify-center ">
                  <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl">
                    <table className="table-auto border border-gray-300 w-full">
                      <thead className="bg-gray-200">
                        <tr>
                          <th className="border px-4 py-2 text-left">syntax</th>
                          <th className="border px-4 py-2 text-left">
                            Description
                          </th>
                          <th className="border px-4 py-2 text-left">
                            Example
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {builtFunction.map((item, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="border px-4 py-2 font-medium">
                              {item.operator}
                            </td>
                            <td className="border px-4 py-2">
                              {item.description}
                            </td>
                            <td className="border px-4 py-2 whitespace-pre-line font-mono text-sm">
                              {item.example}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </motion.ul>
          </div>
          {/*   module  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed">
              Module
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-[nim] pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              It is a group of function of the same category . Some commonly
              used module in a python library are :<li> Math module </li>
              <li>Random module </li>
              <li> statistics module </li>
              <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                {" "}
                In a program impact statement is used to call the all the
                funcion of specific module .{" "}
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  Syntax :{" "}
                </span>
                <p className="ms-18">
                  {" "}
                  imort module name1 , m2 for call the funcion of module
                  mdulname function name .
                </p>
              </p>
              {/* table */}
              <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed  ">
                {" "}
                (i) Commonly used functions in math module{" "}
              </p>
              <div className="p-6 flex justify-center">
                <table className="table-auto border-collapse border border-gray-400 text-left shadow-lg rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-400 px-4 py-2">
                        Function Syntax
                      </th>
                      <th className="border border-gray-400 px-4 py-2">
                        Example Output
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 1 ? "bg-gray-50" : ""}
                      >
                        <td className="border border-gray-400 px-4 py-2 font-medium">
                          {row.syntax}
                        </td>
                        <td className="border border-gray-400 px-4 py-2 whitespace-pre-line">
                          {row.examples}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Randowm mdoule table  */}
              <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed  ">
                {" "}
                (i) Commonly used functions in Random module{" "}
              </p>
              <div className="p-6 flex justify-center">
                <table className="table-auto border-collapse border border-gray-400 text-left shadow-lg rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-400 px-4 py-2">
                        Function Syntax
                      </th>
                      <th className="border border-gray-400 px-4 py-2">
                        Example Output
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 1 ? "bg-gray-50" : ""}
                      >
                        <td className="border border-gray-400 px-4 py-2 font-medium">
                          {row.syntax}
                        </td>
                        <td className="border border-gray-400 px-4 py-2 whitespace-pre-line">
                          {row.examples}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
                  2. Adress bus ={" "}
                </span>
                It is used to transfer adress between .
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  3. Control bus ={" "}
                </span>
                It is used to communited and control the signal between
                different components of computer .
              </p>
            </motion.ul>
          </div>
          {/*  Cpu / mircor processor signification */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              CPU / Microprocessor Significatoin
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
                  1. Word Size ={" "}
                </span>
                It is a maximum number of bites that a processor can process at
                a time.
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  2. Memory size ={" "}
                </span>
                Depending on word size of teh ram can be chagne
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  3. Clock Speed ={" "}
                </span>
                It indicate the speed at which the computer can process the
                instructions .
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  4. Cores ={" "}
                </span>
                It is a calculations (calculate) unit of CPU . It has 2,4,8
                cores.
              </p>
            </motion.ul>
          </div>
          {/*  data  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Data
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li> Everything in a computer system is called data . </li>
              <li>
                {" "}
                It can be rawfacts , number (0 to 9) , alphabets , symbols ,
                pictures , audio , radio , etc{" "}
              </li>
            </motion.ul>
          </div>
          {/* Information */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Information
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                When we user converts the raw and unorganised data into a
                meaningfull term is caled a information{" "}
              </li>
            </motion.ul>
          </div>
          {/*  types of data  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Types of Data
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
                  1. Structure data ={" "}
                </span>
                When data are stored in a table form and follow up specific
                (particular) rule is called structure data.
                <p className="ms-5">
                  {" "}
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    example ={" "}
                  </span>{" "}
                  Attendence of the student
                </p>
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  2. Unstructure data ={" "}
                </span>
                When data are not organised in a specific formate that is called
                unstrucuure data.
                <p className="ms-5">
                  {" "}
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    example ={" "}
                  </span>{" "}
                  Report card , Newspaper
                </p>
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  3.Semi structure data ={" "}
                </span>
                Data which have no specific formate but maintain a some rules .
                <p className="ms-5">
                  {" "}
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    example ={" "}
                  </span>{" "}
                  E-mail , Documents
                </p>
                <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed  mt-2">
                  {" "}
                  Types of Process of Semi structure data{" "}
                </p>
                <ul>
                  <li>
                    <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                      {" "}
                      Data capturing ={" "}
                    </span>
                    A process of gather (collect) data from different sources is
                    called data capturing .
                  </li>
                  <li>
                    <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                      {" "}
                      Data storage ={" "}
                    </span>
                    A process of storing a data in a storage device (memory) is
                    called data storage .
                  </li>
                  <li>
                    <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                      {" "}
                      Data Retrival ={" "}
                    </span>
                    It involves fetching data from storage device is called data
                    retrival .
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
          {/* types of software  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Types of software
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
                  1. System software ={" "}
                </span>
                A software that provide a basic instruction (function) to
                operate a computer .
                <p className="ms-5">
                  {" "}
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    example ={" "}
                  </span>{" "}
                  Operating system , Device Driver
                </p>
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  2. Application Software ={" "}
                </span>
                A software which is written for a specific purpose (task)
                accoding to the need of users .
                <p className="ms-5">
                  {" "}
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    example ={" "}
                  </span>{" "}
                  M.S Office , Photoshop
                </p>
                <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed  mt-2 ms-4">
                  {" "}
                  It has Two Category of software{" "}
                </p>
                <li className="ms-9">
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2 ">
                    {" "}
                    General purpose ={" "}
                  </span>
                  They are redimed application software that can be used by
                  users as their need (requirements)
                </li>
                <li className="ms-9">
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {" "}
                    Customised Software ={" "}
                  </span>
                  They are customed software that are written for a specific
                  organisation or (individual) .
                </li>
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  3. Utility Software ={" "}
                </span>
                A software that is used to maintain the computer system
                <p className="ms-5">
                  {" "}
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    example ={" "}
                  </span>{" "}
                  Anitvirus software
                </p>
              </p>
            </motion.ul>
          </div>
          {/* operating system  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-1">
              Operating system
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                A software that operate computer system is called operating
                system .
              </li>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  example ={" "}
                </span>
                windows 7 , 8 , 9 ,10
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
