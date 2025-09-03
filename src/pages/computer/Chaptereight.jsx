import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Chaptereight() {
  const builtFunction = [
    {
      method: "len()",
      description: "It display the length of string",
      example: `>> strl = 'Hello World!'
              >> len(strl)
              12`,
    },
    {
      method: "title()",
      description:
        "It display the string with first character of every word in a string in upper case.",
      example: `>> strl = 'hello World!'
            >> strl.title()
            'Hello World!'`,
    },
    {
      method: "lower()",
      description:
        "It convert the all uppercase of the string into a lowercase.",
      example: `>> strl = 'Hello World!'
              >> strl.lower()
              'hello world!'`,
    },
    {
      method: "upper()",
      description:
        "It convert the all lowercase of the string into a uppercase.",
      example: `>> strl = 'hello World!'
        >> strl.upper()
        'HELLO WORLD!'`,
    },
    {
      method: "count()",
      description:
        "It display the number of times substring occur in the given string.",
      example: `>> strl = 'Hello World! Hello Hello'
            >> strl.count('Hello' , 12 , 25)
            2
            >>> strl.count('Hello')
            3`,
    },
    {
      method: "find()",
      description:
        "It display the first occurence of index of sub string in the given string . It not present then it display the as a result (-1) .",
      example: `>> strl = 'Hello World! Hello Hello'
            >> strl.find('Hello' ,10 , 12)
                    13
            >>> strl.find('Hello' , 15 , 25)
                    19
            >>> strl.find("hello")
                    0
            >>> strl.find("hee")
                -1   `,
    },
    {
      method: "index()",
      description:
        " It is the same as find() function but raise an error if the sub-string is not present in the given string .  ",
      example: `>> strl = 'Hello World! Hello Hello'
            >> strl.index('Hello')
            0
            >>> strl.index('Hee')
            value Error: Substring not found `,
    },
    {
      method: "endwith()",
      description:
        " If the given string ends with the substring then result will be true other wise false .",
      example: `>> strl = 'Hello World !'
            >> strl.endwith("World !")
                    true
            >>> strl.endwith('!')
                    True
            >>> strl.endwith("ide")
                    False   `,
    },
    {
      method: "startswith()",
      description:
        " If the given string starts with the substring then result will be true otherwise false .",
      example: `>> strl = 'Hello World!'
            >> strl.startswith('He)
                    True
            >>> strl.startswith('hee')
                    false `,
    },
    {
      method: "isalnum()",
      description:
        " If the corrector of given string are either alphabet or numeric then answer will be true otherwise false  .",
      example: `>> strl = 'Hello World!'
            >> strl.isalnum()
                    true
            >>> strl = 'Hello World 2 '
            >>> strl.isalnum()
                    True
            >>> strl = 'Hello World !!' 
            >>> strl.isalnum()
                    False   `,
    },
    {
      method: "islower()",
      description:
        " It checks that all the character of given string is in lower case then result will be true ohterwise false   .",
      example: `>> strl = 'Hello World!'
            >> strl.islower()
                    true
            >>> strl = 'Hello 1234 '
            >>> strl.islower()
                    True
            >>> strl = 'Hello ??' 
            >>> strl.islower()
                    True
            >>> strl = '1234' 
            >>> strl.islower()
                    False
            >>> strl = 'Hello world ! ' 
            >>> strl.islower()
                    False `,
    },
    {
      method: "isupper()",
      description:
        " It checks that every character of geven string is in upper case then result will be true otherwise false .",
      example: `>> strl = 'Hello World!'
            >> strl.isupper()
                    true
            >>> strl = 'Hello 1234 '
            >>> strl.isupper()
                    True
            >>> strl = 'Hello ??' 
            >>> strl.isupper()
                    True
            >>> strl = '1234' 
            >>> strl.isupper()
                    False
            >>> strl = 'Hello world ! ' 
            >>> strl.isupper()
                    False `,
    },
    {
      method: "istitle()",
      description:
        " If the string is in title case then result will be true otherwies false .",
      example: `>> strl = 'Hello World!'
            >> strl.istitle()
                    true
            >>> strl = 'Hello World ! '
            >>> strl.istitle()
                    True `,
    },
    {
      method: "lstrip()",
      description:
        " It display the string after removing the space on the left side of string .",
      example: `>> strl = 'Hello World!'
            >> strl.lstrip()
            'HelloWorld '
            `,
    },
    {
      method: "rstrip()",
      description:
        " It display the string after removing the space on the right side of the string   .",
      example: `>> strl = 'Hello World!'
            >> strl.rstrip()
            'HelloWorld! ' `,
    },
    {
      method: "strip()",
      description:
        " It display the string after removing the space both on left adn right side of string  .",
      example: `>> strl = 'Hello World!'
            >> strl.strip()
            'HelloWorld! ' `,
    },
    {
      method: "replace()",
      description:
        " IT replace all occurence of old string with the new string  .",
      example: `>> strl = 'Hello World!'
            >> strl.replace('0' , '*' )
            "hell * W*rld ! 
            >>> strl = "Hello World ! "
            >>> strl.replace('World' , 'Country')
            "Hello Country ! ' 
            strl = 'Hello World ! Hello '
            >>> strl.replace('Hello' , 'Bye')
            'Bye World ! bye
            'HelloWorld! ' `,
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
            Chapter 8: String
          </h1>
          {/* intorduction */}
          <p className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed">
            {" "}
            String
          </p>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className=" pl-6 space-y-2 text-gray-700 text-base md:text-lg"
          >
            <li>
              It is a group of corrector including alphabtes , number , special
              symbols enclosed by singal , double or triple quotation work .{" "}
            </li>
            <p>
              <span className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed mb-4">
                {" "}
                example{" "}
              </span>
              S = "hello" , S = "hello 1 , 2 , 3"
            </p>
          </motion.ul>
          {/* accesssing correctors in a string  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Accessing correctos in a string
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                {" "}
                Every corrector of a string can be excessed using a method for
                indexing .
              </li>
              <li>
                The index of the first corector in a stringis zero and last
                corrector is (n - 1){" "}
              </li>
              <li>
                The index of every corrector in a string is written in []
                bracket .
                <p>
                  <span className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed mb-4">
                    {" "}
                    Example :
                  </span>
                  S = "hello world "
                  <ul className="list-[num]  ">
                    <li className=""> S[0]</li>
                    <p> 0 </p>
                    <li> S[7] </li>
                    <p> 0 </p>
                    <li> S[3+3] </li>
                    <p> w </p>
                    <li> S[-4] </li>
                    <p> 0 </p>
                  </ul>
                </p>
              </li>
            </motion.ul>
          </div>
          {/* string is a immutable */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              String is a immutable
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                {" "}
                It is the immutable data type it means that once is it created ,
                we cannot change it .{" "}
              </li>
            </motion.ul>
          </div>
          {/* string operations  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              String operations
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                Python allows the some certain operations on string data type
                and these operation are concate nation, repetition, membership,
                slicing
              </li>
            </motion.ul>
          </div>
          {/* Concate Nations  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Concate Nations
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <p> Concate meanas to join to string by using operator (+) . </p>
              <li>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2 me-2 ">
                  Example :
                </span>
                S1 = "hello"
                <p> S2 = "world" </p>
                <p> {">>>"} S1+S2</p>
                <p>helloworld</p>
              </li>
            </motion.ul>
          </div>
          {/* repetition  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Repetition
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <p>
                {" "}
                Repetition means to repeat given string by using operate (*){" "}
              </p>
              <li>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2 me-2 ">
                  Example :
                </span>
                S1 = "hello"
                <p> {">>>"} 5*2</p>
                <p>hellohello</p>
              </li>
            </motion.ul>
          </div>
          {/*  Membership */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Membership
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-[lower-alpha]  pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                Python has a two membership operator in and not in .
              </p>
              {/* in */}
              <li>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed">
                  in =
                </span>
                This operator checks the specific string is present in the given
                string is yes then asnwer will be true otherwise false .
              </li>
              {/* not in  */}
              <li>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed">
                  not in =
                </span>
                It checks that specific string is not present in given string if
                yes then answer will be true otherwise
              </li>
              <span>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  Example :
                </span>
                S = "Hello"
                <p className="ms-15"> {">>>"} "e" not in S </p>
                <p className="ms-15"> False </p>
                <p className="ms-15"> {">>>"} "a" not in S </p>
                <p className="ms-15"> True </p>
              </span>
            </motion.ul>
          </div>
          {/*  slicing  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Slicing
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <p>
                {" "}
                It user want to access the some part of given string then python
                allows a method called slicing to access the part string .{" "}
              </p>
            </motion.ul>
          </div>
          {/* example of slicing  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed ">
              Example :
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <p>S = "Hello world" </p>
              <p> {">>>"} S [1:5] </p>
              <p> ello </p>
              <p> {">>>"} S [: 8] </p>
              <p> Hello wor </p>
              <p> {">>>"} S [6 :] </p>
              <p> world </p>
              <p> {">>>"} S [-3 : -1] </p>
              <p> rld </p>
              <p> {">>>"} S [0 : 15 : 2] </p>
              <p> Hlo wrd </p>
              <p> {">>>"} S [ : : -1] </p>
            </motion.ul>
          </div>
          {/*   trreversing a string  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed">
              Traversing a string
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className=" pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                User can access each character of a string using for loop and
                while loop .{" "}
              </li>
              <section>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  Example : for loop{" "}
                </span>
                <p> S = "Hello" </p>
                <p> for i in S ; </p>
                <p> print (s[i]) </p>
              </section>
              <section>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  Example : while loop{" "}
                </span>
                <p> S = "Hello" </p>
                <p> for i 0 </p>
                <p> while i {"<"} = len(s) </p>
                <p> print (S[i]) </p>
                <p> i = i + 1 </p>
              </section>
            </motion.ul>
          </div>
          <h2 className="ms-35 mt-8 text-[25px] font-bold ">
            {" "}
            Built in function{" "}
          </h2>
          <div className="p-6 flex justify-center">
            <table className="table-auto border-collapse border border-gray-400 text-left shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-400 px-4 py-2">Method</th>
                  <th className="border border-gray-400 px-4 py-2">
                    Description
                  </th>
                  <th className="border border-gray-400 px-4 py-2">Example</th>
                </tr>
              </thead>
              <tbody>
                {builtFunction.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 1 ? "bg-gray-50" : ""}
                  >
                    <td className="border border-gray-400 px-4 py-2 font-medium">
                      {row.method}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {row.description}
                    </td>
                    <td className="border border-gray-400 px-4 py-2 whitespace-pre-line">
                      {row.example}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
