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
            'Bye World ! bye' `,
    },
    {
      method: "join()",
      description:
        " It join the every character of first string with the second string  .",
      example: `>> strl =( 'Hello World!')
            >> strl2 = "-" #seperate 
            >>> strl2.join(strl)]
            "H-E-L-L-O-W-O-R-L-D !" `,
    },
    {
      method: "partition()",
      description: ` It partitions the given string at the first occurence of sub-string and display the string with 3 parts .
        1. Substring after the substring .
        2. Substring 
        3. String after the substring  `,
      example: `>>> strl = "India is a great country "
                >>>strl.partition('is')
                ('India' . 'is' , 'a great country')
                >>> strl.partition("are")
                ('India is a great Country') `,
    },
    {
      method: "split()",
      description:
        " It remove the specified sub-string in a string and dispaly the every word of string as a individual string separated by comma .  ",
      example: ` >>> strl = "India is a great country()"
      >>> strl.split()
      ['india' , 'is' , 'a' , 'great' , 'country' ]
      >>> strl = 'India is a great country 
      >>> strl.split('a')
      ['India', 'is' , 'gre' , 't' , 'country ' ]`,
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
        </motion.div>
      </div>
    </>
  );
}
