import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Chapternine() {
  const listData = [
    {
      quest: ` >>> L[4] `,
      ans: `10`,
    },
    {
      quest: ` >>> L[3+2] `,
      ans: `12`,
    },
    {
      quest: ` >>> L[0] `,
      ans: `2`,
    },
    {
      quest: ` >>> L[3] `,
      ans: `8`,
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
            Chapter 9: List
          </h1>
          {/* intorduction */}
          <p className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed ">
            List
          </p>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
          >
            It is the one of the data type in a python . It is an order sequence
            of one or more elemetns. These elements can be different data type
            like float, integer, string , tuple or another list. these elements
            are encolosed in square brakcet[] and separated by comma .
            <p>
              <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                {" "}
                Example ={" "}
              </span>
              l [ 2 , 4, 6 , 8 , 10]
              <p>l = [192 , "dev" , 98.52]</p>
            </p>
          </motion.ul>
          {/*  Accesssing elements in a list */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Accesssing elements in a list
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              The elements of a list are accesed by using index method .
            </motion.ul>
          </div>
          {/* input devies */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Example :
            </p>
            l = [2 , 4 , 6 , 8 , 10 , 12 ]
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-decimal pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              {listData.map((v, i) => {
                return (
                  <>
                    <li> {v.quest} </li>
                    <p> {v.ans} </p>
                  </>
                );
              })}
            </motion.ul>
          </div>
          {/* list are mutable  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              List are mutable
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <p>
                In python its means the elements of list can be change after it
                created .
              </p>
              <li>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  example :
                </span>
                L = [2 , 4 , 6 , 8 , 10 , 12 ]<p> L = [3] = 9 </p>
                <p> {">>>"} print(L) </p>
                <p> [2 , 4 , 6 , 8 , 10 , 12 ] </p>
              </li>
            </motion.ul>
          </div>
          {/* List operations  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              List operations
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-decimal pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  Concate Nation ={" "}
                </span>
                User can join two or more list by using (+) plus operator
              </li>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  Example :{" "}
                </span>
                L1 = [ 1,2,3]
                <p> L2 = [4,5] </p>
                <p> L3 = L1 + L2 </p>
                <p> print([L3]) </p>
                <p> [1,2,3,4,5] </p>
              </p>
              {/* repetition */}
              <li>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  Repetition ={" "}
                </span>
                User can repeat the list using repetation symbol(*) .
              </li>
              <p>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  Example :{" "}
                </span>
                L1 = [ 1,2,3]
                <p> L1*2 </p>
                <p>[1,2,3,1,2,3]</p>
              </p>
            </motion.ul>
          </div>
          {/*  Membership  */}
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
              <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                {" "}
                There are mainly two types of membership operations{" "}
              </p>
              <section>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  1. in =
                </span>
                This operator checks the element is present in the list then
                result will be true otherwise false .
              </section>
              <section>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  Example{" "}
                </span>
                L = [1,2,3,4,5,6]
                <p> 3 in L </p>
                <p> True</p>
                <p> 7 in L</p>
                False
              </section>
              <span>
                {/*  secondary */}
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  2. not in
                </span>
                This operator checks the elemeent is not present in the list
                than result will be true otherwise false .
              </span>

              <section>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  Example :{" "}
                </span>
                L = [1,2,3,4,5,6]
                <p> 3 not in L </p>
                <p> False</p>
                <p> 7 not in L</p>
                True
              </section>
            </motion.ul>
          </div>
          {/*  Slicing  */}
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
              <p> This operation can display the sub part of the list . </p>
              <section>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  Example{" "}
                </span>
                L = [1,2,3,4,5,6,7,8,9,10]
                <p> L[2:6] </p>
                <p> 3,4,5,6 </p>
                <p> L[:4] </p>
                1,2,3,4
              </section>
            </motion.ul>
          </div>
          {/*  Trversing list   */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Traversing a list
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              User can access each element of the list by using for loop or
              while loop .
              <section>
                <p>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {" "}
                    Example :{" "}
                  </span>
                  L1 = ["red" , "Blue" , "Yellow"]
                  <p className=" ms-20 "> for i in list1 : </p>
                  <p className=" ms-20 "> print(L1[i]) </p>
                  <p className=" ms-20 "> Output : Red </p>
                  <p className=" ms-20 "> Blue </p>
                  <p className=" ms-20 "> Yellow </p>
                </p>
              </section>
              <section>
                <p>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {" "}
                    Example 2 :{" "}
                  </span>
                  L1 = ["red" , "Blue" , "Yellow"]
                  <p className=" ms-20 "> i = 0 </p>
                  <p className=" ms-20 "> while i {"<"} len(L1) </p>
                  <p className=" ms-20 "> print(L1[i]) </p>
                  <p className=" ms-20 "> L + 1 </p>
                  <p className=" ms-20 "> output : Red </p>
                  <p className="ms-20"> Blue </p>
                  <p className="ms-20"> Yellow </p>
                </p>
              </section>
            </motion.ul>
          </div>
          {/*  list method and built in function  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              List method and built in funciton -
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              {/* len */}
              <section>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  1. len() ={" "}
                </span>
                It display the length of the list .
                <section>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    Example :
                  </span>
                  L = [10,20,30,40,50]
                  <p className="ms-20"> len(l) </p>
                  <p className="ms-20"> 5 </p>
                </section>
              </section>
              {/* list */}
              <section>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  2. list() ={" "}
                </span>
                It create the empty lsit
                <section>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    Example :
                  </span>
                  L = list[]
                </section>
              </section>
              {/* append */}
              <section>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  3. append() ={" "}
                </span>
                It add a single element at the end of the list .
                <section>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    Example :
                  </span>
                  L = [10,20,30,40]
                  <p className="ms-20"> l.append(50) </p>
                  <p className="ms-20"> L = [10,20,30,40,50] </p>
                </section>
              </section>
              {/* extend */}
              <section>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  4. extend() ={" "}
                </span>
                It add a new list or more than one element at the end of list .
                <section>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    Example :
                  </span>
                  L1 = [10,20,30]
                  <p className="ms-20">L2 = [40,50]</p>
                  <p className="ms-20"> L1.extend(L2) </p>
                  <p className="ms-20"> [10,20,30,40,50] </p>
                </section>
              </section>
              {/* insert  */}
              <section>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  5. insert() ={" "}
                </span>
                It insert an element at a particalular index of in the list .
                <section>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    Example :
                  </span>
                  L1 = [10,20,30,40,50]
                  <p className="ms-20"> L1.insert(2,25) </p>
                  <p className="ms-20"> [10,20,25,30,40,50] </p>
                </section>
              </section>
              {/* count */}
              <section>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  6. Count() ={" "}
                </span>
                It display the numbers of time a given element appear in a list
                .
                <section>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    Example :
                  </span>
                  L1 = [10,20,30,10,10,40]
                  <p className="ms-20"> L1.count(10) </p>
                  <p className="ms-20"> 3 </p>
                  <p className="ms-20"> L1.count(90) </p>
                  <p className="ms-20"> 0 </p>
                </section>
              </section>
              {/* INDEX */}
              <section>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  7. index() ={" "}
                </span>
                It deisplay the index of first occurrence of given elemetn in a
                list .
                <section>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    Example :
                  </span>
                  L1 = [10,20,30,10,10,40]
                  <p className="ms-20"> L1.index(10) </p>
                  <p className="ms-20"> 0 </p>
                </section>
              </section>
              {/* remove */}
              <section>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  8. remove() ={" "}
                </span>
                It remvoes the gien element from the list .
                <section>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    Example :
                  </span>
                  L1 = [10,20,30,10,10,40]
                  <p className="ms-20"> L1.remove(10) </p>
                  <p className="ms-20"> [20,30,10,10,40] </p>
                </section>
              </section>
              {/* pop  */}
              <section>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  9. pop() ={" "}
                </span>
                It remvoe the element at given index .
                <section>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    Example :
                  </span>
                  L1 = [10,20,30,40,50,60]
                  <p className="ms-20"> L1.pop(3) </p>
                  <p className="ms-20"> [10,20,30,50,60] </p>
                </section>
              </section>
              {/* reverse  */}
              <section>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  10. reverse() ={" "}
                </span>
                It reverse the orders of elements in the given list .
                <section>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    Example :
                  </span>
                  L1 = [10,20,30,40,50,60]
                  <p className="ms-20"> L1.reverse() </p>
                  <p className="ms-20"> [60,50,40,30,20,10] </p>
                </section>
              </section>
              {/* sort  */}
              <section>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  9. sort() ={" "}
                </span>
                It sort the elements of given list (ascending order )
                <section>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    Example :
                  </span>
                  L1 = [4,2,3.1]
                  <p className="ms-20"> L1.sort() </p>
                  <p className="ms-20"> [1,2,3,4] </p>
                </section>
              </section>
                {/* sorted  */}
              <section>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  11. sorted() ={" "}
                </span>
                It sort the elements of given list (ascending order )
                <section>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    Example :
                  </span>
                  L1 = [4,2,3.1]
                  <p className="ms-20"> L2.sorted(L1) </p>
                  <p className="ms-20"> {'>>>'}  L1 </p>
                  <p className="ms-20"> [1,2,3,4] </p>
                  <p className="ms-20"> {'>>>'}  L1 </p>
                  <p className="ms-20"> [4,2,3.1] </p>
                </section>
              </section>
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
