import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Chapterten() {
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
            Chapter 10: Tuple and Dictionary
          </h1>
          {/* tuple */}
          <p className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed mb-4">
            Tuple
          </p>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
          >
            <li>
              {" "}
              It is a order sequence of different data type and inclosed in a
              round bracket adn separated bu comma .{" "}
            </li>
            <li>
              The elements of a tuple can be(such as) int , float , string ,
              tuple , lsit also.
            </li>
            <li> Element of tuple can be access by using indexing method . </li>
            <li>
              <span> Example :</span>
              T1 = (1,2,3,4,"Ram" , "Dev" , (11,22,33) , 19)
            </li>
          </motion.ul>
          {/* Note */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Note :
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              If we are using a single element in a tuple then the element
              should be follow by comma . If we use element without comma . It
              is treated as a int data type not tuple data type .
              <p> T1 = (20) {"->"} Tuple data type </p>
              <p> T1 = (20) {"->"} Integer data type </p>
            </motion.ul>
          </div>
          {/* accessing element in a tuple  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Accessing element in a tuple
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              Element of a tuple can be accessing by using indexing .
              <section>
                <p>
                  {" "}
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    Example :
                  </span>{" "}
                  T = (2,4,6,8,10,12)
                  <p> T(0) = 2 </p>
                  <p> T(10) = index error </p>
                  <p> T(12) = 5 </p>
                </p>
              </section>
            </motion.ul>
          </div>
          {/*  Tuple is Immutable  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed">
              Tuple is Immutable
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              It is a immutable data type it mean it created we cannot change it
              .
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  example :
                </span>
                t = (2,4,6,8,10,12)
                <p className="ms-20"> {">>>"} t(0) = 6 </p>
                <p className="ms-20"> Error </p>
              </p>
            </motion.ul>
          </div>
          {/*  Tuple operations */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Tuple operations
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <section>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  1.Concate Nation =
                </span>
                Join two tuple using the plus operator (+)
                <p>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed">
                    {" "}
                    Example :{" "}
                  </span>
                  T1 = (1,2,3,4)
                  <p className="ms-20"> T2 = (5,6,7,8) </p>
                  <p className="ms-20"> {">>>"} T1 + T2 </p>
                  <p className="ms-20"> (1,2,3,4,5,6,7,8) </p>
                </p>
              </section>
              <section>
                {/*  repetition */}
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  2. Repetition =
                </span>
                Repetition means to repeat the given tuple of using operator(*)
              </section>
              <span>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  Example :
                </span>
                T1 - (1,2,3)
                <p className="ms-20">T1*3</p>
                <p className="ms-20"> (1,2,3,1,2,3,1,2,3) </p>
              </span>
            </motion.ul>
          </div>
          {/* membership */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Membership
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <section>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  1.in =
                </span>
                This operator checks the element in a present in the tuple then
                result will be true otherwise false .
                <p>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed">
                    {" "}
                    Example :{" "}
                  </span>
                  t = (1,2,3,4,5,6)
                  <p className="ms-20"> 3 in t </p>
                  <p className="ms-20"> True </p>
                  <p className="ms-20"> 7 in t </p>
                  <p className="ms-20"> False</p>
                </p>
              </section>
              <section>
                {/*  repetition */}
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  2. not in =
                </span>
                This operator checks the elements in not present in a tuple then
                result will be true otherwise false .
              </section>
              <span>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  Example :
                </span>
                t - (1,2,3,4,5)
                <p className="ms-20"> 3 not in t </p>
                <p className="ms-20"> False </p>
                <p className="ms-20"> 7 not in t </p>
                <p className="ms-20"> True</p>
              </span>
            </motion.ul>
          </div>
          {/* Slicing */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed">
              Slicing
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              This operator can display the sub part of the tuple
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  example :
                </span>
                t = (1,2,3,4,5)
                <p className="ms-20"> {">>>"} t(2:5) </p>
                <p className="ms-20"> (3,4,5) </p>
              </p>
            </motion.ul>
          </div>
          {/*  Tuple method built in function */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Tuple method and built in function
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
                  1.len() ={" "}
                </span>
                It display the length of the tuple .
                <p>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed ">
                    {" "}
                    Example :{" "}
                  </span>
                  T1 = (1,2,3,4,5)
                  <p> len(T1) </p>
                  <p> 5 </p>
                </p>
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  2.Tuple() ={" "}
                </span>
                It is used to create empty tuple
                <p>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed ">
                    {" "}
                    Example :{" "}
                  </span>
                  T1 = tuple()
                </p>
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  3.count() ={" "}
                </span>
                It dislay the number of time the element appear in a tuple
                <p>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed ">
                    {" "}
                    Example :{" "}
                  </span>
                  T1 = (1,2,3,4,2,2,5,2)
                  <p> T1 = count(2) </p>
                  <p> 4 </p>
                </p>
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  4.index() ={" "}
                </span>
                It display the index of the first occurrence of the given
                element in a tuple .
                <p>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed ">
                    {" "}
                    Example :{" "}
                  </span>
                  T1 = (1,2,3,4,5)
                  <p> T1 = index(3) </p>
                  <p> 2 </p>
                </p>
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  5.Sorted() ={" "}
                </span>
                TI arranged teh element in a ascending order .
                <p>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed ">
                    {" "}
                    Example :{" "}
                  </span>
                  T1 = (1,3,5,2,4)
                  <p> T1 = sorted() </p>
                  <p> (1,2,3,4,5) </p>
                </p>
              </p>
              <p>
                <section>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {" "}
                    6.min() ={" "}
                  </span>
                  It display the smallest element of the tuple .
                </section>
                <section>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {" "}
                    max() ={" "}
                  </span>
                  It display the largest element of the tuple
                </section>
                <section>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {" "}
                    sum() ={" "}
                  </span>
                  IT display the sum of element of the tuple
                </section>
                <p>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed ">
                    {" "}
                    Example :{" "}
                  </span>
                  T1 = (1,2,3,4,5)
                  <p className="ms-20"> min(T1) = 1 </p>
                  <p className="ms-20"> max(T1) = 10 </p>
                  <p className="ms-20"> sum(T1) = 25 </p>
                </p>
              </p>
            </motion.ul>
          </div>
          {/*  tuple assigment   */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Tuple Assigment
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              It allow the tuple of variables on the left side of assigment
              operator to be assigmet respective value of the right side .
              <p> (n1,n2) = (10,30) </p>
            </motion.ul>
          </div>
          {/* nested tuple */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Nested Tuple
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              when a tuple appera as an element of the another list is called a
              nested tuple .
              <section>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  Example :
                </span>
                <p>t1 = (1,2,3,4,(5,6,7),8) </p>
                <p> {">>>"} t(4) </p>
                <p> (5,6,7) </p>
                <p> {">>>"} t (4) (1) </p>
                <p> 4 </p>
              </section>
            </motion.ul>
          </div>
          {/* dictionary */}
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
              <li>
                The data type dictionary fall under mappin . It is a mappin
                between a set of keys ad a set of values . The key value pair is
                called an item .
              </li>
              <li>
                A key is separated by a colon (:) and consecutive items are
                separated by comma .
              </li>
            </motion.ul>
          </div>
          {/* creatign dictionary */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Creating a Dictionary
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                The item centred are separate by comma and in closed by curly
                bracket {"{}"} .
              </li>
              <li>Each item has a key value pair .</li>
              <li>
                The key must be unique and should be any immutable data type .
              </li>
              <li>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  Example =
                </span>
                int , flost ,etc
              </li>
              <p>The value can be repeat and can be of any data type .</p>
              <ul>
                <li>
                  {" "}
                  d1 = {} -{">"} Created a empty Dictionary .{" "}
                </li>
                <li> d1 = dist () </li>
                <p>d1 = {'{"Ram" : 90 , "Shyam":30 , "Dev":34}'}</p>
              </ul>
            </motion.ul>
          </div>
          {/* accessing itme in dictionary  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Accessing itmen in Dictionary
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              The item of dictionary are accessed by the item key o feach key
              treated as a index and display a value
              <section>
                <p>
                  {" "}
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    Example :
                  </span>{" "}
                  d1 = {'{"Ram":40,"shyam":30,"dev":90}'}
                </p>
              </section>
            </motion.ul>
          </div>
          {/*  dictionary is Immutable  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed">
              Dictionary is mutable
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              It is a mutable data type it means that the element of dictionary
              can be change after it created .
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  example :
                </span>
                d1 = {'{"Ram":40,"shyam":30,"dev":90}'}
                <p> d1 = ["Khus"] = 85</p>
                <p> d1 = {'{"Ram":40,"shyam":30,"dev":90},"khus"'}</p>
              </p>
            </motion.ul>
          </div>
          {/* Dictionry operation   */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Dictionary Operations
            </p>
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Membership
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <section>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  1.in =
                </span>
                This operator checks the key is present in a dictionary then
                result will be true otherwise false .
                <p>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed">
                    {" "}
                    Example :{" "}
                  </span>
                  d1 = {"{'Ram':90,'shyam':30,'dev':40}"}
                  <p> "dev" in d1 </p>
                  true
                  <p> "raj" in d1 </p>
                  False
                </p>
              </section>
              <section>
                {/*  repetition */}
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  2. not in =
                </span>
                This operator checks the key is not present in a dictionary then
                result will be true otherwise false .
              </section>
              <span>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  Example :
                </span>
                d1 = {"{'Ram':90,'shyam':30,'dev':40}"}
                <p> "dev" not in d1 </p>
                False
                <p> "raj" not in d1 </p>
                True
              </span>
            </motion.ul>
          </div>
          {/* Traversing a  dictionary  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Traversing a dictionary
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              We can access each item of dictionary by using for loop .
              <section>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  Example :
                </span>
                d1 = {"{'Ram':90,'shyam':30,'dev':40}"}
                <p> for i in d1 </p>
                <p> print(i , ":" , d1[i]) </p>
                <p> Ram : 90 </p>
                <p> shyam : 30 </p>
                <p> dev : 40 </p>
              </section>
            </motion.ul>
          </div>
          {/*  Dictionary method built in function */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Dictionary method and built in function
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
                  1.len() ={" "}
                </span>
                It display the length of items of Dictionary .
                <p>
                  <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed ">
                    {" "}
                    Example :{" "}
                  </p>
                  d1 = {"{'Ram':90,'shyam':30,'dev':40}"}
                  <p> {">>>"} len(d1) </p>
                  <p> 3 </p>
                </p>
              </p>
              <p>
                <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  2.keys() ={" "}
                </p>
                It display the list of key in a dictionary
                <p>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed ">
                    {" "}
                    Example :{" "}
                  </span>
                  d1 = {"{'Ram':90,'shyam':30,'dev':40}"}
                  <p> d1 : keys() </p>
                  <p> ["Rma" , "shyam" , "dev"] </p>
                </p>
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  3.Dictionary() ={" "}
                </span>
                It create the dictionary from the square of tuple .
                <p>
                  <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed ">
                    {" "}
                    Example :{" "}
                  </p>
                  d1 = {"{('Ram':90),('shyam':30),('dev':40)}"}
                  <p> d2 = dict(d1) </p>
                  <p> {">>>"} d2 </p>
                  <p> {"{'Ram':90,'shyam':30,'dev':40}"} </p>
                </p>
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  4.values() ={" "}
                </span>
                It display the list of values in a dictionary
                <p>
                  <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed ">
                    {" "}
                    Example :{" "}
                  </p>
                  d1 = {"{'Ram':90,'shyam':30,'dev':40}"}
                  <p> d1.values()</p>
                  [90,30,40]
                </p>
              </p>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  5.items() ={" "}
                </span>
                It return the list of tuple
                <p>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed ">
                    {" "}
                    Example :{" "}
                  </span>
                  d1 = {"{'Ram':90,'shyam':30,'dev':40}"}
                  <p> d.item() </p>
                  {"[('Ram':90),('shyam':30),('dev':40)]"}
                </p>
              </p>
              <p>
                <section>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {" "}
                    6.get() ={" "}
                  </span>
                  It return the value of related the key that is passed as a
                  argument . If the key is not present in dictionary it will
                  return none .
                  <p>
                    <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed">
                      {" "}
                      Example :
                    </span>
                    d1 = {"{'Ram':90,'shyam':30,'dev':40}"}
                    <p> d1.get("shyam")</p>
                    30
                  </p>
                </section>
              </p>
              <p>
                <section>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {" "}
                    7.update() ={" "}
                  </span>
                  It change the key value pair of a dictionary with the given
                  key value pair as a argument .
                  <p>
                    <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed">
                      {" "}
                      Example :
                    </span>
                    d1 = {"{'Ram':90,'shyam':30,'dev':40}"}
                    <p>d2 = "Khus" : 33</p>
                    {"{'Ram':90,'shyam':30,'dev':40 , 'khus':33}"}
                  </p>
                </section>
              </p>
              <p>
                <section>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {" "}
                    8.del() ={" "}
                  </span>
                  It delete the item with the given key
                  <p>
                    <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed">
                      {" "}
                      Example :
                    </span>
                    d1 = {"{'Ram':90,'shyam':30,'dev':40}"}
                    <p>del.d1['dev']</p>
                    {"{'Ram':90,'shyam':30}"}
                  </p>
                </section>
              </p>
              <p>
                <section>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {" "}
                    7.clear() ={" "}
                  </span>
                  It clear all the item of a dictionary
                  <p>
                    <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed">
                      {" "}
                      Example :
                    </span>
                    d1 = {"{'Ram':90,'shyam':30,'dev':40}"}
                    <p> d1 = clear()</p>
                    <p> {'>>>'}d1 </p>
                    {'{}'}
                  </p>
                </section>
              </p>
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </>
  );
}
