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

  const arithemetic = [
    {
      operator: "+ (Addition)",
      description: "Add two values",
      example: `a = 10
b = 20
c = a + b
>>> 30`,
    },
    {
      operator: "- (Subtraction)",
      description: "Subtracts two values",
      example: `a = 10
b = 5
c = a - b
>>> 5`,
    },
    {
      operator: "× (Multiplication)",
      description: "Multiplies two values",
      example: `a = 10
b = 5
c = a * b
>>> 50`,
    },
    {
      operator: "/ (Division)",
      description: "Division of two values",
      example: `a = 10
b = 5
c = a / b
>>> 2`,
    },
    {
      operator: "% (Modulus)",
      description: "Find the remainder",
      example: `a = 10
b = 3
c = a % b
>>> 1`,
    },
    {
      operator: "// (Floor Division )",
      description: "Divide two values and display only integer part . ",
      example: `a = 10
b = 3
c = a ||  b
>>> 1`,
    },
    {
      operator: "** (Exponent )",
      description: "Calculate power calculation",
      example: `a = 2
b = a ** b3
>>> 1`,
    },
  ];

  const relational = [
    {
      operator: "==  (Equal)",
      description:
        "It compares two value if , condition is true displa true otherwise false . ",
      example: `10 == 10 
      >>> true 
      10 == 13 
      >>> False `,
    },
    {
      operator: "!= (not equal to )",
      description:
        "Compare two value and condition is true then display true otherwise false . ",
      example: ` 10 != 10
        false
        10 != 12
        false `,
    },
    {
      operator: " > (Greater than)",
      description:
        "If the first value greater than second value then result will be true otherwise false . ",
      example: ` 13 > 10 
      true`,
    },
    {
      operator: "< (Less than)",
      description:
        "If the first value is less than the second value result will be true otherwise false . ",
      example: `10 < 10
        False 
        `,
    },
    {
      operator: "<=  (Greater than or equal to )",
      description:
        "If the first value is greater or equal to the second value then result will be true otherwise false ",
      example: ` 10 >= 13 
        True 
        10 >= 9 
        false `,
    },
    {
      operator: " <= (less than or equal to ) ",
      description:
        "If the first value is smaller or equal to the second value then reslut will be true otherwise False  . ",
      example: `15 <= 10
          false
          `,
    },
  ];
  const logical = [
    {
      operator: "and",
      description:
        "IF the both cnditno are true then result will be true otherwise false  ` . ",
      example: `10 > 5 and 5 < 15 
      >>> True
      10 > 5 and 5 < 3 
      >>> False  `,
    },
    {
      operator: "or ",
      description:
        "If any of two conditon is true then result will be true otherwise false . ",
      example: ` 10 > 5 or 5 < 3
      >>> True `,
    },
    {
      operator: "not ",
      description: "It is used to reverse the result of condtin . ",
      example: ` not (10 > 5 )
       >>> False`,
    },
  ];

  const assignment = [
    {
      operator: "=",
      example: `a = 10 `,
    },
    {
      operator: " +=  ",
      example: ` a = a + b
      a += b  `,
    },
    {
      operator: " -= ",
      example: `  a = a-b 
      a -= b `,
    },
    {
      operator: " *= ",
      example: `  a = a*b 
      a *= b `,
    },
  ];

  const identify = [
    {
      operator: "is ",
      description:
        " If the type of variable or either side of the operator has the same type then result will be true otherwise False . ",
      example: `a = 5 
      >>> Type (a) is int
      true 
      >>> Type (a) is float 
      False`,
    },
    {
      operator: " is not ",
      description:
        "The tpe of variable or either side of the operator does not have same type then result will be true otherwise false . ",
      example: ` a = 5 
      >>> Type (a) is not  int
      False  
      >>> Type (a) is not float 
      True`,
    },
  ];

  const membership = [
    {
      operator: "in ",
      description:
        " If the value is found in the given list then result will be true other wise false . ",
      example: `a = [1 ,2 , 3 , 4 ]
      >>> 2 in a 
      True
      >>> 5 in a 
      False `,
    },
    {
      operator: "  not in  ",
      description:
        "If the value is not found in the given list then answer will be true otherwise false   . ",
      example: `a = [1 ,2 , 3 , 4 ]
      >>> 2 not  in a 
      False
      >>> 5 not  in a 
      True`,
    },
  ];

  const precedence = [
    {
      order: "1",
      operator: " * * ",
      discription: ` Exponentiation (raise to the power) `,
    },
    {
      order: "2",
      operator: " ~ + ~  ",
      discription: ` Complement , unary plus and unary minus .  `,
    },
    {
      order: "3",
      operator: " * / % //  ",
      discription: `Multiply , Divide , modulo , and floor division `,
    },
    {
      order: "4",
      operator: " + ,  - ",
      discription: `Addition and Subtraction `,
    },
    {
      order: "5",
      operator: " <= , < , > , >= , == , !=  ",
      discription: `Rlational and Comparison operators .  `,
    },
    {
      order: "6",
      operator: " = , % , |= , ||= , -= , += , *= , **  ",
      discription: `Assignment operators `,
    },
    {
      order: "7",
      operator: " is , is not  ",
      discription: ` Identity operator  `,
    },
    {
      order: "8",
      operator: " in , not in  ",
      discription: `Membership operator  `,
    },
    {
      order: "9",
      operator: " not  ",
      discription: `Logical operator  `,
    },
    {
      order: "10",
      operator: " and   ",
      discription: `Logical operator  `,
    },

    {
      order: "11",
      operator: " or  ",
      discription: `Logical operator  `,
    },
  ];

  const error = [
    {
      heading: "Syntax error ",
      content:
        "When a program does not follow the rule of programming language then interpreter generate the syntax error . ",
    },
    {
      heading: "Logical  error ",
      content:
        " When the program generate undesired uputut or terminate the execution abnoramlly then the logical error generated  ",
    },
    {
      heading: " Runtime error ",
      content:
        " When the statement of the program is correct but interpreter cannot execute then this error are called runtime error  ",
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
              {/*  arethiemic operator  */}
              <div>
                <p>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {" "}
                    1. Arithmetic Operator ={" "}
                  </span>
                  Arithemetic operators are used to perform only arithmetic
                  operations .
                </p>
                <div className="flex items-center justify-center p-6">
                  <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl">
                    <h1 className="text-xl font-bold text-center mb-6">
                      Arithmetic Operators in Python
                    </h1>

                    <table className="table-auto border border-gray-300 w-full">
                      <thead className="bg-gray-200">
                        <tr>
                          <th className="border px-4 py-2 text-left">
                            Operator
                          </th>
                          <th className="border px-4 py-2 text-left">
                            Description
                          </th>
                          <th className="border px-4 py-2 text-left">
                            Example
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {arithemetic.map((item, index) => (
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
              {/* Relational operator  */}
              <div>
                <p>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {" "}
                    2. Relational Operator ={" "}
                  </span>
                  These operators are used to compare the value of the operands
                  (variable)
                </p>
                <div className="flex items-center justify-center p-6">
                  <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl">
                    <h1 className="text-xl font-bold text-center mb-6">
                      Relational Operators in Python
                    </h1>

                    <table className="table-auto border border-gray-300 w-full">
                      <thead className="bg-gray-200">
                        <tr>
                          <th className="border px-4 py-2 text-left">
                            Operator
                          </th>
                          <th className="border px-4 py-2 text-left">
                            Description
                          </th>
                          <th className="border px-4 py-2 text-left">
                            Example
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {relational.map((item, index) => (
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
              {/* Logicla  operator  */}
              <div>
                <p>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {" "}
                    3. Logical Operator ={" "}
                  </span>
                  These operators are also use to compare to relatinal condition
                  .
                </p>
                <div className="flex items-center justify-center p-6">
                  <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl">
                    <h1 className="text-xl font-bold text-center mb-6">
                      Logical Operators in Python
                    </h1>

                    <table className="table-auto border border-gray-300 w-full">
                      <thead className="bg-gray-200">
                        <tr>
                          <th className="border px-4 py-2 text-left">
                            Operator
                          </th>
                          <th className="border px-4 py-2 text-left">
                            Description
                          </th>
                          <th className="border px-4 py-2 text-left">
                            Example
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {logical.map((item, index) => (
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
              {/* Assigment   operator  */}
              <div>
                <p>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {" "}
                    4. Assignment Operator ={" "}
                  </span>
                  These operators are also use to compare to relatinal condition
                  .
                </p>
                <div className="flex items-center justify-center p-6">
                  <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl">
                    <h1 className="text-xl font-bold text-center mb-6">
                      Assigment Operators in Python
                    </h1>

                    <table className="table-auto border border-gray-300 w-full">
                      <thead className="bg-gray-200">
                        <tr>
                          <th className="border px-4 py-2 text-left">
                            Operator
                          </th>
                          <th className="border px-4 py-2 text-left">
                            Example
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {assignment.map((item, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="border px-4 py-2 font-medium">
                              {item.operator}
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
              {/* identify  operator  */}
              <div>
                <p>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {" "}
                    5. Identity Operator ={" "}
                  </span>
                  This operator are used to determine whether the value of a
                  variable is a certain type of not .
                </p>
                <div className="flex items-center justify-center p-6">
                  <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl">
                    <h1 className="text-xl font-bold text-center mb-6">
                      Identity Operators in Python
                    </h1>

                    <table className="table-auto border border-gray-300 w-full">
                      <thead className="bg-gray-200">
                        <tr>
                          <th className="border px-4 py-2 text-left">
                            Operator
                          </th>
                          <th className="border px-4 py-2 text-left">
                            Description
                          </th>
                          <th className="border px-4 py-2 text-left">
                            Example
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {identify.map((item, index) => (
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
              {/* membership  operator  */}
              <div>
                <p>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {" "}
                    6. Membership Operator ={" "}
                  </span>
                  This operator are used to check if a value is a member of
                  given list or not .
                </p>
                <div className="flex items-center justify-center p-6">
                  <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl">
                    <h1 className="text-xl font-bold text-center mb-6">
                      Membership Operators in Python
                    </h1>

                    <table className="table-auto border border-gray-300 w-full">
                      <thead className="bg-gray-200">
                        <tr>
                          <th className="border px-4 py-2 text-left">
                            Operator
                          </th>
                          <th className="border px-4 py-2 text-left">
                            Description
                          </th>
                          <th className="border px-4 py-2 text-left">
                            Example
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {membership.map((item, index) => (
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
          {/*Expression  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Expression
            </p>
            <p>
              {" "}
              It is defined as a combination of constatnt ,variable and operator
              .{" "}
            </p>
            <p>
              {" "}
              <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                {" "}
                Example :{" "}
              </span>
              c = a + b<p> n = n * 10 </p>
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            ></motion.ul>
          </div>
          {/*  Precednece of operator   */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Precedence of operators
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc-none  pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                {" "}
                If an expression contain different kind of operator then
                precedence of determine which operator should be operate first .{" "}
              </li>
            </motion.ul>
          </div>
          {/* table of precedence of operators  */}
          <div>
            <div className="flex items-center justify-center p-6">
              <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl">
                <table className="table-auto border border-gray-300 w-full">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="border px-4 py-2 text-left">
                        Order of precedence
                      </th>
                      <th className="border px-4 py-2 text-left">Operator</th>
                      <th className="border px-4 py-2 text-left">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {precedence.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border px-4 py-2 font-medium">
                          {item.order}
                        </td>
                        <td className="border px-4 py-2">{item.operator}</td>
                        <td className="border px-4 py-2 whitespace-pre-line font-mono text-sm">
                          {item.discription}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* statement lagnuage  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-1">
              Statement
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc-none pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              It is a unit of code that the python interpreter can execute .
              <p>
                {" "}
                <span> Example</span>
                <li> a = 10 </li>
                <li> b = 20 </li>
                <li> c = a + b </li>
                <li>30</li>
              </p>
            </motion.ul>
          </div>
          {/*  input and output   */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-1">
              input and output
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc-none  pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              In python () function is used to take the data from user .
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-1">
                  {" "}
                  Syntax{" "}
                </span>
                <li> input (prompt ) </li>
                <li> Here , prompt is a string </li>
                <li>
                  {" "}
                  In python print () function is used to display the output on
                  the screen{" "}
                </li>
                <li>
                  <span> Example </span>
                  <li> Name = input ('Enter any name ') </li>
                  <li> Print (Name) </li>
                </li>
              </p>
            </motion.ul>
          </div>
          {/* Type conversion   */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-1">
              Type Conversion
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc-none  pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              A process to convert the data type of value into a another data
              type is called type conversion.
              <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-1">
                There are two types of conversion
              </p>
              {/* /implcit */}
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-1">
                  {" "}
                  1. Inplicit Conversion ={" "}
                </span>
                When the data type conversion is done automaticallly by python
                interpreter it is known as implict conversion .
                <p>
                  {" "}
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-1">
                    Example :{" "}
                  </span>
                  <li> n1 = 10 </li>
                  <li> n2 = 20.5 </li>
                  <li> S = n1 + n2 </li>
                  <li> {">>> "} 30.5 </li>
                </p>
              </p>
              {/* explict conversion  */}
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-1">
                  {" "}
                  2. Explicit Conversion ={" "}
                </span>
                When the data type conversion is done by the user (programmer)
                this knonwn as explicit conversion .
                <p>
                  {" "}
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-1">
                    Syntax :{" "}
                  </span>
                  <li className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-1">
                    {" "}
                    New data type (expression ){" "}
                  </li>
                  <li> n1 = 10.5 </li>
                  <li> n2 = 5.2 </li>
                  <li> S = n1 + n2 </li>
                  <li> print [int(5)] </li>
                  <li> {">>> "} 15 </li>
                </p>
              </p>
            </motion.ul>
          </div>
          {/* debugging  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-1">
              Debugging
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              A process to indentify and remove the error from program is called
              debugging .
            </motion.ul>
          </div>
          {/* types of errors   */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-1">
              There are three types of occur in a program
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              {error.map((v, i) => {
                return (
                  <li>
                    <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-1">
                      {v.heading} =
                    </span>
                    {v.content}
                  </li>
                );
              })}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </>
  );
}
