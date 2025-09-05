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
                  <p className="ms-20"> {">>>"} L1 </p>
                  <p className="ms-20"> [1,2,3,4] </p>
                  <p className="ms-20"> {">>>"} L1 </p>
                  <p className="ms-20"> [4,2,3.1] </p>
                </section>
              </section>
              {/* miin  */}
              <section>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  11. min() ={" "}
                </span>
                It display the smallest element of the list
                <section>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    Example :
                  </span>
                  l = [34,54,25,53,36,30,]
                  <p className="ms-20"> min(l) </p>
                  <p className="ms-20"> {">>>"} 30 </p>
                </section>
              </section>
              {/* max  */}
              <section>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  11. max() ={" "}
                </span>
                It display the largest element of the list
                <section>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    Example :
                  </span>
                  l = [34,54,25,53,36,30,]
                  <p className="ms-20"> max(l) </p>
                  <p className="ms-20"> {">>>"} 54 </p>
                </section>
              </section>
              {/* sum  */}
              <section>
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  11. sum() ={" "}
                </span>
                It display the sum of element of the list
                <section>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    Example :
                  </span>
                  l = [34,54,25,53,36,30,]
                  <p className="ms-20"> sum(l) </p>
                  <p className="ms-20"> {">>>"} 232 </p>
                </section>
              </section>
            </motion.ul>
          </div>
          {/* nested list */}
          <p className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed ">
            Nested List
          </p>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
          >
            When a list appear as an element of another list it is called a
            nested list .
            <p>
              <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                {" "}
                Example ={" "}
              </span>
              l [1,2,,a,c,[3,4,5] , 10]
              <p> {">>>"} l[4] </p>
              <p> [3,4,5] </p>
              <p> {">>>"} l[4] [1] </p>
              <p> 4 </p>
            </p>
          </motion.ul>
          {/* copying list */}
          <p className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed ">
            copying List
          </p>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
          >
            There is a 3 method to copy a list
          </motion.ul>
          {/* method 1 */}
          <section>
            <span className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed ">
              {" "}
              #1 method :{" "}
            </span>
            new list = oldlist[:]
            <p>
              <span className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed ">
                {" "}
                example :{" "}
              </span>
              L = [1,2,3,4]
              <p className=" ms-25 "> L1 = L[:] </p>
              <p className=" ms-25 "> {">>>"} L1 </p>
              <p className=" ms-25 "> [1,2,3,4] </p>
            </p>
          </section>
          {/* method 2 */}
          <section>
            <span className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed ">
              {" "}
              #2 method :{" "}
            </span>
            By using list() function
            <p> Newlist = list(oldlist) </p>
            <p>
              <span className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed ">
                {" "}
                example :{" "}
              </span>
              L = [10,20,30,40]
              <p className=" ms-25 "> L2 = list(L1) </p>
              <p className=" ms-25 "> {">>>"} L2 </p>
              <p className=" ms-25 "> [10,20,30,40] </p>
            </p>
          </section>
          {/* mthod 3 */}
              <section>
            <span className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed ">
              {" "}
              #3 method :{" "}
            </span>
            By using copy() function
            <p> Newlist = copy.copy(oldlist) </p>
            <p>
              <span className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed ">
                {" "}
                example :{" "}
              </span>
              L = [10,20,30,40]
              <p className=" ms-25 "> L2 = copy.copy(L1) </p>
              <p className=" ms-25 "> {">>>"} L2 </p>
              <p className=" ms-25 "> [10,20,30,40] </p>
            </p>
          </section>
        </motion.div>
      </div>
    </>
  );
}
