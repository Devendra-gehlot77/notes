import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Chaptersix() {
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
            Chapter 6: Flow of control
          </h1>
          {/* intorduction */}
          <div>
            <p className="text-gray-700 mt-2 font-bold text-base md:text-lg leading-relaxed mb-4">
              Introduction
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                The order of execution of statement in a program is known as
                flow of control .{" "}
              </li>
              <li>
                The flow of control can be implemented using control structure
              </li>
            </motion.ul>
          </div>
          {/* control structure types  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              There are two types of control structure
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-[num] pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                {" "}
                <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  1. Sequence ={" "}
                </span>{" "}
                When the statement in a program are executed one after another
                are said to be executed in sequence
              </li>
              <li>
                {" "}
                <pan className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                  {" "}
                  2. Selection ={" "}
                </pan>{" "}
                In program there are some two or more than two There are some
                option and user need to one option to be executed . This proces
                is called selection .
              </li>
              <ul>
                <li className="font-medium">
                  The selection structure is implemented by following statement
                  -{" "}
                </li>
                {/* if statement  */}
                <li>
                  <span className="font-bold text-gray-700 text-base md:text-lg leading-relaxed mb-2 ">
                    {" "}
                    1. If statement :{" "}
                  </span>{" "}
                  The statement are exectued only if the conditon is true .
                  <li>
                    {" "}
                    <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                      {" "}
                      Syntax ={" "}
                    </span>
                    <li> if (conditon) </li>
                    <li className="ms-8"> statement </li>
                  </li>
                  <li>
                    {" "}
                    <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                      {" "}
                      Example ={" "}
                    </span>
                    <li> a = int(input ()) </li>
                    <li className="ms-8"> if ( a {">"} 0 ) </li>
                    <li className="ms-14"> print("positive number ") </li>
                  </li>
                </li>
                {/* if else statement  */}
                <li>
                  {" "}
                  <span className="font-bold text-gray-700 text-base md:text-lg leading-relaxed mb-2 ">
                    {" "}
                    2. if-else statement :{" "}
                  </span>{" "}
                  If the condition is true then the statement of if block will
                  be executed otherwise statement of else block will be executed
                  <li>
                    {" "}
                    <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                      {" "}
                      Syntax ={" "}
                    </span>
                    <li> if (conditon) </li>
                    <li className="ms-8"> statement </li>
                    <li>else : </li>
                    <li className="ms-8"> statement </li>
                  </li>
                  <li>
                    {" "}
                    <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                      {" "}
                      Example ={" "}
                    </span>
                    <li> a = int(input ()) </li>
                    <li className="ms-8"> if ( a {">"} 0 ) </li>
                    <li className="ms-14"> print("positive number ") </li>
                    <li> else : </li>
                    <li className="ms-14"> print("negative number ") </li>
                  </li>
                </li>
                {/*  if - elif statement  */}
                <li>
                  {" "}
                  <span className="font-bold text-gray-700 text-base md:text-lg leading-relaxed mb-2 ">
                    {" "}
                    3. if-else statement :{" "}
                  </span>{" "}
                  If these are many condition to be checked and select onl one
                  block of statement is to be executed we used if-elif statement
                  .
                  <li>
                    {" "}
                    <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                      {" "}
                      Syntax ={" "}
                    </span>
                    <li> if (conditon) </li>
                    <li className="ms-8"> statement </li>
                    <li>elif : </li>
                    <li className="ms-8"> statement </li>
                    <li>elif : </li>
                    <li className="ms-8"> statement </li>
                    <li>else : </li>
                    <li className="ms-8"> statement </li>
                  </li>
                  <li>
                    {" "}
                    <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                      {" "}
                      Example ={" "}
                    </span>
                    <li> a = int(input ()) </li>
                    <li className="ms-8"> if ( a {">"} 0 ) </li>
                    <li className="ms-14"> print("positive number ") </li>
                    <li> elif : </li>
                    <li className="ms-14"> print("negative number ") </li>
                    <li> else : </li>
                    <li className="ms-14"> print("zero ") </li>
                  </li>
                </li>
              </ul>
            </motion.ul>
          </div>
          {/*  Nested if  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-1">
              Nested if
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className=" pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                {" "}
                When if block have another if block condition inside it self
                this is known as nested if .{" "}
              </li>
            </motion.ul>
          </div>
          {/* Identation   */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Indentation
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <li>
                Giving white space at the beginning a statement is called
                indentation .
              </li>
              <li> Python using indentation for control st ructure </li>
            </motion.ul>
          </div>
          {/*Repetition  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Repetition (loop)
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              Executon of some statement in a program repeated till some
              specified condition . This process is called repetition
            </motion.ul>
          </div>
          {/*  loops  */}
          <div className="mt-4">
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                {" "}
                There are two looping structure in a python
              </p>
              {/*  for loop */}
              <div>
                <p>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    1. For loop =
                  </span>
                  This loop is executed till the given reange or a sequence
                </p>
                {/* syntax  */}
                <p>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {" "}
                    Syntax :{" "}
                  </span>
                  for control in range or sequence :<p> variable </p>
                  <p>statement </p>
                </p>
                <p>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {" "}
                    Example :{" "}
                  </span>
                  for i in range (5)
                  <p> print(i)</p>
                  <p> output : </p>
                  <div className="ms-18">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                  </div>
                </p>
              </div>
              {/* While loop */}
              <div>
                <p>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    2. While loop =
                  </span>
                  While statement execute the statement repeatedly till the
                  condition of loop is true .
                </p>
                {/* syntax  */}
                <p>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {" "}
                    Syntax :{" "}
                  </span>
                  initial value
                  <p> Whole (condition) </p>
                  <p>statement </p>
                  <p> + + / - -</p>
                </p>
                <p>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {" "}
                    Example :{" "}
                  </span>
                  i = 1 (5)
                  <p> While (i {"<="} 5) </p>
                  <p> print (i) </p>
                  <p> i = l + 1 </p>
                  <p> output : </p>
                  <div className="ms-18">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                  </div>
                </p>
              </div>
            </motion.ul>
          </div>
          {/*  Range function   */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
              Range function
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="list-[num] pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              It is a inbuilet function it is used to create a list from given
              the start value up to stop value with the given step value .
              <div>
                <p>
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {" "}
                    Syntax :{" "}
                  </span>
                  range (start , stop , step )
                </p>
                <p>
                  {" "}
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {" "}
                    Example :{" "}
                  </span>
                  <li className="ms-14"> range (5) </li>
                  <p className="ms-18"> [0,1,2,3,4]</p>
                  <li className="ms-14"> range (5 , 10 ) </li>
                  <p className="ms-18"> [5, 6 , 7 , 8 , 9]</p>
                  <li className="ms-14"> range (0 , 30 , 5) </li>
                  <p className="ms-18"> [0 , 5 , 10 , 15 , 20 , 25]</p>
                </p>
              </div>
            </motion.ul>
          </div>
          {/* Break statement   */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed">
              Break statement
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className=" pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              The break statement terminate the loop and some particular
              condition and come out the loop continue the statement execution
              after that loop .
              <div>
                <p>
                  {" "}
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {" "}
                    Example :{" "}
                  </span>
                  <p> for i in range (0,10)</p>
                  <p>if ( i == 6 ) : </p>
                  <p>break </p>
                  <p> print (i) </p>
                </p>
                <p>
                  {" "}
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {" "}
                    Output :{" "}
                  </span>
                  <div className="ms-20">
                    <li>0</li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                  </div>
                </p>
              </div>
            </motion.ul>
          </div>
          {/*  continue statement  */}
          <div className="mt-4">
            <p className="text-gray-700 font-bold text-base md:text-lg leading-relaxed">
              Continue statement
            </p>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className=" pl-6 space-y-2 text-gray-700 text-base md:text-lg"
            >
              Continue statement is used to skip the statement at particular
              condition and then again jump to the loop for the next statement
              <div>
                <p>
                  {" "}
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {" "}
                    Example :{" "}
                  </span>
                  <p> i in range (0,10)</p>
                  <p>if ( i == 6 ) : </p>
                  <p>continue </p>
                  <p> print (i) </p>
                </p>
                <p>
                  {" "}
                  <span className="text-gray-700 font-bold text-base md:text-lg leading-relaxed mb-2">
                    {" "}
                    Output :{" "}
                  </span>
                  <div className="ms-20">
                    <li>0</li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                  </div>
                </p>
              </div>
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </>
  );
}
